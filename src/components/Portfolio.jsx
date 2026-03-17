import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lightbox from './Lightbox';

const portfolioItems = [
  { src: '/src/assets/images/0S5A0659.webp', category: 'Featured', title: 'Best of 2025' },
  { src: '/src/assets/images/0S5A0698.webp', category: 'Weddings', title: 'New 2025' },
  { src: '/src/assets/images/0S5A0708.webp', category: 'Portraits', title: 'The Best' },
  { src: '/src/assets/images/0S5A0742.webp', category: 'Commercial', title: 'Brand Stories' },
  { src: '/src/assets/images/0S5A1002.webp', category: 'Events', title: 'Corporate Moments' },
  { src: '/src/assets/images/0S5A0647.webp', category: 'Films', title: 'Cinematic Reels' },
];

const Portfolio = () => {
  const containerRef = useRef(null);
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Calculate the translate X value based on scroll progress
  // Wait until mounted to use window width safely
  const [windowWidth, setWindowWidth] = React.useState(0);

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 6 items * 500px wide + layout gaps
  // Use a fallback of -2400px for server rendering or initial pass
  const maxTranslate = windowWidth > 0 ? (6 * 500 + 100) - windowWidth : 2400;
  // Make sure we translate negative to move left
  const x = useTransform(scrollYProgress, [0, 1], ['0px', `-${maxTranslate}px`]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  if (typeof window !== 'undefined' && !containerRef.current) {
    // Suppress warning/render issues before ref mount if any layout issues occur
  }

  return (
    <>
      <section id="portfolio" ref={containerRef} style={{ height: '600vh' }} className="bg-lightAlt">
        <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }} className="flex flex-col">

          {/* Section heading */}
          <div className="absolute top-8 md:top-12 left-6 md:left-16 z-10 w-full max-w-[1400px]">
            <p className="font-barlow text-[10px] text-[#888] uppercase tracking-[2px]">Portfolio</p>
            <h2 className="font-barlow text-[20px] font-bold text-black mt-1">The Art of Visual Storytelling</h2>
          </div>

          {/* Film strip */}
          <div className="flex-1 flex items-center mt-20 md:mt-0">
            <motion.div
              style={{ x }}
              className="flex items-center h-full gap-4 pl-6 md:pl-16 pr-[20vw]" // Keep some right bleed
            >
              {portfolioItems.map((item, i) => (
                <div
                  key={i}
                  data-cursor="view"
                  onClick={() => openLightbox(i)}
                  className="flex-shrink-0 relative cursor-pointer overflow-hidden group"
                  style={{ width: 'min(85vw, 500px)', height: 'min(60vh, 340px)' }}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Overlay Gradient for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.2)] to-transparent pointer-events-none" />

                  {/* Category label */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="font-barlow text-[10px] text-white/60 uppercase tracking-[2px]">{item.category}</span>
                    <p className="font-barlow text-[14px] font-bold text-white mt-1">{item.title}</p>
                  </div>

                  {/* Index number */}
                  <span className="absolute top-4 right-4 text-[11px] text-white/40 font-bold font-barlow z-10">
                    0{i + 1}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Progress bar at bottom */}
          <div className="absolute bottom-8 left-6 right-6 md:left-16 md:right-16 z-10">
            <div className="h-px bg-[#e0e0e0] relative">
              <motion.div
                className="absolute top-0 left-0 h-[2px] bg-black -mt-[0.5px]"
                style={{ width: progressWidth }}
              />
            </div>
            <div className="flex justify-between mt-2 font-barlow">
              <span className="text-[10px] text-[#888] uppercase tracking-[1px]">Scroll to explore</span>
              <span className="text-[10px] text-[#888]">6 categories</span>
            </div>
          </div>
        </div>
      </section>

      {/* Specs row (Always visible below the 600vh portfolio scroll) */}
      <section className="bg-lightAlt px-6 lg:px-[64px] pb-[40px]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            className="flex border-t border-[#E0E0E0] py-5"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {[
              { label: 'Lenses', val: 'Sony & Canon' },
              { label: 'Team', val: '4 Professionals' },
              { label: 'Turnaround', val: '7–10 Days' },
              { label: 'Format', val: 'RAW + JPEG' }
            ].map((spec, i) => (
              <div key={i} className={`flex-1 flex flex-col items-center justify-center ${i !== 3 ? 'border-r border-[#E0E0E0]' : ''}`}>
                <span className="font-barlow font-normal text-[10px] text-[#888888] uppercase tracking-wide">{spec.label}</span>
                <span className="font-barlow font-bold text-[14px] text-[#111111] mt-1 text-center">{spec.val}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature 7: Fullscreen Image Lightbox Hookup */}
      {lightboxOpen && (
        <Lightbox
          images={portfolioItems}
          currentIndex={currentIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setCurrentIndex(prev => (prev > 0 ? prev - 1 : portfolioItems.length - 1))}
          onNext={() => setCurrentIndex(prev => (prev < portfolioItems.length - 1 ? prev + 1 : 0))}
        />
      )}
    </>
  );
};

export default Portfolio;
