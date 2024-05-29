import React from 'react';
import './Options.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

const Options = () => {
  return (
    <div className="options-wrapper">
      <div className="options-container">
        <div className="option-box">
        <h2><Link to="/Makequiz">Make a Current Quiz </Link></h2>
          <p>Create a quiz with the current set of questions.</p>
        </div>
        <div className="option-box">
          <h2><Link to="/MakeDynamic">Make Dynamic Quiz </Link></h2>
          <p>Create a quiz with dynamic questions.</p>
        </div>
        <div className="option-box">
        <h2><Link to="/GoogleForm">Google Form </Link></h2>

          <p>Use a Google Form for the quiz.</p>
        </div>
      </div>
    </div>
  );
}

export default Options;
