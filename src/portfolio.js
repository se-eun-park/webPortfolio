import React from 'react';

const Portfolio = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ height: '100vh', backgroundColor:'#fff'}}>
      <h2>Portfolio Section</h2>
      <p>Here is some information Portfolio us.</p>
    </div>
  );
});

export default Portfolio;