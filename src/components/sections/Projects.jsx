import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef, useCallback } from 'react';
import { FiArrowUpRight, FiGithub, FiExternalLink, FiServer, FiCpu, FiShield, FiLayout, FiDatabase, FiCloud, FiZap } from 'react-icons/fi';
import certifyMeImg from '../../assets/images/certifymeprojectimage.png';
import manageProjectImg from '../../assets/images/manageyourprojectprojectimage.png';

const EXPO = [0.16, 1, 0.3, 1];
const AUTO_INTERVAL = 4000; // Slightly slower for larger cards

const PROJECTS = [
  {
    num: '01',
    category: 'System Architecture',
    title: 'CertifyMe: Enterprise Tracking System',
    tech: 'React, Spring Boot, Hibernate, PostgreSQL and Tailwind CSS',
    image: certifyMeImg,
    url: 'https://certifymeonline.vercel.app/',
    github: 'https://github.com/lalithdev',
    accent: '#3b82f6',
    context: 'Architected a scalable certification tracking platform for enterprise-level academic monitoring. Engineered a robust backend using Spring Boot and Hibernate, supported by a high-performance React-driven management layer.',
    metrics: [
      { label: 'Status', value: 'Live' },
      { label: 'Scale', value: 'Enterprise' },
      { label: 'Role', value: 'Lead Architect' }
    ],
    features: [
      { text: 'Architected real-time tracking workflows for thousands of concurrent users.', icon: <FiServer /> },
      { text: 'Engineered automated certification verification systems reducing manual load by 70%.', icon: <FiCpu /> },
      { text: 'Designed a distributed database schema for multi-tenant administrative monitoring.', icon: <FiDatabase /> },
      { text: 'Implemented enterprise-grade security protocols for data integrity.', icon: <FiShield /> }
    ]
  },
  {
    num: '02',
    category: 'Platform Engineering',
    title: 'Distributed Project Portal',
    tech: 'Node.js, React and PostgreSQL',
    image: manageProjectImg,
    url: 'https://manageyourproject.vercel.app',
    github: 'https://github.com/lalithdev',
    accent: '#818cf8',
    context: 'Engineered a centralized portal for large-scale academic project submission and evaluation. Scaled the system to handle multi-stage workflows and automated teacher-student interactions.',
    metrics: [
      { label: 'Status', value: 'Production' },
      { label: 'Scale', value: 'Academic' },
      { label: 'Role', value: 'Full Stack Engineer' }
    ],
    features: [
      { text: 'Built complex multi-role authentication and authorization workflows.', icon: <FiShield /> },
      { text: 'Optimized PostgreSQL queries for high-volume project submissions.', icon: <FiDatabase /> },
      { text: 'Designed a seamless React interface for document management.', icon: <FiLayout /> },
      { text: 'Integrated automated notification systems for workflow updates.', icon: <FiCloud /> }
    ]
  },
  {
    num: '03',
    category: 'Identity Design',
    title: 'Personal Brand Architecture',
    tech: 'React, Framer Motion, TailwindCSS and Vite',
    image: null,
    url: 'https://lalithdevportfolio.vercel.app',
    github: 'https://github.com/lalithdev',
    accent: '#22d3ee',
    context: 'Designed a world-class, 3D interactive portfolio focusing on spatial UI and cinematic storytelling. Engineered with modern React architecture for extreme performance and luxury perception.',
    metrics: [
      { label: 'Status', value: 'Live' },
      { label: 'Scale', value: 'Global' },
      { label: 'Role', value: 'UI Architect' }
    ],
    features: [
      { text: 'Implemented custom WebGL/Canvas background systems.', icon: <FiCpu /> },
      { text: 'Engineered complex Framer Motion animation orchestration.', icon: <FiLayout /> },
      { text: 'Optimized asset loading for sub-second visual rendering.', icon: <FiZap /> },
      { text: 'Crafted a custom design system for consistent luxury aesthetic.', icon: <FiShield /> }
    ]
  },
];

