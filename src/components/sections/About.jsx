import React, { useState, useRef } from 'react';
import FadeIn from '../common/FadeIn';
import AnimatedText from '../common/AnimatedText';
import Magnetic from '../common/Magnetic';
import { portfolioData } from '../../data/portfolio';
import {
  FiFile, FiEye, FiDownload, FiX,
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import resumePdf from '../../assets/resume/Lalith_Resume_26_05_2026.pdf';

/* ─────────────────────────────────────────
   RESUME POPUP  (image-2 style card)
───────────────────────────────────────── */
const ResumePopup = ({ onView }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.88, y: 10 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.88, y: 10 }}
    transition={{ type: 'spring', stiffness: 380, damping: 26, mass: 0.8 }}
    style={{
      position: 'absolute',
      bottom: 'calc(100% + 14px)',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 230,
      background: 'linear-gradient(160deg, rgba(8,13,30,0.85) 0%, rgba(5,9,22,0.90) 100%)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      border: '1px solid rgba(99,102,241,0.24)',
      borderRadius: 12, // Matched to social buttons
      boxShadow:
        '0 0 0 1px rgba(99,102,241,0.07) inset,' +
        '0 20px 60px rgba(0,0,0,0.80),' +
        '0 0 50px rgba(79,70,229,0.14)',
      overflow: 'hidden',
      zIndex: 200,
    }}
  >
    {/* Name + doc icon row */}
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: '14px 14px 10px',
    }}>
      <div>
        <div style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 800,
          fontSize: '1.0rem',
          color: '#eef2ff',
          lineHeight: 1.15,
        }}>
          Lalith Aditya
        </div>
        <div style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 600,
          fontSize: '0.58rem',
          letterSpacing: '0.13em',
          textTransform: 'uppercase',
          color: '#6366f1',
          marginTop: 5,
        }}>
          AI Full Stack Developer
        </div>
      </div>

      {/* Doc icon button */}
      <button style={{
        width: 34, height: 34, borderRadius: 10, flexShrink: 0,
        background: 'rgba(99,102,241,0.15)',
        border: '1px solid rgba(99,102,241,0.25)',
        color: '#818cf8',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'default',
      }}>
        <FiFile size={15} />
      </button>
    </div>

    {/* Separator */}
    <div style={{
      height: 1,
      background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.18), transparent)',
      margin: '0 10px',
    }} />

    {/* View Resume + Download row */}
    <div style={{ display: 'flex', gap: 8, padding: '10px 12px 14px' }}>
      {/* View Resume */}
      <button
        onClick={onView}
        style={{
          flex: 1,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
          padding: '9px 0',
          borderRadius: 8,
          background: 'rgba(10,16,38,0.85)',
          border: '1px solid rgba(99,102,241,0.20)',
          color: '#94a3b8',
          fontFamily: 'Syne, sans-serif',
          fontWeight: 600,
          fontSize: '0.72rem',
          cursor: 'pointer',
          transition: 'all 0.18s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'rgba(99,102,241,0.18)';
          e.currentTarget.style.borderColor = 'rgba(99,102,241,0.40)';
          e.currentTarget.style.color = '#c7d2fe';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'rgba(10,16,38,0.85)';
          e.currentTarget.style.borderColor = 'rgba(99,102,241,0.20)';
          e.currentTarget.style.color = '#94a3b8';
        }}
      >
        <FiEye size={13} />
        View Resume
      </button>

      {/* Download icon */}
      <a
        href={resumePdf}
        download="Lalith_Aditya_Resume.pdf"
        style={{
          width: 38,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: 8,
          background: 'rgba(10,16,38,0.85)',
          border: '1px solid rgba(99,102,241,0.20)',
          color: '#94a3b8',
          textDecoration: 'none',
          transition: 'all 0.18s ease',
          flexShrink: 0,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'rgba(99,102,241,0.18)';
          e.currentTarget.style.borderColor = 'rgba(99,102,241,0.40)';
          e.currentTarget.style.color = '#c7d2fe';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'rgba(10,16,38,0.85)';
          e.currentTarget.style.borderColor = 'rgba(99,102,241,0.20)';
          e.currentTarget.style.color = '#94a3b8';
        }}
      >
        <FiDownload size={14} />
      </a>
    </div>
  </motion.div>
);

