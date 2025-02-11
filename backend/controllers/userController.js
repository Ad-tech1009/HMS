import Appointment from '../models/apptSchema.js';  // Assuming you already have an Appointment model

// Take an appointment (User only)
export const takeAppointment = async (req, res) => {
    const { doctorName, patientName, status } = req.body;

    try {
        const newAppointment = new Appointment({ doctorName, patientName, status });
        await newAppointment.save();
        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get doctors (User only)
export const getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
