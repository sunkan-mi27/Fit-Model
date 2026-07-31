const Notification = require("../models/Notification");

const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ user: req.user._id }).sort({
      createdAt: -1,
    });

    const unreadCount = notifications.filter((n) => !n.read).length;

    res.status(200).json({ notifications, unreadCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error fetching notifications" });
  }
};

const createNotification = async (req, res) => {
  try {
    const { user, title, body } = req.body;

    if (!user || !title) {
      return res.status(400).json({ message: "user and title are required" });
    }

    const notification = await Notification.create({ user, title, body });

    res.status(201).json({ notification });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error creating notification" });
  }
};

const markAsRead = async (req, res) => {
  try {
    const notification = await Notification.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      { read: true },
      { new: true },
    );

    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }

    res.status(200).json({ notification });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error updating notification" });
  }
};

const markAllAsRead = async (req, res) => {
  try {
    await Notification.updateMany(
      { user: req.user._id, read: false },
      { read: true },
    );
    res.status(200).json({ message: "All notifications marked as read" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error updating notifications" });
  }
};

module.exports = {
  getNotifications,
  createNotification,
  markAsRead,
  markAllAsRead,
};
