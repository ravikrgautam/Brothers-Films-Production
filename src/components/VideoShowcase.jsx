import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { y: 40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: 'easeOut' }
};

const VideoShowcase = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.volume = 0;

    const syncFullscreenSound = () => {
      const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;
      const isVideoFullscreen = fullscreenElement === video;

      video.muted = !isVideoFullscreen;
      video.volume = isVideoFullscreen ? 1 : 0;
    };

    document.addEventListener('fullscreenchange', syncFullscreenSound);
    document.addEventListener('webkitfullscreenchange', syncFullscreenSound);

    return () => {
      document.removeEventListener('fullscreenchange', syncFullscreenSound);
      document.removeEventListener('webkitfullscreenchange', syncFullscreenSound);
    };
  }, []);

  const handleFullscreenPlay = () => {
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
    <section className="bg-[#050505] px-6 py-16 lg:px-[64px] lg:py-[88px] border-t border-[#141414]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="whileInView"
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10"
        >
          <div className="max-w-[640px]">
            <p className="font-inter text-[11px] uppercase tracking-[3px] text-[#B7B7B7] mb-3">
              Featured Video
            </p>
            <h2 className="font-inter font-bold text-[28px] md:text-[40px] leading-[1.1] text-white">
              Watch the film in full frame
            </h2>
            <p className="font-inter text-[14px] leading-[1.8] text-[#8E8E8E] mt-4">
              Open the video in fullscreen for the full cinematic experience. Sound turns on in fullscreen and switches off automatically when you exit.
            </p>
          </div>

          <button
            onClick={handleFullscreenPlay}
            className="self-start md:self-auto bg-white text-black px-[24px] py-[11px] rounded-full font-inter font-semibold text-[12px] hover:bg-[#E5E5E5] transition-colors"
          >
            Play Fullscreen
          </button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="whileInView"
          className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
        >
          <div className="relative w-full pt-[56.25%]">
            <video
              ref={videoRef}
              controls
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/src/assets/videos/showreel.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;
