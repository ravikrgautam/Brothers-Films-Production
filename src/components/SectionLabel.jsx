import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'hero',       label: 'Home' },
  { id: 'about',      label: 'About' },
  { id: 'detail',     label: 'Our Work' },
  { id: 'showreel',   label: 'Showreel' },
  { id: 'news',       label: 'Updates' },
  { id: 'community',  label: 'Community' },
];

const SectionLabel = () => {
  const [activeSection, setActiveSection] = useState('Home');
  const [isDarkBg, setIsDarkBg] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sections.find(s => s.id === entry.target.id);
            if (match) {
              setActiveSection(match.label);
              
              // Light sections: about, news, detail
              const lightSections = ['about', 'news', 'detail'];
              setIsDarkBg(!lightSections.includes(entry.target.id));
            }
          }
        });
      },
      { threshold: 0.4 }
    );
    
    // Slight delay to ensure DOM is ready on initial load
    const timer = setTimeout(() => {
      sections.forEach(s => {
        const el = document.getElementById(s.id);
        if (el) observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-3">
      {/* Vertical line top */}
      <div className={`w-px h-10 transition-colors duration-500 ${isDarkBg ? 'bg-white/20' : 'bg-black/20'}`} />

      {/* Section name — rotated 90deg */}
      <AnimatePresence mode="wait">
        <motion.span
          key={activeSection}
          className={`font-barlow text-[9px] font-semibold uppercase tracking-[2px] transition-colors duration-500 ${isDarkBg ? 'text-white/40' : 'text-black/30'}`}
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          {activeSection}
        </motion.span>
      </AnimatePresence>

      {/* Vertical line bottom */}
      <div className={`w-px h-10 transition-colors duration-500 ${isDarkBg ? 'bg-white/20' : 'bg-black/20'}`} />
    </div>
  );
};

export default SectionLabel;
