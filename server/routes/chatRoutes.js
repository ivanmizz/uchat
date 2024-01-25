// server/routes/chatRoutes.js
const express = require('express');
const router = express.Router();
const { getAllMessages, createMessage } = require('../controllers/chat');

router.get('/messages', getAllMessages);
router.post('/messages', createMessage);

module.exports = router;
