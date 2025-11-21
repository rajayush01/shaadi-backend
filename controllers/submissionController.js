import validator from "validator";
import Submission from "../models/Submission.js";

export const createSubmission = async (req, res) => {
  try {
    const { email, phone } = req.body;

    if (!req.file)
      return res.status(400).json({ error: "No photo uploaded" });

    if (!email || !phone)
      return res.status(400).json({ error: "Email and phone required" });

    if (!validator.isEmail(email))
      return res.status(400).json({ error: "Invalid email" });

    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10)
      return res.status(400).json({ error: "Invalid phone number" });

    const submission = await Submission.create({
      email,
      phone,
      imageUrl: req.file.path
    });

    // 🔹 Log details in console on success
    console.log("✅ New Submission Created:", {
      id: submission._id,
      email,
      phone,
      imageUrl: submission.imageUrl
    });

    return res.status(201).json({
      message: "Saved successfully",
      id: submission._id,
      imageUrl: submission.imageUrl
    });

  } catch (err) {
    console.error("❌ Error creating submission:", err);
    res.status(500).json({ error: "Server error" });
  }
};
