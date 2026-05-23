import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { FiArrowRight, FiShield, FiTrendingUp, FiSettings } from 'react-icons/fi';
import { useRef } from 'react';

const EXPO = [0.16, 1, 0.3, 1];

export default function About() {
  const { about } = portfolioData;
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax effect - grid moves slower than content
  const gridY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const quickPoints = [
    { text: 'I enjoy building useful products from simple ideas.', icon: <FiTrendingUp /> },
    { text: 'I focus on clean code, clarity, and consistency.', icon: <FiShield /> },
    { text: 'I improve by shipping, debugging, and iterating.', icon: <FiSettings /> },
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
        perspective: '1400px',
        background: '#000000',
        position: 'relative',
      }}
    >
      {/* Background orbs - minimal blue glow in corners */}
      <div className="glow-orb w-[700px] h-[700px] left-[-15%] top-[10%] opacity-[0.16]"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)' }} />
      <div className="glow-orb w-[400px] h-[400px] right-[5%] bottom-[10%] opacity-[0.12]"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.28) 0%, transparent 70%)' }} />

      {/* Grid background with parallax depth - subtle blue grid */}
      <motion.div 
        style={{ y: gridY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(59,130,246,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.18) 1px, transparent 1px)`,
            backgroundSize: '56px 56px',
            maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 15%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.4) 85%, transparent 100%)',
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 70, rotateX: 10, rotateY: -3, scale: 0.985 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.32 }}
        transition={{ duration: 1.05, ease: EXPO }}
        className="editorial-container max-w-[1400px] relative z-10 w-full"
        style={{ transformStyle: 'preserve-3d' }}
      >

        {/* Section eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: EXPO }}
          className="flex items-center gap-3 mb-8 lg:mb-10"
        >
          <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg, #60a5fa, #a78bfa)' }} />
          <span className="section-eyebrow" style={{ color: '#93c5fd' }}>About Me</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* LEFT: Student snapshot */}
          <div className="lg:col-span-5 space-y-8 lg:space-y-10 order-1 lg:order-2">
            <div className="space-y-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em]" style={{ color: '#94a3b8' }}>
                Personal Profile
              </span>
              <div className="space-y-4">
                {quickPoints.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.12, ease: EXPO, duration: 0.7 }}
                    className="flex items-center gap-5 group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: 'rgba(59, 130, 246, 0.15)',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        color: '#60a5fa',
                        boxShadow: '0 4px 12px rgba(36, 71, 255, 0.15)',
                      }}
                    >
                      {item.icon}
                    </div>
                    <span
                      className="font-display font-bold text-lg lg:text-xl tracking-tight transition-colors duration-300"
                      style={{ color: '#f0f4f8' }}
                    >
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div
              className="rounded-xl p-4"
              style={{
                background: 'rgba(59, 130, 246, 0.08)',
                border: '1px solid rgba(59, 130, 246, 0.25)',
                boxShadow: '0 4px 20px rgba(36, 71, 255, 0.1)',
              }}
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.34em] block mb-3" style={{ color: '#93c5fd' }}>
                Currently
              </span>
              <ul className="space-y-2 m-0 pl-5">
                {currentlyDoing.map((item) => (
                  <li key={item} className="font-body text-sm leading-relaxed" style={{ color: '#cbd5e1' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: Narrative */}
          <div className="lg:col-span-7 space-y-7 lg:space-y-8 order-2 lg:order-1">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EXPO }}
              className="font-display font-black tracking-tighter leading-[0.92]"
              style={{ fontSize: 'clamp(2.3rem, 5vw, 4.4rem)', color: '#f0f4f8' }}
            >
              Learning, Building,
              <br />
              <span style={{ 
                background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>and Growing Daily</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.9, ease: EXPO }}
              className="space-y-6"
            >
              <p className="font-body leading-relaxed max-w-2xl" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#cbd5e1' }}>
                {about.description}
              </p>

              <div className="pt-4">
                <motion.a
                  href="#contact"
                  whileHover={{ x: 8 }}
                  className="inline-flex items-center gap-5 font-display font-bold group no-underline"
                  style={{ color: '#93c5fd' }}
                >
                  <span
                    className="text-sm tracking-[0.28em] uppercase pb-2"
                    style={{ borderBottom: '1px solid #60a5fa' }}
                  >
                    Let's Connect
                  </span>
                  <FiArrowRight
                    className="w-5 h-5 group-hover:translate-x-2 transition-transform"
                    style={{ color: '#60a5fa' }}
                  />
                </motion.a>
              </div>
            </motion.div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}