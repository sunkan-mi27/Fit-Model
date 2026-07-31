import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import DashboardLayout from "../layouts/DashboardLayout";
import "./Messages.css";
import {
  SOCKET_URL,
  fetchInbox,
  fetchConversation,
  sendMessageApi,
  searchUsersApi,
} from "../utils/api";

export default function Messages() {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  const storedUser =
    localStorage.getItem("user") || sessionStorage.getItem("user");
  const me = storedUser ? JSON.parse(storedUser) : null;

  const [conversations, setConversations] = useState([]);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState(new Set());
  const [typingFrom, setTypingFrom] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const socketRef = useRef(null);
  const chatBodyRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  // Connect socket once on mount
  useEffect(() => {
    if (!me) return;

    const socket = io(SOCKET_URL);
    socketRef.current = socket;

    socket.emit("join", me.id);

    socket.on("userOnline", (userId) => {
      setOnlineUsers((prev) => new Set(prev).add(userId));
    });

    socket.on("userOffline", (userId) => {
      setOnlineUsers((prev) => {
        const next = new Set(prev);
        next.delete(userId);
        return next;
      });
    });

    socket.on("newMessage", (msg) => {
      // Only append if it belongs to the conversation currently open
      setMessages((prev) => {
        const isRelevant =
          selectedPartner &&
          (msg.sender._id === selectedPartner._id ||
            msg.receiver === selectedPartner._id);
        return isRelevant ? [...prev, msg] : prev;
      });
      loadInbox(); // refresh sidebar previews/unseen counts
    });

    socket.on("typing", ({ senderId }) => {
      setTypingFrom(senderId);
    });

    socket.on("stopTyping", () => {
      setTypingFrom(null);
    });

    return () => socket.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    loadInbox();
  }, []);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const loadInbox = async () => {
    try {
      const data = await fetchInbox(token);
      setConversations(data);
    } catch (err) {
      console.error(err);
    }
  };

  const openConversation = async (partner) => {
    setSelectedPartner(partner);
    try {
      const data = await fetchConversation(partner._id, token);
      setMessages(data);
      loadInbox(); // unseen count for this conversation just cleared server-side
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = async (q) => {
    setSearchQuery(q);
    if (!q) {
      setSearchResults([]);
      return;
    }
    try {
      const users = await searchUsersApi(q, token);
      setSearchResults(users);
    } catch (err) {
      console.error(err);
    }
  };

  const handleTyping = (value) => {
    setText(value);
    if (!selectedPartner || !socketRef.current) return;

    socketRef.current.emit("typing", {
      senderId: me.id,
      receiverId: selectedPartner._id,
    });

    clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      socketRef.current.emit("stopTyping", {
        senderId: me.id,
        receiverId: selectedPartner._id,
      });
    }, 1500);
  };

  const handleSend = async () => {
    if (!selectedPartner || (!text.trim() && !file)) return;

    const formData = new FormData();
    formData.append("receiver", selectedPartner._id);
    formData.append("message", text.trim());
    if (file) formData.append("image", file);

    try {
      const sent = await sendMessageApi(formData, token);
      setMessages((prev) => [...prev, sent]);
      setText("");
      setFile(null);
      loadInbox();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <DashboardLayout>
      <div className="messages-page">
        <div className="chat-sidebar">
          <div className="chat-search">
            <input
              placeholder="🔍 Search people..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>

          {searchQuery && searchResults.length > 0 && (
            <div>
              {searchResults.map((user) => (
                <div
                  className="chat-item"
                  key={user._id}
                  onClick={() => {
                    setSearchQuery("");
                    setSearchResults([]);
                    openConversation(user);
                  }}
                >
                  <div className="chat-avatar">{user.name.charAt(0)}</div>
                  <div className="chat-info">
                    <h4>{user.name}</h4>
                    <p>@{user.username}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {conversations.map(({ partner, lastMessage, unseenCount }) => (
            <div
              className="chat-item"
              key={partner._id}
              onClick={() => openConversation(partner)}
              style={{
                background:
                  selectedPartner?._id === partner._id
                    ? "rgba(255,255,255,0.08)"
                    : "transparent",
              }}
            >
              <div className="chat-avatar">
                {partner.name.charAt(0)}
                {onlineUsers.has(partner._id) && (
                  <span className="online-dot"></span>
                )}
              </div>

              <div className="chat-info">
                <h4>{partner.name}</h4>
                <p>{lastMessage.message || "📷 Image"}</p>
              </div>

              <div className="chat-meta">
                <small>
                  {new Date(lastMessage.createdAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </small>
                {unseenCount > 0 && <span>{unseenCount}</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="chat-window">
          {!selectedPartner ? (
            <div style={{ padding: "24px" }}>
              Select a conversation to start chatting.
            </div>
          ) : (
            <>
              <div className="chat-header">
                <div>
                  <h2>{selectedPartner.name}</h2>
                  <small>
                    {onlineUsers.has(selectedPartner._id)
                      ? "🟢 Online"
                      : "⚪ Offline"}
                  </small>
                </div>
              </div>

              <div className="chat-body" ref={chatBodyRef}>
                {messages.map((msg) => (
                  <div
                    className={
                      msg.sender._id === me.id
                        ? "message sent"
                        : "message received"
                    }
                    key={msg._id}
                  >
                    {msg.image?.url && (
                      <img
                        src={msg.image.url}
                        alt=""
                        style={{
                          maxWidth: "200px",
                          borderRadius: "8px",
                          display: "block",
                          marginBottom: "4px",
                        }}
                      />
                    )}
                    {msg.message}
                    <span className="message-time">
                      {new Date(msg.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                ))}
              </div>

              {typingFrom === selectedPartner._id && (
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                  <small>{selectedPartner.name} is typing...</small>
                </div>
              )}

              <div className="chat-input">
                <label className="input-icon" style={{ cursor: "pointer" }}>
                  📎
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </label>
                {file && (
                  <small style={{ marginRight: "8px" }}>{file.name}</small>
                )}
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={text}
                  onChange={(e) => handleTyping(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <button className="send-btn" onClick={handleSend}>
                  ↪
                </button>
              </div>
            </>
          )}
        </div>

        <div className="chat-details">
          <div className="detail-card">
            <h3>ℹ️ Note</h3>
            <p>
              This panel and the offer/brand-deal section are placeholder UI for
              a future feature.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
