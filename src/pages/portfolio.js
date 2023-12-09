import React from 'react';
import '../style/portfolio.css'
import 'animate.css';
import Projects from '../components/projects.jsx'

const Portfolio = React.forwardRef(({ portfolioVisibleHeader, portfolioVisibleContents}, ref) => {
  return (
    <div ref={ref}>
      <div className='portfolioBackground'>
        <div className='portfolioHeader'>
          <h1 className={`${portfolioVisibleHeader ? 'fadeInLeftBigH' : 'hidden'}`}>PORTFOLIO</h1>
          <span className={`${portfolioVisibleHeader ? 'fadeInLeftBigL' : 'hidden'}`}></span>
        </div>
        <div className={`${portfolioVisibleContents ? 'slideInUp' : 'hidden'}`}>
        <Projects />
        </div>
      </div>
    </div>
  );
});

export default Portfolio;