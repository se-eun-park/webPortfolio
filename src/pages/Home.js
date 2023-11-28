import React, {useRef , useState, useEffect} from 'react';
import '../style/home.css';
import About from './about.js';
import Portfolio from './portfolio.js';
import Experiences from './experiences.js';
import Archiving from './archiving.js';
import Navbar from '../components/navBar.jsx';
import NavbarStuck from '../components/navBarStuck.jsx';

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

    const [homeFocus, setHomeFocus] = useState(false);
    const [aboutFocus, setAboutFocus] = useState(false);
    const [portfolioFocus, setPortfolioFocus] = useState(false);
    const [experiencesFocus, setExperiencesFocus] = useState(false);
    const [archivingFocus, setArchivingFocus] = useState(false);

    const [aboutShowNav, setAboutShowNav] = useState(false);
    const [aboutVisibleHeader, setAboutVisibleHeader] = useState(false);
    const [aboutVisibleContents, setAboutVisibleContents] = useState(false);


    const handleScroll = () => {

      const aboutPosition = aboutRef.current.offsetTop;
      const portfolioPosition = portfolioRef.current.offsetTop;
      const experiencesPosition = experiencesRef.current.offsetTop;
      const archivingPosition = archivingRef.current.offsetTop;

      setHomeFocus(window.scrollY < aboutPosition);
      setAboutFocus(aboutPosition-1 <= window.scrollY && window.scrollY < portfolioPosition);
      setPortfolioFocus(portfolioPosition-1 <= window.scrollY && window.scrollY < experiencesPosition);
      setExperiencesFocus(experiencesPosition-1 <= window.scrollY && window.scrollY < archivingPosition);
      setArchivingFocus(archivingPosition-1 <= window.scrollY);
      
      setAboutShowNav(window.scrollY >= aboutPosition - 1);

      const onScreenAboutHeader = window.scrollY  > aboutPosition - 300;
      setAboutVisibleHeader(onScreenAboutHeader);
      const onScreenAboutContents = window.scrollY  > aboutPosition - 1;
      setAboutVisibleContents(onScreenAboutContents);

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
          <NavbarStuck onHomeClick={scrollToHome} onAboutClick={scrollToAbout} onPortfolioClick={scrollToportfolio} onExperiencesClick={scrollToexperiences} onArchivingClick={scrollToarchiving} homeFocus={homeFocus}/>
          <Navbar onHomeClick={scrollToHome} onAboutClick={scrollToAbout} onPortfolioClick={scrollToportfolio} onExperiencesClick={scrollToexperiences} onArchivingClick={scrollToarchiving} aboutShow={aboutShowNav} aboutFocus={aboutFocus} portfolioFocus={portfolioFocus} experiencesFocus={experiencesFocus} archivingFocus={archivingFocus}/>
          <About ref={aboutRef} aboutVisibleabHeader={aboutVisibleHeader} aboutVisibleContents={aboutVisibleContents} />
          <Portfolio ref={portfolioRef}/>
          <Experiences ref={experiencesRef}/>
          <Archiving ref={archivingRef}/>
        </div>
    );
  }

export default Home;