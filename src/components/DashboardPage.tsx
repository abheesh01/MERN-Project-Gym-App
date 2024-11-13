import React from "react";
import '../styles/dashboard.css';

interface FormData {
    name: string;
    gym: string;
    workoutType: string;
    timings: string;
    idealRate: string;
    userType: 'trainee' | 'trainer';
    onSignOut: () => void;
}

const getRandomQuote = () => {
    const quotes = [
        "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do",
        "Success is walking from failure to failure with no loss of enthusiasm",
        "Success is not final, failure is not fatal: it is the courage to continue that counts",
    ]

    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

const DashboardPage: React.FC<FormData> = ({ name, gym, workoutType, timings, idealRate, userType, onSignOut }) => {
    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Welcome, {name}!</h1>
            <p className="dashboard-quote">{getRandomQuote()}</p>

            <div className="dashboard-info">
                <p><strong>You are located at:</strong> {gym}</p>
                <p><strong>You are a:</strong> {userType}</p>
                <p><strong>Your workout type is:</strong> {workoutType}</p>
                <p><strong>Your timings are:</strong> {timings}</p>
                <p><strong>Your ideal rate is:</strong> {idealRate}</p>

            </div>

            <button className="sign-out-button" onClick={onSignOut}>Sign Out</button>
        </div>
    )
}

export default DashboardPage;