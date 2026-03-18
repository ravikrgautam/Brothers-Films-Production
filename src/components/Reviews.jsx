import { useState } from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: 'Raima Paul',
    rating: 5,
    timeAgo: 'a month ago',
    review: "They gave helpful directions during the shoot and made sure we were comfortable. The final pictures looked clean and well edited. Overall, I'm happy with the service.",
    initials: 'RP',
    color: '#4285F4',
  },
  {
    id: 2,
    name: 'Kshitiz Gupta',
    rating: 5,
    timeAgo: 'a month ago',
    review: 'Good service and nice results. The pictures came out clear and natural, just what I wanted.',
    initials: 'KG',
    color: '#34A853',
  },
  {
    id: 3,
    name: 'Anant Prakash',
    rating: 5,
    timeAgo: 'a year ago',
    review: "That's really good to handle the customer's, according to requirements.",
    initials: 'AP',
    color: '#EA4335',
  },
  {
    id: 4,
    name: 'Ankur Kumar',
    rating: 5,
    timeAgo: '4 years ago',
    review: 'I have awesome experience with them and satisfaction by their super work, and also they have good team for managing.',
    initials: 'AK',
    color: '#FBBC05',
  },
  {
    id: 5,
    name: 'Aakash Upadhyay',
    rating: 5,
    timeAgo: '10 months ago',
    review: "It's really amazing work experience with them. I'm very satisfied with their work...that's great.",
    initials: 'AU',
    color: '#A142F4',
  },
  {
    id: 6,
    name: 'Love Sharma',
    rating: 5,
    timeAgo: '4 years ago',
    review: 'Great place to shoot weddings, pre-weddings, post-weddings, events, cinematic video, etc. I am satisfied with your work, and they have an incredible team of photographers.',
    initials: 'LS',
    color: '#24A994',
  },
];

const StarRow = () => (
  <div style={{ display: 'flex', gap: '2px' }}>
    {[1,2,3,4,5].map(s => (
      <svg key={s} width="13" height="13" viewBox="0 0 24 24" fill="#FBBC05" stroke="#FBBC05" strokeWidth="1">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ))}
  </div>
);

const GoogleG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function Reviews() {
  const [active, setActive] = useState(null);

  return (
    <section id="reviews" style={{ background: '#080808', padding: '100px 0 80px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>

      {/* Header */}
      <div style={{ padding: '0 64px', marginBottom: '64px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px' }}>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '3px', color: '#E8D5B0', textTransform: 'uppercase', marginBottom: '12px' }}>
            Client Reviews
          </p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px, 5vw, 64px)', color: '#F0F0F0', lineHeight: 1, letterSpacing: '-0.5px' }}>
            WHAT CLIENTS SAY
          </h2>
        </motion.div>

        {/* Google Rating Badge */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
          style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <GoogleG />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: '#666', letterSpacing: '0.5px' }}>Google Reviews</span>
          </div>
          <div style={{ width: '1px', height: '28px', background: 'rgba(255,255,255,0.08)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '22px', fontWeight: 800, color: '#F0F0F0', lineHeight: 1 }}>5.0</span>
            <div style={{ marginTop: '4px' }}><StarRow /></div>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', color: '#444', marginTop: '3px' }}>6 reviews</span>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '48px' }} />

      {/* Cards Grid */}
      <div style={{ padding: '0 64px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {reviews.map((review, i) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            style={{
              background: active === i ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
              border: active === i ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(255,255,255,0.06)',
              borderRadius: '12px',
              padding: '28px 24px 24px',
              transition: 'all 0.3s ease',
              transform: active === i ? 'translateY(-4px)' : 'translateY(0)',
              position: 'relative',
              cursor: 'default',
            }}
          >
            {/* Quote mark */}
            <div style={{ position: 'absolute', top: '16px', right: '20px', fontFamily: 'Georgia, serif', fontSize: '52px', color: 'rgba(255,255,255,0.04)', lineHeight: 1, userSelect: 'none' }}>"</div>

            {/* Stars */}
            <div style={{ marginBottom: '16px' }}><StarRow /></div>

            {/* Review text */}
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#777', lineHeight: 1.75, marginBottom: '24px', fontStyle: 'italic' }}>
              "{review.review}"
            </p>

            {/* Bottom row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: review.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 700, color: 'white' }}>{review.initials}</span>
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 600, color: '#E0E0E0', lineHeight: 1.2 }}>{review.name}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: '#444', marginTop: '2px' }}>{review.timeAgo}</p>
                </div>
              </div>
              <GoogleG />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom row */}
      <div style={{ padding: '40px 64px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: '#333', letterSpacing: '0.5px' }}>
          Verified reviews from Google Business Profile
        </p>
        
        <a
          href="https://www.google.com/search?q=Brothers+Films+Production"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 600, color: '#666', textDecoration: 'none', padding: '10px 20px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '999px', transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.color = '#F0F0F0'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#666'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
        >
          <GoogleG />
          View on Google
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
        </a>
      </div>

    </section>
  );
}