/* ─────────────────────────────────────────
   RESUME VIEWER  (image-1 style full modal)
───────────────────────────────────────── */
const ResumeViewer = ({ isOpen, onClose }) => (
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
          onClick={onClose}
          style={{
            position: 'fixed', inset: 0, zIndex: 9998,
            background: 'rgba(2,4,10,0.45)', // Changed from 0.88 for glass effect
            backdropFilter: 'blur(12px)', // Adjusted blur strength
            WebkitBackdropFilter: 'blur(12px)',
          }}
        />

        {/* Panel */}
        <motion.div
          key="rv-panel"
          initial={{ opacity: 0, scale: 0.93, y: 36 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 36 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28, mass: 0.9 }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '24px',
          }}
        >
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '920px',
            height: 'min(90vh, 880px)',
            display: 'flex',
            flexDirection: 'column',
            background: 'linear-gradient(160deg, rgba(7,12,28,0.55) 0%, rgba(4,8,20,0.65) 100%)', // Increased transparency
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(99,102,241,0.22)',
            borderRadius: '12px', // Changed from 18px to match social buttons
            boxShadow:
              '0 0 0 1px rgba(99,102,241,0.08) inset,' +
              '0 56px 160px rgba(0,0,0,0.92),' +
              '0 0 120px rgba(79,70,229,0.16)',
            overflow: 'hidden',
          }}>
            {/* ── Header ── */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '13px 18px',
              borderBottom: '1px solid rgba(99,102,241,0.13)',
              background: 'linear-gradient(90deg, rgba(99,102,241,0.06) 0%, rgba(79,70,229,0.03) 100%)',
              flexShrink: 0,
            }}>
              {/* Left: icon + title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.30) 0%, rgba(79,70,229,0.18) 100%)',
                  border: '1px solid rgba(99,102,241,0.32)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <FiFile size={14} color="#818cf8" />
                </div>
                <div>
                  <div style={{
                    fontFamily: 'Syne, sans-serif', fontWeight: 600,
                    fontSize: '0.84rem', color: '#e2e8f0', lineHeight: 1.2,
                  }}>
                    Lalith Aditya — Resume
                  </div>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace', fontSize: '0.57rem',
                    letterSpacing: '0.28em', textTransform: 'uppercase', color: '#3a4568', marginTop: 2,
                  }}>
                    PDF Document · 2026
                  </div>
                </div>
              </div>

              {/* Right: download + close */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <a
                  href={resumePdf}
                  download="Lalith_Aditya_Resume.pdf"
                  title="Download"
                  style={{
                    width: 34, height: 34, borderRadius: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(99,102,241,0.11)',
                    border: '1px solid rgba(99,102,241,0.22)',
                    color: '#818cf8',
                    textDecoration: 'none',
                    transition: 'all 0.18s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(99,102,241,0.24)';
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.44)';
                    e.currentTarget.style.color = '#a5b4fc';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(99,102,241,0.11)';
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.22)';
                    e.currentTarget.style.color = '#818cf8';
                  }}
                >
                  <FiDownload size={14} />
                </a>

                <button
                  onClick={onClose}
                  title="Close"
                  style={{
                    width: 34, height: 34, borderRadius: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    color: '#48556e',
                    cursor: 'pointer',
                    transition: 'all 0.18s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(239,68,68,0.14)';
                    e.currentTarget.style.borderColor = 'rgba(239,68,68,0.34)';
                    e.currentTarget.style.color = '#f87171';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)';
                    e.currentTarget.style.color = '#48556e';
                  }}
                >
                  <FiX size={14} />
                </button>
              </div>
            </div>

            {/* ── PDF viewer — edge-to-edge ── */}
            <div style={{ flex: 1, minHeight: 0, background: 'rgba(14,18,32,0.8)', overflow: 'hidden' }}>
              <iframe
                src={`${resumePdf}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                title="Lalith Aditya Resume"
                style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
              />
            </div>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

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
    <>
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
          <FadeIn delay={0} y={40}>
            <h2
              className="font-display font-black tracking-tighter leading-[0.88] uppercase"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 9rem)', color: '#e8f0ff' }}
            >
              ABOUT <span className="text-gradient">ME.</span>
            </h2>
          </FadeIn>

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
                    style={{ position: 'relative', display: 'inline-block' }}
                    onMouseEnter={openPopup}
                    onMouseLeave={scheduleClose}
                  >
                    {/* Popup card (Image 2 style) */}
                    <AnimatePresence>
                      {popupOpen && (
                        <div
                          onMouseEnter={openPopup}
                          onMouseLeave={scheduleClose}
                        >
                          <ResumePopup onView={handleView} />
                        </div>
                      )}
                    </AnimatePresence>

                    {/* Resume pill button */}
                    <Magnetic>
                      <motion.button
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
                        <FiFile size={15} style={{ color: '#a5b4fc' }} />
                        <span style={{
                          fontFamily: 'Syne, sans-serif',
                          fontWeight: 700,
                          fontSize: '0.82rem',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                        }}>
                          Resume
                        </span>
                      </motion.button>
                    </Magnetic>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;