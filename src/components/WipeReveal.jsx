import React from 'react';
import { motion } from 'framer-motion';

const WipeReveal = ({ children, delay = 0, className = "" }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}
      {/* Dark curtain — slides left on scroll into view */}
      <motion.div
        className="absolute inset-0 bg-[#0a0a0a] origin-right z-10"
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay }}
      />
    </div>
  );
};

export default WipeReveal;
