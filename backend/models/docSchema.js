import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specialty: {
    type: String,
    required: true
  },
  contact: {
    type: String, // or Object depending on how you want to store the contact (e.g. phone number, email)
    required: true
  }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;
