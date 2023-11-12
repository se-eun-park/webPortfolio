import React, { useRef } from 'react';
import './style/home.css';
import About from './about';

function Home() {
    const aboutRef = useRef(null);

    const viewMyWork = () => {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
        <div>
          <section className='background'>
              <div className='contents-felx'>
                  <h1>Hello, I'm <span>Se-eun Park</span>.</h1>
                  <h1>I'm a Front-End Developer.</h1>
                  <button onClick={viewMyWork}>View my work</button>
              </div>
          </section>
          <About ref={aboutRef} />
        </div>
    );
  }

export default Home;