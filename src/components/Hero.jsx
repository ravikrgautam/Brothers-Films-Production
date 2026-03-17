import React, { useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen bg-darkBase overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Video with Mouse Parallax (Feature 4 & 5) */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          x: mousePos.x * -18,
          y: mousePos.y * -18,
        }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        style={{ scale: 1.06 }}
      >
        <img
          src="./src/assets/images/hero-main.jpg"
          alt="Brothers Films Production"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-85"
        />
      </motion.div>

      {/* Headline */}
      <motion.h1
        className="absolute z-10 font-bebas text-white leading-none whitespace-nowrap"
        style={{
          bottom: '48%',
          left: '-8px',
          letterSpacing: '-2px',
          fontSize: '100px'
        }}
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        BROTHERS FILMS PRODUCTION
      </motion.h1>

      {/* Scroll indicator */}
      <motion.div
        className="absolute z-10 left-1/2 -translate-x-1/2 w-[44px] h-[44px] rounded-full flex items-center justify-center pointer-events-none"
        style={{
          bottom: '80px',
          border: '1px solid rgba(255,255,255,0.4)',
          background: 'rgba(255,255,255,0.05)'
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
      >
        <span className="font-inter text-[14px] text-white">↓</span>
      </motion.div>

      {/* Specs bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[72px] z-20 flex"
        style={{
          background: 'rgba(10,10,10,0.80)',
          borderTop: '1px solid rgba(255,255,255,0.10)'
        }}
      >
        {[
          { label: 'Style', val: 'Cinematic' },
          { label: 'Experience', val: '8+ Years' },
          { label: 'Projects', val: '500+' },
          { label: 'Clients', val: '200+' }
        ].map((spec, i) => (
          <div key={i} className="flex-1 flex flex-col justify-center items-center relative">
            <span className="font-inter font-normal text-[10px] text-[#888888] uppercase tracking-[1.5px]">{spec.label}</span>
            <span className="font-inter font-bold text-[16px] text-white mt-1">{spec.val}</span>
            {i !== 3 && (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-[1px] bg-[rgba(255,255,255,0.15)]"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
