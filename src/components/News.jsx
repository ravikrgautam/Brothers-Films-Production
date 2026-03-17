import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder';
import WipeReveal from './WipeReveal';
import Lightbox from './Lightbox';

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

const fromRight = {
  initial: { x: 40, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.75, ease: 'easeOut' }
};

const newsCards = [
  {
    img: '/src/assets/images/0S5A0659.webp',
    title: 'Brothers Films Unveils New Season Collection and Expanded Portfolio',
    desc: 'Explore our newest work across weddings, portraits, and brand campaigns from the 2025 season.',
    date: '15 March 2025'
  },
  {
    img: '/src/assets/images/0S5A0698.webp',
    title: 'Brothers Films Launches Premium Wedding Package for 2025 Season',
    desc: 'New all-inclusive wedding packages now available with cinematic film add-ons and same-day highlights.',
    date: '10 March 2025'
  },
  {
    img: '/src/assets/images/0S5A0708.webp',
    title: 'Brothers Films Introduces Innovative Same-Day Edits for Events',
    desc: 'Receive a curated highlight reel delivered within 24 hours of your event. Available for all bookings.',
    date: '05 March 2025'
  }
];

const News = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index, e) => {
    e.stopPropagation();
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section id="news" className="bg-white text-lightBase px-6 py-16 lg:pt-[80px] lg:px-[64px] lg:pb-[60px] overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <motion.div
              className="md:w-1/2"
              variants={fromLeft}
              initial="initial"
              whileInView="whileInView"
            >
              <h2 className="font-barlow font-bold text-[26px] text-[#111111] leading-[1.2]">
                Stay Connected with<br />Our Latest Work & Updates
              </h2>
            </motion.div>
            <motion.div
              className="md:w-[45%]"
              variants={fromRight}
              initial="initial"
              whileInView="whileInView"
            >
              <p className="font-barlow font-normal text-[13px] text-[#777777] leading-[1.8]">
                Stay up to date with Brothers Films news, behind-the-scenes content, and photography tips from our team.
              </p>
            </motion.div>
          </div>

          {/* News Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] mt-[40px]">
            {newsCards.map((card, i) => (
              <motion.div
                key={i}
                className="bg-white border border-[#E8E8E8] rounded-[8px] overflow-hidden hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300 relative group flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.12 }}
              >
                {/* TOP: Image */}
                <div
                  className="h-[180px] w-full overflow-hidden cursor-pointer"
                  onClick={(e) => openLightbox(i, e)}
                  data-cursor="view"
                >
                  <WipeReveal delay={i * 0.12} className="w-full h-full">
                    <img src={card.img} alt={card.title} className="w-full h-[180px] object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                  </WipeReveal>
                </div>

                {/* BODY */}
                <div className="p-[16px] flex flex-col flex-grow">
                  <h3 className="font-barlow font-bold text-[14px] text-[#111111] leading-[1.5]">{card.title}</h3>
                  <p className="font-barlow font-normal text-[12px] text-[#777777] leading-[1.6] mt-[8px]">
                    {card.desc}
                  </p>
                  <div className="mt-auto pt-[12px] flex items-center justify-between">
                    <span className="font-barlow font-normal text-[11px] text-[#AAAAAA]">{card.date}</span>
                    <button data-cursor="button" className="w-[28px] h-[28px] rounded-full bg-[#111111] flex items-center justify-center text-white text-[14px]">
                      ›
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature 7: Fullscreen Image Lightbox Hookup */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={newsCards}
            currentIndex={currentIndex}
            onClose={() => setLightboxOpen(false)}
            onPrev={() => setCurrentIndex(prev => (prev > 0 ? prev - 1 : newsCards.length - 1))}
            onNext={() => setCurrentIndex(prev => (prev < newsCards.length - 1 ? prev + 1 : 0))}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default News;
