// routes/messages.js
const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// POST route to handle contact form submission
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      error: "All fields are required (name, email, and message).",
    });
  }

  try {
    const newMessage = new Message({
      name,
      email,
      message,
    });

    await newMessage.save();
    res.status(201).json({ message: "Message saved successfully.", data: newMessage });
  } catch (error) {
    res.status(500).json({
      error: "Error saving the message.",
      details: error.message,
    });
  }
});

// GET route to fetch all messages (you can use this for testing purposes or admin view)
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({
      error: "Error fetching messages.",
      details: error.message,
    });
  }
});

module.exports = router;
