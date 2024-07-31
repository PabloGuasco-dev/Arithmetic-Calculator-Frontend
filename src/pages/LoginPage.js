// src/pages/LoginPage.js
import React from 'react';
import Login from '../components/Login';

const LoginPage = ({ setAuth }) => {
  return (
    <div>
      <Login setAuth={setAuth} />
    </div>
  );
};

export default LoginPage;
