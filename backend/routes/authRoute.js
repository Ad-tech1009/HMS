import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';

const  authRouter = express.Router();

// Register Route
authRouter.post('/register', registerUser);

// Login Route
authRouter.post('/login', loginUser);

export default  authRouter;
