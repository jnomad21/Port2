import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import App from './App';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
