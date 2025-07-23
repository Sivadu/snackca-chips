import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { uid, name, email, photoURL } = req.body;

    let user = await User.findOne({ uid });

    if (!user) {
      user = await User.create({ uid, name, email, photoURL });
      console.log("📝 New user registered");
    } else {
      console.log("🔁 User already exists");
    }

    res.status(200).json({ message: "User registered", user });
  } catch (err) {
    console.error("❌ Registration error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
