import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import '../styles/register.css';

// Interface for form data fields
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
  // State to manage form data
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

  // Handle changes in input fields
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="auth-container">
      <h1 className="auth-title">Register</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        {/* Text inputs for basic information */}
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

        {/* Dropdowns for selecting preferences */}
        <select name="locationPref" value={formData.locationPref} onChange={handleChange} required>
          <option value="" disabled hidden>
            Select Location Preference
          </option>
          <option value="x">UCF RWC</option>
          <option value="y">Planet Fitness</option>
          <option value="z">24 Hour Fitness</option>
        </select>

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <select name="workoutType" value={formData.workoutType} onChange={handleChange} required>
          <option value="" disabled hidden>
            Select Workout Type
          </option>
          <option value="x">Bulk</option>
          <option value="y">Cut</option>
          <option value="z">Strength</option>
        </select>

        <select name="timings" value={formData.timings} onChange={handleChange} required>
          <option value="" disabled hidden>
            Select Timings
          </option>
          <option value="x">Morning (7AM-12PM)</option>
          <option value="y">Afternoon (12PM-5PM)</option>
          <option value="z">Evening (5PM-10PM)</option>
        </select>

        <select name="idealRate" value={formData.idealRate} onChange={handleChange} required>
          <option value="" disabled hidden>
            Select Ideal Rate Range
          </option>
          <option value="x">Basic ($10-$20)</option>
          <option value="y">Premium ($20-$30)</option>
          <option value="z">Ultra Premium ($30-$40)</option>
        </select>

        {/* Buttons for selecting user type */}
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

        {/* Submit and navigation link */}
        <button type="submit" className="auth-submit-button">Register</button>
        <p className="auth-text">
          Already have an account? <Link to="/" className="auth-link">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;