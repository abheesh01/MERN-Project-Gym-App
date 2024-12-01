const express = require('express');
const { registerUser, loginUser, updateUser } = require('../controllers/userController');

const router = express.Router();

// Route to register a new user
router.post('/register', registerUser);

// Route to login a new user
router.post('/login', loginUser);

router.put('/update', updateUser);

router.put('/delete', deleteUser);

module.exports = router;
