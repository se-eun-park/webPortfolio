import React from "react";
import './style/navBar.css';

const navBar = ({onHomeClick, onAboutClick, onPortfolioClick, onExperiencesClick, onArchivingClick, aboutShow, aboutFocus, portfolioFocus, experiencesFocus, archivingFocus}) => {
    return (
        <nav className={`wrapper ${aboutShow ? 'aboutShow' : ''}`}>
            <div className="contents"></div>
            <div className="contents" onClick={onHomeClick}>HOME</div>
            <div className={`contents ${aboutFocus ? 'aboutFocus' : ''}`} onClick={onAboutClick}>ABOUT</div>
            <div className={`contents ${portfolioFocus ? 'portfolioFocus' : ''}`} onClick={onPortfolioClick}>PORTFOLIO</div>
            <div className={`contents ${experiencesFocus ? 'experiencesFocus' : ''}`} onClick={onExperiencesClick}>EXPERIENCES</div>
            <div className={`contents ${archivingFocus ? 'archivingFocus' : ''}`} onClick={onArchivingClick}>ARCHIVING</div>
        </nav>
    );
};

export default navBar;