import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/register.css';  // Import the register CSS


const RegisterPage = () => {
  // State to hold form values
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    username: '',
    password: '',
    locationPref: '',
    age: '',
    workoutType: '',
    timings: '',
    idealRate: '',
    userType: 'trainee', // Default to 'trainee'
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Here you can add your API call to save the data
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="locationPref"
          placeholder="Location Preference"
          value={formData.locationPref}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="workoutType"
          placeholder="Type of Workout"
          value={formData.workoutType}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="timings"
          placeholder="Timings"
          value={formData.timings}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="idealRate"
          placeholder="Ideal Rate Range"
          value={formData.idealRate}
          onChange={handleChange}
          required
        />
        <div className="button-group">
            <button
                type="button"
                className={`role-button ${formData.userType === 'trainee' ? 'active' : ''}`}
                onClick={() => setFormData({ ...formData, userType: 'trainee' })}
                >Trainee
            </button>
            <button
                type="button"
                className={`role-button ${formData.userType === 'trainer' ? 'active' : ''}`}
                onClick={() => setFormData({ ...formData, userType: 'trainer' })}
            >Trainer
            </button>
        </div>
        
        <button type="submit">Register</button>
        <p>Already have an account? <a href="/signin">Sign In</a></p>
        <Link to="/">
                <button className='back-button'>Back</button>
        </Link>
        
      </form>
    </div>
  );
};

export default RegisterPage;
