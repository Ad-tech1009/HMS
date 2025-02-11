import Medicine from '../models/medSchema.js';  // Assuming you already have a Medicine model

// Add a medicine (Admin only)
export const addMedicine = async (req, res) => {
    const { name, expiryDate, quantity, price } = req.body;
    try {
        const newMedicine = new Medicine({ name, expiryDate, quantity, price });
        await newMedicine.save();
        res.status(201).json(newMedicine);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
