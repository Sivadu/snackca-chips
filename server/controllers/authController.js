import User from "../models/User.js";

export const registerUser = async (req, res) => {
  const { uid, name, email, photoURL } = req.body;

  try {
    let user = await User.findOne({ uid });

    if (!user) {
      user = new User({ uid, name, email, photoURL });
      await user.save();
      console.log("🆕 New user created");
    }

    res.status(200).json({ message: "User saved", user });
  } catch (err) {
    console.error("❌ User save failed:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
