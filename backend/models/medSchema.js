// /models/medicine.js
import mongoose from 'mongoose';


const medicineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,  // Removes leading/trailing spaces
    },
    expiryDate: {
        type: Date,
        required: false ,  // Expiry date is required
    },
    quantity: {
        type: Number,
        required: true,
        min: 0,  // Quantity cannot be negative
    },
    price: {
        type: Number,
        required:false,
        min: 0,  // Price cannot be negative
    },
}, {
    timestamps: true,  // Automatically adds 'createdAt' and 'updatedAt'
});

// Create the Medicine model based on the schema
const Medicine = mongoose.model('Medicine', medicineSchema);

export default Medicine;
