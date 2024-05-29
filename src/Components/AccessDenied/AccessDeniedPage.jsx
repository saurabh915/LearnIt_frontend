import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AccessDeniedPage.css'; // Importing CSS file
const AccessDeniedPage = () => {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
      };
  return (
    <div className="access-denied-container">
      <h1>Access Denied</h1>
      <p>Sorry, you do not have permission to access this page.</p>
      <button  onClick = {navigateToHome}className="login-button">Login First</button>
    </div>
  );
};

export default AccessDeniedPage;