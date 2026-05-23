import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';

const EXPO = [0.16, 1, 0.3, 1];

export default function Skills() {
  const { skills } = portfolioData;
  const categories = skills.categories ?? [];

  return (
    <section id="skills" className="editorial-section relative">
      <div className="editorial-glow w-[480px] h-[480px] right-[-12%] top-[15%] opacity-40" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="editorial-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EXPO }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="editorial-rule" />
              <span className="editorial-eyebrow">Skills & Expertise</span>
            </div>
            <h2 className="editorial-heading editorial-heading-lg">
              My <span className="editorial-accent-serif">Skills</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 editorial-body text-sm md:text-base lg:text-right lg:max-w-sm lg:ml-auto"
          >
            Full stack across backend systems, web interfaces, and cloud-ready deployment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04, duration: 0.6, ease: EXPO }}
              className="editorial-panel p-4 md:p-5"
            >
              <div className="flex items-center gap-3 mb-3 pb-3 border-b border-white/[0.06]">
                <div
                  className="w-8 h-8 flex items-center justify-center text-sm shrink-0"
                  style={{ color: cat.accent, border: `1px solid ${cat.accent}35` }}
                >
                  {cat.icon}
                </div>
                <h3 className="font-display font-semibold text-xs md:text-sm tracking-tight" style={{ color: '#f5f5f5' }}>
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="font-body text-[0.72rem] md:text-xs px-2 py-1"
                    style={{
                      color: '#c8c8c8',
                      border: '1px solid rgba(255,255,255,0.08)',
                      background: 'rgba(255,255,255,0.02)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
