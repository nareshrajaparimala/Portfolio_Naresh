import { useState ,useRef } from 'react';
import Navbar from './components/navbar';
import Pageone from './components/pageone'; 
import Aboutme from './components/aboutme'; 
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import './App.css';
function App() {
  const pageoneRef=useRef(null);//first page scroll HOME
  const aboutRef = useRef(null); // Create ref for About section
  const portfolioRef=useRef(null); //for portfolio scroll
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
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
      <div>
        <Navbar scrollToPageone={scrollToPageone} scrollToAbout={scrollToAbout} scrollToPortfolio={scrollToPortfolio} scrollToContact={scrollToContact}/> 
        <Pageone pageoneRef={pageoneRef} />
        <Aboutme  aboutRef={aboutRef} />
        <Portfolio portfolioRef={portfolioRef}/>
        <Contact  contactRef={contactRef}/>
      </div>
  )
}

export default App
