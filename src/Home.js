import React, {useRef , useState, useEffect} from 'react';
import './style/home.css';
import About from './about';
import Portfolio from './portfolio';
import Experiences from './experiences';
import Archiving from './archiving';
import Navbar from './navBar';
import NavbarStuck from './navBarStuck';

function Home() {
    const homeRef = useRef(null); 
    const aboutRef = useRef(null);
    const portfolioRef = useRef(null);
    const experiencesRef = useRef(null);
    const archivingRef = useRef(null);

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
    const scrollToarchiving  = () => {
      archivingRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const [aboutShowNav, setaboutShowNav] = useState(false);
    const [aboutVisibleHeader, setaboutVisibleHeader] = useState(false);
    const [aboutVisibleContents, setaboutVisibleContents] = useState(false);


    const handleScroll = () => {
      const aboutPosition = aboutRef.current.offsetTop;
      setaboutShowNav(window.scrollY >= aboutPosition - 1);
  
      const onScreenAboutHeader = window.scrollY  > aboutPosition - 300;
      setaboutVisibleHeader(onScreenAboutHeader);

      const onScreenAboutContents = window.scrollY  > aboutPosition - 1;
      setaboutVisibleContents(onScreenAboutContents);
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
          <NavbarStuck onHomeClick={scrollToHome} onAboutClick={scrollToAbout} onPortfolioClick={scrollToportfolio} onExperiencesClick={scrollToexperiences} onArchivingClick={scrollToarchiving}/>
          <Navbar onHomeClick={scrollToHome} onAboutClick={scrollToAbout} onPortfolioClick={scrollToportfolio} onExperiencesClick={scrollToexperiences} onArchivingClick={scrollToarchiving} show={aboutShowNav}/>
          <About ref={aboutRef} aboutVisibleabHeader={aboutVisibleHeader} aboutVisibleContents={aboutVisibleContents} />
          <Portfolio ref={portfolioRef}/>
          <Experiences ref={experiencesRef}/>
          <Archiving ref={archivingRef}/>
        </div>
    );
  }

export default Home;