import React from 'react';
import { motion } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder';
import WipeReveal from './WipeReveal';

const fadeUp = {
  initial: { y: 40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" }
};

const fromLeft = {
  initial: { x: -40, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.75, ease: 'easeOut' }
};

const FeatureDetail = () => {
  return (
    <>
      <section className="bg-white text-lightBase pt-[60px] pb-0 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-[64px] text-center mb-[60px]">
          <motion.h2
            className="font-barlow font-bold text-[24px] text-[#111111]"
            variants={fadeUp}
            initial="initial"
            whileInView="whileInView"
          >
            Award-Winning Quality, Crafted With Heart
          </motion.h2>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-[64px]">
          {/* 2-Column Image Block */}
          <div className="flex flex-col lg:flex-row gap-[6px] mb-8">
            <div className="w-full lg:w-[55%] h-[400px]">
              <WipeReveal delay={0} className="w-full h-full">
                <img
                  src="/src/assets/images/0S5A0659.webp"
                  alt="Wedding detail"
                  className="w-full h-[400px] object-cover object-center"
                />
              </WipeReveal>
            </div>
            <div className="w-full lg:w-[45%] h-[400px] relative overflow-hidden group">
              <WipeReveal delay={0.15} className="w-full h-full">
                <img
                  src="/src/assets/images/0S5A0698.webp"
                  alt="Portrait close-up"
                  className="w-full h-[400px] object-cover object-center"
                />
              </WipeReveal>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent z-20">
                <h3 className="font-barlow font-bold text-[13px] text-white tracking-wide">Composition on Every Frame</h3>
                <p className="font-barlow font-normal text-[11px] text-[#CCCCCC] mt-1">Designed for beauty, built for impact.</p>
              </div>
            </div>
          </div>

          {/* Text + 2 Images Below */}
          <div className="flex flex-col lg:flex-row gap-[6px] py-8 lg:px-16 items-center mb-0">
            <motion.div
              className="w-full lg:w-[55%]"
              variants={fromLeft}
              initial="initial"
              whileInView="whileInView"
            >
              <h3 className="font-barlow font-bold text-[16px] text-[#111111] mb-3">Emotion into Every Frame</h3>
              <p className="font-barlow font-normal text-[13px] text-[#555555] leading-[1.8] max-w-lg">
                Every shoot is an experience. Our team creates an atmosphere
                where authentic moments happen naturally — your joy, love,
                and story captured exactly as they are.
              </p>
            </motion.div>

            <div className="w-full lg:w-[45%] h-[250px]">
              <WipeReveal delay={0.1} className="w-full h-full">
                <img
                  src="/src/assets/images/0S5A0708.webp"
                  alt="Candid moment"
                  className="w-full h-[250px] object-cover object-center"
                />
              </WipeReveal>
            </div>
          </div>
        </div>

        {/* Double row (Side-by-side images) */}
        <div className="w-full flex flex-col md:flex-row gap-[6px] mt-8">
          <div className="flex-1 h-[450px]">
            <WipeReveal delay={0} className="w-full h-full">
              <img
                src="/src/assets/images/0S5A0742.webp"
                alt="Studio interior"
                className="w-full h-[450px] object-cover object-center"
              />
            </WipeReveal>
          </div>
          <div className="flex-1 h-[450px]">
            <WipeReveal delay={0.15} className="w-full h-full">
              <img
                src="/src/assets/images/0S5A1002.webp"
                alt="Behind the scenes"
                className="w-full h-[450px] object-cover object-center"
              />
            </WipeReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureDetail;
