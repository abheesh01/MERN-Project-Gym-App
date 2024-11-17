const mongoose = require('mongoose');

const traineeModel = new mongoose.Schema({
  age: { type: Number, required: true },
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  hasTrainer: { type: Boolean, default: false },
  trainerID: { type: mongoose.Schema.Types.ObjectId, ref: 'Trainer' },
  idealRate: { type: Number },
  lastName: { type: String, required: true },
  locationPref: { type: String },
  password: { type: String, required: true },
  phoneNumber: { type: String },
  timings: { type: String },
  userName: { type: String, required: true },
  workoutType: { type: String, enum: ['Cardio'], default: 'Cardio' }, // fill in other types
  dateCreated: { type: Date, default: Date.now },
  dateLastLoggedIn: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Trainee', traineeModel);
