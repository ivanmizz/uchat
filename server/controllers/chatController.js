// server/controllers/chatController.js
const Message = require('../models/Message');

const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: 'asc' });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createMessage = async (req, res) => {
  const { user, text } = req.body;

  if (!user || !text) {
    return res.status(400).json({ error: 'User and text are required fields' });
  }

  try {
    const newMessage = new Message({ user, text });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllMessages,
  createMessage,
};
