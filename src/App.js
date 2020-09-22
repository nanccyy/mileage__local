import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import { Services } from './components/Services';
import { gsap, ScrollTrigger } from "gsap/all";
import { Footer } from './components/Footer/Footer';
import { Team } from './components/Team/Team';
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isBanner, setIsBanner] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isFooter, setIsFooter] = useState(false);

  const checkForScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const checkForResize = () => {
    if (window.innerWidth < 1000) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  }
  window.addEventListener('scroll', checkForScroll);
  window.addEventListener('resize', checkForResize)
  return (
    <div className="App">
      {!isFooter &&
        <Header
          isBanner={isBanner}
          scrolled={scrolled}
          isSmallScreen={isSmallScreen}
        />
      }
      <Banner setIsBanner={setIsBanner} isBanner={isBanner}/>
      <Services />
      <Team isBanner={isBanner}/>
      <Footer setIsFooter={setIsFooter} />
    </div>
  );
}

export default App;
