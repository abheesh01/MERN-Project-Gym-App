// server/routes/traineeRoutes.js
const express = require('express');
const router = express.Router();
const traineeController = require('../controllers/traineeController');

router.post('/add', traineeController.addTrainee);
router.get('/', traineeController.getTrainees);

module.exports = router;
