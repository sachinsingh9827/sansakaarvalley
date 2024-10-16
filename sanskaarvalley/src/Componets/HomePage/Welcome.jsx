import React from 'react';
import './Wellcome.css';

const WelcomePage = () => {
    return (
        <div className="welcome-container rounded-b-3xl">
            <div className="welcome-title font-montserrat text-gray">
                <h1 className='font-poppins font-bold'>Welcome to Sanskaar valley School</h1>
            </div>
            <div className="welcome-message">
                <p>
                    Discover a world of learning and growth. We are dedicated to providing 
                    a nurturing environment for our students.
                </p>
            </div>
            <div className="welcome-button-container">
                <a href="/services" className="welcome-button">
                    Get Started
                </a>
            </div>
        </div>
    );
};

export default WelcomePage;
