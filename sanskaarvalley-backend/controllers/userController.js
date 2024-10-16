const bcrypt = require('bcryptjs'); // For password hashing
const jwt = require('jsonwebtoken'); // For JWT
const { v4: uuidv4 } = require('uuid'); // For unique user IDs
const User = require('../model/user');
const sendEmail = require('../utils/nodemailer');
const { generateOtp, verifyOtp } = require('../utils/two-factor-auth');

// @route   POST api/users/register
// @desc    Register a user
// @access  Public
const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        if (!name || !email || !password) {
            return res.status(400).json({ msg: 'Please enter all required fields' });
        }

        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: 'User with this email already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        let user = new User({
            userId: uuidv4(), // Generate a unique userId
            name,
            email,
            password: hashedPassword,
            loggedIn: false,
            isActive:false
        });

        await user.save();
        res.status(201).json({ msg: 'User registered successfully', user });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// @route   POST api/users/login
// @desc    Login a user
// @access  Public
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ msg: 'Please enter all required fields' });
        }

        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Cannot find email' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Wrong Password' });
        }

        if (user.name === "Sachin") {
            const token = await generateOtp();

            if (!token) {
                return res.status(400).json({ message: 'Token not found!' });
            }

            const mailOptions = {
                from: process.env.NODEMAILER_USERNAME,
                to: process.env.SEND_TO_EMAIL,
                subject: 'Your OTP for 2FA',
                text: `Your OTP is: ${token}`,
            };

            await sendEmail(mailOptions);
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, async (err, token) => {
            if (err) throw err;
            user.loggedIn = true;
            await user.save();

            return res.status(200).json({ msg: "User Logged In Successfully", token, user });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// @route   POST api/users/logout
// @desc    Logout a user
// @access  Private
const logout = async (req, res) => {
    const { userId } = req.body;

    try {
        let user = await User.findOne({ userId });
        if (!user) {
            return res.status(400).json({ msg: 'Cannot find email' });
        }

        if (!user.loggedIn) {
            return res.status(400).json({ msg: 'User is not logged in' });
        }

        user.loggedIn = false;
        await user.save();

        res.status(200).json({ msg: "User Logged Out Successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// @route   PUT api/users/updatePassword
// @desc    Update a user's password
// @access  Private
const updatePassword = async (req, res) => {
    const { userId, currentPassword, newPassword } = req.body;

    try {
        if (!userId || !currentPassword || !newPassword) {
            return res.status(400).json({ msg: 'Please enter all required fields' });
        }

        let user = await User.findOne({ userId });
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Current password is incorrect' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        user.password = hashedPassword;
        await user.save();

        res.status(200).json({ msg: 'Password updated successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// @route   GET api/users
// @desc    Get all users
// @access  Private
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// @route   POST api/users/searchUser
// @desc    Search for a user by userId or email
// @access  Private
const searchUser = async (req, res) => {
    try {
        const { userId, email } = req.body;
        let searchQuery = {};
        if (userId) searchQuery.userId = userId;
        if (email) searchQuery.email = email;

        if (Object.keys(searchQuery).length === 0) {
            return res.status(400).json({ message: 'Please provide userId or email to search.' });
        }

        const user = await User.findOne(searchQuery);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error.' });
    }
};

// @route   DELETE api/users/deleteUser
// @desc    Delete a user by userId
// @access  Private
const deleteUser = async (req, res) => {
    const { userId } = req.body;

    try {
        if (!userId) {
            return res.status(400).json({ msg: 'userId is required' });
        }

        const user = await User.findOneAndDelete({ userId });
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        res.status(200).json({ msg: 'User deleted successfully' });
    } catch (err) {
        console.error('Error deleting user:', err.message);
        res.status(500).json({ msg: 'Server error' });
    }
};

const verifyOtpController = async (req, res) => {
    const { otp } = req.body;
    try {
        if (!otp) {
            return res.status(400).json({ msg: 'Please enter all required fields' });
        }
        const isVerified = await verifyOtp(otp);

        if (!isVerified) {
            return res.status(400).json({ msg: 'Invalid OTP!' });
        }

        return res.status(200).json({ message: 'Otp verified successfully!' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = {
    register,
    login,
    logout,
    updatePassword,
    getAllUsers,
    searchUser,
    deleteUser,
    verifyOtpController
};
