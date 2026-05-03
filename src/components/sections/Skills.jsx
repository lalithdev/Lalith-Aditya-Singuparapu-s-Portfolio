import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { FiCpu, FiLayers } from 'react-icons/fi';

const EXPO = [0.16, 1, 0.3, 1];

export default function Skills() {
  const { skills } = portfolioData;

  const categories = [
    {
      id: 'cognitive',
      label: 'Cognitive Stack',
      sublabel: 'Engineering Logic & AI',
      icon: <FiCpu />,
      accentColor: '#60a5fa',
      items: [
        ...skills.frontend.map(s => ({ ...s, layer: 'Client' })),
        ...skills.cloudAndTools.map(s => ({ ...s, layer: 'System' })),
      ],
    },
    {
      id: 'execution',
      label: 'Execution Stack',
      sublabel: 'Distributed Architecture',
      icon: <FiLayers />,
      accentColor: '#818cf8',
      items: [
        ...skills.backend.map(s => ({ ...s, layer: 'Server' })),
        ...skills.database.map(s => ({ ...s, layer: 'Data' })),
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Grid + orbs */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="glow-orb w-[500px] h-[500px] right-[-10%] top-[20%] opacity-15"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg, #818cf8, #06b6d4)' }} />
            <span className="section-eyebrow">Skills & Tech Stack</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EXPO }}
            className="font-display font-black tracking-tighter leading-[0.9]"
            style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', color: '#e8f0ff' }}
          >
            Technical <br />
            <span className="text-gradient">Expertise</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-10 relative">
          {/* Centre line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(99,102,241,0.18), transparent)' }} />

          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: EXPO }}
              className="space-y-8"
            >
              {/* Category header */}
              <div className="flex items-center gap-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl shrink-0"
                  style={{
                    background: 'rgba(8,16,40,0.70)',
                    border: `1px solid ${cat.accentColor}30`,
                    color: cat.accentColor,
                    boxShadow: `0 0 20px ${cat.accentColor}15`,
                  }}
                >
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl tracking-tight" style={{ color: '#e8f0ff' }}>
                    {cat.label}
                  </h3>
                  <p className="font-mono text-[9px] uppercase tracking-widest mt-0.5" style={{ color: '#2a3a5a' }}>
                    {cat.sublabel}
                  </p>
                </div>
              </div>

              {/* Skill pills */}
              <div className="space-y-3">
                {cat.items.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                    className="group relative p-5 rounded-xl flex items-center justify-between transition-all duration-400"
                    style={{
                      background: 'rgba(8,16,40,0.55)',
                      border: '1px solid rgba(59,130,246,0.09)',
                      borderTop: '1px solid rgba(100,160,255,0.12)',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                      style={{ background: `linear-gradient(135deg, ${cat.accentColor}08 0%, transparent 60%)` }}
                    />

                    <div className="flex items-center gap-4 relative z-10">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300"
                        style={{
                          background: 'rgba(6,10,24,0.80)',
                          border: '1px solid rgba(59,130,246,0.14)',
                          color: '#4a5a80',
                        }}
                      >
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="font-body font-semibold text-sm tracking-tight" style={{ color: '#c7d9ff' }}>
                          {skill.name}
                        </h4>
                        <span className="font-mono text-[8px] uppercase tracking-widest" style={{ color: '#2a3a5a' }}>
                          {skill.layer} Layer
                        </span>
                      </div>
                    </div>

                    <div
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full relative z-10"
                      style={{ background: `${cat.accentColor}10`, border: `1px solid ${cat.accentColor}20` }}
                    >
                      <div className="w-1 h-1 rounded-full animate-pulse-orb" style={{ background: cat.accentColor }} />
                      <span className="font-mono text-[8px] uppercase tracking-widest" style={{ color: cat.accentColor }}>
                        Optimized
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-10 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ borderTop: '1px solid rgba(59,130,246,0.10)' }}
        >
          <p className="font-body text-sm max-w-sm leading-relaxed" style={{ color: '#4a5a80' }}>
            Every system is designed for{' '}
            <span style={{ color: '#93c5fd' }}>maximum throughput</span> and{' '}
            <span style={{ color: '#93c5fd' }}>low-latency execution</span> across distributed environments.
          </p>
          <div className="flex gap-3">
            {['CI/CD Ready', 'Scalable Design'].map(tag => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}