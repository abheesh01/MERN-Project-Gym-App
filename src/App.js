import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Correct paths to components inside the 'components' folder
import MainPage from './components/MainPage';
import RegisterPage from './components/RegisterPage';
import SignInPage from './components/SignInPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </Router>
  );
};

export default App;
