const express = require("express");
const {
  sendMessage,
  getConversation,
  getInbox,
  searchUsers,
} = require("../controllers/messageController");
const { protect } = require("../middleware/auth");
const upload = require("../middleware/upload");

const router = express.Router();

router.get("/search", protect, searchUsers);
router.get("/", protect, getInbox);
router.get("/:userId", protect, getConversation);
router.post("/", protect, upload.single("image"), sendMessage);

module.exports = router;
