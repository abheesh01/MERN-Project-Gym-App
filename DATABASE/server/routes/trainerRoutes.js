// server/routes/trainerRoutes.js
const express = require('express');
const router = express.Router();
const trainerController = require('../controllers/trainerController');

router.post('/add', trainerController.addTrainer);
router.get('/', trainerController.getTrainers);

module.exports = router;
