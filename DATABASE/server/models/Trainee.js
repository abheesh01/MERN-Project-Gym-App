// server/models/Trainee.js
const mongoose = require('mongoose');

const traineeSchema = new mongoose.Schema({
    name: {
        first: { type: String, required: true },
        last: { type: String, required: true }
    },
    email: { type: String, required: true, unique: true },
    experience_level: { type: String, required: true },
    workout_style: { type: String, required: true },
    availability: {
        type: Map,
        of: String  // e.g., { "tuesday": "10-12", "thursday": "13-15" }
    },
    contact_info: { type: String, required: true }
});

module.exports = mongoose.model('Trainee', traineeSchema);
