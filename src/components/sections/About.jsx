import React, { useState, useRef, useEffect } from 'react';
import FadeIn from '../common/FadeIn';
import AnimatedText from '../common/AnimatedText';
import Magnetic from '../common/Magnetic';
import { portfolioData } from '../../data/portfolio';
import {
  FiFile, FiEye, FiDownload, FiX, FiMinus, FiPlus
} from 'react-icons/fi';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import resumePdf from '../../assets/resume/Lalith_Resume_26_05_2026.pdf';

/* ─────────────────────────────────────────
   RESUME POPUP  (image-2 style card)
───────────────────────────────────────── */
const ResumePopup = ({ onView, layoutId }) => (
  <motion.div
    layoutId={layoutId}
    initial={{ opacity: 0, scale: 0.9, y: 15 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    style={{
      position: 'absolute',
      width: 250,
      background: 'linear-gradient(160deg, rgba(18, 22, 38, 0.65) 0%, rgba(10, 14, 28, 0.85) 100%)',
      backdropFilter: 'blur(32px) saturate(140%)',
      WebkitBackdropFilter: 'blur(32px) saturate(140%)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderTop: '1px solid rgba(255, 255, 255, 0.15)',
      borderRadius: 16,
      boxShadow:
        'inset 0 1px 1px rgba(255, 255, 255, 0.15),' +
        '0 24px 64px rgba(0, 0, 0, 0.8),' +
        '0 0 30px rgba(99, 102, 241, 0.15)',
      overflow: 'hidden',
      zIndex: 200,
    }}
  >
    {/* Ambient Glow */}
    <div style={{
      position: 'absolute',
      top: -20, left: -20, right: -20, height: 80,
      background: 'radial-gradient(ellipse at top, rgba(99,102,241,0.15), transparent 70%)',
      pointerEvents: 'none'
    }} />

    {/* iOS Window Controls */}
    <div style={{ display: 'flex', gap: 7, padding: '14px 16px 0', position: 'relative' }}>
      <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ff5f56', boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3)' }} />
      <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ffbd2e', boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3)' }} />
      <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#27c93f', boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3)' }} />
    </div>

    {/* Name + doc icon row */}
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 16px 12px',
      position: 'relative'
    }}>
      <div>
        <motion.div
          layoutId="resume-text-morph"
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: '0.92rem',
            letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.15,
            whiteSpace: 'nowrap',
          }}
        >
          Lalith Aditya
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: '0.52rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#818cf8',
            marginTop: 6,
            whiteSpace: 'nowrap',
          }}
        >
          AI Full Stack Developer
        </motion.div>
      </div>

      {/* Doc icon */}
      <motion.div
        layoutId="resume-icon-morph"
        style={{
          width: 38, height: 38, borderRadius: 12, flexShrink: 0,
          background: 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.1) 100%)',
          border: '1px solid rgba(129,140,248,0.3)',
          boxShadow: '0 4px 15px rgba(99,102,241,0.2), inset 0 2px 4px rgba(255,255,255,0.1)',
          color: '#a5b4fc',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <FiFile size={18} style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }} />
      </motion.div>
    </div>

    {/* Separator */}
    <div style={{
      height: 1,
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
      margin: '4px 16px',
    }} />

    {/* View + Download row */}
    <div style={{ display: 'flex', gap: 10, padding: '12px 16px 16px', position: 'relative' }}>
      {/* View */}
      <button
        onClick={onView}
        style={{
          flex: 1,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          padding: '10px 0',
          borderRadius: 10,
          background: 'linear-gradient(135deg, rgba(79,70,229,0.25) 0%, rgba(124,58,237,0.2) 100%)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(129,140,248,0.3)',
          boxShadow: '0 4px 15px rgba(79,70,229,0.2), inset 0 1px 1px rgba(255,255,255,0.1)',
          color: '#ffffff',
          fontFamily: 'Syne, sans-serif',
          fontWeight: 700,
          fontSize: '0.75rem',
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(79,70,229,0.4), inset 0 1px 1px rgba(255,255,255,0.2)';
          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(79,70,229,0.35) 0%, rgba(124,58,237,0.3) 100%)';
          e.currentTarget.style.borderColor = 'rgba(129,140,248,0.5)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'none';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(79,70,229,0.2), inset 0 1px 1px rgba(255,255,255,0.1)';
          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(79,70,229,0.25) 0%, rgba(124,58,237,0.2) 100%)';
          e.currentTarget.style.borderColor = 'rgba(129,140,248,0.3)';
        }}
      >
        <FiEye size={14} style={{ strokeWidth: 2.5 }} />
        View
      </button>

      {/* Download */}
      <a
        href={resumePdf}
        download="Lalith_Aditya_Resume.pdf"
        title="Download PDF"
        style={{
          flex: 1,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          padding: '10px 0',
          borderRadius: 10,
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          color: '#e2e8f0',
          fontFamily: 'Syne, sans-serif',
          fontWeight: 700,
          fontSize: '0.75rem',
          textDecoration: 'none',
          transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
          e.currentTarget.style.transform = 'none';
        }}
      >
        <FiDownload size={14} style={{ strokeWidth: 2.5 }} />
        Download
      </a>
    </div>
  </motion.div>
);

