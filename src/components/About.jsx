import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import WipeReveal from './WipeReveal';
import teamImg from '../assets/images/0S5A0698.webp';

const fadeUp = {
  initial: { y: 40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" }
};

const useCountUp = (target, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return { count, ref };
};

const About = () => {
  const stat1 = useCountUp(500);
  const stat2 = useCountUp(8);
  const stat3 = useCountUp(10);

  return (
    <section id="about" className="bg-white text-lightBase px-6 py-16 lg:py-[80px] lg:px-[64px] overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left Column */}
        <motion.div
          className="lg:w-1/2 flex flex-col"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-barlow font-bold text-[28px] text-[#111111] mb-6">About Brothers Films</h2>
          <p className="font-barlow font-normal text-[14px] text-[#555555] leading-[1.8] mb-10 max-w-xl">
            We are a premium photography and filmmaking studio rooted in
            visual storytelling. Every frame we capture carries emotion,
            depth, and artistic intention. From weddings to commercial
            productions, we bring cinematic quality to every project.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-8 mb-10">
            <div ref={stat1.ref} className="flex flex-col">
              <span className="font-barlow font-extrabold text-[22px] text-[#111111]">{stat1.count}+</span>
              <span className="font-barlow font-normal text-[11px] text-[#888888] uppercase mt-1">Projects Delivered</span>
            </div>
            <div ref={stat2.ref} className="flex flex-col">
              <span className="font-barlow font-extrabold text-[22px] text-[#111111]">{stat2.count}+</span>
              <span className="font-barlow font-normal text-[11px] text-[#888888] uppercase mt-1">Years Active</span>
            </div>
            <div ref={stat3.ref} className="flex flex-col">
              <span className="font-barlow font-extrabold text-[22px] text-[#111111]">{stat3.count}K</span>
              <span className="font-barlow font-normal text-[11px] text-[#888888] uppercase mt-1">Photos Shot</span>
            </div>
          </div>

          <div>
            <button data-cursor="button" className="bg-[#111111] text-white px-[22px] py-[10px] rounded-[4px] font-barlow font-semibold text-[12px] hover:bg-[#333333] transition-colors">
              Our Story &rarr;
            </button>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="lg:w-1/2 w-full"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <WipeReveal delay={0.2} className="w-full h-full">
            <img
              src={teamImg}
              alt="Brothers Films Team"
              className="w-full h-[370px] object-cover object-center"
            />
          </WipeReveal>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
