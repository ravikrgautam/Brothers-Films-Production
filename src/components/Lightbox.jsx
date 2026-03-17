import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { 
      if (e.key === 'Escape') onClose(); 
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, onNext, onPrev]);

  return (
    <motion.div
      className="fixed inset-0 bg-black/95 z-[2000] flex items-center justify-center cursor-default"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      {/* Image */}
      <motion.img
        key={currentIndex}
        src={images[currentIndex].src}
        alt={images[currentIndex].title || "Lightbox Image"}
        className="max-w-[90vw] max-h-[85vh] object-contain"
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.35 }}
        onClick={(e) => e.stopPropagation()}
      />

      {/* Caption */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center" onClick={(e) => e.stopPropagation()}>
        <p className="font-barlow text-white font-bold text-[14px]">{images[currentIndex].title}</p>
        <p className="font-barlow text-[#888] text-[11px] mt-1">{currentIndex + 1} / {images.length}</p>
      </div>

      {/* Left arrow */}
      <button
        data-cursor="button"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-[44px] h-[44px] rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors text-white text-[20px]"
      >
        ‹
      </button>

      {/* Right arrow */}
      <button
        data-cursor="button"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-[44px] h-[44px] rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors text-white text-[20px]"
      >
        ›
      </button>

      {/* Close button */}
      <button
        data-cursor="button"
        onClick={onClose}
        className="absolute top-6 right-6 text-white/60 hover:text-white text-[22px]"
      >
        ✕
      </button>
    </motion.div>
  );
};

export default Lightbox;
