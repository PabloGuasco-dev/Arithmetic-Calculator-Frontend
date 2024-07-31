// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import OperationPage from './pages/OperationPage';
import UserRecordsPage from './pages/UserRecordsPage';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/operations"
            element={
              <ProtectedRoute>
                <OperationPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/records"
            element={
              <ProtectedRoute>
                <UserRecordsPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
  );
}

export default App;
