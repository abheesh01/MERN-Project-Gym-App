const mongoose = require('mongoose');

const trainerModel = new mongoose.Schema({
  age: { type: Number, required: true },
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  idealRate: { type: Number },
  locationPref: { type: String },
  password: { type: String, required: true },
  phoneNumber: { type: String },
  timings: { type: String },
  userName: { type: String, required: true },
  workoutType: { type: String, enum: ['Cardio'], default: 'Cardio' },
  numTrainees: { type: Number, default: 0 },
  dateCreated: { type: Date, default: Date.now },
  dateLastLoggedIn: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Trainer', trainerModel);
