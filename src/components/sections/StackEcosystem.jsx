import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { FiCpu, FiLayers, FiTerminal, FiGlobe, FiDatabase, FiCloud, FiZap, FiCode } from 'react-icons/fi';

export default function StackEcosystem() {
  const { skills } = portfolioData;

  const categories = [
    {
      id: "cognitive",
      label: "Cognitive Stack",
      sublabel: "Engineering Logic & AI",
      icon: <FiCpu />,
      items: [
        ...skills.frontend.map(s => ({ ...s, layer: "Client" })),
        ...skills.cloudAndTools.map(s => ({ ...s, layer: "System" }))
      ]
    },
    {
      id: "execution",
      label: "Execution Stack",
      sublabel: "Distributed Architecture",
      icon: <FiLayers />,
      items: [
        ...skills.backend.map(s => ({ ...s, layer: "Server" })),
        ...skills.database.map(s => ({ ...s, layer: "Data" }))
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 relative bg-[#020202] overflow-hidden">
      
      {/* Background Spatial Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-px bg-indigo-600" />
            <span className="text-indigo-500 font-bold text-xs tracking-[0.5em] uppercase">Engineering Ecosystem</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9]">
            Systemic <br />
            <span className="text-zinc-800 text-6xl md:text-8xl">Architecture</span>
          </h2>
        </div>

        {/* System Map Grid */}
        <div className="grid lg:grid-cols-2 gap-12 relative">
          
          {/* Central Connection Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent -translate-x-1/2" />

          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative space-y-12"
            >
              {/* Category Header */}
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 flex items-center justify-center text-indigo-500 text-2xl shadow-elite">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{cat.label}</h3>
                  <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">{cat.sublabel}</p>
                </div>
              </div>

              {/* Skills List (Architectural View) */}
              <div className="space-y-4">
                {cat.items.map((skill, sIdx) => (
                  <motion.div 
                    key={sIdx}
                    whileHover={{ x: 10 }}
                    className="group relative p-6 rounded-2xl bg-[#080808] border border-white/5 flex items-center justify-between hover:border-indigo-500/30 transition-all duration-500"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-indigo-500 group-hover:border-indigo-500/50 transition-colors">
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="text-zinc-100 font-bold tracking-tight">{skill.name}</h4>
                        <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">{skill.layer} Layer</span>
                      </div>
                    </div>
                    
                    {/* Status Indicator */}
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/5 border border-indigo-500/10">
                      <div className="w-1 h-1 rounded-full bg-indigo-500" />
                      <span className="text-[8px] font-mono text-indigo-400 uppercase tracking-widest">Optimized</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Architecture Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="p-3 rounded-xl bg-zinc-900 border border-white/5">
              <FiZap className="w-5 h-5 text-indigo-500" />
            </div>
            <p className="text-zinc-500 text-sm max-w-sm leading-relaxed">
              Every system is designed for <span className="text-white">maximum throughput</span> and <span className="text-white">low-latency execution</span> across distributed environments.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">CI/CD Ready</div>
            <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Scalable Design</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
