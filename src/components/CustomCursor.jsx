import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const move = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    
    // Detect custom cursor triggers
    const checkHover = (e) => {
      const target = e.target;
      
      const buttonEl = target.closest('button, a, [data-cursor="button"]');
      if (buttonEl) {
        setCursorType('button');
        return;
      }
      
      const viewEl = target.closest('[data-cursor="view"]');
      if (viewEl) {
        setCursorType('view');
        return;
      }

      const playEl = target.closest('[data-cursor="play"]');
      if (playEl) {
        setCursorType('play');
        return;
      }

      const textEl = target.closest('p, h1, h2, h3, h4, h5, h6, span');
      if (textEl && !target.closest('button, a')) {
        setCursorType('text');
        return;
      }

      setCursorType('default');
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', checkHover);
    
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', checkHover);
    };
  }, []);

  // Framer Motion spring for the laggy ring
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const ringX = useSpring(mousePos.x, springConfig);
  const ringY = useSpring(mousePos.y, springConfig);

  if (isTouchDevice) return null;

  // Determine styles based on cursorType
  let dotSize = 6;
  let dotOpacity = 1;
  let ringSize = 36;
  let ringBg = 'transparent';
  let ringBorder = '1px solid rgba(255,255,255,0.4)';
  let ringText = null;

  switch (cursorType) {
    case 'button':
      dotOpacity = 0;
      ringSize = 56;
      ringBg = 'rgba(255,255,255,0.1)';
      ringBorder = '1px solid transparent';
      break;
    case 'view':
      ringSize = 64;
      ringText = 'VIEW';
      break;
    case 'play':
      ringSize = 72;
      ringText = 'PLAY';
      break;
    case 'text':
      dotSize = 4;
      ringSize = 28;
      break;
    default:
      break;
  }

  return (
    <div className="fixed top-0 left-0 w-[100vw] h-[100vh] pointer-events-none z-[9999]">
      {/* Dot - instantaneous */}
      <motion.div
        className="cursor-dot"
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          width: dotSize,
          height: dotSize,
          opacity: dotOpacity
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
      />
      
      {/* Lagging Ring */}
      <motion.div
        className="cursor-ring"
        style={{
          x: ringX,
          y: ringY,
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          background: ringBg,
          border: ringBorder
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        {ringText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-barlow font-bold text-[8px] tracking-[1px] text-white select-none pointer-events-none"
          >
            {ringText}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};

export default CustomCursor;
