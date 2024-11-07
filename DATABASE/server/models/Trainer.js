// server/models/Trainer.js
const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
    name: {
        first: { type: String, required: true },
        last: { type: String, required: true }
    },
    email: { type: String, required: true, unique: true },
    experience_level: { type: String, required: true },
    workout_style: { type: String, required: true },
    years_experience: { type: Number, required: true },
    availability: {
        type: Map,
        of: String  // e.g., { "monday": "9-11", "wednesday": "14-16" }
    },
    contact_info: { type: String, required: true },
    payment_method: { type: String, default: null },
    training_schedule: [
        {
            date: { type: Date, required: true },
            time: { type: String, required: true },
            trainee_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Trainee' }
        }
    ]
});

module.exports = mongoose.model('Trainer', trainerSchema);
