const express = require('express');
const { MongoClient } = require('mongodb'); 
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Connection string
const url = 'mongodb+srv://MERNUserAccount:Ey3PHCxnHm9KoAJ9z8j@cluster0.gggbe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
    try {
        await client.connect();
        console.log('Connected successfully to MongoDB!');
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
        process.exit(1); // Exit the app if the connection fails
    }
}

// Call the function to connect to the database
connectDB();

// Middleware to add MongoDB client to request object
app.use((req, res, next) => {
    req.dbClient = client;
    next();
});

// Routes
//app.use('/api/trainers', trainerRoutes);
//app.use('/api/trainees', traineeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
