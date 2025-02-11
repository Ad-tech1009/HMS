import express from 'express';
import { addDoctor } from '../controllers/doctorController.js';
import { addMedicine } from '../controllers/medController.js';
import {protectUser, protectAdmin} from '../middlewares/authMiddlewares.js';

const adminRouter = express.Router();


adminRouter.post('/addDoc', protectUser, protectAdmin, addDoctor);
adminRouter.post('/addMed', protectUser, protectAdmin, addMedicine);

export default adminRouter;
