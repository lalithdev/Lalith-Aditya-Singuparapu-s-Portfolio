import { motion, useScroll, useSpring } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { useRef } from 'react';

const EXPO = [0.16, 1, 0.3, 1];

export default function Education() {
  const { educationTimeline } = portfolioData;
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section
      id="education"
      ref={containerRef}
      className="section-padding relative overflow-hidden bg-black"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#4a5a80] mb-6"
          >
            Development
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display font-black tracking-tighter leading-none"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
          >
            <span className="text-white">Academic</span>{' '}
            <span 
              className="text-gradient" 
              style={{ background: 'linear-gradient(to right, #06b6d4, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              Timeline
            </span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Center Line (Base) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          
          {/* Vertical Center Line (Animated) */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#ec4899] via-[#8b5cf6] to-[#06b6d4] -translate-x-1/2 z-10"
          />

          <div className="space-y-40 md:space-y-48">
            {educationTimeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex items-center justify-center w-full">
                  {/* Node Marker */}
                  <div 
                    className="absolute left-1/2 w-2.5 h-2.5 rounded-full border-2 border-[#ec4899] bg-black z-20 -translate-x-1/2"
                    style={{ top: '0px' }}
                  />

                  <div className="grid md:grid-cols-2 w-full gap-10 md:gap-20 items-start">
                    
                    {/* Content Block */}
                    <div className={`${isEven ? 'md:order-1 md:text-right' : 'md:order-2 md:text-left'} flex flex-col items-center ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: EXPO }}
                        className="w-full max-w-[480px]"
                      >
                        {/* Year Text */}
                        <div 
                          className="font-display font-black text-5xl md:text-7xl text-white/10 mb-6 tracking-tighter leading-none"
                        >
                          {item.period}
                        </div>
                        
                        {/* The Card */}
                        <div 
                          className="relative p-8 rounded-3xl bg-[#080c14] border border-white/5 backdrop-blur-xl group hover:border-[#8b5cf6]/30 transition-all duration-500 shadow-2xl"
                        >
                          {/* Decorative Corner Glow */}
                          <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#8b5cf6]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

                          <h3 className="font-display font-bold text-2xl text-white mb-2 leading-tight tracking-tight">
                            {item.degree}
                          </h3>
                          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8b5cf6] mb-6 font-semibold">
                            {item.institution}
                          </p>
                          
                          <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                            {item.achievements?.map((ach, i) => (
                              <span 
                                key={i} 
                                className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 font-mono text-[9px] uppercase tracking-wider text-[#7a8fbb] group-hover:border-white/10 group-hover:text-white/60 transition-colors"
                              >
                                {ach}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Empty Slot for Alternating */}
                    <div className={`${isEven ? 'md:order-2' : 'md:order-1'} hidden md:block`} />

                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
