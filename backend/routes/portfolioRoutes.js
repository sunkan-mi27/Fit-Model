const express = require("express");
const {
  createPortfolio,
  getPortfolios,
  getPortfolioById,
  deletePortfolio,
} = require("../controllers/portfolioController");
const { protect } = require("../middleware/auth");
const upload = require("../middleware/upload");

const router = express.Router();

router.post("/", protect, upload.single("file"), createPortfolio);
router.get("/", getPortfolios);
router.get("/:id", getPortfolioById);
router.delete("/:id", protect, deletePortfolio);

module.exports = router;