/* ─────────────────────────────────────────
   RESUME VIEWER  (image-1 style full modal)
───────────────────────────────────────── */
const ResumeViewer = ({ isOpen, onClose }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const handleClose = () => {
    setIsFullscreen(false);
    setZoomLevel(1);
    onClose();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
  <AnimatePresence>
    {isOpen && (
      <>
        {/* Backdrop - Opacity reduced to 0.45 to allow blur to show */}
        <motion.div
          key="rv-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24 }}
          onClick={handleClose}
          style={{
            position: 'fixed', inset: 0, zIndex: 9998,
            background: 'rgba(2,4,10,0.45)', // Changed from 0.88 for glass effect
            backdropFilter: 'blur(12px)', // Adjusted blur strength
            WebkitBackdropFilter: 'blur(12px)',
          }}
        />

        {/* Panel Wrapper */}
        <motion.div
          key="rv-panel-wrapper"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          onClick={handleClose}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '24px',
          }}
        >
          <motion.div 
            layoutId="resume-morph"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            style={{
            position: 'relative',
            width: '100%',
            maxWidth: isFullscreen ? '100%' : `${920 * zoomLevel}px`,
            height: isFullscreen ? '100vh' : `min(${90 * Math.max(0.5, zoomLevel)}vh, ${880 * zoomLevel}px)`,
            display: 'flex',
            flexDirection: 'column',
            background: 'linear-gradient(160deg, rgba(18, 22, 38, 0.65) 0%, rgba(10, 14, 28, 0.85) 100%)',
            backdropFilter: 'blur(32px) saturate(140%)',
            WebkitBackdropFilter: 'blur(32px) saturate(140%)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: isFullscreen ? '0px' : '16px',
            boxShadow:
              'inset 0 1px 1px rgba(255, 255, 255, 0.15),' +
              '0 24px 64px rgba(0, 0, 0, 0.8),' +
              '0 0 30px rgba(99, 102, 241, 0.15)',
            overflow: 'hidden',
          }}>
            {/* ── Header ── */}
            <div style={{
              position: 'relative',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '8px 18px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)',
              flexShrink: 0,
            }}>
              {/* Left: iOS Window Controls */}
              <div 
                style={{ position: 'absolute', left: 18, display: 'flex', gap: 8 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div 
                  onClick={handleClose}
                  style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ff5f56', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#660000' }} 
                >
                  {isHovered && <FiX size={8} />}
                </div>
                <div 
                  onClick={() => {
                    if (isFullscreen) {
                      setIsFullscreen(false);
                      setZoomLevel(1);
                    } else {
                      setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
                    }
                  }}
                  style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ffbd2e', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#885500' }} 
                >
                  {isHovered && <FiMinus size={8} />}
                </div>
                <div 
                  onClick={() => {
                    if (zoomLevel < 1 && !isFullscreen) {
                      setZoomLevel(prev => Math.min(prev + 0.25, 1));
                    } else {
                      setIsFullscreen(!isFullscreen);
                      setZoomLevel(1);
                    }
                  }}
                  style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#27c93f', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#004400' }} 
                >
                  {isHovered && <FiPlus size={8} />}
                </div>
              </div>

              {/* Middle: Title */}
              <div className="flex items-center justify-center gap-3">
                <FiFile size={22} color="#8b5cf6" style={{ strokeWidth: 2 }} />
                <span className="font-display font-bold text-2xl text-white leading-tight tracking-tight">
                  Resume
                </span>
              </div>

              {/* Right: download btn */}
              <div style={{ position: 'absolute', right: 18, display: 'flex', alignItems: 'center' }}>
                <a
                  href={resumePdf}
                  download="Lalith_Aditya_Resume.pdf"
                  title="Download"
                  style={{
                    width: 34, height: 34, borderRadius: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
                    color: '#e2e8f0',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.3)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <FiDownload size={14} />
                </a>
              </div>
            </div>

            {/* ── PDF viewer — edge-to-edge ── */}
            <div style={{ flex: 1, minHeight: 0, background: 'transparent', overflow: 'hidden' }}>
              <iframe
                src={`${resumePdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                title="Lalith Aditya Resume"
                style={{ width: 'calc(100% + 18px)', height: '100%', border: 'none', display: 'block' }}
              />
            </div>
          </motion.div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
  );
};

/* ─────────────────────────────────────────
   ABOUT SECTION
───────────────────────────────────────── */
const About = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);
  const closeTimer = useRef(null);

  const { about } = portfolioData;
  const ABOUT_TEXT = about.description;

  const openPopup = () => {
    clearTimeout(closeTimer.current);
    setPopupOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setPopupOpen(false), 160);
  };
  const handleView = () => {
    setPopupOpen(false);
    setViewerOpen(true);
  };

  return (
    <LayoutGroup>
      <ResumeViewer isOpen={viewerOpen} onClose={() => setViewerOpen(false)} />

      <section
        id="about"
        className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5 sm:px-8 md:px-10 py-20"
        style={{ backgroundColor: '#020408' }}
      >
        {/* ── Corner decorative images ── */}
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}
          className="pointer-events-none absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[60px] sm:w-[160px] md:w-[210px]">
          <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="" className="w-full h-auto" loading="lazy" draggable={false} />
        </FadeIn>
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}
          className="pointer-events-none absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[55px] sm:w-[140px] md:w-[180px]">
          <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="" className="w-full h-auto" loading="lazy" draggable={false} />
        </FadeIn>
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}
          className="pointer-events-none absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[60px] sm:w-[160px] md:w-[210px]">
          <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="" className="w-full h-auto" loading="lazy" draggable={false} />
        </FadeIn>
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}
          className="pointer-events-none absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[65px] sm:w-[170px] md:w-[220px]">
          <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="" className="w-full h-auto" loading="lazy" draggable={false} />
        </FadeIn>

        {/* ── Center content ── */}
        <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{
              opacity: 0,
              y: 120,
              scale: 0.85,
              filter: 'blur(10px)',
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
            }}
            viewport={{
              once: false,
              amount: 0.4,
            }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2
              className="font-display font-black tracking-tighter leading-[0.88] uppercase"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 9rem)', color: '#e8f0ff' }}
            >
              ABOUT <span className="text-gradient">ME.</span>
            </h2>
          </motion.div>

          <div className="flex flex-col items-center gap-14 sm:gap-16 md:gap-20 w-full">
            <div className="flex flex-col items-center gap-8">
              <AnimatedText
                text={ABOUT_TEXT}
                className="font-medium leading-relaxed text-[#D7E2EA] max-w-[680px]"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
              />

              <FadeIn delay={0.15}>
                <div className="flex items-center justify-center">
                  {/* ── Resume button + popup ── */}
                  <div
                    style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: 160, height: 48 }}
                    onMouseEnter={openPopup}
                    onMouseLeave={scheduleClose}
                  >
                    <AnimatePresence mode="wait">
                      {popupOpen ? (
                        <ResumePopup key="resume-popup" onView={handleView} layoutId="resume-morph" />
                      ) : viewerOpen ? null : (
                        <motion.button
                          key="resume-btn"
                          layoutId="resume-morph"
                          onClick={() => setPopupOpen(v => !v)}
                          whileTap={{ scale: 0.95 }}
                          style={{
                            display: 'inline-flex', alignItems: 'center', gap: 10,
                            padding: '0 28px',
                            height: 48,
                            borderRadius: 999,
                            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.18) 0%, rgba(168, 85, 247, 0.12) 100%)',
                            border: '1px solid rgba(99, 102, 241, 0.35)',
                            boxShadow: '0 0 20px rgba(99, 102, 241, 0.15), 0 4px 12px rgba(0, 0, 0, 0.3)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            color: '#cbd5e1',
                            cursor: 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                            zIndex: 10,
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(99, 102, 241, 0.28) 0%, rgba(168, 85, 247, 0.22) 100%)';
                            e.currentTarget.style.border = '1px solid rgba(129, 140, 248, 0.7)';
                            e.currentTarget.style.boxShadow = '0 0 30px rgba(99, 102, 241, 0.45), 0 10px 24px rgba(99, 102, 241, 0.2)';
                            e.currentTarget.style.color = '#ffffff';
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(99, 102, 241, 0.18) 0%, rgba(168, 85, 247, 0.12) 100%)';
                            e.currentTarget.style.border = '1px solid rgba(99, 102, 241, 0.35)';
                            e.currentTarget.style.boxShadow = '0 0 20px rgba(99, 102, 241, 0.15), 0 4px 12px rgba(0, 0, 0, 0.3)';
                            e.currentTarget.style.color = '#cbd5e1';
                          }}
                        >
                          <motion.div layoutId="resume-icon-morph" style={{ display: 'flex' }}>
                            <FiFile size={15} style={{ color: '#a5b4fc' }} />
                          </motion.div>
                          <motion.span
                            layoutId="resume-text-morph"
                            style={{
                              fontFamily: 'Syne, sans-serif',
                              fontWeight: 700,
                              fontSize: '0.82rem',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                            }}
                          >
                            Resume
                          </motion.span>
                        </motion.button>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </LayoutGroup>
  );
};

export default About;