function ProjectCard({ project, isActive, onKnowMore }) {
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <motion.div
      className="shrink-0 relative flex flex-col group"
      style={{
        width: '420px',
        height: '640px', // Increased height
        borderRadius: '32px',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, rgba(8,16,40,0.98) 0%, rgba(5,10,25,0.95) 100%)',
        border: '1px solid rgba(59,130,246,0.12)',
        borderTop: `1px solid ${project.accent}25`,
        backdropFilter: 'blur(32px)',
        boxShadow: isActive
          ? `0 30px 80px rgba(0,0,0,0.80), 0 0 60px ${project.accent}15, inset 0 1px 0 rgba(255,255,255,0.08)`
          : '0 12px 40px rgba(0,0,0,0.60), inset 0 1px 0 rgba(255,255,255,0.04)',
        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: isActive ? 'scale(1)' : 'scale(0.95)',
        opacity: isActive ? 1 : 0.6,
      }}
      whileHover={{
        y: -20, // Slightly more lift
        scale: isActive ? 1.02 : 0.98,
        boxShadow: `0 40px 100px rgba(0,0,0,0.90), 0 0 80px ${project.accent}25`,
        filter: 'brightness(1.1)', // Light up on hover
      }}
    >
      {/* ── Top Header ── */}
      <div className="flex items-start justify-between px-8 pt-10 pb-4">
        <div className="relative">
          <div
            className="absolute w-8 h-8 rounded-full blur-xl"
            style={{ background: project.accent, opacity: 0.6, top: '-8px', left: '8px' }}
          />
          <span
            className="font-display font-black relative"
            style={{ fontSize: '4.5rem', letterSpacing: '-0.05em', lineHeight: 1, color: 'rgba(232,240,255,0.95)' }}
          >
            {project.num}
          </span>
        </div>
        <div
          className="px-4 py-1.5 rounded-full backdrop-blur-xl border border-white/5 mt-3"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            boxShadow: 'inset 0 0 10px rgba(255,255,255,0.02)'
          }}
        >
          <span
            className="font-display font-bold text-[10px] uppercase tracking-[0.3em]"
            style={{ color: project.accent, opacity: 0.9 }}
          >
            WEB
          </span>
        </div>
      </div>

      {/* ── Title & Content ── */}
      <div className="px-8 pb-6">
        <h3
          className="font-display font-black leading-[1.1] mb-5"
          style={{ fontSize: '1.75rem', color: '#e8f0ff', letterSpacing: '-0.03em' }}
        >
          {project.title}
        </h3>

        <div className="space-y-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] mb-2" style={{ color: 'rgba(122,143,187,0.4)' }}>
              Techstack used
            </p>
            <p className="font-body text-[14px] leading-relaxed" style={{ color: 'rgba(122,143,187,0.8)' }}>
              {project.tech}
            </p>
          </div>
        </div>
      </div>

      {/* ── Screenshot container ── */}
      <div
        className="mx-8 mt-auto rounded-2xl overflow-hidden relative cursor-pointer group/img"
        style={{ height: '220px', border: '1px solid rgba(59,130,246,0.1)' }}
        onMouseEnter={() => setImgHovered(true)}
        onMouseLeave={() => setImgHovered(false)}
        onClick={() => project.url && window.open(project.url, '_blank', 'noreferrer')}
      >
        {project.image ? (
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
            animate={{ scale: imgHovered ? 1.08 : 1 }}
            transition={{ duration: 0.6, ease: EXPO }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-900/40">
            <span className="font-display font-black text-5xl opacity-20" style={{ color: project.accent }}>LA</span>
          </div>
        )}

        {/* Advanced Dual Redirect Portal */}
        <AnimatePresence>
          {imgHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-blue-950/40 backdrop-blur-[6px] z-30"
            >
              <div className="flex gap-4">
                {/* GitHub Access */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.4, ease: EXPO }}
                  className="group/icon relative w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden"
                  style={{
                    background: 'rgba(232,240,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(12px)',
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300" />
                  <FiGithub className="w-6 h-6 text-white group-hover/icon:text-black transition-colors relative z-10" />
                </motion.a>

                {/* Live System Access */}
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.4, ease: EXPO }}
                  className="group/icon relative w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden"
                  style={{
                    background: 'rgba(232,240,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(12px)',
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300" />
                  <FiExternalLink className="w-6 h-6 text-white group-hover/icon:text-black transition-colors relative z-10" />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Know More Button — Now triggers on hover/click ── */}
      <div className="px-8 py-8 flex justify-center">
        <button
          onClick={onKnowMore}
          onMouseEnter={onKnowMore} // Trigger detail view on hover as requested
          className="group/km flex items-center gap-3 font-display font-bold text-[10px] uppercase tracking-[0.4em] transition-all duration-300"
          style={{ color: project.accent }}
        >
          <span className="relative">
            Know More
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover/km:w-full" />
          </span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FiArrowUpRight className="w-4 h-4" />
          </motion.div>
        </button>
      </div>
    </motion.div>
  );
}

