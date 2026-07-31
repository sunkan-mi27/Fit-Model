const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
      lowercase: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 8,
      select: false,
    },

    avatar: { type: String, default: "" },
    goal: { type: String, default: "" },
    role: {
      type: String,
      enum: ["athlete", "creator", "brand", "admin"],
      default: "athlete",
    },
    bio: { type: String, default: "", maxlength: 300 },
    location: { type: String, default: "" },
    skills: { type: [String], default: [] },

    height: { type: Number },
    weight: { type: Number },
    experience: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      default: "beginner",
    },
    github: { type: String, default: "" },
    linkedin: { type: String, default: "" },
    website: { type: String, default: "" },

    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

    resetPasswordToken: { type: String, select: false },
    resetPasswordExpires: { type: Date, select: false },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
