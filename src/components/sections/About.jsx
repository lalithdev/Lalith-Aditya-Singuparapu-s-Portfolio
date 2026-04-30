import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { FiArrowRight, FiShield, FiTrendingUp, FiSettings } from 'react-icons/fi';

export default function About() {
  const { about } = portfolioData;

  const philosophy = [
    { text: "Build for scale.", icon: <FiTrendingUp /> },
    { text: "Design for trust.", icon: <FiShield /> },
    { text: "Engineer for clarity.", icon: <FiSettings /> }
  ];

  return (
    <section id="about" className="py-48 relative bg-[#020202] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute left-0 top-1/4 w-[800px] h-[800px] bg-indigo-950/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Section Tag */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-24"
        >
          <div className="w-10 h-px bg-indigo-600" />
          <span className="text-indigo-500 font-bold text-xs tracking-[0.5em] uppercase">Identity Architecture</span>
        </motion.div>

        {/* ASYMMETRICAL STORYTELLING GRID */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* LEFT: THE PHILOSOPHY (Col 5) */}
          <div className="lg:col-span-5 space-y-20 order-2 lg:order-1">
            <div className="space-y-12">
              <h3 className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.4em]">Core Philosophy</h3>
              <div className="space-y-8">
                {philosophy.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#080808] border border-white/5 flex items-center justify-center text-indigo-500 group-hover:border-indigo-500/50 transition-colors shadow-elite">
                      {item.icon}
                    </div>
                    <span className="text-2xl font-bold text-white tracking-tight">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* System Metrics Stat Box */}
            <div className="p-10 rounded-[2.5rem] bg-[#080808] border border-white/5 space-y-10 shadow-elite relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors" />
              {about.stats.map((stat, idx) => (
                <div key={idx} className="relative z-10">
                  <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-[0.3em] block mb-2">{stat.label}</span>
                  <div className="text-6xl font-bold text-white tracking-tighter group-hover:text-indigo-500 transition-colors">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: THE NARRATIVE (Col 7) */}
          <div className="lg:col-span-7 space-y-16 order-1 lg:order-2">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tighter"
            >
              Architecting <br />
              <span className="text-zinc-800">Future-Proof</span> <br />
              Systems
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-10"
            >
              <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed max-w-2xl font-medium">
                {about.description}
              </p>
              
              <div className="pt-6">
                <motion.a 
                  href="#contact"
                  whileHover={{ x: 10 }}
                  className="inline-flex items-center gap-6 text-white font-bold group"
                >
                  <span className="text-sm tracking-[0.3em] uppercase border-b border-indigo-600 pb-2">Initialize Connection</span>
                  <FiArrowRight className="w-6 h-6 text-indigo-600 group-hover:translate-x-2 transition-transform" />
                </motion.a>
              </div>
            </motion.div>

            {/* Credibility Roll */}
            <div className="pt-16 border-t border-white/5">
              <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.4em] mb-10 block">Trusted Architecture Context</span>
              <div className="flex flex-wrap gap-x-16 gap-y-8">
                {about.previouslyWorkedOn.map((company, idx) => (
                  <div key={idx} className="flex flex-col gap-1 group">
                    <span className="text-white font-bold text-lg tracking-tight group-hover:text-indigo-500 transition-colors uppercase">{company.name}</span>
                    <span className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest">{company.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}