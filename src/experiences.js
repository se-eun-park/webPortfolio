import React from 'react';

const Experiences = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ height: '100vh', backgroundColor:'#fff'}}>
      <h2>Experiences Section</h2>
      <p>Here is some information Experiences us.</p>
    </div>
  );
});

export default Experiences;