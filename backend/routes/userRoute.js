import express from 'express';
import { takeAppointment, getDoctors } from '../controllers/userController.js';
import { protectUser } from '../middlewares/authMiddlewares.js';

const  userRouter = express.Router();

// Protect these routes with user access
userRouter.post('/takeapt', protectUser, takeAppointment);
userRouter.get('/getdoc', protectUser, getDoctors);

export default userRouter;
