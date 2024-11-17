const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());

const MONGO_URI = 'mongodb+srv://MERNUserAccount:Ey3PHCxnHm9KoAJ9z8j@cluster0.gggbe.mongodb.net/myDatabase?retryWrites=true&w=majority';

// Connect to MongoDB using mongoose
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully via Mongoose'))
    .catch(err => {
        console.error('Failed to connect to MongoDB:', err);
        process.exit(1); // Exit if the connection fails
    });

// Routes
app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
