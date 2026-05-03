import { motion } from 'framer-motion';
import { FiUsers, FiHeart, FiGlobe, FiLayout } from 'react-icons/fi';

const EXPO = [0.16, 1, 0.3, 1];

const activities = [
  {
    icon: <FiGlobe />,
    title: 'Tech Communities',
    desc: 'Active participant in tech communities and open-source discussions.',
    color: '#60a5fa',
  },
  {
    icon: <FiHeart />,
    title: 'Coding Bootcamps',
    desc: 'Volunteer at local coding bootcamps for underprivileged youth.',
    color: '#818cf8',
  },
  {
    icon: <FiUsers />,
    title: 'Architecture Meetups',
    desc: 'Regular attendee of web architecture and AI meetups.',
    color: '#22d3ee',
  },
  {
    icon: <FiLayout />,
    title: 'Design & Frontend',
    desc: 'Passionate about exploring modern frontend frameworks and UI/UX design.',
    color: '#34d399',
  },
];

export default function ExtraActivities() {
  return (
    <section
      id="extra-activities"
      className="section-padding relative overflow-hidden"
      style={{ borderTop: '1px solid rgba(59,130,246,0.08)' }}
    >
      {/* Orb */}
      <div
        className="glow-orb w-[450px] h-[450px] left-[-8%] top-[20%] opacity-12"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.30) 0%, transparent 70%)' }}
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
            <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)' }} />
            <span className="section-eyebrow">Extra Activities</span>
          </div>
          <h2
            className="font-display font-black tracking-tighter"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#e8f0ff', lineHeight: 1.0 }}
          >
            Community <span className="text-gradient">Involvement</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {activities.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: EXPO }}
              className="group relative p-6 rounded-2xl overflow-hidden transition-all duration-400"
              style={{
                background: 'linear-gradient(145deg, rgba(10,20,48,0.75) 0%, rgba(6,12,30,0.65) 100%)',
                border: '1px solid rgba(59,130,246,0.09)',
                borderTop: `1px solid ${item.color}28`,
                backdropFilter: 'blur(16px)',
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${item.color}0A 0%, transparent 70%)` }}
              />

              <div className="relative z-10">
                <div
                  className="w-10 h-10 mb-4 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: 'rgba(6,10,24,0.85)',
                    border: `1px solid ${item.color}30`,
                    color: item.color,
                    boxShadow: `0 0 16px ${item.color}15`,
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  className="font-display font-bold text-sm mb-2 tracking-tight"
                  style={{ color: '#c7d9ff' }}
                >
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: '#4a5a80' }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
