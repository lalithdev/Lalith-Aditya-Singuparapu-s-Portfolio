import { motion, useScroll, useSpring } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { useRef } from 'react';

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
    <section id="education" ref={containerRef} className="py-32 relative bg-[#050505] overflow-hidden">
      
      {/* Background Spatial Ambience */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative">
        
        {/* Header */}
        <div className="flex justify-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tighter"
          >
            <span className="text-white opacity-20 uppercase block text-sm tracking-[1em] mb-4 text-center">Development</span>
            <span className="text-white">Academic</span> <span className="text-cyan-400">Timeline</span>
          </motion.h2>
        </div>

        <div className="relative">
          
          {/* The Vertical Animated Line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-[2px] bg-white/5 md:-translate-x-1/2" />
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-8 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-pink-500 to-violet-500 md:-translate-x-1/2 z-10" 
          />

          <div className="space-y-24 md:space-y-32">
            {educationTimeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div key={idx} className="relative flex items-center justify-center md:justify-between w-full">
                  
                  {/* Timeline Node */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="absolute left-[25px] md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-pink-500 z-20 md:-translate-x-1/2 shadow-[0_0_15px_rgba(236,72,153,0.5)]" 
                  />

                  {/* Content Container */}
                  <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${isEven ? 'md:text-right' : 'md:order-last md:text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="group"
                    >
                      {/* Year Indicator */}
                      <div className={`text-4xl md:text-6xl font-bold text-white tracking-tighter opacity-10 group-hover:opacity-100 transition-opacity duration-700 mb-4 font-mono ${isEven ? 'md:justify-end' : 'md:justify-start'} flex`}>
                        {item.period}
                      </div>

                      {/* Info Card */}
                      <div className="relative p-8 rounded-[2rem] bg-[#050505] border border-white/5 group-hover:border-violet-500/30 transition-colors shadow-2xl">
                        <div className={`absolute top-1/2 ${isEven ? '-right-2' : '-left-2'} -translate-y-1/2 w-4 h-4 bg-[#050505] border-t border-l border-white/5 rotate-45 hidden md:block group-hover:border-violet-500/30 transition-colors`} />
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight leading-tight">
                          {item.degree}
                        </h3>
                        <p className="text-violet-400 font-bold text-sm tracking-[0.2em] uppercase mb-4">
                          {item.institution}
                        </p>
                        
                        <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                          {item.achievements?.map((ach, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-white/5 text-zinc-500 text-xs font-medium border border-white/5">
                              {ach}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty space for the other side on desktop */}
                  <div className="hidden md:block md:w-[45%]" />
                </div>
              );
            })}
          </div>

          {/* Terminal Node */}
          <div className="absolute left-[31px] md:left-1/2 -bottom-2 w-2.5 h-2.5 rounded-full bg-cyan-400 md:-translate-x-1/2 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
        </div>

      </div>
    </section>
  );
}
