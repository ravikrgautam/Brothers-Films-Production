import React from 'react';
import { motion } from 'framer-motion';
import communityBg from '../assets/brothersfilmsproduction.png';
import ImagePlaceholder from './ImagePlaceholder';

const fadeUp = {
  initial: { y: 40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" }
};

const Community = () => {
  return (
    <section className="relative w-full h-[440px] bg-darkBase overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={communityBg}
          alt="Brothers Films Community"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-[rgba(0,0,0,0.60)]"></div>

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-10 max-w-[1400px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="whileInView"
          className="flex flex-col items-center"
        >
          <h2 className="font-inter font-bold text-[32px] text-white leading-tight">
            Be Part of the Brothers Films<br />Community
          </h2>

          <p className="font-inter font-normal text-[14px] text-[#BBBBBB] leading-[1.7] mt-[16px] max-w-[460px]">
            Join thousands who trust Brothers Films to capture their most treasured memories. Stay inspired with behind-the-scenes content, photography tips, and exclusive offers.
          </p>

          <button className="bg-white text-black px-[32px] py-[12px] rounded-full font-inter font-bold text-[13px] mt-[28px] hover:bg-[#E0E0E0] transition-colors">
            Join Community
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
