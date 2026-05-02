import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiArrowUpRight, FiTerminal, FiCpu, FiLayers, FiDatabase, FiCloud } from 'react-icons/fi';
import { useEffect, useRef, useState } from 'react';
import Magnetic from '../common/Magnetic';

// ─── Precision easing curves ─────────────────────────────────────────────────
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

// ─── Animations ──────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: EASE_OUT_EXPO },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring config for blueprint depth
  const springCfg = { damping: 40, stiffness: 80, mass: 1 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springCfg);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springCfg);

  const heroRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setCursorPos({ x, y });
    
    // Normalized coordinates for 3D tilt
    mouseX.set(x / rect.width - 0.5);
    mouseY.set(y / rect.height - 0.5);
  };
  
  const handleMouseLeave = () => { 
    mouseX.set(0); 
    mouseY.set(0); 
    setIsHovering(false);
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-transparent"
      style={{ paddingTop: '8rem', paddingBottom: '6rem' }}
    >
      {/* ── Soft Mouse-Follow Glow ── */}
      <motion.div
        animate={{
          x: cursorPos.x - 200,
          y: cursorPos.y - 200,
          opacity: isHovering ? 1 : 0
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
        className="absolute pointer-events-none z-0 w-[400px] h-[400px] rounded-full blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)'
        }}
      />

      {/* ── Metadata Rail (Left Edge) ── */}
      <div className="hidden xl:flex absolute left-8 top-0 bottom-0 z-20 flex-col items-center justify-center opacity-40">
        <div className="w-px h-32 bg-gradient-to-b from-transparent to-zinc-500 mb-6" />
        <span 
          className="font-mono text-[9px] text-zinc-400 tracking-[0.3em] uppercase rotate-180 whitespace-nowrap"
          style={{ writingMode: 'vertical-rl' }}
        >
          Available for Elite Internships • India • Building Since 2025 • Production Systems • AI + Full Stack
        </span>
        <div className="w-px h-32 bg-gradient-to-t from-transparent to-zinc-500 mt-6" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 xl:pl-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ─────────── LEFT COLUMN: Typography & Authority ─────────── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 flex flex-col items-start relative z-20"
          >
            {/* Live Build Layer */}
            <motion.div variants={fadeUp} className="mb-10 w-full max-w-sm">
              <div className="flex flex-col gap-2 p-4 rounded-xl bg-[#050505] border border-white/[0.04] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.02)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-pink-500 to-violet-500" />
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                    Currently Building
                  </span>
                </div>
                <div className="font-mono text-[11px] text-zinc-300 space-y-1.5 leading-relaxed">
                  <p className="flex items-start gap-2">
                    <span className="text-pink-500">{'>'}</span> CertifyMe Production Infrastructure
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-violet-400">{'>'}</span> AI Workflow Systems
                  </p>
                  <p className="flex items-start gap-2 text-zinc-500">
                    <span className="text-zinc-600">{'>'}</span> NLP-driven Process Automation
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Huge Founder Typography */}
            <motion.div variants={fadeUp} className="mb-6 w-full">
              <h1 className="font-sans font-black tracking-tighter leading-[0.85] text-white flex flex-col gap-2" style={{ fontSize: 'clamp(3rem, 7.5vw, 6.5rem)' }}>
                <span className="text-white drop-shadow-2xl">Lalith Aditya</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">Singuparapu.</span>
              </h1>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-[#e2e8f0] font-semibold tracking-tight mb-4" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)' }}>
              AI Full Stack Developer
            </motion.h2>

            {/* Signature Statement */}
            <motion.p variants={fadeUp} className="text-zinc-400 font-medium leading-relaxed mb-10 max-w-[500px]" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}>
              I design <span className="text-white">intelligent systems</span> where product, engineering, and AI converge.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 mb-12">
              <Magnetic>
                <motion.a
                  href="#contact"
                  className="relative group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-[0.15em] transition-transform overflow-hidden shadow-[0_0_40px_rgba(236,72,153,0.2)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Let's Build Systems
                    <FiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-zinc-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              </Magnetic>

              <div className="flex items-center gap-5 px-5 py-3 rounded-full border border-white/[0.04] bg-[#050505]/80 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                {[
                  { icon: <FaLinkedin />, href: portfolioData.personal.linkedin, label: 'LinkedIn' },
                  { icon: <FaGithub />, href: portfolioData.personal.github, label: 'GitHub' },
                ].map(({ icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    whileHover={{ color: '#ec4899' }}
                    className="text-zinc-500 text-lg hover:text-white transition-colors"
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Trust Signal Strip */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-y-3 gap-x-4 w-full pt-6 border-t border-white/[0.04]">
              {[
                'Production Deployed',
                'OCI GenAI Certified',
                '9.09 CGPA',
                'Full Stack + AI Systems',
                'Hackathon Builder'
              ].map((signal, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">{signal}</span>
                  {idx !== 4 && <span className="w-1 h-1 rounded-full bg-zinc-800" />}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ─────────── RIGHT COLUMN: Isometric Blueprint ─────────── */}
          <div className="lg:col-span-5 h-[500px] xl:h-[650px] relative w-full perspective-1000 hidden lg:block">
            <motion.div
              className="w-full h-full relative flex items-center justify-center"
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            >
              {/* Backglow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.1)_0%,transparent_60%)] blur-2xl" />

              {/* Layer 3: Data / Cloud Base */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute w-[280px] h-[280px] border border-pink-500/20 bg-[#050505]/60 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.05)]"
                style={{ transform: 'rotateX(55deg) rotateZ(-45deg) translateZ(-60px)' }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px] rounded-2xl" />
                <FiDatabase className="w-8 h-8 text-pink-500/60" />
                <div className="absolute bottom-4 left-4 font-mono text-[10px] text-pink-500/60 uppercase tracking-widest">Data Layer</div>
              </motion.div>

              {/* Layer 2: Intelligence Core / Neural Network */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                className="absolute w-[280px] h-[280px] border border-white/[0.08] bg-[#0A0A0A]/70 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-[0_30px_50px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)]"
                style={{ transform: 'rotateX(55deg) rotateZ(-45deg) translateZ(30px)' }}
              >
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <motion.div animate={{ rotateZ: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 border border-dashed border-cyan-400/30 rounded-full" />
                  <motion.div animate={{ rotateZ: -360 }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} className="absolute inset-4 border border-violet-500/40 rounded-full" />
                  <div className="w-8 h-8 rounded-full bg-violet-500 blur-[8px] absolute" />
                  <FiCpu className="w-6 h-6 text-white relative z-10" />
                </div>
                <div className="absolute top-4 right-4 flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-mono text-[8px] text-cyan-400 uppercase tracking-widest">AI Engine Ops</span>
                </div>
              </motion.div>

              {/* Layer 1: Client Edge */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                className="absolute w-[280px] h-[280px] border border-white/[0.12] bg-[#000000]/40 backdrop-blur-xl rounded-2xl flex flex-col p-6 shadow-[0_40px_60px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.15)]"
                style={{ transform: 'rotateX(55deg) rotateZ(-45deg) translateZ(120px)' }}
              >
                <div className="flex items-center justify-between border-b border-white/[0.05] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <FiLayers className="w-4 h-4 text-white" />
                    <span className="font-mono text-[10px] text-white uppercase tracking-widest">Client Edge</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-zinc-700" />
                    <div className="w-2 h-2 rounded-full bg-zinc-700" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-3">
                  <div className="w-full h-8 rounded bg-white/[0.02] border border-white/[0.05] relative overflow-hidden">
                    <motion.div animate={{ x: ['-100%', '200%'] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  </div>
                  <div className="w-3/4 h-8 rounded bg-white/[0.02] border border-white/[0.05]" />
                  <div className="w-1/2 h-8 rounded bg-white/[0.02] border border-white/[0.05]" />
                </div>
              </motion.div>

              {/* Vertical Connection Lines */}
              <div className="absolute w-px h-[180px] bg-gradient-to-b from-cyan-400 to-violet-500 opacity-50" style={{ transform: 'translateZ(30px)' }} />
              <div className="absolute w-px h-[180px] bg-gradient-to-b from-pink-500 to-transparent opacity-30 -ml-16 mt-16" style={{ transform: 'translateZ(30px)' }} />
              <div className="absolute w-px h-[180px] bg-gradient-to-b from-violet-500 to-transparent opacity-30 ml-16 -mt-16" style={{ transform: 'translateZ(30px)' }} />

              {/* Cyan Data Pulses */}
              <motion.div 
                animate={{ y: [-90, 90], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute w-1 h-8 rounded-full bg-cyan-400 blur-[2px]" 
                style={{ transform: 'translateZ(30px)' }} 
              />

            </motion.div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, #000000, transparent)' }}
      />
    </section>
  );
}