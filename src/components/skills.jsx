import React, { useEffect, useState }  from 'react';
import './skills.css';

const Skills = ({ startAnimation }) => {

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (startAnimation) {
            setAnimate(true);
        }
    }, [startAnimation]);

    return(
        <div className='skillsContents'>
            <div className='skillBox'>
                <span className='skillName'><p>HTML</p></span>
                <div className='gageBar'>
                    <span className='gageBackground'><p>80%</p></span>
                    <span className='gage'                        
                        style={{ 
                            width: animate ? '80%' : '0%', // 애니메이션 상태에 따라 width 변경
                            transitionProperty: 'width',
                            transitionDuration: '0.6s',
                            transitionTimingFunction: 'ease',
                        }}></span>
                </div>
                
            </div>
            <div className='skillBox'>
                <span className='skillName'><p>CSS</p></span>
                <div className='gageBar'>
                    <span className='gageBackground'><p>70%</p></span>
                    <span className='gage'                        
                    style={{ 
                            width: animate ? '70%' : '0%', // 애니메이션 상태에 따라 width 변경
                            transitionProperty: 'width',
                            transitionDuration: '0.7s',
                            transitionTimingFunction: 'ease',
                        }}></span>
                </div>
                
            </div>
            <div className='skillBox'>
                <span className='skillName'><p>SCSS</p></span>
                <div className='gageBar'>
                    <span className='gageBackground'><p>70%</p></span>
                    <span className='gage'                        
                    style={{ 
                            width: animate ? '70%' : '0%', // 애니메이션 상태에 따라 width 변경
                            transitionProperty: 'width',
                            transitionDuration: '0.8s',
                            transitionTimingFunction: 'ease',
                        }}></span>
                </div>
                
            </div>
            <div className='skillBox'>
                <span className='skillName'><p>JavaScript</p></span>
                <div className='gageBar'>
                    <span className='gageBackground'><p>60%</p></span>
                    <span className='gage'                        
                    style={{ 
                            width: animate ? '60%' : '0%', // 애니메이션 상태에 따라 width 변경
                            transitionProperty: 'width',
                            transitionDuration: '0.9s',
                            transitionTimingFunction: 'ease',
                        }}></span>
                </div>
                
            </div>
            <div className='skillBox'>
                <span className='skillName'><p>React</p></span>
                <div className='gageBar'>
                    <span className='gageBackground'><p>60%</p></span>
                    <span className='gage'                        
                    style={{ 
                            width: animate ? '60%' : '0%', // 애니메이션 상태에 따라 width 변경
                            transitionProperty: 'width',
                            transitionDuration: '1s',
                            transitionTimingFunction: 'ease',
                        }}></span>
                </div>
                
            </div>
            <div className='skillBox'>
                <span className='skillName'><p>Node.js</p></span>
                <div className='gageBar'>
                    <span className='gageBackground'><p>40%</p></span>
                    <span className='gage'                        
                    style={{ 
                            width: animate ? '40%' : '0%', // 애니메이션 상태에 따라 width 변경
                            transitionProperty: 'width',
                            transitionDuration: '1.1s',
                            transitionTimingFunction: 'ease',
                        }}></span>
                </div>
                
            </div>
            <div className='skillBox'>
                <span className='skillName'><p>Python</p></span>
                <div className='gageBar'>
                    <span className='gageBackground'><p>50%</p></span>
                    <span className='gage'                        
                    style={{ 
                            width: animate ? '50%' : '0%', // 애니메이션 상태에 따라 width 변경
                            transitionProperty: 'width',
                            transitionDuration: '1.2s',
                            transitionTimingFunction: 'ease',
                        }}></span>
                </div>
                
            </div>
            <div className='skillBox'>
                <span className='skillName'><p>GitHub</p></span>
                <div className='gageBar'>
                    <span className='gageBackground'><p>50%</p></span>
                    <span className='gage'                        
                    style={{ 
                            width: animate ? '50%' : '0%', // 애니메이션 상태에 따라 width 변경
                            transitionProperty: 'width',
                            transitionDuration: '1.3s',
                            transitionTimingFunction: 'ease',
                        }}></span>
                </div>
                
            </div>
            <div className='skillBox'>
                <span className='skillName'><p>Figma</p></span>
                <div className='gageBar'>
                    <span className='gageBackground'><p>70%</p></span>
                    <span className='gage'                        
                    style={{ 
                            width: animate ? '70%' : '0%', // 애니메이션 상태에 따라 width 변경
                            transitionProperty: 'width',
                            transitionDuration: '1.4s',
                            transitionTimingFunction: 'ease',
                        }}></span>
                </div>
                
            </div>
        </div>

    );

};

export default Skills;