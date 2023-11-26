import React from 'react';
import './style/about.css';
import 'animate.css';
import Skills from './skills';

const About = React.forwardRef(({ visibleHeader, visibleContents }, ref) => {
  return (
    <div ref={ref}>
      <div className='aboutBackground'>
        <div className='header'>
          <h1 className={`${visibleHeader ? 'lightSpeedInLeft' : 'hidden'}`}>ABOUT</h1>
          <span className={`${visibleHeader ? 'lightSpeedInLeft' : 'hidden'}`}></span>
        </div>
        <div className="aboutContents">
          <div className={`aboutMe ${visibleContents ? 'fadeInLeft' : 'hidden'}`}>
            <img className="myphoto" src="img/myphoto.jpg" alt='myphoto'/>
            <h2>HELLO!</h2>
            <p>UI / UX에 가치를 두고 작업하는 주니어 개발자입니다.<br/>
            호기심과 <span>도전 의식</span>이 강해 새로운 기술 습득에 거부감이 없고,<br/>
            <span>소통과 협업</span>을 중요시합니다.</p>
          </div>
            <div className={`${visibleContents ? 'fadeInRight' : 'hidden'}`}>
              <Skills/>
              </div>
        </div>
      </div>
    </div>
  );
});

export default About;