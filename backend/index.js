import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js'
import adminRouter from "./routes/adminRoutes.js";
import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoute.js";

const app=express();
const PORT =6969;
dotenv.config();
connectDB()
app.use(express.json());
app.use(cookieParser());
app.use('/api/admin',adminRouter);
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.listen(PORT,()=>{
console.log(`server listening at ${PORT}`)
});