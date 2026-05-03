import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiArrowUpRight, FiTerminal, FiCpu, FiCode, FiServer, FiDatabase, FiCloud } from 'react-icons/fi';
import { useRef, useState } from 'react';
import Magnetic from '../common/Magnetic';

const EXPO = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: EXPO } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const TERMINAL_LINES = [
  { prefix: '❯', cmd: 'node certify-me --env=prod', delay: 0 },
  { prefix: '✓', cmd: 'Infrastructure: LIVE',      color: '#22d3ee', delay: 0.5 },
  { prefix: '✓', cmd: 'AI Engine: ONLINE',          color: '#818cf8', delay: 1.0 },
  { prefix: '●', cmd: 'Awaiting next build…',       color: '#3b82f6', delay: 1.5 },
];

const ORBIT_SKILLS = [
  { icon: <FiCode />,     label: 'React',       color: '#60a5fa', angle: 0   },
  { icon: <FiServer />,   label: 'Spring Boot', color: '#818cf8', angle: 72  },
  { icon: <FiDatabase />, label: 'PostgreSQL',  color: '#22d3ee', angle: 144 },
  { icon: <FiCloud />,    label: 'OCI / AWS',   color: '#34d399', angle: 216 },
  { icon: <FiCpu />,      label: 'AI / NLP',    color: '#fb923c', angle: 288 },
];

