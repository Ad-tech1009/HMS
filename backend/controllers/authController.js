import jwt from 'jsonwebtoken';
import User from '../models/userSchema.js';

// Register User
export const registerUser = async (req, res) => {
    const { firstName, lastName, email, password, role } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: 'User already exists' });

        const user = new User({ firstName, lastName, email, password, role });
        await user.save();
        
        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: '2d' });
        res.status(201).json({ token, user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Login User
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User not found' });

        const isPasswordMatch = await user.matchPassword(password);
        if (!isPasswordMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '2d' }
        );

        // Set the token in an HTTP-only cookie
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            maxAge: 2 * 24 * 60 * 60 * 1000 // 2 days
        });

        res.json({ message: "Login successful", user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

