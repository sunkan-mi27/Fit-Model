import DashboardLayout from "../layouts/DashboardLayout";
import "./Messages.css";

const chats = [
  {
    id: 1,
    name: "Nike Recruitment",
    verified: true,
    last: "We'd like to discuss a campaign...",
    time: "2m",
    unread: 3,
  },
  {
    id: 2,
    name: "Coach Daniel",
    verified: false,
    last: "Great workout today 💪",
    time: "15m",
    unread: 0,
  },
  {
    id: 3,
    name: "Gymshark",
    verified: true,
    last: "Contract has been sent.",
    time: "1h",
    unread: 1,
  },
  {
    id: 4,
    name: "John Photographer",
    verified: false,
    last: "Photos are ready.",
    time: "3h",
    unread: 0,
  },
];

const messages = [
  {
    id: 1,
    sender: "brand",
    text: "Hi Sunkanmi! We've reviewed your profile and we're impressed.",
    time: "09:40 AM",
  },
  {
    id: 2,
    sender: "brand",
    text: "Would you be interested in representing our Summer Fitness Campaign?",
    time: "09:41 AM",
  },
  {
    id: 3,
    sender: "me",
    text: "Absolutely. I'd love to hear the campaign details.",
    time: "09:43 AM",
  },
  {
    id: 4,
    sender: "brand",
    text: "Great! We've attached an offer for your review below.",
    time: "09:45 AM",
  },
];

export default function Messages() {
  return (
    <DashboardLayout>
      <div className="messages-page">
        <div className="chat-sidebar">
          <div className="chat-search">
            <input placeholder="🔍 Search conversations..." />
          </div>

          {chats.map((chat) => (
            <div className="chat-item" key={chat.id}>
              <div className="chat-avatar">
                {chat.name.charAt(0)}
                <span className="online-dot"></span>
              </div>

              <div className="chat-info">
                <h4>
                  {chat.name}
                  {chat.verified && " ✅"}
                </h4>

                <p>{chat.last}</p>
              </div>

              <div className="chat-meta">
                <small>{chat.time}</small>

                {chat.unread > 0 && <span>{chat.unread}</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="chat-window">
          <div className="chat-header">
            <div>
              <h2>Nike Recruitment ✅</h2>
              <small>🟢 Online ◾ Last active just now</small>
            </div>

            <div className="chat-actions">
              <button>📞</button>
              <button>🎥</button>
              <button>📅</button>
              <button>⭐</button>
              <button>⋮</button>
            </div>
          </div>

          <div className="chat-body">
            <div className="message received">
              Hello Sunkanmi,
              <br />
              We've reviewed your portfolio.
              <span className="message-time">9:21 AM</span>
            </div>

            <div className="message sent">
              Thank you. I'd love to hear more about the campaign.
              <span className="message-time">9:23 AM</span>
            </div>

            <div className="message received">
              Great. Our team will send the agreement today.
              <span className="message-time">9:24 AM</span>
            </div>
          </div>

          <div className="offer-card">
            <div className="offer-top">
              <div>
                <small>ACTIVE OFFER</small>

                <h2>Summer Fitness Campaign</h2>

                <p>Nike Recruitment Team</p>
              </div>

              <div className="offer-price">$8,500</div>
            </div>

            <div className="offer-details">
              <div>
                <span>Duration</span>
                <strong>30 Days</strong>
              </div>

              <div>
                <span>Posts Required</span>
                <strong>8</strong>
              </div>

              <div>
                <span>Deadline</span>
                <strong>July 28</strong>
              </div>

              <div>
                <span>Status</span>
                <strong className="pending">Pending</strong>
              </div>
            </div>

            <div className="offer-actions">
              <button className="btn-primary">✅ Accept</button>

              <button className="btn-secondary">✏️ Counter Offer</button>

              <button className="btn-secondary">❌ Decline</button>
            </div>
          </div>

          <div className="typing-indicator">
            <span></span>
            <span></span>
            <span></span>

            <small>Nike Recruitment is typing...</small>
          </div>

          <div className="chat-input">
            <button className="input-icon">😊</button>
            <button className="input-icon">📎</button>
            <input type="text" placeholder="Type a message..." />

            <button className="input-icon">🎤</button>
            <button className="send-btn">↪</button>
          </div>
        </div>

        {/* ================= RIGHT PANEL ================= */}

        <div className="chat-details">
          <div className="detail-card">
            <div className="detail-avatar">N</div>

            <h2>Nike Recruitment</h2>

            <p>Verified Brand Partner ✅</p>

            <button className="btn-primary">View Brand Profile</button>
          </div>

          <div className="detail-card">
            <h3>📋 Collaboration</h3>

            <div className="detail-row">
              <span>Campaign</span>
              <strong>Summer Fitness 2026</strong>
            </div>

            <div className="detail-row">
              <span>Budget</span>
              <strong>$8,500</strong>
            </div>

            <div className="detail-row">
              <span>Status</span>
              <strong className="active-status">Negotiating</strong>
            </div>
          </div>

          <div className="detail-card">
            <h3>📎 Shared Files</h3>

            <div className="shared-file">📄 Contract.pdf</div>

            <div className="shared-file">🖼️ CampaignMoodboard.png</div>

            <div className="shared-file">📑 Requirements.docx</div>
          </div>

          <div className="detail-card">
            <h3>⚡ Quick Actions</h3>

            <button className="btn-primary">Accept Offer</button>

            <button className="btn-secondary">Schedule Meeting</button>

            <button className="btn-secondary">Archive Chat</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