function OrbitBadge({ icon, label, color, angle, radius = 130 }) {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8 + angle / 360, duration: 0.5, ease: EXPO }}
      className="absolute flex flex-col items-center gap-1"
      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: 'translate(-50%, -50%)' }}
    >
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center text-sm"
        style={{
          background: 'rgba(6,10,24,0.90)',
          border: `1px solid ${color}35`,
          color,
          backdropFilter: 'blur(12px)',
          boxShadow: `0 0 16px ${color}20`,
        }}
      >
        {icon}
      </div>
      <span className="font-mono text-[7px] uppercase tracking-widest whitespace-nowrap" style={{ color: '#2a3a5a' }}>
        {label}
      </span>
    </motion.div>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });
  const [hovering, setHovering] = useState(false);
  const [windowState, setWindowState] = useState('normal'); // normal, minimized, focused, closed

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springCfg = { damping: 35, stiffness: 70, mass: 1 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springCfg);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springCfg);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const r = heroRef.current.getBoundingClientRect();
    setCursorPos({ x: e.clientX - r.left, y: e.clientY - r.top });
    mouseX.set((e.clientX - r.left) / r.width - 0.5);
    mouseY.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); setHovering(false); }}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden"
      style={{ paddingTop: '8rem', paddingBottom: '5rem' }}
    >
      {/* ── Background Orbs ── */}
      <div className="glow-orb w-[700px] h-[700px] top-[-20%] left-[-15%] opacity-25"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.38) 0%, transparent 70%)' }} />
      <div className="glow-orb w-[500px] h-[500px] top-[5%] right-[-10%] opacity-18"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.40) 0%, transparent 70%)' }} />
      <div className="glow-orb w-[400px] h-[400px] bottom-[0%] left-[35%] opacity-15"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.30) 0%, transparent 70%)' }} />

      {/* ── Mouse-follow glow ── */}
      <motion.div
        animate={{ x: cursorPos.x - 180, y: cursorPos.y - 180, opacity: hovering ? 1 : 0 }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
        className="absolute pointer-events-none z-0 w-[360px] h-[360px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      {/* ── Side rail ── */}
      <div className="hidden xl:flex absolute left-7 top-0 bottom-0 z-20 flex-col items-center justify-center">
        <div className="w-px h-28 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
        <span
          className="section-eyebrow my-5"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '0.28em' }}
        >
          Available · India · Building Since 2025 · AI + Full Stack
        </span>
        <div className="w-px h-28 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
      </div>

      {/* ── Main Grid ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 xl:pl-24">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-10 items-center">

          {/* ─── LEFT: Content ─── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 flex flex-col items-start relative z-20"
          >
            <motion.div variants={fadeUp} className="mb-8">
              <div className="badge">
                <span className="dot-live" />
                Open for Internship Opportunities
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-5">
              <h1
                className="font-display font-black tracking-tighter leading-[0.88]"
                style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
              >
                <span style={{ color: '#e8f0ff' }}>Lalith Aditya</span>
                <br />
                <span className="text-gradient">Singuparapu.</span>
              </h1>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }} />
              <span
                className="font-display font-semibold tracking-tight"
                style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.55rem)', color: '#c7d9ff' }}
              >
                AI Full Stack Architect
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="font-body leading-relaxed mb-10 max-w-[500px]"
              style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)', color: '#7a8fbb' }}
            >
              I design{' '}
              <span style={{ color: '#93c5fd', fontWeight: 500 }}>intelligent systems</span>{' '}
              where product, engineering, and AI converge — from distributed backends to AI-native interfaces.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-12">
              <Magnetic>
                <a href="#contact" className="btn-primary">
                  Let's Build Together
                  <FiArrowUpRight className="w-4 h-4" />
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#projects" className="btn-ghost">View Projects</a>
              </Magnetic>
              <div className="flex items-center gap-2">
                {[
                  { icon: <FaLinkedin />, href: portfolioData.personal.linkedin, label: 'LinkedIn' },
                  { icon: <FaGithub />,   href: portfolioData.personal.github,   label: 'GitHub' },
                ].map(({ icon, href, label }) => (
                  <motion.a key={label} href={href} target="_blank" rel="noreferrer"
                    aria-label={label} className="btn-icon" whileHover={{ scale: 1.1 }}>
                    {icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-y-2 gap-x-5 pt-6 w-full"
              style={{ borderTop: '1px solid rgba(59,130,246,0.10)' }}
            >
              {[
                { label: 'Production Deployed',     color: '#22d3ee' },
                { label: 'OCI GenAI Certified',     color: '#818cf8' },
                { label: '9.09 CGPA',               color: '#60a5fa' },
                { label: 'Full Stack + AI Systems',  color: '#34d399' },
                { label: 'Hackathon Builder',        color: '#fb923c' },
              ].map(({ label, color }, i, arr) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="font-mono text-[9px] uppercase tracking-[0.28em]" style={{ color: '#4a5a80' }}>
                    {label}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="w-1 h-1 rounded-full" style={{ background: color, opacity: 0.5 }} />
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ─── RIGHT: Visual Column ─── */}
          <div
            className="lg:col-span-5 relative hidden lg:flex flex-col gap-5 items-end lg:pl-8 z-10"
            style={{ perspective: '1200px' }}
          >
            {/* ── Identity Card (Now with Full iOS Window Logic) ── */}
            <motion.div
              drag
              dragConstraints={heroRef}
              dragMomentum={true}
              initial={{ opacity: 0, y: 40, x: 48, scale: 0.93 }}
              animate={{ 
                opacity: windowState === 'closed' ? 0 : 1,
                scale: windowState === 'minimized' ? 0.35 : windowState === 'focused' ? 1.15 : 1,
                pointerEvents: windowState === 'closed' ? 'none' : 'auto',
                y: windowState === 'closed' ? 100 : 0,
                x: windowState === 'closed' ? 72 : 0,
              }}
              whileDrag={{ scale: windowState === 'focused' ? 1.2 : 1.05, zIndex: 100, cursor: 'grabbing' }}
              transition={{ duration: 0.6, ease: EXPO }}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="relative w-full max-w-[340px] mx-auto cursor-grab active:cursor-grabbing z-0"
            >
              {/* Card glow */}
              <div
                className="absolute -inset-6 rounded-3xl blur-2xl opacity-30"
                style={{ background: 'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.55) 0%, rgba(139,92,246,0.30) 50%, transparent 80%)' }}
              />

              {/* Card body */}
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(10,20,48,0.90) 0%, rgba(6,12,30,0.85) 100%)',
                  border: '1px solid rgba(80,140,255,0.18)',
                  borderTop: '1px solid rgba(150,200,255,0.20)',
                  backdropFilter: 'blur(28px)',
                  boxShadow: '0 0 0 1px rgba(255,255,255,0.03), 0 30px 80px -20px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.08)',
                }}
              >
                {/* Chrome bar with iOS-style functioning dots */}
                <div
                  className="flex items-center gap-2 px-4 py-3"
                  style={{ borderBottom: '1px solid rgba(59,130,246,0.10)', background: 'rgba(4,8,22,0.70)' }}
                >
                  <div className="flex gap-1.5">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setWindowState('closed'); }}
                      className="w-2.5 h-2.5 rounded-full transition-all hover:scale-125 hover:brightness-125" 
                      style={{ background: '#ff5f57', border: 'none', cursor: 'pointer' }} 
                      title="Close"
                    />
                    <button 
                      onClick={(e) => { e.stopPropagation(); setWindowState(windowState === 'minimized' ? 'normal' : 'minimized'); }}
                      className="w-2.5 h-2.5 rounded-full transition-all hover:scale-125 hover:brightness-125" 
                      style={{ background: '#ffbd2e', border: 'none', cursor: 'pointer' }} 
                      title="Minimize"
                    />
                    <button 
                      onClick={(e) => { e.stopPropagation(); setWindowState(windowState === 'focused' ? 'normal' : 'focused'); }}
                      className="w-2.5 h-2.5 rounded-full transition-all hover:scale-125 hover:brightness-125" 
                      style={{ background: '#28c840', border: 'none', cursor: 'pointer' }} 
                      title="Fullscreen"
                    />
                  </div>
                  <span className="font-mono text-[9px] ml-2 tracking-widest uppercase" style={{ color: '#2a3a5a' }}>
                    {windowState === 'minimized' ? 'minimized.dev' : 'lalith-aditya.dev'}
                  </span>
                </div>

                {/* Avatar orbit stage */}
                <div className="relative flex items-center justify-center" style={{ height: '300px' }}>
                  {/* Animated rings */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute rounded-full"
                    style={{
                      width: '260px', height: '260px',
                      border: '1px dashed rgba(59,130,246,0.18)',
                    }}
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                    className="absolute rounded-full"
                    style={{
                      width: '200px', height: '200px',
                      border: '1px solid rgba(139,92,246,0.14)',
                    }}
                  />

                  {/* Orbit skill badges */}
                  {ORBIT_SKILLS.map((skill) => (
                    <OrbitBadge key={skill.label} {...skill} radius={128} />
                  ))}

                  {/* Central avatar */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative z-10 flex flex-col items-center gap-2"
                  >
                    {/* Avatar circle */}
                    <div
                      className="relative flex items-center justify-center"
                      style={{
                        width: '80px', height: '80px', borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(59,130,246,0.30) 0%, rgba(139,92,246,0.30) 100%)',
                        border: '2px solid rgba(100,160,255,0.30)',
                        boxShadow: '0 0 30px rgba(59,130,246,0.30), inset 0 1px 0 rgba(255,255,255,0.12)',
                      }}
                    >
                      {/* Pulse ring */}
                      <motion.div
                        animate={{ scale: [1, 1.35], opacity: [0.4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                        className="absolute inset-0 rounded-full"
                        style={{ border: '2px solid rgba(59,130,246,0.50)' }}
                      />
                      <span
                        className="font-display font-black select-none"
                        style={{ fontSize: '1.8rem', color: '#e8f0ff', letterSpacing: '-0.04em' }}
                      >
                        LA
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Name chip at bottom */}
                <div
                  className="flex items-center justify-between px-5 py-4"
                  style={{ borderTop: '1px solid rgba(59,130,246,0.10)', background: 'rgba(4,8,22,0.50)' }}
                >
                  <div>
                    <p className="font-display font-bold text-sm" style={{ color: '#e8f0ff', letterSpacing: '-0.01em' }}>
                      Lalith Aditya
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-widest mt-0.5" style={{ color: '#3b82f6' }}>
                      AI Full Stack Architect
                    </p>
                  </div>
                  <div className="badge">
                    <span className="dot-live" />
                    Active
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── Terminal Widget ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, ease: EXPO, delay: 0.45 }}
              className="w-full max-w-[340px] mx-auto rounded-xl overflow-hidden"
              style={{
                background: 'rgba(3,5,14,0.88)',
                border: '1px solid rgba(59,130,246,0.14)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 20px 50px -10px rgba(0,0,0,0.7)',
              }}
            >
              <div
                className="flex items-center gap-2 px-4 py-2.5"
                style={{ borderBottom: '1px solid rgba(59,130,246,0.08)', background: 'rgba(4,8,20,0.70)' }}
              >
                <FiTerminal className="w-3 h-3" style={{ color: '#3b82f6' }} />
                <span className="font-mono text-[9px] tracking-widest uppercase" style={{ color: '#2a3a5a' }}>
                  build.sh — zsh
                </span>
                <div className="ml-auto flex gap-1">
                  {['#60a5fa', '#818cf8', '#22d3ee'].map((c, i) => (
                    <span key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: c, opacity: 0.5 }} />
                  ))}
                </div>
              </div>

              <div className="px-4 py-4 space-y-2.5">
                {TERMINAL_LINES.map(({ prefix, cmd, color, delay }, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + delay, duration: 0.4, ease: 'easeOut' }}
                    className="font-mono text-[11px] flex items-center gap-2"
                  >
                    <span style={{ color: color ?? '#2a3a5a', minWidth: '0.75rem' }}>{prefix}</span>
                    <span style={{ color: color ? '#c7d9ff' : '#3a4a6a' }}>{cmd}</span>
                    {i === TERMINAL_LINES.length - 1 && (
                      <span className="animate-blink" style={{ color: '#3b82f6' }}>▋</span>
                    )}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* ── Stats Row ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EXPO, delay: 0.65 }}
              className="w-full max-w-[340px] mx-auto grid grid-cols-3 gap-3"
            >
              {[
                { value: '9.09', label: 'CGPA',      color: '#60a5fa' },
                { value: '2+',   label: 'Projects',  color: '#818cf8' },
                { value: 'OCI',  label: 'Certified', color: '#22d3ee' },
              ].map(({ value, label, color }) => (
                <div
                  key={label}
                  className="rounded-xl py-3 px-2 text-center"
                  style={{
                    background: 'rgba(8,16,40,0.65)',
                    border: '1px solid rgba(59,130,246,0.12)',
                    borderTop: `2px solid ${color}`,
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <p className="font-display font-black text-xl leading-none mb-1" style={{ color }}>{value}</p>
                  <p className="font-mono text-[8px] uppercase tracking-widest" style={{ color: '#3a4a6a' }}>{label}</p>
                </div>
              ))}
            </motion.div>

          </div>
        </div>

        {/* ── Recovery Button (Visible when closed) ── */}
        <AnimatePresence>
          {windowState === 'closed' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute bottom-32 right-12 z-50"
            >
              <button
                onClick={() => setWindowState('normal')}
                className="flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl border border-blue-500/30 bg-blue-900/10 text-blue-400 font-display font-bold text-xs uppercase tracking-widest hover:bg-blue-900/20 transition-all shadow-[0_0_20px_rgba(59,130,246,0.2)]"
              >
                <span className="dot-live" />
                Materialize Identity
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Bottom fade ── */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, #03050a 0%, transparent 100%)' }}
      />
    </section>
  );
}