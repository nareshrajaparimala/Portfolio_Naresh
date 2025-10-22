import { useState ,useRef } from 'react';
import Navbar from './components/navbar';
import Pageone from './components/pageone'; 
import Aboutme from './components/aboutme'; 
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Skills from './components/skills';
import Achievements from './components/achievements';
import './App.css';
function App() {
  const pageoneRef=useRef(null);//first page scroll HOME
  const aboutRef = useRef(null); // Create ref for About section
  const portfolioRef=useRef(null); //for portfolio scroll
  const achievementsRef=useRef(null); //for achievements scroll
  const contactRef=useRef(null);
  const scrollToPageone = () => {
    if (pageoneRef.current) {
      pageoneRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToPortfolio = () => {
    if (portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAchievements = () => {
    if (achievementsRef.current) {
      achievementsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
      <div className='container-App'>
        <Navbar scrollToPageone={scrollToPageone} scrollToAbout={scrollToAbout} scrollToPortfolio={scrollToPortfolio} scrollToAchievements={scrollToAchievements} scrollToContact={scrollToContact}/> 
        <Pageone pageoneRef={pageoneRef} />
        <Aboutme  aboutRef={aboutRef} />
        <Portfolio portfolioRef={portfolioRef}/>
        <Skills />
        <Achievements achievementsRef={achievementsRef} />
        <Contact  contactRef={contactRef}/>
      </div>
  )
}

export default App
