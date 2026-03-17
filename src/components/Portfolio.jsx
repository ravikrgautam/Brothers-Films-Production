import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const works = [
  { id: '01', title: 'The Sharma Wedding',   category: 'Wedding Film',    year: '2025', location: 'Udaipur',   img: '/src/assets/images/work-01.jpg' },
  { id: '02', title: 'Faces of New Delhi',   category: 'Portrait Series', year: '2024', location: 'New Delhi', img: '/src/assets/images/work-02.jpg' },
  { id: '03', title: 'Zara India — AW24',    category: 'Commercial',      year: '2024', location: 'Mumbai',    img: '/src/assets/images/work-03.jpg' },
  { id: '04', title: 'TEDxDelhi 2024',       category: 'Event Coverage',  year: '2024', location: 'New Delhi', img: '/src/assets/images/work-04.jpg' },
  { id: '05', title: 'Still — Short Film',   category: 'Cinematic Film',  year: '2023', location: 'Jaipur',    img: '/src/assets/images/work-05.jpg' },
  { id: '06', title: 'Maison Arjun — SS25',  category: 'Product & Brand', year: '2025', location: 'Bangalore', img: '/src/assets/images/work-06.jpg' },
];

export default function Portfolio() {
  const [active, setActive] = useState(null);

  return (
    <section id="portfolio" style={{ background: '#080808', minHeight: '100vh', padding: '80px 0' }}>
      
      {/* Header */}
      <div style={{ padding: '0 64px', marginBottom: '48px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', letterSpacing: '3px', color: '#E8D5B0', textTransform: 'uppercase', marginBottom: '12px' }}>
          Selected Work
        </p>
        <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(36px, 5vw, 64px)', color: '#F0F0F0', lineHeight: 1 }}>
          THE WORK
        </h2>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />

      {/* Work rows */}
      {works.map((work, i) => (
        <div
          key={work.id}
          onMouseEnter={() => setActive(i)}
          onMouseLeave={() => setActive(null)}
          style={{
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            padding: '28px 64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            opacity: active !== null && active !== i ? 0.25 : 1,
            transition: 'opacity 0.3s ease, background 0.3s ease',
            background: active === i ? 'rgba(255,255,255,0.02)' : 'transparent',
          }}
        >
          {/* Left: number + title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flex: 1 }}>
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '13px', color: active === i ? '#E8D5B0' : '#2a2a2a', transition: 'color 0.3s', minWidth: '28px' }}>
              {work.id}
            </span>
            <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(18px, 2.5vw, 30px)', fontWeight: 600, color: active === i ? '#FFFFFF' : '#555555', transition: 'color 0.3s', whiteSpace: 'nowrap' }}>
              {work.title}
            </h3>
          </div>

          {/* Center: category */}
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: active === i ? '#666' : '#2a2a2a', transition: 'color 0.3s', minWidth: '160px', textAlign: 'center' }}>
            {work.category}
          </p>

          {/* Right: location + year + arrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: active === i ? '#555' : '#2a2a2a', transition: 'color 0.3s' }}>
              {work.location}
            </span>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: active === i ? '#555' : '#2a2a2a', transition: 'color 0.3s' }}>
              {work.year}
            </span>
            <motion.div
              animate={{ x: active === i ? 6 : 0, opacity: active === i ? 1 : 0.15 }}
              transition={{ duration: 0.25 }}
              style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M6 1l5 5-5 5" stroke={active === i ? '#E8D5B0' : 'white'} strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </motion.div>
          </div>

          {/* Mobile inline image */}
          <AnimatePresence>
            {active === i && (
              <motion.div
                className="lg:hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 200, opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                style={{ overflow: 'hidden', position: 'absolute', left: 0, right: 0 }}
              >
                <img src={work.img} alt={work.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}

      {/* Bottom divider */}
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />

      {/* Footer row */}
      <div style={{ padding: '32px 64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#333', letterSpacing: '1px' }}>
          2016 — Present
        </span>
        <button
          style={{ background: 'none', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '999px', padding: '10px 24px', fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 600, color: '#F0F0F0', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
        >
          View All Work
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 6h10M6 1l5 5-5 5" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

    </section>
  );
}
