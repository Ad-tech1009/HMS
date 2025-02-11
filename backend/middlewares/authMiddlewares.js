import jwt from 'jsonwebtoken';
import User from '../models/userSchema.js';

// Protect routes that require a valid user token
export const protectUser = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]; // Get token from Authorization header
    }

    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = await User.findById(decoded.userId);
        next();
    } catch (error) {
        res.status(401).json({ message: 'Not authorized, token failed' });
    }
};

// Protect routes that require admin access
export const protectAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        return next();
    } else {
        return res.status(403).json({ message: 'Not authorized as admin' });
    }
};
