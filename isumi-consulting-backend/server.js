// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const messageRoutes = require("./routes/messages");
const clientProjectRoutes = require("./routes/clientProjectRoutes");
const internshipRoutes = require("./routes/internshipRoutes");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://vhulondo29:Maphiri@cluster0.qnlrpns.mongodb.net/isumiconsulting?retryWrites=true&w=majority"
  )
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/messages", messageRoutes);
app.use("/api/projects", clientProjectRoutes);
app.use("/api/internship", internshipRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});