const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    description: {
      type: String,
      default: "",
      trim: true,
    },
    image: {
      url: { type: String, default: "" },
      publicId: { type: String, default: "" },
    },
    resourceType: {
      type: String,
      enum: ["image", "video", "raw"],
      default: "image",
    },
    github: { type: String, default: "" },
    liveDemo: { type: String, default: "" },
    technologies: {
      type: [String],
      default: [],
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Portfolio", portfolioSchema);
