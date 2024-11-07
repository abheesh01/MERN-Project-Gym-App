// server/controllers/traineeController.js
const Trainee = require('../models/Trainee');

// Create a new trainee
exports.addTrainee = async (req, res) => {
    try {
        const trainee = new Trainee(req.body);
        await trainee.save();
        res.status(201).json(trainee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all trainees
exports.getTrainees = async (req, res) => {
    try {
        const trainees = await Trainee.find();
        res.status(200).json(trainees);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Additional CRUD operations can go here (updateTrainee, deleteTrainee, etc.)
