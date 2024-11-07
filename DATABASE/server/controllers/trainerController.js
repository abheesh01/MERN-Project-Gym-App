// server/controllers/trainerController.js
const Trainer = require('../models/Trainer');

// Create a new trainer
exports.addTrainer = async (req, res) => {
    try {
        const trainer = new Trainer(req.body);
        await trainer.save();
        res.status(201).json(trainer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all trainers
exports.getTrainers = async (req, res) => {
    try {
        const trainers = await Trainer.find();
        res.status(200).json(trainers);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Additional CRUD operations can go here (updateTrainer, deleteTrainer, etc.)
