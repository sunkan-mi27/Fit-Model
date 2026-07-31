const cloudinary = require("../config/cloudinary");
const Message = require("../models/Message");
const Notification = require("../models/Notification");
const User = require("../models/User");
const { getIO, getReceiverSocketId } = require("../utils/socket");

const streamUpload = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "fitmodel-os/messages", resource_type: "image" },
      (error, result) => {
        if (result) resolve(result);
        else reject(error);
      },
    );
    stream.end(buffer);
  });
};

const sendMessage = async (req, res) => {
  try {
    const { receiver, message } = req.body;

    if (!receiver) {
      return res.status(400).json({ message: "Receiver is required" });
    }

    if (!message && !req.file) {
      return res
        .status(400)
        .json({ message: "Message text or image is required" });
    }

    let imageData = { url: "", publicId: "" };
    if (req.file) {
      const result = await streamUpload(req.file.buffer);
      imageData = { url: result.secure_url, publicId: result.public_id };
    }

    const newMessage = await Message.create({
      sender: req.user._id,
      receiver,
      message: message || "",
      image: imageData,
    });

    const populatedMessage = await newMessage.populate(
      "sender",
      "name username avatar",
    );

    const io = getIO();
    const receiverSocketId = getReceiverSocketId(receiver.toString());
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", populatedMessage);
    }

    const notification = await Notification.create({
      user: receiver,
      title: `New message from ${req.user.name}`,
      body: message ? message.slice(0, 80) : "📷 Sent an image",
    });

    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newNotification", notification);
    }

    res.status(201).json({ message: populatedMessage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error sending message" });
  }
};

const getConversation = async (req, res) => {
  try {
    const { userId } = req.params;
    const myId = req.user._id;

    const messages = await Message.find({
      $or: [
        { sender: myId, receiver: userId },
        { sender: userId, receiver: myId },
      ],
    })
      .populate("sender", "name username avatar")
      .sort({ createdAt: 1 });

    await Message.updateMany(
      { sender: userId, receiver: myId, seen: false },
      { $set: { seen: true } },
    );

    res.status(200).json({ messages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error fetching conversation" });
  }
};

const getInbox = async (req, res) => {
  try {
    const myId = req.user._id;

    const messages = await Message.find({
      $or: [{ sender: myId }, { receiver: myId }],
    })
      .populate("sender", "name username avatar")
      .populate("receiver", "name username avatar")
      .sort({ createdAt: -1 });

    const conversationsMap = new Map();

    for (const msg of messages) {
      const partner =
        msg.sender._id.toString() === myId.toString()
          ? msg.receiver
          : msg.sender;
      const key = partner._id.toString();

      if (!conversationsMap.has(key)) {
        conversationsMap.set(key, {
          partner,
          lastMessage: msg,
          unseenCount: 0,
        });
      }

      if (msg.receiver._id.toString() === myId.toString() && !msg.seen) {
        conversationsMap.get(key).unseenCount += 1;
      }
    }

    res
      .status(200)
      .json({ conversations: Array.from(conversationsMap.values()) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error fetching inbox" });
  }
};

const searchUsers = async (req, res) => {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(200).json({ users: [] });
    }

    const users = await User.find({
      _id: { $ne: req.user._id },
      $or: [
        { name: { $regex: q, $options: "i" } },
        { username: { $regex: q, $options: "i" } },
      ],
    })
      .select("name username avatar")
      .limit(20);

    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error searching users" });
  }
};

module.exports = { sendMessage, getConversation, getInbox, searchUsers };
