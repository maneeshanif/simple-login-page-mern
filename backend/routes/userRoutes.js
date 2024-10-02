const express = require('express');
const { createUser, loginUser, logoutUser, getAllUsers } = require('../controllers/userController');

const router = express.Router();

// Create User
router.post('/create', createUser);

// Login User
router.post('/login', loginUser);

// Logout User
router.post('/logout', logoutUser);

// Get all users
router.get('/allusers',getAllUsers);

module.exports = router;
