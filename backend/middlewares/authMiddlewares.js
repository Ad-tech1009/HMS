import jwt from 'jsonwebtoken';
import User from '../models/userSchema.js';

// Protect routes that require a valid user token (using cookies)
export const protectUser = async (req, res, next) => {
    // Ensure you have the cookie-parser middleware enabled in your Express app
    // e.g., app.use(cookieParser());
    const token = req.cookies.jwt; // Get the token from the cookies

    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }

    try {
        // Verify the token using your secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // Fetch the user from the database (excluding the password)
        req.user = await User.findById(decoded.userId).select('-password');

        if (!req.user) {
            return res.status(401).json({ message: 'User not found' });
        }

        next();
    } catch (error) {
        console.error('JWT error:', error);
        return res.status(401).json({ message: 'Not authorized, token failed' });
    }
};

// Protect routes that require admin access
export const protectAdmin = (req, res, next) => {
    // Checking role in a case-insensitive way
    if (req.user && req.user.role && req.user.role.toLowerCase() === 'admin') {
        return next();
    } else {
        return res.status(403).json({ message: 'Not authorized as admin' });
    }
};
