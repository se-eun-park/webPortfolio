import React from 'react';
import './style/skills.css';

const skills = () => {
    return(
        <div className='skillsContents'>
            <div className='skillBox'>
                <span className='skillName'><p>HTML</p></span>
                <div className='gageBar'>
                    <span className='gageBackground'><p>70%</p></span>
                    <span className='gage'></span>
                </div>
            </div>
        </div>

    );

};

export default skills;