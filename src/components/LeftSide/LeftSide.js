import React from 'react';
import './style.css';
import github from '../../assets/icons/github.png';
import mail from '../../assets/icons/gmail.png';
import linkedin from '../../assets/icons/linkedin.png';

function LeftSide() {
    return (
        <div className="leftSide_container">
            <h2 className="title">RIAD Houssame</h2>
            <h3 className="description_left">computer science engineering student</h3>
            <div className="socials">
                <a href="https://github.com/Houssamer" target="_blank" rel="noreferrer">
                    <img 
                        src={github} 
                        alt="github" 
                        className="github_icon"
                    />
                </a>
                <a href="mailto:riadhoussame@gmail.com">
                    <img 
                        src={mail} 
                        alt="gmail" 
                        className="mail_icon"
                    />
                </a>
                <a href="https://www.linkedin.com/in/houssameriad/"  target="_blank" rel="noreferrer">
                    <img 
                        src={linkedin} 
                        alt="linkedin" 
                        className="linkedin_icon" 
                    />
                </a>
            </div>
            <div className="left_shadow" />
        </div>
    )
}

export default LeftSide;
