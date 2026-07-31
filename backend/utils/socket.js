const { Server } = require("socket.io");

let io;
const onlineUsers = new Map();

const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`🔌 Socket connected: ${socket.id}`);

    socket.on("join", (userId) => {
      if (!userId) return;
      onlineUsers.set(userId, socket.id);
      socket.userId = userId;
      io.emit("userOnline", userId);
      console.log(`✅ User ${userId} is online`);
    });

    socket.on("typing", ({ senderId, receiverId }) => {
      const receiverSocketId = onlineUsers.get(receiverId);
      if (receiverSocketId) {
        io.to(receiverSocketId).emit("typing", { senderId });
      }
    });

    socket.on("stopTyping", ({ senderId, receiverId }) => {
      const receiverSocketId = onlineUsers.get(receiverId);
      if (receiverSocketId) {
        io.to(receiverSocketId).emit("stopTyping", { senderId });
      }
    });

    socket.on("disconnect", () => {
      if (socket.userId) {
        onlineUsers.delete(socket.userId);
        io.emit("userOffline", socket.userId);
        console.log(`❌ User ${socket.userId} went offline`);
      }
    });
  });

  return io;
};

const getIO = () => {
  if (!io) throw new Error("Socket.io not initialized yet");
  return io;
};

const getReceiverSocketId = (userId) => onlineUsers.get(userId);
const isUserOnline = (userId) => onlineUsers.has(userId);

module.exports = { initSocket, getIO, getReceiverSocketId, isUserOnline };
