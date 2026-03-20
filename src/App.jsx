import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import SectionLabel from './components/SectionLabel';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeatureDetail from './components/FeatureDetail';
import Showreel from './components/Showreel';
import Reviews from './components/Reviews';
import News from './components/News';
import Community from './components/Community';
import VideoShowcase from './components/VideoShowcase';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
  const [loaded, setLoaded] = useState(false);

  const handleAnchorClick = (event) => {
    const link = event.target.closest('a[href^="#"]');

    if (!link) {
      return;
    }

    const targetId = link.getAttribute('href');

    if (!targetId || targetId === '#') {
      return;
    }

    const targetElement = document.querySelector(targetId);

    if (!targetElement) {
      return;
    }

    event.preventDefault();
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', targetId);
  };

  return (
    <>
      <CustomCursor />

      <AnimatePresence>
        {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      <main
        className="bg-darkBase min-h-screen text-white relative font-barlow selection:bg-white/20"
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.4s' }}
        onClick={handleAnchorClick}
      >
        <SectionLabel />
        <Navbar />
        <Hero />
        <Showreel />
        <About />
        <Portfolio />
        <FeatureDetail />
        <Reviews />
        <News />
        {/* <Community /> */}
        <VideoShowcase />
        <Footer />
      </main>
    </>
  );
}

export default App;
