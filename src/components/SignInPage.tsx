import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/signin.css';

// Interface for SignIn props
interface SignInProps {
  onSignIn: () => void;
}

const SignInPage: React.FC<SignInProps> = ({ onSignIn }) => {
  // State for username and password inputs
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();

  // Handle sign-in action
  const handleSignIn = () => {
    onSignIn(); // Calls the onSignIn function passed as a prop
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Sign In Data:', { username, password });

    handleSignIn(); // Trigger the sign-in action
    navigate('/dashboard'); // Navigate to the dashboard after sign-in
  };

  return (
    <div className="auth-container">
      <h1 className="auth-title">Gym Training App</h1>
      <h1>Sign In</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        {/* Username input */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          required
        />
        {/* Password input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="auth-submit-button">Sign In</button>
      </form>
      
      {/* Link to register page */}
      <p className="auth-text">
        Don't have an account? <Link to="/register" className="auth-link">Register</Link>
      </p>
    </div>
  );
};

export default SignInPage;