function DetailView({ project }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: EXPO }}
      className="mt-24 grid lg:grid-cols-12 gap-12 items-start"
    >
      {/* Left Metadata */}
      <div className="lg:col-span-4 space-y-12">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block" style={{ color: project.accent }}>
            System Context
          </span>
          <h2 className="font-display font-black text-4xl mb-6 tracking-tighter" style={{ color: '#e8f0ff', lineHeight: 0.9 }}>
            {project.title}
          </h2>
          <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(122,143,187,0.7)' }}>
            {project.context}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-6 pt-4">
          <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-display font-black text-[10px] uppercase tracking-[0.3em] group" style={{ color: '#c7d9ff' }}>
            <FiGithub className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
            <span className="border-b border-transparent group-hover:border-blue-400/50 transition-all">Repository</span>
          </a>
          <a href={project.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-display font-black text-[10px] uppercase tracking-[0.3em] group" style={{ color: '#c7d9ff' }}>
            <FiExternalLink className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
            <span className="border-b border-transparent group-hover:border-cyan-400/50 transition-all">Live System</span>
          </a>
        </div>

        {/* Metrics Card */}
        <div
          className="p-8 rounded-3xl space-y-8"
          style={{
            background: 'rgba(8,16,40,0.60)',
            border: '1px solid rgba(59,130,246,0.12)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {project.metrics.map((m, i) => (
            <div key={i} className="flex justify-between items-end pb-4 border-b border-blue-900/20">
              <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(122,143,187,0.4)' }}>{m.label}</span>
              <span className="font-display font-black text-lg" style={{ color: '#e8f0ff' }}>{m.value}</span>
            </div>
          ))}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: 'rgba(34,211,238,0.8)' }}>System Active</span>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="lg:col-span-8 space-y-12">
        {/* Main Preview */}
        <div className="relative rounded-3xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)] border border-blue-900/30">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-auto" />
          ) : (
            <div className="aspect-video bg-slate-900/60 flex items-center justify-center">
              <span className="font-display font-black text-9xl opacity-10" style={{ color: project.accent }}>LA</span>
            </div>
          )}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {project.features.map((f, i) => (
            <div key={i} className="flex gap-5 group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110" style={{ background: 'rgba(59,130,246,0.1)', color: project.accent, border: `1px solid ${project.accent}20` }}>
                {f.icon}
              </div>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(122,143,187,0.7)' }}>
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const timerRef = useRef(null);
  const total = PROJECTS.length;

  const advance = useCallback(() => {
    if (!showDetail && total > 1) { // Only advance if multiple boxes exist
      setCurrent((prev) => (prev + 1) % total);
    }
  }, [total, showDetail]);

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
    setShowDetail(false);
    resetTimer();
  };

  const goNext = () => {
    advance();
    setShowDetail(false);
    resetTimer();
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    if (!paused && !showDetail && total > 1) {
      timerRef.current = setInterval(advance, AUTO_INTERVAL);
    }
  };

  useEffect(() => {
    if (paused || showDetail || total <= 1) return;
    timerRef.current = setInterval(advance, AUTO_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [advance, paused, showDetail, total]);

  const goTo = (idx) => {
    setCurrent(idx);
    setShowDetail(false);
    clearInterval(timerRef.current);
    if (!paused) timerRef.current = setInterval(advance, AUTO_INTERVAL);
  };

  const offset = -current * (420 + 32); // Card width + Gap

  return (
    <section id="projects" className="section-padding relative overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="glow-orb w-[800px] h-[800px] right-[-20%] top-[-10%] opacity-20" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)' }} />
      <div className="glow-orb w-[600px] h-[600px] left-[-15%] bottom-[0%] opacity-15" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)' }} />

      <div className="max-w-[1440px] mx-auto px-6">
        <div className="mb-24">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px" style={{ background: 'linear-gradient(90deg, #3b82f6, #06b6d4)' }} />
            <span className="section-eyebrow">My Projects</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: EXPO }} className="font-display font-black tracking-tighter leading-[0.85]" style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)', color: '#e8f0ff' }}>
            My <br />
            <span className="text-gradient">Projects</span>
          </motion.h2>
        </div>

        {/* ── Carousel Track with Nav Controls ── */}
        <div className="relative group/carousel">
          {/* Manual Navigation Arrows */}
          {total > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 backdrop-blur-xl border border-white/10 hover:border-blue-400/30 bg-blue-900/10"
                style={{ color: '#e8f0ff' }}
              >
                <FiArrowUpRight className="w-5 h-5 rotate-[225deg]" />
              </button>
              <button
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 backdrop-blur-xl border border-white/10 hover:border-blue-400/30 bg-blue-900/10"
                style={{ color: '#e8f0ff' }}
              >
                <FiArrowUpRight className="w-5 h-5 rotate-[45deg]" />
              </button>
            </>
          )}

          <div className="relative overflow-visible">
            <motion.div className="flex" animate={{ x: offset }} transition={{ duration: 0.8, ease: EXPO }} style={{ gap: '32px' }}>
              {PROJECTS.map((project, idx) => (
                <ProjectCard
                  key={project.num}
                  project={project}
                  isActive={idx === current}
                  onKnowMore={() => {
                    setCurrent(idx);
                    setShowDetail(true);
                    // Scroll to detail view
                    setTimeout(() => {
                      const detailEl = document.getElementById('project-detail-view');
                      if (detailEl) detailEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-3 mt-16">
            {PROJECTS.map((_, idx) => (
              <button key={idx} onClick={() => goTo(idx)} className="transition-all duration-500 rounded-full" style={{ width: idx === current ? '40px' : '10px', height: '10px', background: idx === current ? PROJECTS[current].accent : 'rgba(59,130,246,0.2)', boxShadow: idx === current ? `0 0 20px ${PROJECTS[current].accent}60` : 'none', border: 'none', cursor: 'pointer', padding: 0 }} />
            ))}
          </div>

          {/* Detailed View Section */}
          <div id="project-detail-view">
            <AnimatePresence mode="wait">
              {showDetail && <DetailView key={PROJECTS[current].num} project={PROJECTS[current]} />}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
