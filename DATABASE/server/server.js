// server/server.js
const express = require('express');
const connectDB = require('./config/db');
const trainerRoutes = require('./routes/trainerRoutes');
const traineeRoutes = require('./routes/traineeRoutes');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/trainers', trainerRoutes);
app.use('/api/trainees', traineeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
