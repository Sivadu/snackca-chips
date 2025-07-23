// server/routes/pages.js
import express from "express";
const router = express.Router();

// Contact page (optional: save messages later)
router.get("/contact", (req, res) => {
  res.json({
    title: "Contact Us",
    description: "We’d love to hear from you! Fill out the form below to get in touch.",
  });
});

// Our Story page
router.get("/our-story", (req, res) => {
  res.json({
    title: "Our Story",
    content: [
      "Banana Chips Co. started with a simple mission: to bring the authentic taste of Kerala’s finest banana chips to every household.",
      "From a small kitchen setup to a fully equipped unit, our journey has been driven by love for traditional flavors, ethical sourcing, and honest snacking.",
      "Today, we continue to handcraft each batch with care, combining time-honored methods with modern hygiene standards to deliver you the crispiest and tastiest snacks."
    ]
  });
});

// Flavours page
router.get("/flavours", (req, res) => {
  res.json([
    { key: "banana-chips", emoji: "🍌", title: "Banana Chips", subtitle: "8 varieties" },
    { key: "jackfruit-chips", emoji: "🥭", title: "Jackfruit Chips", subtitle: "6 varieties" },
    { key: "potato-chips", emoji: "🥔", title: "Potato Chips", subtitle: "4 varieties" },
    { key: "spicy-flavours", emoji: "🌶️", title: "Spicy Flavours", subtitle: "3 varieties" },
    { key: "mixed-combos", emoji: "🎁", title: "Mixed Combos", subtitle: "5 packs" },
    { key: "seasonal", emoji: "⭐", title: "Seasonal Specials", subtitle: "Limited" }
  ]);
});

// Feedback page (optional save to DB later)
router.get("/feedback", (req, res) => {
  res.json({
    title: "Give Us Your Feedback",
    description: "Your feedback helps us improve our products and service!"
  });
});

export default router;
