import { motion } from 'framer-motion';
import { FiAward, FiCpu, FiDroplet, FiZap } from 'react-icons/fi';

const EXPO = [0.16, 1, 0.3, 1];

const achievements = [
  {
    title: 'Code4Change Hackathon',
    desc: 'National-Level Hackathon Participant — engineered a rapid-deployment system under competition constraints.',
    icon: <FiZap />,
    color: '#60a5fa',
  },
  {
    title: 'Social Internship',
    desc: 'Agriculture Domain — applied technology-driven strategies to optimise water utilisation in distributed environments.',
    icon: <FiDroplet />,
    color: '#22d3ee',
  },
  {
    title: 'IoT Innovation',
    desc: 'Smoke Detection & Fire Alarm System — designed and built a real-time embedded safety solution.',
    icon: <FiCpu />,
    color: '#818cf8',
  },
  {
    title: 'Smart Irrigation System',
    desc: 'Sustainable Innovation — engineered an automated irrigation platform reducing resource waste.',
    icon: <FiAward />,
    color: '#34d399',
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section-padding relative overflow-hidden"
      style={{ borderTop: '1px solid rgba(59,130,246,0.08)' }}
    >
      {/* Orb */}
      <div
        className="glow-orb w-[500px] h-[500px] right-[-8%] top-[20%] opacity-15"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.28) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EXPO }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg, #3b82f6, #22d3ee)' }} />
            <span className="section-eyebrow">Milestones</span>
          </div>
          <h2
            className="font-display font-black tracking-tighter"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#e8f0ff', lineHeight: 1.0 }}
          >
            Beyond <span className="text-gradient">Academics</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: EXPO }}
              className="group relative p-6 rounded-2xl overflow-hidden transition-all duration-500"
              style={{
                background: 'linear-gradient(135deg, rgba(12,22,52,0.72) 0%, rgba(6,12,30,0.62) 100%)',
                border: '1px solid rgba(59,130,246,0.09)',
                borderTop: `1px solid ${item.color}28`,
                backdropFilter: 'blur(16px)',
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 0% 0%, ${item.color}0C 0%, transparent 60%)` }}
              />

              <div className="relative z-10 flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: 'rgba(6,10,24,0.85)',
                    border: `1px solid ${item.color}30`,
                    color: item.color,
                    boxShadow: `0 0 16px ${item.color}18`,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3
                    className="font-display font-bold text-base mb-1.5 tracking-tight"
                    style={{ color: '#c7d9ff' }}
                  >
                    {item.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#4a5a80' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}