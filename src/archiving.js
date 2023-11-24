import React from 'react';

const archiving = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ height: '100vh', backgroundColor:'#fff'}}>
      <h2>Contact Section</h2>
      <p>Here is some information Contact us.</p>
    </div>
  );
});

export default archiving;