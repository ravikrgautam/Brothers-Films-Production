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
import News from './components/News';
import Community from './components/Community';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <CustomCursor />

      <AnimatePresence>
        {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      <main
        className="bg-darkBase min-h-screen text-white relative font-barlow selection:bg-white/20"
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.4s' }}
      >
        <SectionLabel />
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <FeatureDetail />
        <Showreel />
        <News />
        <Community />
        <Footer />
      </main>
    </>
  );
}

export default App;
