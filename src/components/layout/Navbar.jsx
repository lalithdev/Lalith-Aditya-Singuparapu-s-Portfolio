import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { name: 'About',          href: '#about' },
  { name: 'Projects',       href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Skills',         href: '#skills' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-[100]"
    >
      {/* Blurred backdrop — only visible after scroll */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: scrolled ? 1 : 0,
          background: 'rgba(0,0,0,0.78)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.04)',
        }}
      />

      <div
        className="relative max-w-[1400px] mx-auto px-6 flex items-center justify-between"
        style={{ height: scrolled ? '60px' : '80px', transition: 'height 0.4s cubic-bezier(0.76,0,0.24,1)' }}
      >
        {/* ── LalithDev Wordmark ─────────────────────────────────────────── */}
        <a href="#hero" className="flex items-center no-underline group">
          <span
            className="leading-none select-none"
            style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', letterSpacing: '-0.03em' }}
          >
            <span
              style={{
                fontWeight: 900,
                color: '#ffffff',
                fontFamily: 'inherit',
              }}
            >
              Lalith
            </span>
            <span
              style={{
                fontWeight: 300,
                background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #0ea5e9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Dev
            </span>
          </span>
        </a>

        {/* ── Nav links + CTA ─────────────────────────────────────────── */}
        <div className="flex items-center gap-8">
          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ color: '#ffffff' }}
                transition={{ duration: 0.15 }}
                className="font-semibold text-[10px] uppercase tracking-[0.3em] no-underline"
                style={{ color: 'rgba(161,161,170,0.5)' }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* ── CONNECT CTA — violet-tinted pill ───────────────────────── */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, filter: 'brightness(1.1)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="px-5 py-2 rounded-full font-bold text-[10px] uppercase tracking-[0.25em] no-underline"
            style={{
              background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #0ea5e9 100%)',
              color: '#ffffff',
              boxShadow: '0 0 20px rgba(236,72,153,0.3)',
            }}
          >
            Connect With Me
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}