import React, {useRef , useState, useEffect} from 'react';
import './style/home.css';
import About from './about';
import Portfolio from './portfolio';
import Experiences from './experiences';
import Contact from './contact';
import Navbar from './navBar';

function Home() {
    const homeRef = useRef(null); 
    const aboutRef = useRef(null);
    const portfolioRef = useRef(null);
    const experiencesRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToHome = () => {
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
      };
    const scrollToAbout  = () => {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToportfolio  = () => {
        portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
      };
    const scrollToexperiences  = () => {
        experiencesRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollTocontact  = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const [showNav, setShowNav] = useState(false);

    const handleScroll = () => {
      const aboutPosition = aboutRef.current.offsetTop;
      setShowNav(window.scrollY >= aboutPosition-1);
  };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
        <div ref={homeRef}>
          <section className='background'>
              <div className='contents-felx'>
                  <h1>Hello, I'm <span>Se-eun Park</span>.</h1>
                  <h1>I'm a Front-End Developer.</h1>
                  <button onClick={scrollToAbout}>View my work</button>
              </div>
          </section>
          <Navbar onHomeClick={scrollToHome} onAboutClick={scrollToAbout} onPortfolioClick={scrollToportfolio} onExperiencesClick={scrollToexperiences} oncontactClick={scrollTocontact} show={showNav}/>
          <About ref={aboutRef} />
          <Portfolio ref={portfolioRef}/>
          <Experiences ref={experiencesRef}/>
          <Contact ref={contactRef}/>
        </div>
    );
  }

export default Home;