import React from 'react';

const About = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ height: '100vh', backgroundColor: 'lightgrey' }}>
      <h2>About Section</h2>
      <p>Here is some information about us.</p>
    </div>
  );
});

export default About;