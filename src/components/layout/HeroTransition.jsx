import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useMemo } from 'react';

/**
 * HeroTransition — Cinematic 3D perspective grid emergence
 * Hero dissolves into a digital particle field with perspective depth
 * Creates: camera moving through digital environment sensation
 */
export default function HeroTransition() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Perspective rotation and fade transforms
  const gridRotateX = useTransform(scrollYProgress, [0, 1], [88, 12]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.45, 0.85, 1]);
  const fadeOverlay = useTransform(scrollYProgress, [0, 0.35, 1], [0, 0.7, 1]);
  const depthScale = useTransform(scrollYProgress, [0, 1], [0.98, 1.02]);

  // Particle data - generate fixed particles
  const particles = useMemo(() => {
    return Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 0.5,
      opacity: Math.random() * 0.6 + 0.2,
    }));
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-transition-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        height: '420px',
        marginTop: '-8px',
        marginBottom: '-24px',
        overflow: 'hidden',
        background: '#050505',
        zIndex: 20,
        perspective: '1300px',
      }}
    >
      {/* ── BACKDROP FADE ── */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 48%, rgba(0,0,0,0.98) 100%)',
          opacity: fadeOverlay,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* ── BLUE ATMOSPHERIC GLOW ── */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 1200px 400px at 50% 80%, rgba(36,71,255,0.15) 0%, rgba(108,99,245,0.08) 40%, transparent 100%)',
          opacity: gridOpacity,
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* ── PARTICLE FIELD (Digital Dots) ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 3 }}>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [-20, 40],
              opacity: [0, particle.opacity, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(36,71,255,0.8), rgba(108,99,245,0.3))',
              boxShadow: `0 0 ${particle.size * 2}px rgba(36,71,255,0.6)`,
              pointerEvents: 'none',
            }}
          />
        ))}
      </div>

      {/* ── PERSPECTIVE GRID MESH ── */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          rotateX: gridRotateX,
          scale: depthScale,
          opacity: gridOpacity,
          transformStyle: 'preserve-3d',
          transformOrigin: 'center top',
          zIndex: 4,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '100%' }}
        >
          <defs>
            {/* Grid fade mask - appear gradually */}
            <mask id="gridMask">
              <linearGradient id="gridFade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="black" stopOpacity="0" />
                <stop offset="20%" stopColor="black" stopOpacity="1" />
                <stop offset="80%" stopColor="black" stopOpacity="1" />
                <stop offset="100%" stopColor="black" stopOpacity="0" />
              </linearGradient>
              <rect x="0" y="0" width="1440" height="600" fill="url(#gridFade)" />
            </mask>
          </defs>

          {/* Vertical grid lines */}
          {Array.from({ length: 25 }).map((_, i) => {
            const x = (i / 24) * 1440;
            const startY = 0;
            const endY = 600;
            const opacity = 0.15 + (Math.abs(12 - i) / 12) * 0.25;
            return (
              <line
                key={`v${i}`}
                x1={x}
                y1={startY}
                x2={x}
                y2={endY}
                stroke={`rgba(36,71,255,${opacity})`}
                strokeWidth="1.5"
                mask="url(#gridMask)"
              />
            );
          })}

          {/* Horizontal grid lines - with perspective distortion */}
          {Array.from({ length: 15 }).map((_, i) => {
            const y = (i / 14) * 600;
            const distortion = Math.pow(i / 14, 1.5) * 56;
            const opacity = 0.12 + (Math.abs(7 - i) / 7) * 0.22;
            return (
              <path
                key={`h${i}`}
                d={`M 0 ${y} Q 720 ${y - distortion} 1440 ${y}`}
                fill="none"
                stroke={`rgba(108,99,245,${opacity})`}
                strokeWidth="1.4"
                mask="url(#gridMask)"
              />
            );
          })}

          {/* Glowing intersection points */}
          {Array.from({ length: 20 }).map((_, i) => {
            const x = (Math.random() * 0.8 + 0.1) * 1440;
            const y = (Math.random() * 0.6 + 0.2) * 600;
            const glowSize = Math.random() * 3 + 2;
            return (
              <circle
                key={`dot${i}`}
                cx={x}
                cy={y}
                r={glowSize}
                fill={`rgba(36,71,255,${Math.random() * 0.5 + 0.3})`}
                opacity="0.6"
                mask="url(#gridMask)"
              />
            );
          })}
        </svg>
      </motion.div>

      {/* ── LIGHT DIFFUSION BLOOM ── */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(36,71,255,0.14) 0%, transparent 68%)',
          filter: 'blur(70px)',
          opacity: gridOpacity,
          zIndex: 5,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
