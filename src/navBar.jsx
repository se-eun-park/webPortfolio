import React from "react";
import './style/navBar.css';

const navBar = ({onHomeClick, onAboutClick, onPortfolioClick, onExperiencesClick, onArchivingClick, show}) => {
    return (
        <nav className={`wrapper ${show ? 'show' : ''}`}>
            <div className="contents"></div>
            <div className="contents" onClick={onHomeClick}>HOME</div>
            <div className="contents" onClick={onAboutClick}>ABOUT</div>
            <div className="contents" onClick={onPortfolioClick}>PORTFOLIO</div>
            <div className="contents" onClick={onExperiencesClick}>EXPERIENCES</div>
            <div className="contents" onClick={onArchivingClick}>ARCHIVING</div>
        </nav>
    );
};

export default navBar;