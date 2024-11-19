import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate  } from 'react-router-dom';
import RegisterPage from './components/RegisterPage.tsx';
import SignInPage from './components/SignInPage.tsx';
import DashboardPage from './components/DashboardPage.tsx';

const App: React.FC = () => {
  const [signedIn, setSignedIn] = React.useState(false);

  const handleSignIn = () => setSignedIn(true);
  const handleSignOut = () => setSignedIn(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage onSignIn={handleSignIn} />} />  {/* Set SignInPage as the default page */}
        <Route path="/register" element={<RegisterPage />} />

        <Route 
          path="/dashboard"
          element={signedIn ? (
            <DashboardPage
              name="John Doe"
              gym="UCF RWC"
              workoutType="Bulk"
              timings="Morning (7AM-12PM)"
              idealRate="Basic ($10-$20)"
              userType='trainee'
              onSignOut={handleSignOut}
            />
          ) : (
            <Navigate to="/" replace />
          )}
        />
      </Routes>
    </Router>
  );
};

export default App;
