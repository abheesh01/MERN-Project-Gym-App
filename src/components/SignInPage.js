// src/components/SignInPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/signin.css';  // Import the sign-in CSS


const SignInPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign-in logic here
        console.log('Sign In Data:', { username, password });
    };

    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit" className="signin-button">Sign In</button>
            </form>
            <Link to="/">
                <button type="button" className="back-button">Back</button>
            </Link>
        </div>
    );
};

export default SignInPage;
