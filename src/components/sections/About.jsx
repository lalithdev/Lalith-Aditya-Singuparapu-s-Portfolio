import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { FiArrowRight, FiShield, FiTrendingUp, FiSettings, FiGithub, FiLinkedin, FiFileText, FiDownload, FiMaximize2, FiX, FiEye, FiMail } from 'react-icons/fi';
import { useRef, useState, useEffect } from 'react';
import Magnetic from '../common/Magnetic';
import resumePdf from '../../assets/resume/Lalith_Resume 17-05-2026.pdf';

const EXPO = [0.16, 1, 0.3, 1];

// ── Floating particle component ──
function Particle({ x, y, size, duration, delay }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: 'radial-gradient(circle, rgba(99,102,241,0.55) 0%, transparent 70%)',
        filter: 'blur(1px)',
      }}
      animate={{
        y: [0, -38, 0],
        opacity: [0.04, 0.12, 0.04],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

const PARTICLES = [
  { x: 8,  y: 15, size: 4,  duration: 9,  delay: 0   },
  { x: 22, y: 40, size: 3,  duration: 12, delay: 1.5 },
  { x: 38, y: 70, size: 5,  duration: 8,  delay: 0.8 },
  { x: 55, y: 25, size: 3,  duration: 14, delay: 2.2 },
  { x: 68, y: 55, size: 4,  duration: 10, delay: 0.3 },
  { x: 80, y: 10, size: 3,  duration: 11, delay: 1.8 },
  { x: 92, y: 78, size: 5,  duration: 7,  delay: 0.6 },
  { x: 15, y: 85, size: 3,  duration: 13, delay: 3.1 },
  { x: 47, y: 90, size: 4,  duration: 9,  delay: 1.2 },
  { x: 75, y: 35, size: 3,  duration: 15, delay: 2.7 },
  { x: 30, y: 60, size: 2,  duration: 11, delay: 0.4 },
  { x: 62, y: 80, size: 3,  duration: 8,  delay: 2.0 },
];

export default function About() {
  const { about, personal } = portfolioData;
  const containerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isModalOpen]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // ── Parallax depth layers — different speeds create true 3D depth ──
  const bgOrbY     = useTransform(scrollYProgress, [0, 1], [-40, 60]);   // 0.2x — slowest
  const gridY      = useTransform(scrollYProgress, [0, 1], [-20, 30]);   // 0.4x — mid
  const ghostY     = useTransform(scrollYProgress, [0, 1], [-10, 18]);   // 0.6x — ghost word
  const fogOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);    // fog fades as section emerges

  const quickPoints = [
    { text: 'I enjoy building useful products from simple ideas.', icon: <FiTrendingUp /> },
    { text: 'I focus on clean code, clarity, and consistency.',   icon: <FiShield /> },
    { text: 'I improve by shipping, debugging, and iterating.',   icon: <FiSettings /> },
  ];

  const currentlyDoing = [
    'Exploring AI in Natural Language Processing.',
    'Building a Patient Appointment System with a focus on usability and reliability.',
    'Developing CertifyMe as a production-ready Enterprise application.',
    'Strengthening my full stack development skills through continuous hands-on practice.',
  ];

  return (
    <section
      ref={containerRef}
      id="about"
      className="editorial-section relative overflow-hidden"
      style={{
        // Cinematic midnight — no pure black, deep scene colour
        backgroundColor: '#020408',
        perspective: '1400px',
      }}
    >

      {/* ══════════════════════════════════════════════════
          DEPTH LAYER 0 — GLOBAL ATMOSPHERIC BACKGROUND
          Huge, blurred environmental lighting that spans
          the entire scene (not local UI glows)
      ══════════════════════════════════════════════════ */}
      <motion.div
        style={{ y: bgOrbY }}
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden
      >
        {/* Giant blue orb — top-right, environmental key light */}
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-5%',
            width: '80vw',
            height: '80vw',
            maxWidth: 1100,
            maxHeight: 1100,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(79,70,229,0.22) 0%, rgba(29,78,216,0.12) 40%, transparent 70%)',
            filter: 'blur(160px)',
            opacity: 0.85,
          }}
        />
        {/* Deep indigo orb — bottom-left, fill light */}
        <div
          style={{
            position: 'absolute',
            bottom: '-8%',
            left: '-8%',
            width: '60vw',
            height: '60vw',
            maxWidth: 800,
            maxHeight: 800,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(17,24,84,0.10) 50%, transparent 70%)',
            filter: 'blur(140px)',
            opacity: 0.7,
          }}
        />
        {/* Midnight accent — centre atmosphere */}
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '20%',
            width: '55vw',
            height: '45vw',
            maxWidth: 750,
            maxHeight: 600,
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(30,41,83,0.28) 0%, transparent 70%)',
            filter: 'blur(120px)',
          }}
        />
      </motion.div>

      {/* ══════════════════════════════════════════════════
          DEPTH LAYER 1 — ENGINEERING GRID (midground)
          Moves at 0.4x — creates depth separation
      ══════════════════════════════════════════════════ */}
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-0 pointer-events-none z-[1]"
        aria-hidden
      >
        <div
          style={{
            position: 'absolute',
            inset: '-10%',
            opacity: 0.028,
            backgroundImage: `
              linear-gradient(to right, rgba(99,102,241,0.6) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99,102,241,0.6) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
          }}
        />
      </motion.div>

      {/* ══════════════════════════════════════════════════
          DEPTH LAYER 2 — GHOST TYPOGRAPHY (parallax)
          Massive background word — moves at 0.6x
      ══════════════════════════════════════════════════ */}
      <motion.div
        style={{ y: ghostY }}
        className="absolute inset-0 pointer-events-none z-[2] flex items-center justify-center overflow-hidden"
        aria-hidden
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(12rem, 28vw, 22rem)',
            fontWeight: 800,
            letterSpacing: '-0.06em',
            lineHeight: 1,
            color: 'transparent',
            WebkitTextStroke: '1px rgba(99,102,241,0.09)',
            userSelect: 'none',
            filter: 'blur(0.8px)',
            whiteSpace: 'nowrap',
          }}
        >
          ENGINEER
        </span>
      </motion.div>

      {/* ══════════════════════════════════════════════════
          FLOATING PARTICLES — soft, barely visible dust
      ══════════════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none z-[3]" aria-hidden>
        {PARTICLES.map((p, i) => <Particle key={i} {...p} />)}
      </div>

      {/* ══════════════════════════════════════════════════
          CINEMATIC FOG BRIDGE — top of section
          Fades out as user scrolls into the scene
      ══════════════════════════════════════════════════ */}
      <motion.div
        style={{ opacity: fogOpacity }}
        className="absolute top-0 left-0 w-full pointer-events-none z-[4]"
        aria-hidden
      >
        <div
          style={{
            height: '35%',
            background: 'linear-gradient(to bottom, #020408 0%, rgba(2,4,14,0.82) 50%, transparent 100%)',
          }}
        />
      </motion.div>

      {/* ══════════════════════════════════════════════════
          CINEMATIC VIGNETTE — edge darkening, immersion
      ══════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, rgba(0,0,0,0.55) 100%)',
        }}
        aria-hidden
      />

      {/* ══════════════════════════════════════════════════
          NOISE TEXTURE — cinematic film grain
      ══════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.03,
          mixBlendMode: 'overlay',
        }}
        aria-hidden
      />

      {/* ══════════════════════════════════════════════════
          FOREGROUND — ACTUAL CONTENT (z-10+)
      ══════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 70, rotateX: 8, scale: 0.988 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 1.1, ease: EXPO }}
        className="editorial-container max-w-[1400px] relative z-10 w-full"
        style={{ transformStyle: 'preserve-3d' }}
      >

        {/* Section eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EXPO }}
          className="flex items-center gap-3 mb-8 lg:mb-10"
        >
          <div
            className="w-10 h-px"
            style={{ background: 'linear-gradient(90deg, #6366f1, #818cf8)' }}
          />
          <span
            className="section-eyebrow"
            style={{ color: '#818cf8', letterSpacing: '0.38em' }}
          >
            About Me
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* ── RIGHT: Quick snapshot ── */}
          <div className="lg:col-span-5 space-y-8 lg:space-y-10 order-1 lg:order-2">

            <div className="space-y-6">
              <span
                className="font-mono text-[10px] uppercase tracking-[0.4em]"
                style={{ color: '#64748b' }}
              >
                Personal Profile
              </span>

              <div className="space-y-5">
                {quickPoints.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -40, rotateX: 15, scale: 0.96 }}
                    whileInView={{ opacity: 1, x: 0, rotateX: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + idx * 0.15, ease: EXPO, duration: 1 }}
                    className="flex items-center gap-5 group"
                  >
                    {/* Icon — glass diffusion, no hard border */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: 'linear-gradient(135deg, rgba(99,102,241,0.18) 0%, rgba(79,70,229,0.08) 100%)',
                        boxShadow: '0 0 0 1px rgba(99,102,241,0.14) inset, 0 8px 24px rgba(79,70,229,0.12)',
                        backdropFilter: 'blur(16px)',
                        color: '#818cf8',
                      }}
                    >
                      {item.icon}
                    </div>
                    <span
                      className="font-display font-bold text-lg lg:text-xl tracking-tight"
                      style={{ color: '#e2e8f0' }}
                    >
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Currently — glass diffusion container, no hard rectangle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, ease: EXPO, duration: 0.9 }}
            >
              <div
                className="rounded-2xl p-5"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.012) 100%)',
                  backdropFilter: 'blur(30px)',
                  WebkitBackdropFilter: 'blur(30px)',
                  boxShadow: '0 0 0 1px rgba(99,102,241,0.10) inset, 0 20px 60px rgba(0,0,0,0.25)',
                }}
              >
                <span
                  className="font-mono text-[9px] uppercase tracking-[0.38em] block mb-4"
                  style={{ color: '#818cf8' }}
                >
                  Currently
                </span>
                <ul className="space-y-3 m-0 pl-5">
                  {currentlyDoing.map((item, idx) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.35 + idx * 0.12, ease: EXPO, duration: 0.85 }}
                      className="font-body text-sm leading-relaxed"
                      style={{ color: '#94a3b8' }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* ── LEFT: Narrative ── */}
          <div className="lg:col-span-7 space-y-7 lg:space-y-8 order-2 lg:order-1">

            <motion.h2
              initial={{ opacity: 0, y: 40, rotateX: 18, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 1.1, ease: EXPO }}
              className="font-display font-black tracking-tighter leading-[0.92]"
              style={{ fontSize: 'clamp(2.3rem, 5vw, 4.4rem)', color: '#f0f4f8' }}
            >
              Learning, Building,
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #818cf8 0%, #6366f1 50%, #4f46e5 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                and Growing Daily
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1, ease: EXPO }}
              className="space-y-6"
            >
              <p
                className="font-body leading-relaxed max-w-2xl"
                style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#94a3b8' }}
              >
                {about.description.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.008, duration: 0.1 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </p>

              <div className="pt-6 flex flex-wrap items-center gap-6">

                {/* ── Social links ── */}
                <div className="flex items-center gap-4 pr-6 relative"
                     style={{ borderRight: '1px solid rgba(99,102,241,0.15)' }}>

                  {/* Resume popover */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, ease: EXPO, duration: 0.8 }}
                    className="relative"
                    onMouseEnter={() => setIsPopoverOpen(true)}
                    onMouseLeave={() => setIsPopoverOpen(false)}
                    onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                  >
                    <Magnetic>
                      <div
                        className="p-2.5 rounded-xl cursor-pointer flex items-center gap-2 transition-all duration-300 hover:-translate-y-1"
                        style={{
                          background: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(79,70,229,0.08) 100%)',
                          boxShadow: '0 0 0 1px rgba(99,102,241,0.15) inset',
                          backdropFilter: 'blur(20px)',
                          color: '#818cf8',
                        }}
                      >
                        <FiFileText className="w-5 h-5" />
                        <span className="text-sm font-medium pr-1 font-display tracking-wide">Resume</span>
                      </div>
                    </Magnetic>

                    <AnimatePresence>
                      {isPopoverOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute bottom-full left-0 mb-4 w-72 p-5 rounded-2xl z-50 shadow-2xl cursor-default"
                          style={{
                            background: 'rgba(11,16,32,0.96)',
                            boxShadow: '0 0 0 1px rgba(99,102,241,0.18) inset, 0 24px 80px rgba(0,0,0,0.6)',
                            backdropFilter: 'blur(24px)',
                            transformOrigin: 'bottom left',
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="flex items-center justify-between mb-5">
                            <div>
                              <h3 className="font-display font-bold text-lg text-white">Lalith Aditya</h3>
                              <p className="font-mono text-[10px] uppercase tracking-wider mt-0.5" style={{ color: '#818cf8' }}>
                                AI Full Stack Developer
                              </p>
                            </div>
                            <div
                              className="w-10 h-10 rounded-full flex items-center justify-center"
                              style={{ background: 'rgba(99,102,241,0.12)', color: '#818cf8' }}
                            >
                              <FiFileText className="w-4 h-4" />
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={(e) => { e.stopPropagation(); setIsPopoverOpen(false); setIsModalOpen(true); }}
                              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-medium text-sm transition-colors hover:bg-indigo-500/20"
                              style={{
                                background: 'rgba(99,102,241,0.12)',
                                color: '#a5b4fc',
                                boxShadow: '0 0 0 1px rgba(99,102,241,0.18) inset',
                              }}
                            >
                              <FiEye className="w-4 h-4" /> View Resume
                            </button>
                            <a
                              href={resumePdf}
                              download="Lalith_Resume.pdf"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center justify-center w-10 rounded-lg transition-colors hover:bg-indigo-500/20"
                              style={{
                                background: 'rgba(99,102,241,0.06)',
                                color: '#818cf8',
                                boxShadow: '0 0 0 1px rgba(99,102,241,0.12) inset',
                              }}
                              title="Download PDF"
                            >
                              <FiDownload className="w-4 h-4" />
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* GitHub */}
                  {[
                    { href: personal.github, icon: <FiGithub className="w-5 h-5" />, title: 'GitHub', delay: 0.5 },
                    { href: personal.linkedin, icon: <FiLinkedin className="w-5 h-5" />, title: 'LinkedIn', delay: 0.6 },
                    { href: `mailto:${personal.email}`, icon: <FiMail className="w-5 h-5" />, title: 'Email', delay: 0.7 },
                  ].map(({ href, icon, title, delay }) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay, ease: EXPO, duration: 0.8 }}
                    >
                      <Magnetic>
                        <a
                          href={href}
                          target={title !== 'Email' ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl transition-all duration-300 flex items-center justify-center hover:-translate-y-1"
                          style={{
                            background: 'linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(79,70,229,0.06) 100%)',
                            boxShadow: '0 0 0 1px rgba(99,102,241,0.14) inset',
                            backdropFilter: 'blur(16px)',
                            color: '#818cf8',
                          }}
                          title={title}
                        >
                          {icon}
                        </a>
                      </Magnetic>
                    </motion.div>
                  ))}
                </div>

                {/* Let's Connect */}
                <motion.a
                  href="#contact"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, type: 'spring', stiffness: 200, damping: 15 }}
                  whileHover={{ x: 8 }}
                  className="inline-flex items-center gap-5 font-display font-bold group no-underline"
                  style={{ color: '#a5b4fc' }}
                >
                  <span
                    className="text-sm tracking-[0.28em] uppercase pb-2"
                    style={{ borderBottom: '1px solid rgba(99,102,241,0.5)' }}
                  >
                    Let's Connect
                  </span>
                  <FiArrowRight
                    className="w-5 h-5 group-hover:translate-x-2 transition-transform"
                    style={{ color: '#818cf8' }}
                  />
                </motion.a>
              </div>
            </motion.div>
          </div>

        </div>
      </motion.div>

      {/* ══════════════════════════════════════════════════
          CINEMATIC RESUME MODAL
      ══════════════════════════════════════════════════ */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12"
            style={{
              backdropFilter: 'blur(24px)',
              background: 'rgba(2,6,23,0.78)',
            }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl h-full max-h-[90vh] rounded-2xl flex flex-col"
              style={{
                background: 'rgba(11,16,32,0.88)',
                boxShadow: '0 0 0 1px rgba(99,102,241,0.14) inset, 0 0 100px rgba(79,70,229,0.18)',
                backdropFilter: 'blur(30px)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-4 rounded-t-2xl"
                   style={{ borderBottom: '1px solid rgba(99,102,241,0.10)', background: 'rgba(0,0,0,0.15)' }}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(99,102,241,0.12)', color: '#818cf8' }}
                  >
                    <FiFileText className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-semibold text-white tracking-wide">Lalith Aditya — Resume</h3>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={resumePdf}
                    download="Lalith_Resume.pdf"
                    className="p-2 rounded-lg transition-colors hover:bg-indigo-500/20"
                    style={{ color: '#a5b4fc' }}
                    title="Download PDF"
                  >
                    <FiDownload className="w-5 h-5" />
                  </a>
                  <a
                    href={resumePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg transition-colors hover:bg-indigo-500/20"
                    style={{ color: '#a5b4fc' }}
                    title="Open Full"
                  >
                    <FiMaximize2 className="w-5 h-5" />
                  </a>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 rounded-lg transition-colors hover:bg-red-500/20 ml-2"
                    style={{ color: '#a5b4fc' }}
                    title="Close"
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="flex-1 p-2 sm:p-4 relative rounded-b-2xl overflow-hidden"
                   style={{ background: 'rgba(0,0,0,0.35)' }}>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
                </div>
                <iframe
                  src={`${resumePdf}#toolbar=0&navpanes=0&scrollbar=0`}
                  className="w-full h-full rounded-xl relative z-10 bg-white"
                  style={{ border: '1px solid rgba(99,102,241,0.10)' }}
                  title="Resume PDF"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}