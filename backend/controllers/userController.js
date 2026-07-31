const User = require("../models/User");

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate("followers", "name username avatar")
      .populate("following", "name username avatar");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error fetching profile" });
  }
};

const updateProfile = async (req, res) => {
  try {
    const editableFields = [
      "name",
      "avatar",
      "goal",
      "bio",
      "location",
      "skills",
      "height",
      "weight",
      "experience",
      "github",
      "linkedin",
      "website",
    ];

    const updates = {};
    editableFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    });

    const user = await User.findByIdAndUpdate(req.user._id, updates, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Profile updated successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error updating profile" });
  }
};

module.exports = { getProfile, updateProfile };
