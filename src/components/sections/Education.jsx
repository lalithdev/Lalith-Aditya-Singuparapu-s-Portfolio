import { motion, useScroll, useSpring } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { useRef } from 'react';
import { FiCalendar, FiCheckCircle } from 'react-icons/fi';

const EXPO = [0.16, 1, 0.3, 1];

export default function Education() {
  const { educationTimeline } = portfolioData;
  const containerRef = useRef(null);

  // Strict Chronological order: 10th (2021-2022) -> 12th/Intermediate (2022-2024) -> BTech (2024-2028)
  const tenthData = educationTimeline.find(item => item.period.includes('2021') || item.degree.toLowerCase().includes('10th') || item.degree.toLowerCase().includes('secondary')) || educationTimeline[2];
  const interData = educationTimeline.find(item => item.period.includes('2022') || item.degree.toLowerCase().includes('intermediate')) || educationTimeline[1];
  const btechData = educationTimeline.find(item => item.period.includes('2024') || item.degree.toLowerCase().includes('bachelor') || item.degree.toLowerCase().includes('b.tech')) || educationTimeline[0];

  const orderedTimeline = [
    {
      color: '#06b6d4',
      bgGlow: 'rgba(6, 182, 212, 0.25)',
      data: tenthData
    },
    {
      color: '#ec4899',
      bgGlow: 'rgba(236, 72, 153, 0.25)',
      data: interData
    },
    {
      color: '#f59e0b',
      bgGlow: 'rgba(245, 158, 11, 0.25)',
      data: btechData
    }
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 60%', 'end 40%'],
  });

  const lineScaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001
  });

  return (
    <section
      ref={containerRef}
      id="education"
      className="editorial-section relative overflow-hidden py-24 md:py-36 bg-[#020408]"
    >
      {/* Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-radial from-[#06b6d4]/10 via-[#ec4899]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        
        {/* ── TOP HEADER BLOCK ── */}
        <div className="text-center mb-24 md:mb-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-mono text-xs uppercase tracking-[0.5em] text-[#06b6d4] mb-3"
          >
            Education
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: EXPO }}
          >
            <h2 className="font-display font-black tracking-tighter leading-none text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Academic{' '}
              <span
                className="text-gradient"
                style={{
                  background: 'linear-gradient(135deg, #06b6d4 0%, #ec4899 50%, #f59e0b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Timeline
              </span>
            </h2>
          </motion.div>
        </div>

        {/* ── CENTRAL AXIS TIMELINE GRID CONTAINER ── */}
        <div className="relative max-w-[1050px] mx-auto">
          
          {/* Central Vertical Axis Line */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[3px] bg-white/10 z-0 rounded-full">
            <motion.div
              style={{ scaleY: lineScaleY, originY: 0 }}
              className="w-full h-full bg-gradient-to-b from-[#06b6d4] via-[#ec4899] to-[#f59e0b] shadow-[0_0_20px_#06b6d4] rounded-full"
            />
          </div>

          {/* Timeline Items List */}
          <div className="space-y-24 md:space-y-36 relative z-10">
            
            {/* ── ITEM 01: 10TH GRADE (RIGHT SIDE) ── */}
            <div className="relative flex flex-col md:flex-row items-center">
              
              {/* Left Empty Space */}
              <div className="w-full md:w-1/2 pr-0 md:pr-16 hidden md:block" />

              {/* Central Node Marker */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center">
                <div
                  className="w-10 h-10 rounded-full bg-[#020408] border-2 flex items-center justify-center transition-all duration-500"
                  style={{
                    borderColor: orderedTimeline[0].color,
                    boxShadow: `0 0 25px ${orderedTimeline[0].bgGlow}`
                  }}
                >
                  <div
                    className="w-4 h-4 rounded-full animate-pulse"
                    style={{ backgroundColor: orderedTimeline[0].color }}
                  />
                </div>
              </div>

              {/* Right Side Content Card */}
              <div className="w-full md:w-1/2 pl-0 md:pl-16 relative">
                
                {/* Horizontal Stem Line Connecting Node to Card */}
                <div
                  className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 h-[2px] w-16"
                  style={{ backgroundColor: orderedTimeline[0].color }}
                />

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: EXPO }}
                  className="relative p-6 sm:p-8 rounded-3xl bg-[#080d1a]/95 border border-white/15 backdrop-blur-2xl shadow-2xl group hover:border-[#06b6d4]/60 transition-all duration-500"
                >
                  <div className="flex items-center gap-2 mb-3 font-mono text-xs font-bold text-[#06b6d4]">
                    <FiCalendar className="w-4 h-4 text-[#06b6d4]" />
                    <span>{orderedTimeline[0].data.period}</span>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-2 leading-tight">
                    {orderedTimeline[0].data.degree}
                  </h3>
                  
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#94a3b8] font-semibold mb-6">
                    {orderedTimeline[0].data.institution}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-white/10">
                    {orderedTimeline[0].data.achievements?.map((ach, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-[#cbd5e1]">
                        <FiCheckCircle className="w-4 h-4 shrink-0 text-[#06b6d4]" />
                        <span className="font-medium">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* ── ITEM 02: INTERMEDIATE / 12TH (LEFT SIDE) ── */}
            <div className="relative flex flex-col md:flex-row items-center">
              
              {/* Left Side Content Card */}
              <div className="w-full md:w-1/2 pr-0 md:pr-16 text-left relative">
                
                {/* Horizontal Stem Line Connecting Card to Node */}
                <div
                  className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 h-[2px] w-16"
                  style={{ backgroundColor: orderedTimeline[1].color }}
                />

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: EXPO }}
                  className="relative p-6 sm:p-8 rounded-3xl bg-[#080d1a]/95 border border-white/15 backdrop-blur-2xl shadow-2xl group hover:border-[#ec4899]/60 transition-all duration-500"
                >
                  <div className="flex items-center gap-2 mb-3 font-mono text-xs font-bold text-[#ec4899]">
                    <FiCalendar className="w-4 h-4 text-[#ec4899]" />
                    <span>{orderedTimeline[1].data.period}</span>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-2 leading-tight">
                    {orderedTimeline[1].data.degree}
                  </h3>
                  
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#94a3b8] font-semibold mb-6">
                    {orderedTimeline[1].data.institution}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-white/10">
                    {orderedTimeline[1].data.achievements?.map((ach, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-[#cbd5e1]">
                        <FiCheckCircle className="w-4 h-4 shrink-0 text-[#ec4899]" />
                        <span className="font-medium">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Central Node Marker */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center">
                <div
                  className="w-10 h-10 rounded-full bg-[#020408] border-2 flex items-center justify-center transition-all duration-500"
                  style={{
                    borderColor: orderedTimeline[1].color,
                    boxShadow: `0 0 25px ${orderedTimeline[1].bgGlow}`
                  }}
                >
                  <div
                    className="w-4 h-4 rounded-full animate-pulse"
                    style={{ backgroundColor: orderedTimeline[1].color }}
                  />
                </div>
              </div>

              {/* Right Empty Space */}
              <div className="w-full md:w-1/2 pl-0 md:pl-16 hidden md:block" />
            </div>

            {/* ── ITEM 03: B.TECH (RIGHT SIDE) ── */}
            <div className="relative flex flex-col md:flex-row items-center">
              
              {/* Left Empty Space */}
              <div className="w-full md:w-1/2 pr-0 md:pr-16 hidden md:block" />

              {/* Central Node Marker */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center">
                <div
                  className="w-10 h-10 rounded-full bg-[#020408] border-2 flex items-center justify-center transition-all duration-500"
                  style={{
                    borderColor: orderedTimeline[2].color,
                    boxShadow: `0 0 25px ${orderedTimeline[2].bgGlow}`
                  }}
                >
                  <div
                    className="w-4 h-4 rounded-full animate-pulse"
                    style={{ backgroundColor: orderedTimeline[2].color }}
                  />
                </div>
              </div>

              {/* Right Side Content Card */}
              <div className="w-full md:w-1/2 pl-0 md:pl-16 relative">
                
                {/* Horizontal Stem Line Connecting Node to Card */}
                <div
                  className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 h-[2px] w-16"
                  style={{ backgroundColor: orderedTimeline[2].color }}
                />

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: EXPO }}
                  className="relative p-6 sm:p-8 rounded-3xl bg-[#080d1a]/95 border border-white/15 backdrop-blur-2xl shadow-2xl group hover:border-[#f59e0b]/60 transition-all duration-500"
                >
                  <div className="flex items-center gap-2 mb-3 font-mono text-xs font-bold text-[#f59e0b]">
                    <FiCalendar className="w-4 h-4 text-[#f59e0b]" />
                    <span>{orderedTimeline[2].data.period}</span>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-2 leading-tight">
                    {orderedTimeline[2].data.degree}
                  </h3>
                  
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#94a3b8] font-semibold mb-6">
                    {orderedTimeline[2].data.institution}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-white/10">
                    {orderedTimeline[2].data.achievements?.map((ach, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-[#cbd5e1]">
                        <FiCheckCircle className="w-4 h-4 shrink-0 text-[#f59e0b]" />
                        <span className="font-medium">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}