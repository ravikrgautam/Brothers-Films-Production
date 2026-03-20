import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { y: 40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: 'easeOut' }
};

const Showreel = () => {
  const videoRef = useRef(null);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.volume = 0;
    }
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    if (soundOn) {
      video.muted = true;
      video.volume = 0;
      setSoundOn(false);
    } else {
      video.muted = false;
      video.volume = 1;
      video.play().catch(() => {});
      setSoundOn(true);
    }
  };

  const handleWatchNow = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = false;
    video.volume = 1;
    video.play().catch(() => {});

    if (video.requestFullscreen) {
      video.requestFullscreen().catch(() => {});
      return;
    }

    if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  };

  return (
    <section className="relative w-full h-[460px] bg-darkBase p-0 overflow-hidden">
      {/* Background Video */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'cover',
          }}
        >
          <source src="/src/assets/videos/showreel.mp4" type="video/mp4" />
        </video>
      </div>

      <button
        onClick={toggleSound}
        style={{
          position: 'absolute',
          bottom: '24px',
          right: '24px',
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 20px',
          borderRadius: '999px',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: 'white',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          cursor: 'pointer',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          transition: 'background 0.25s ease, border-color 0.25s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.18)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
        }}
      >
        {soundOn ? (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="white" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            </svg>
            <span>Sound On</span>
          </>
        ) : (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="white" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <line x1="23" y1="9" x2="17" y2="15"/>
              <line x1="17" y1="9" x2="23" y2="15"/>
            </svg>
            <span>Sound Off</span>
          </>
        )}
      </button>

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
          <span className="font-inter font-bold text-[11px] text-white uppercase tracking-[2px]">Brothers Films Production</span>
          <h2 className="font-inter font-bold text-[26px] text-white mt-[12px]">A Complete Shooting HUB</h2>
          <p className="font-inter font-normal text-[13px] text-[#AAAAAA] leading-[1.7] max-w-[280px] mt-2">
            Watch how we capture life's most beautiful moments.
            A behind-the-scenes look at our process and craft.
          </p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="w-full md:w-auto mt-8 md:mt-0 flex justify-center md:justify-end pointer-events-auto"
          variants={fadeUp}
          initial="initial"
          whileInView="whileInView"
        >
          <button
            onClick={handleWatchNow}
            className="bg-white text-black px-[24px] py-[10px] rounded-[20px] font-inter font-semibold text-[12px] hover:bg-gray-200 transition-colors"
          >
            Watch Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Showreel;
