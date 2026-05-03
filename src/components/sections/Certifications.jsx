import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { FiShield, FiArrowUpRight } from 'react-icons/fi';

const EXPO = [0.16, 1, 0.3, 1];

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      {/* Orb */}
      <div className="glow-orb w-[500px] h-[500px] left-[-10%] top-[10%] opacity-15"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <FiShield className="w-4 h-4" style={{ color: '#22d3ee' }} />
            <span className="section-eyebrow">Trust Architecture</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EXPO }}
            className="font-display font-black tracking-tighter"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#e8f0ff', lineHeight: 1.0 }}
          >
            Enterprise <br />
            <span className="text-gradient">Validation</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.7, ease: EXPO }}
              className="group relative p-7 rounded-2xl flex items-center justify-between overflow-hidden transition-all duration-500"
              style={{
                background: 'linear-gradient(135deg, rgba(14,24,55,0.70) 0%, rgba(8,15,38,0.60) 100%)',
                border: '1px solid rgba(59,130,246,0.10)',
                borderTop: '1px solid rgba(100,160,255,0.16)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.06) 0%, transparent 60%)' }} />

              <div className="relative z-10 flex items-center gap-5">
                <div
                  className="w-13 h-13 w-[3.25rem] h-[3.25rem] rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: 'rgba(6,10,24,0.80)',
                    border: '1px solid rgba(6,182,212,0.20)',
                    boxShadow: '0 0 20px rgba(6,182,212,0.08)',
                  }}
                >
                  {cert.icon}
                </div>
                <div>
                  <h3
                    className="font-display font-bold text-base tracking-tight mb-1 transition-colors duration-300 group-hover:text-gradient"
                    style={{ color: '#c7d9ff' }}
                  >
                    {cert.title}
                  </h3>
                  <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: '#2a3a5a' }}>
                    {cert.issuer}
                  </span>
                </div>
              </div>

              <div
                className="relative z-10 transition-colors duration-300 group-hover:text-cyan-400"
                style={{ color: '#2a3a5a' }}
              >
                <FiArrowUpRight className="w-5 h-5" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}