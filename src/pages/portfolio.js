import React from 'react';
import '../style/portfolio.css'

const Portfolio = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className='portfolioBackground'></div>
    </div>
  );
});

export default Portfolio;