const express = require('express');
const { registerUser } = require('../controllers/userController');
const { loginUser } = require('../controllers/userController')
const router = express.Router();

// Route to register a new user
router.post('/register', registerUser);

// Route to login a new user
router.post('/login', loginUser)

module.exports = router;
