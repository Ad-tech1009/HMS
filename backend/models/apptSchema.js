// /models/appointment.js
import mongoose from 'mongoose';

// Create the Appointment schema
const appointmentSchema = new mongoose.Schema({
    doctorName: {
        type: String,
        required: true,
        trim: true,  // Removes any leading or trailing spaces
    },
    patientName: {
        type: String,
        required: true,
        trim: true,  // Removes any leading or trailing spaces
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'in-progress', 'completed'],  // Possible status values
        default: 'pending',  // Default status is 'pending'
    },
}, {
    timestamps: true,  // Automatically adds createdAt and updatedAt fields
});

// Create the Appointment model based on the schema
const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
