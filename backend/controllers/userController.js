import Appointment from '../models/apptSchema.js';  // Assuming you already have an Appointment model
import Doctor from '../models/docSchema.js';    // Assuming you already have a Doctor model

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

// Get doctors with pagination and search functionality
export const getDoctors = async (req, res) => {
    try {
        // Extract query parameters for pagination and filtering
        const { page = 1, limit = 10, search = "" } = req.query;

        // Convert page and limit to numbers
        const pageNumber = parseInt(page);
        const limitNumber = parseInt(limit);

        // Build a search query to filter doctors by name or specialty
        const query = search
            ? { $or: [
                    { name: new RegExp(search, "i") },
                    { specialty: new RegExp(search, "i") },
                    { contact: new RegExp(search, "i") }
                ]}
            : {};

        // Fetch doctors from the database with pagination
        const doctors = await Doctor.find(query)
            .skip((pageNumber - 1) * limitNumber)  // Skip previous pages
            .limit(limitNumber);                    // Limit results per page

        // Count total doctors for frontend pagination
        const totalDoctors = await Doctor.countDocuments(query);

        // Send paginated doctor list along with metadata
        res.json({
            doctors: doctors.map(doctor => ({
                name: doctor.name,
                specialty: doctor.specialty,
                contact: doctor.contact
            })),
            currentPage: pageNumber,
            totalPages: Math.ceil(totalDoctors / limitNumber),
            totalDoctors
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
