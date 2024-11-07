// src/components/RegisterPage.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import '../styles/register.css';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  username: string;
  password: string;
  locationPref: string;
  age: string;
  workoutType: string;
  timings: string;
  idealRate: string;
  userType: 'trainee' | 'trainer';
}

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    username: '',
    password: '',
    locationPref: '',
    age: '',
    workoutType: '',
    timings: '',
    idealRate: '',
    userType: 'trainee',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="auth-container">
      <h1 className="auth-title">Register</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
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
        
        {/* Location Preference Dropdown with Placeholder */}
        <select name="locationPref" value={formData.locationPref} onChange={handleChange} required>
          <option value="" disabled hidden>
            Select Location Preference
          </option>
          <option value="x">Location X</option>
          <option value="y">Location Y</option>
          <option value="z">Location Z</option>
        </select>

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        
        {/* Workout Type Dropdown with Placeholder */}
        <select name="workoutType" value={formData.workoutType} onChange={handleChange} required>
          <option value="" disabled hidden>
            Select Workout Type
          </option>
          <option value="x">Workout X</option>
          <option value="y">Workout Y</option>
          <option value="z">Workout Z</option>
        </select>

        {/* Timings Dropdown with Placeholder */}
        <select name="timings" value={formData.timings} onChange={handleChange} required>
          <option value="" disabled hidden>
            Select Timings
          </option>
          <option value="x">Timing X</option>
          <option value="y">Timing Y</option>
          <option value="z">Timing Z</option>
        </select>

        {/* Ideal Rate Range Dropdown with Placeholder */}
        <select name="idealRate" value={formData.idealRate} onChange={handleChange} required>
          <option value="" disabled hidden>
            Select Ideal Rate Range
          </option>
          <option value="x">Rate X</option>
          <option value="y">Rate Y</option>
          <option value="z">Rate Z</option>
        </select>

        <div className="button-group">
          <button
            type="button"
            className={`role-button ${formData.userType === 'trainee' ? 'active' : ''}`}
            onClick={() => setFormData({ ...formData, userType: 'trainee' })}
          >
            Trainee
          </button>
          <button
            type="button"
            className={`role-button ${formData.userType === 'trainer' ? 'active' : ''}`}
            onClick={() => setFormData({ ...formData, userType: 'trainer' })}
          >
            Trainer
          </button>
        </div>

        <button type="submit" className="auth-submit-button">Register</button>
        <p className="auth-text">
          Already have an account? <Link to="/" className="auth-link">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
