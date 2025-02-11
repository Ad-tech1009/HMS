import express from 'express';
import { addDoctor } from '../controllers/doctorController.js';
import { addMedicine } from '../controllers/medController.js';
import {protectAdmin} from '../middlewares/authMiddlewares.js';

const adminRouter = express.Router();


adminRouter.post('/addDoc', protectAdmin, addDoctor);
adminRouter.post('/addMed', protectAdmin, addMedicine);

export default adminRouter;
