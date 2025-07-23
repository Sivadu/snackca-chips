import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

// Routes
import testRoute from "./routes/testRoute.js";
import authRoutes from "./routes/authRoutes.js";
import pagesRoute from "./routes/pagesRoute.js"; // Make sure the file is named exactly like this

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // ✅ Enable CORS for frontend requests
app.use(express.json()); // ✅ Parse incoming JSON

// API Routes
app.use("/api/test", testRoute);
app.use("/api/auth", authRoutes);
app.use("/api/pages", pagesRoute); // ✅ Pages route mounted

// Root test route
app.get("/", (req, res) => {
  res.send("🚀 API Server is running!");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🌐 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });
