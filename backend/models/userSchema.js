// /models/user.js
import mongoose from 'mongoose';
import bcrypt from "bcrypt"

// Create the user schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,  // Removes any extra spaces around the name
    },
    lastName: {
        type: String,
        required: true,
        trim: true,  // Removes any extra spaces around the name
    },
    role: {
        type: String,
        required: true,
        enum: ['Admin', 'Patient', 'Doctor'],  // Example roles
        default: 'user',  // Default role is 'user'
    },
    email: {
        type: String,
        required: true,
        unique: true,  // Email must be unique in the database
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],  // Email validation
    },
    password: {
        type: String,
        required: true,
        minlength: 6,  // Password should be at least 6 characters long
    },
}, {
    timestamps: true,  // Adds 'createdAt' and 'updatedAt' fields automatically
});

// Hash the password before saving it to the database
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Compare input password with hashed password in the database
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};


// Create the User model based on the schema
const User = mongoose.model('User', userSchema);

export default User;
