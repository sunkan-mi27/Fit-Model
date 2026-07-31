const cloudinary = require("../config/cloudinary");
const Portfolio = require("../models/Portfolio");

const streamUpload = (buffer, resourceType) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "fitmodel-os/portfolio",
        resource_type: resourceType,
      },
      (error, result) => {
        if (result) resolve(result);
        else reject(error);
      },
    );
    stream.end(buffer);
  });
};

const getResourceType = (mimetype) => {
  if (mimetype.startsWith("video/")) return "video";
  if (mimetype === "application/pdf") return "raw";
  return "image";
};

const createPortfolio = async (req, res) => {
  try {
    const { title, description, github, liveDemo, technologies } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    let imageData = { url: "", publicId: "" };
    let resourceType = "image";

    if (req.file) {
      resourceType = getResourceType(req.file.mimetype);
      const result = await streamUpload(req.file.buffer, resourceType);
      imageData = { url: result.secure_url, publicId: result.public_id };
    }

    const techArray = Array.isArray(technologies)
      ? technologies
      : technologies
        ? technologies
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean)
        : [];

    const portfolio = await Portfolio.create({
      userId: req.user._id,
      title,
      description,
      github,
      liveDemo,
      technologies: techArray,
      image: imageData,
      resourceType,
    });

    res.status(201).json({ portfolio });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error creating portfolio item" });
  }
};

const getPortfolios = async (req, res) => {
  try {
    const filter = {};
    if (req.query.userId) filter.userId = req.query.userId;

    const portfolios = await Portfolio.find(filter)
      .populate("userId", "name username avatar")
      .sort({ createdAt: -1 });

    res.status(200).json({ portfolios });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error fetching portfolio items" });
  }
};

const getPortfolioById = async (req, res) => {
  try {
    const portfolio = await Portfolio.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { new: true },
    ).populate("userId", "name username avatar");

    if (!portfolio) {
      return res.status(404).json({ message: "Portfolio item not found" });
    }

    res.status(200).json({ portfolio });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error fetching portfolio item" });
  }
};

const deletePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);

    if (!portfolio) {
      return res.status(404).json({ message: "Portfolio item not found" });
    }

    if (portfolio.userId.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to delete this item" });
    }

    if (portfolio.image?.publicId) {
      await cloudinary.uploader.destroy(portfolio.image.publicId, {
        resource_type: portfolio.resourceType,
      });
    }

    await portfolio.deleteOne();

    res.status(200).json({ message: "Portfolio item deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error deleting portfolio item" });
  }
};

module.exports = {
  createPortfolio,
  getPortfolios,
  getPortfolioById,
  deletePortfolio,
};
