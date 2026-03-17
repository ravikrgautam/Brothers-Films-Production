import { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const springX = useSpring(pos.x, { stiffness: 150, damping: 18 });
  const springY = useSpring(pos.y, { stiffness: 150, damping: 18 });

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: 6, height: 6,
          borderRadius: '50%',
          background: 'white',
          pointerEvents: 'none',
          zIndex: 9999,
          x: pos.x - 3,
          y: pos.y - 3,
        }}
      />
      <motion.div
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: 36, height: 36,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.5)',
          pointerEvents: 'none',
          zIndex: 9998,
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}
