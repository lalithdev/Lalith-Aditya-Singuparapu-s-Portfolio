import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { FiArrowRight, FiShield, FiTrendingUp, FiSettings } from 'react-icons/fi';

const EXPO = [0.16, 1, 0.3, 1];

export default function About() {
  const { about } = portfolioData;

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
      id="about"
      className="relative overflow-hidden py-16 lg:py-10 lg:min-h-[calc(100svh-88px)]"
      style={{ scrollMarginTop: '110px', perspective: '1400px' }}
    >
      {/* Background orbs */}
      <div className="glow-orb w-[700px] h-[700px] left-[-15%] top-[10%] opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)' }} />
      <div className="glow-orb w-[400px] h-[400px] right-[5%] bottom-[10%] opacity-15"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)' }} />

      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 80, rotateX: 12, rotateY: -4, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.95, ease: EXPO }}
        className="max-w-[1400px] mx-auto px-6 relative z-10 w-full pt-4"
        style={{ transformStyle: 'preserve-3d' }}
      >

        {/* Section eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-10 lg:mb-12"
        >
          <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }} />
          <span className="section-eyebrow">About Me</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* LEFT: Student snapshot */}
          <div className="lg:col-span-5 space-y-8 lg:space-y-10 order-1 lg:order-2">
            <div className="space-y-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em]" style={{ color: '#2a3a5a' }}>
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
                        background: 'rgba(8,16,40,0.70)',
                        border: '1px solid rgba(59,130,246,0.18)',
                        color: '#60a5fa',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
                      }}
                    >
                      {item.icon}
                    </div>
                    <span
                      className="font-display font-bold text-lg lg:text-xl tracking-tight transition-colors duration-300"
                      style={{ color: '#c7d9ff' }}
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
                background: 'rgba(10,18,40,0.55)',
                border: '1px solid rgba(59,130,246,0.14)',
                borderTop: '1px solid rgba(100,160,255,0.22)',
              }}
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.34em] block mb-3" style={{ color: '#2a3a5a' }}>
                Currently
              </span>
              <ul className="space-y-2 m-0 pl-5">
                {currentlyDoing.map((item) => (
                  <li key={item} className="font-body text-sm leading-relaxed" style={{ color: '#9fb2d9' }}>
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
              style={{ fontSize: 'clamp(2.3rem, 5vw, 4.4rem)', color: '#e8f0ff' }}
            >
              Learning, Building,
              <br />
              <span className="text-gradient">and Growing Daily</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.9, ease: EXPO }}
              className="space-y-6"
            >
              <p className="font-body leading-relaxed max-w-2xl" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#7a8fbb' }}>
                {about.description}
              </p>

              <div className="pt-4">
                <motion.a
                  href="#contact"
                  whileHover={{ x: 8 }}
                  className="inline-flex items-center gap-5 font-display font-bold group no-underline"
                  style={{ color: '#e8f0ff' }}
                >
                  <span
                    className="text-sm tracking-[0.28em] uppercase pb-2"
                    style={{ borderBottom: '1px solid #3b82f6' }}
                  >
                    Let's Connect
                  </span>
                  <FiArrowRight
                    className="w-5 h-5 group-hover:translate-x-2 transition-transform"
                    style={{ color: '#3b82f6' }}
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