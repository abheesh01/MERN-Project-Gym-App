import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import '../styles/signin.css';

const SignInPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Sign In Data:', { username, password });
  };

  return (
    <div className="auth-container">
      <h1 className="auth-title">Sign In</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="auth-submit-button">Sign In</button>
      </form>
      <p className="auth-text">
        Don't have an account? <Link to="/register" className="auth-link">Register</Link>
      </p>
    </div>
  );
};

export default SignInPage;
