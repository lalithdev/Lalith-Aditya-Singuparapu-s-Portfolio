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

  const handleNavClick = (e, href) => {
    if (!href?.startsWith('#')) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const navOffset = 92;
    const top = target.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    window.history.replaceState(null, '', href);
  };

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
      {/* Backdrop — appears after scroll */}
      <div
        className="absolute inset-0 transition-opacity duration-500 glass-nav"
        style={{ opacity: scrolled ? 1 : 0 }}
      />

      <div
        className="relative max-w-[1400px] mx-auto px-6 flex items-center justify-between"
        style={{ height: scrolled ? '60px' : '80px', transition: 'height 0.4s cubic-bezier(0.76,0,0.24,1)' }}
      >
        {/* ── LalithDev Wordmark ── */}
        <a href="#hero" className="flex items-center no-underline group">
          <span
            className="font-display leading-none select-none"
            style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', letterSpacing: '-0.03em' }}
          >
            <span style={{ fontWeight: 600, color: '#ffffff' }}>Lalith</span>
            <span
              style={{
                fontWeight: 500,
                background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Dev
            </span>
          </span>
        </a>

        {/* ── Nav links + CTA ── */}
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                whileHover={{ color: '#e8f0ff' }}
                transition={{ duration: 0.15 }}
                className="font-display font-semibold text-[10px] uppercase tracking-[0.3em] no-underline"
                style={{ color: 'rgba(122,143,187,0.6)' }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(59,130,246,0.45)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="px-5 py-2 rounded-full font-display font-bold text-[10px] uppercase tracking-[0.22em] no-underline"
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 60%, #8b5cf6 100%)',
              color: '#ffffff',
              boxShadow: '0 0 20px rgba(59,130,246,0.25)',
            }}
          >
            Connect With Me
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}