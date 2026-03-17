import React from 'react';
import { motion } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder';

const fadeUp = {
  initial: { y: 40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" }
};

const Showreel = () => {
  return (
    <section className="relative w-full h-[460px] bg-darkBase p-0 overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/showreel-thumb.jpg"
          alt="Brothers Films Showreel"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-[rgba(0,0,0,0.55)]"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between h-full px-6 lg:px-[64px]">
        {/* Left Side */}
        <motion.div 
          className="w-full md:w-[45%] flex flex-col justify-center"
          variants={fadeUp}
          initial="initial"
          whileInView="whileInView"
        >
          <span className="font-inter font-bold text-[11px] text-white uppercase tracking-[2px]">Brothers Films</span>
          <h2 className="font-inter font-bold text-[26px] text-white mt-[12px]">Brothers Films Showreel</h2>
          <p className="font-inter font-normal text-[13px] text-[#AAAAAA] leading-[1.7] max-w-[280px] mt-2">
            Watch how we capture life's most beautiful moments.
            A behind-the-scenes look at our process and craft.
          </p>
        </motion.div>

        {/* Center Play Button */}
        <motion.button 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[64px] h-[64px] rounded-full flex items-center justify-center transition-all duration-300 pointer-events-auto"
          style={{
            border: '1px solid rgba(255,255,255,0.5)',
            background: 'rgba(255,255,255,0.08)'
          }}
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.18)' }}
        >
          <span className="text-white text-[20px] ml-1">▶</span>
        </motion.button>

        {/* Right Side */}
        <motion.div 
          className="w-full md:w-auto mt-8 md:mt-0 flex justify-center md:justify-end pointer-events-auto"
          variants={fadeUp}
          initial="initial"
          whileInView="whileInView"
        >
          <button className="bg-white text-black px-[24px] py-[10px] rounded-[20px] font-inter font-semibold text-[12px] hover:bg-gray-200 transition-colors">
            Watch Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Showreel;
