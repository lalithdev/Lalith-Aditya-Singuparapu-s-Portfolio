import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Hero', href: '#hero', visible: false },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleNavClick = (e, href) => {
    if (!href?.startsWith('#')) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const navOffset = 88;
    const top = target.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    window.history.replaceState(null, '', href);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: highlight the nav link whose section is currently in view
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section that is most in view (highest intersection ratio)
        const mostVisibleEntry = entries.reduce((max, entry) => {
          return entry.intersectionRatio > (max?.intersectionRatio || 0) ? entry : max;
        }, null);

        if (mostVisibleEntry && mostVisibleEntry.isIntersecting) {
          setActiveSection(mostVisibleEntry.target.id);
        }
      },
      {
        rootMargin: '-40% 0px -40% 0px', // trigger when section is in the middle 20% of viewport
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-[100]"
    >
      <div
        className="absolute inset-0 transition-opacity duration-500 editorial-nav-bar"
        style={{ opacity: scrolled ? 0.72 : 0 }}
      />

      <div
        className="relative editorial-container max-w-[1400px] flex items-center justify-between"
        style={{ height: scrolled ? '64px' : '80px', transition: 'height 0.4s cubic-bezier(0.76,0,0.24,1)' }}
      >
        <a href="#hero" className="flex items-center no-underline group">
          <span className="font-display leading-none select-none" style={{ fontSize: 'clamp(1.05rem, 2vw, 1.3rem)', letterSpacing: '-0.03em' }}>
            <span style={{ fontWeight: 600, color: '#f5f5f5' }}>Lalith</span>
            <span className="editorial-accent-serif" style={{ fontSize: '1.05em', marginLeft: '0.12em', color: 'var(--color-accent)' }}>
              Dev
            </span>
          </span>
        </a>

        <div className="flex items-center gap-6 md:gap-10">
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.filter(link => link.visible !== false).map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  animate={{ color: isActive ? '#2447ff' : 'rgba(245,245,245,0.55)' }}
                  whileHover={{ color: '#f5f5f5' }}
                  transition={{ duration: 0.2 }}
                  className="no-underline"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: isActive ? 700 : 500,
                    fontSize: '0.72rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    position: 'relative',
                    paddingBottom: '2px',
                  }}
                >
                  {link.name}

                  {/* Animated underline indicator */}
                  <motion.span
                    layoutId="nav-underline"
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scaleX: isActive ? 1 : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    style={{
                      position: 'absolute',
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: '2px',
                      borderRadius: '2px',
                      background: 'linear-gradient(90deg, #6c63f5, #2447ff)',
                      transformOrigin: 'left',
                    }}
                  />
                </motion.a>
              );
            })}
          </div>

          <ConnectButton onClick={(e) => handleNavClick(e, '#contact')} />
        </div>
      </div>
    </motion.nav>
  );
}

function ConnectButton({ onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href="#contact"
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -2, scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.62rem 1.6rem',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: '0.7rem',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: '#fff',
        background: hovered
          ? 'linear-gradient(135deg, #7b6cf6 0%, #5b6bff 40%, #2447ff 100%)'
          : 'linear-gradient(135deg, #6c63f5 0%, #4a5cff 45%, #2447ff 100%)',
        borderRadius: '999px',
        border: 'none',
        boxShadow: hovered
          ? '0 0 0 3px rgba(108,99,245,0.22), 0 8px 32px rgba(36,71,255,0.5), 0 2px 8px rgba(0,0,0,0.25)'
          : '0 4px 18px rgba(36,71,255,0.38), 0 1px 4px rgba(0,0,0,0.18)',
        overflow: 'hidden',
        transition: 'background 0.35s ease, box-shadow 0.35s ease',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
      }}
    >
      {/* Shimmer sweep */}
      <motion.span
        initial={{ x: '-110%', skewX: '-12deg' }}
        animate={{ x: hovered ? '220%' : '-110%' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '55%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Label */}
      <span style={{ position: 'relative', zIndex: 2 }}>Connect With Me</span>
    </motion.a>
  );
}
