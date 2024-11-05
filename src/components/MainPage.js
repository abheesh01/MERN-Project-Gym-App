    // src/components/MainPage.js
    import React from 'react';
    import { Link } from 'react-router-dom';
    import '../styles/main.css';  // Import the main CSS


    const MainPage = () => {
        return (
            <div>
                <h1>Welcome to Trainer/Trainee App</h1>
                <Link to="/register">
                    <button>Register</button>
                </Link>
                <Link to="/signin">
                    <button>Sign In</button>
                </Link>
            </div>
        );
    };

    export default MainPage;
