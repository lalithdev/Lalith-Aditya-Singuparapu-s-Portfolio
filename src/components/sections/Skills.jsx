import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { useRef } from 'react';

const EXPO = [0.16, 1, 0.3, 1];

// Convert hex accent to rgba for glass glow usage
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function SkillCard({ cat, idx }) {
  const accent = cat.accent || '#6366f1';

  return (
    <motion.div
      key={cat.title}
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: idx * 0.06, duration: 0.7, ease: EXPO }}
      whileHover={{ y: -6, transition: { duration: 0.35, ease: EXPO } }}
      className="group relative rounded-2xl overflow-hidden"
      style={{
        // Glass morphism — no opaque background, deep diffusion
        background: `linear-gradient(135deg,
          rgba(8,12,28,0.72) 0%,
          rgba(6,10,24,0.60) 50%,
          rgba(10,14,32,0.68) 100%)`,
        backdropFilter: 'blur(28px) saturate(160%)',
        WebkitBackdropFilter: 'blur(28px) saturate(160%)',
        // Inset edge lighting — uses the card's accent colour
        boxShadow: `
          0 0 0 1px rgba(255,255,255,0.04) inset,
          0 1px 0 0 ${hexToRgba(accent, 0.18)} inset,
          0 24px 48px rgba(0,0,0,0.45),
          0 4px 12px rgba(0,0,0,0.3)
        `,
      }}
    >
      {/* Top edge accent line */}
      <div
        className="absolute top-0 left-4 right-4 h-px pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent, ${hexToRgba(accent, 0.55)}, transparent)`,
        }}
      />

      {/* Corner accent glow — top-left, very subtle */}
      <div
        className="absolute -top-10 -left-10 w-28 h-28 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, ${hexToRgba(accent, 0.16)} 0%, transparent 70%)`,
          filter: 'blur(16px)',
        }}
      />

      <div className="relative z-10 p-5">
        {/* Card header */}
        <div className="flex items-center gap-3 mb-4">
          {/* Icon container — glass pill with accent glow */}
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
            style={{
              background: `linear-gradient(135deg, ${hexToRgba(accent, 0.20)} 0%, ${hexToRgba(accent, 0.08)} 100%)`,
              boxShadow: `0 0 0 1px ${hexToRgba(accent, 0.22)} inset, 0 4px 12px ${hexToRgba(accent, 0.14)}`,
              color: accent,
            }}
          >
            {cat.icon}
          </div>

          <h3
            className="font-display font-semibold text-sm tracking-tight"
            style={{ color: '#e2e8f0' }}
          >
            {cat.title}
          </h3>
        </div>

        {/* Divider — thin accent line */}
        <div
          className="mb-4 h-px"
          style={{
            background: `linear-gradient(90deg, ${hexToRgba(accent, 0.28)}, transparent)`,
          }}
        />

        {/* Skill pills */}
        <div className="flex flex-wrap gap-1.5">
          {cat.items.map((skill) => (
            <span
              key={skill}
              className="font-body text-[0.7rem] px-2.5 py-1 rounded-lg transition-all duration-300
                         group-hover:border-opacity-30"
              style={{
                color: '#94a3b8',
                background: 'rgba(255,255,255,0.03)',
                border: `1px solid rgba(255,255,255,0.06)`,
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = accent;
                e.currentTarget.style.background = hexToRgba(accent, 0.08);
                e.currentTarget.style.border = `1px solid ${hexToRgba(accent, 0.25)}`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#94a3b8';
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)';
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { skills } = portfolioData;
  const categories = skills.categories ?? [];
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax speeds for depth layering
  const orb1Y  = useTransform(scrollYProgress, [0, 1], [-30, 50]);
  const orb2Y  = useTransform(scrollYProgress, [0, 1], [20, -40]);
  const gridY  = useTransform(scrollYProgress, [0, 1], [-10, 20]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="editorial-section relative overflow-hidden"
      style={{ backgroundColor: '#030510' }}
    >

      {/* ── DEPTH LAYER 0 — GLOBAL ATMOSPHERIC LIGHTS ── */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden
      >
        {/* Top-right: blue environmental key light */}
        <div style={{
          position: 'absolute',
          top: '-5%', right: '-10%',
          width: '70vw', height: '70vw',
          maxWidth: 900, maxHeight: 900,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, rgba(17,50,120,0.09) 45%, transparent 70%)',
          filter: 'blur(140px)',
        }} />
      </motion.div>

      <motion.div
        style={{ y: orb2Y }}
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden
      >
        {/* Bottom-left: indigo fill light */}
        <div style={{
          position: 'absolute',
          bottom: '-10%', left: '-8%',
          width: '55vw', height: '55vw',
          maxWidth: 750, maxHeight: 750,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79,70,229,0.14) 0%, rgba(20,15,80,0.07) 50%, transparent 70%)',
          filter: 'blur(130px)',
        }} />
      </motion.div>

      {/* ── DEPTH LAYER 1 — ENGINEERING GRID ── */}
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-0 pointer-events-none z-[1]"
        aria-hidden
      >
        <div style={{
          position: 'absolute',
          inset: '-5%',
          opacity: 0.022,
          backgroundImage: `
            linear-gradient(to right, rgba(99,102,241,0.8) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99,102,241,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 30%, transparent 100%)',
        }} />
      </motion.div>

      {/* ── VIGNETTE ── */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: 'radial-gradient(ellipse 110% 110% at 50% 50%, transparent 55%, rgba(0,0,0,0.5) 100%)',
        }}
        aria-hidden
      />

      {/* ── NOISE TEXTURE ── */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.025,
          mixBlendMode: 'overlay',
        }}
        aria-hidden
      />

      {/* ── CONTENT ── */}
      <div className="editorial-container relative z-10">

        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EXPO }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-5">
              <div
                className="w-10 h-px"
                style={{ background: 'linear-gradient(90deg, #6366f1, #818cf8)' }}
              />
              <span
                className="section-eyebrow"
                style={{ color: '#818cf8', letterSpacing: '0.38em' }}
              >
                Skills &amp; Expertise
              </span>
            </div>
            <h2
              className="editorial-heading editorial-heading-lg"
              style={{ color: '#f0f4f8' }}
            >
              My{' '}
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  background: 'linear-gradient(135deg, #818cf8 0%, #6366f1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Skills
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: EXPO }}
            className="lg:col-span-5 font-body text-sm md:text-base lg:text-right lg:max-w-sm lg:ml-auto"
            style={{ color: '#64748b', lineHeight: 1.7 }}
          >
            Full stack across backend systems, web interfaces, and cloud-ready deployment.
          </motion.p>
        </div>

        {/* ── SKILL CARDS GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {categories.map((cat, idx) => (
            <SkillCard key={cat.title} cat={cat} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
