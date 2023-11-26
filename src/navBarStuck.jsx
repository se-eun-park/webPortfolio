import React from "react";
import './style/navBarStuck.css';

const navBarStuck = ({onHomeClick, onAboutClick, onPortfolioClick, onExperiencesClick, onArchivingClick, homeFocus}) => {
    return (
        <nav className="wrapperStuck">
            <div className="contents"></div>
            <div className={`contents ${homeFocus ? 'homeFocus' : ''}`} onClick={onHomeClick}>HOME</div>
            <div className="contents" onClick={onAboutClick}>ABOUT</div>
            <div className="contents" onClick={onPortfolioClick}>PORTFOLIO</div>
            <div className="contents" onClick={onExperiencesClick}>EXPERIENCES</div>
            <div className="contents" onClick={onArchivingClick}>ARCHIVING</div>
        </nav>
    );
};

export default navBarStuck;