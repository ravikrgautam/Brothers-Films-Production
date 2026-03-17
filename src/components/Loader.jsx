import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [show, setShow] = useState(() => !sessionStorage.getItem('bf_loaded'));

  useEffect(() => {
    if (!show) { 
      onComplete(); 
      return; 
    }
    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('bf_loaded', '1');
      onComplete();
    }, 1800);
    return () => clearTimeout(timer);
  }, [show, onComplete]);

  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-[#0a0a0a] z-[3000] flex items-center justify-center cursor-default"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Logo reveal — letters appear one by one */}
      <div className="text-center">
        {'BROTHERS FILMS PRODUCTION'.split('').map((char, i) => (
          <motion.span
            key={i}
            className="inline-block font-bebas text-white"
            style={{ fontSize: 'clamp(32px, 6vw, 72px)', letterSpacing: char === ' ' ? '10px' : '4px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4, ease: 'easeOut' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}

        {/* Thin white line that grows under the text */}
        <motion.div
          className="h-[1px] bg-white mt-4 mx-auto"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 1.2, duration: 0.5, ease: 'easeOut' }}
        />

        {/* Production tagline */}
        <motion.p
          className="text-[#555] text-[11px] uppercase tracking-[3px] mt-4 font-barlow font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.4 }}
        >
          Visual Storytelling Studio
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
