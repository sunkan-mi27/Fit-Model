const express = require("express");
const {
  getNotifications,
  createNotification,
  markAsRead,
  markAllAsRead,
} = require("../controllers/notificationController");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.get("/", protect, getNotifications);
router.post("/", protect, createNotification);
router.put("/read-all", protect, markAllAsRead);
router.put("/:id/read", protect, markAsRead);

module.exports = router;
