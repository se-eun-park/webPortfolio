import React from 'react';
import './style/skills.css';

const skills = () => {
    return(
        <div className='skillsContents'>
            <div className='skillBox'>
                <span className='skillName'><p>HTML</p></span>
                <div className='gageBar'>
                    <span className='gageBackground'><p>70%</p></span>
                    <span className='gage'style={{ width: '70%' }}></span>
                </div>
                
            </div>
            <div className='skillBox'>
                <span className='skillName'><p>CSS</p></span>
                <div className='gageBar'>
                    <span className='gageBackground'><p>70%</p></span>
                    <span className='gage'style={{ width: '70%' }}></span>
                </div>
                
            </div>
            <div className='skillBox'>
                <span className='skillName'><p>JavaScript</p></span>
                <div className='gageBar'>
                    <span className='gageBackground'><p>60%</p></span>
                    <span className='gage'style={{ width: '60%' }}></span>
                </div>
                
            </div>
            <div className='skillBox'>
                <span className='skillName'><p>React</p></span>
                <div className='gageBar'>
                    <span className='gageBackground'><p>60%</p></span>
                    <span className='gage'style={{ width: '60%' }}></span>
                </div>
                
            </div>
            <div className='skillBox'>
                <span className='skillName'><p>Node.js</p></span>
                <div className='gageBar'>
                    <span className='gageBackground'><p>40%</p></span>
                    <span className='gage'style={{ width: '40%' }}></span>
                </div>
                
            </div>
            <div className='skillBox'>
                <span className='skillName'><p>Python</p></span>
                <div className='gageBar'>
                    <span className='gageBackground'><p>50%</p></span>
                    <span className='gage'style={{ width: '50%' }}></span>
                </div>
                
            </div>
            <div className='skillBox'>
                <span className='skillName'><p>GitHub</p></span>
                <div className='gageBar'>
                    <span className='gageBackground'><p>50%</p></span>
                    <span className='gage'style={{ width: '50%' }}></span>
                </div>
                
            </div>
            <div className='skillBox'>
                <span className='skillName'><p>Figma</p></span>
                <div className='gageBar'>
                    <span className='gageBackground'><p>70%</p></span>
                    <span className='gage'style={{ width: '70%' }}></span>
                </div>
                
            </div>
        </div>

    );

};

export default skills;