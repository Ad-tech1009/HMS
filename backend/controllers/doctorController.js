import Doctor from '../models/docSchema.js';  // Assuming you already have a Doctor model

// Add a doctor (Admin only)
export const addDoctor = async (req, res) => {
    const { name, specialty, contact } = req.body;
    try {
        const newDoctor = new Doctor({ name, specialty, contact });
        await newDoctor.save();
        res.status(201).json(newDoctor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
