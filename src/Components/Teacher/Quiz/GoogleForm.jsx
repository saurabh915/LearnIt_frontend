import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GoogleForm.css'; // Import the CSS file

const GoogleForm = () => {
    const [quizLink, setQuizLink] = useState('');
    const navigate = useNavigate();
    function handlePostQuizLink(params) {
        navigate('/inbox');
    }
    return (
        <div className="google-form-container">
            {/* First Box */}
            <div className="google-form-box1">
                <h2>Create Your Google Form</h2>
                <p>Create your form on Google Forms and obtain the link for quiz.</p>
                <a
                    href="https://docs.google.com/forms/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="google-form-link"
                >
                    Go to Google Forms
                </a>
            </div>

            {/* Second Box */}
            <div className="google-form-box2">
                <h2>Paste Your Quiz Link Here</h2>
                <p>You need to paste the quiz link with notice in the notice section. Click on the button below and paste the quiz link with appropriate notice in the notice section.</p>
                <button
                    onClick={handlePostQuizLink}
                    className="google-form-button"
                >
                    Go to Notice Section
                </button>
            </div>
        </div>
    );
};

export default GoogleForm;
