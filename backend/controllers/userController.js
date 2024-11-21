const bcrypt = require('bcryptjs');
const Trainer = require('../models/trainerModel');
const Trainee = require('../models/traineeModel');

const registerUser = async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        username,
        password,
        locationPref,
        age,
        workoutType,
        timings,
        idealRate, 
        userType, // 'trainee' or 'trainer'
    } = req.body;

    // Validate input
    if (
        !firstName ||
        !lastName ||
        !email ||
        !phoneNumber ||
        !username ||
        !password ||
        !locationPref ||
        !age ||
        !workoutType ||
        !timings ||
        !idealRate ||
        !userType
    ) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }

    try {
        // Check if the user already exists in both collections
        const existingTrainee = await Trainee.findOne({ email });
        const existingTrainer = await Trainer.findOne({ email });
        if (existingTrainee || existingTrainer) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Register user based on userType
        let newUser;
        if (userType === 'trainee') {
            newUser = new Trainee({
                age,
                email,
                firstName,
                lastName,
                hasTrainer: false, // Default value
                trainerID: null, // No trainer by default
                idealRate, 
                locationPref,
                password: hashedPassword,
                phoneNumber,
                timings,
                userName: username, // Field mapping
                workoutType,
                dateLastLoggedIn: new Date(),
            });
        } else if (userType === 'trainer') {
            newUser = new Trainer({
                age,
                email,
                firstName,
                lastName,
                idealRate,
                locationPref,
                password: hashedPassword,
                phoneNumber,
                timings,
                userName: username, // Field mapping
                workoutType, 
                numTrainees: 0, // Default value
                dateLastLoggedIn: new Date(),
            });
        } else {
            return res.status(400).json({ message: 'Invalid userType selected' });
        }

        // Save the new user
        await newUser.save();

        res.status(201).json({
            message: `${userType.charAt(0).toUpperCase() + userType.slice(1)} registered successfully`,
            user: {
                id: newUser._id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                userType,
            },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

const loginUser = async (req, res) => {
    const{
        username,
        password
    } = req.body;

    if (
        !username ||
        !password
    ) {
        return res.status(400).json({message: 'Please provide both username and password.'});
    }
    
    try{
        const user = await Trainee.findOne({username: username}) || await Trainer.findOne({username: username});
        if (!user){
            return res.status(400).json({ message: 'Invalid username or password'});
        }
    const validPassword = await bcrypt.compare(password, user.password);
    
    if (!validPassword){
        return res.status(400).json({ message: 'Invalid username or password.'});
    }
    
    res.status(200).json({
        message: 'Login successful',
        user: {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            userType: user instanceof Trainee ? 'trainee' : 'trainer',
        },
    });
    } catch (err){
        console.error(err)
        res.status(500).json({message: 'Server error'});
    }

};



module.exports = { registerUser, loginUser };
