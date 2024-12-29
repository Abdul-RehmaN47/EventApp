const express = require('express');
const { createEvent, getEvents } = require('../controllers/eventController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createEvent);
router.get('/', authMiddleware, getEvents);

module.exports = router;
