const express = require('express');
const { createUser, loginUser, logoutUser, getAllUsers , show } = require('../controllers/userController');

const router = express.Router();

// Create User
router.post('/create', createUser);

// Login User
router.post('/login', loginUser);

// Logout User
router.post('/logout', logoutUser);

// Get all users
router.get('/allusers',getAllUsers);

// router.get('/show/:id',(req,res)=>{
//    console.log(req.params.id)
// });

router.get('/show/:id',show);


module.exports = router;



