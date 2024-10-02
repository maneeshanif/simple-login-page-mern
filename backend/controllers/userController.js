const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

// Create a user
exports.createUser = async (req, res) => {
    try {
        const { username, email, password, age } = req.body;

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({
            username,
            email,
            password: hashedPassword,
            age,
        });

        await newUser.save();
      

        res.status(201).json({ message: 'User created successfully!' });
        // res.send(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
};

// Login a user
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate a token
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.cookie('token', token, {
            httpOnly: true,  // Accessible only by the web server
            secure: process.env.NODE_ENV === 'production',  // Cookie sent only over HTTPS in production
            maxAge: 3600000,  // 1 hour
            sameSite: 'strict'  // Prevent CSRF attacks
        });
        res.status(200).json({ message: 'Logged in successfully'});
    } catch (error) {
        res.status(500).json({ error: 'Failed to log in' });
    }
};

// Logout a user (optional)
exports.logoutUser = (req, res) => {
    // Clear the token from the cookie
    res.clearCookie('token');
   // Return a success message
    res.status(200).json({ message: 'Logged out successfully' });
   
};
