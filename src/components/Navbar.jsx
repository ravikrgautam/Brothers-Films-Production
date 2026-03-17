import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoUrl from '../assets/Logo white.PNG';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Missing file fallback for Vercel deploy
    audioRef.current = new Audio('/ambient.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.15;
    return () => audioRef.current?.pause();
  }, []);

  const toggleSound = () => {
    if (soundOn) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => { });
    }
    setSoundOn(!soundOn);
  };

  const navBg = scrolled ? 'rgba(10,10,10,0.96)' : 'rgba(10,10,10,0.85)';

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 h-[70px] flex items-center justify-between px-6 lg:px-16"
      style={{ background: navBg, backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Left */}
      <div className="flex items-center">
        <img src={logoUrl} alt="Brothers Films Logo" className="h-[70px] w-auto object-contain" />
      </div>

      {/* Center - hidden on mobile */}
      <div className="hidden md:flex items-center space-x-8">
        {['About', 'Services', 'Updates', 'Contact'].map((item) => (
          <a data-cursor="button" key={item} href={`#${item.toLowerCase()}`} className="font-barlow font-normal text-[13px] text-[#AAAAAA] hover:text-white transition-colors duration-200">
            {item}
          </a>
        ))}
      </div>

      {/* Right */}
      <div className="flex items-center">
        {/* Sound Toggle */}
        <button
          onClick={toggleSound}
          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-white/50 transition-colors mr-3"
          title={soundOn ? 'Mute' : 'Play ambient sound'}
        >
          <AnimatePresence mode="wait">
            {soundOn ? (
              <motion.svg key="on" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              </motion.svg>
            ) : (
              <motion.svg key="off" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </motion.svg>
            )}
          </AnimatePresence>
        </button>

        <a data-cursor="button" href="tel:918585217287" className="bg-white text-black px-[18px] py-[8px] rounded-[4px] font-barlow font-bold text-[12px] hover:bg-gray-200 transition-colors">
          DIAL NOW - +91 85952 17287
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
