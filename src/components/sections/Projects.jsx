import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { FiArrowUpRight, FiGithub, FiExternalLink, FiServer, FiCpu, FiShield } from 'react-icons/fi';
import Card3D from '../common/Card3D';

export default function Projects() {
  const { flagshipProject, selectedWork } = portfolioData;

  return (
    <section id="projects" className="py-32 relative bg-[#020202] overflow-hidden">
      
      {/* Background Spatial Atmosphere */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-950/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6">

        {/* Cinematic Header */}
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl lg:text-[140px] font-bold tracking-tighter leading-[0.85] text-white"
          >
            PRODUCT <br />
            <span className="text-zinc-800">ARCHITECTURE</span>
          </motion.h2>
        </div>

        {/* FLAGSHIP PROJECT: THE ARCHITECTURAL CASE STUDY */}
        <div className="mb-48">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-12 gap-12 items-start"
          >
            {/* Left: Metadata & Context (3 Columns) */}
            <div className="lg:col-span-4 space-y-12 order-2 lg:order-1">
              <div>
                <span className="text-indigo-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block">System Context</span>
                <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">{flagshipProject.name}</h3>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  {flagshipProject.description}
                </p>
                <div className="flex items-center gap-6">
                  <a href={flagshipProject.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-indigo-500 transition-colors group">
                    <FiGithub className="w-5 h-5" />
                    <span className="text-sm font-bold uppercase tracking-widest group-hover:underline">Repository</span>
                  </a>
                  <a href={flagshipProject.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-indigo-500 transition-colors group">
                    <FiExternalLink className="w-5 h-5" />
                    <span className="text-sm font-bold uppercase tracking-widest group-hover:underline">Live System</span>
                  </a>
                </div>
              </div>

              {/* Technical Metrics */}
              <div className="p-8 rounded-3xl bg-zinc-900/10 border border-white/5 space-y-8">
                {flagshipProject.metrics.map((metric, i) => (
                  <div key={i} className="flex justify-between items-end border-b border-white/5 pb-4">
                    <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">{metric.label}</span>
                    <span className="text-lg font-bold text-white tracking-tighter">{metric.value}</span>
                  </div>
                ))}
                <div className="pt-4">
                  <div className="flex items-center gap-3 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 w-max">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-emerald-500 text-[9px] font-bold uppercase tracking-widest">System Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Exploded View Image & Features (8 Columns) */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <div className="relative group perspective-1000">
                <Card3D>
                  <div className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
                    <img 
                      src={flagshipProject.image} 
                      alt={flagshipProject.name} 
                      className="w-full h-auto object-cover scale-[1.02] group-hover:scale-100 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  </div>
                </Card3D>
                
                {/* Architecture Feature Tags */}
                <div className="mt-12 grid md:grid-cols-2 gap-8">
                  {flagshipProject.features.map((feature, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 w-5 h-5 flex-shrink-0 text-indigo-500">
                        {i === 0 ? <FiServer /> : i === 1 ? <FiCpu /> : <FiShield />}
                      </div>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SELECTED WORK: THE GRID */}
        <div className="grid md:grid-cols-2 gap-12 pt-24 border-t border-white/5">
          {selectedWork.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative p-10 rounded-[2.5rem] bg-[#080808] border border-white/5 overflow-hidden transition-all duration-700 hover:border-indigo-500/30">
                
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-950/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-400 group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-colors">
                      {project.icon}
                    </div>
                    <span className="text-indigo-600 font-mono text-[10px] uppercase tracking-[0.4em] mt-2">
                      {project.category}
                    </span>
                  </div>

                  <h4 className="text-3xl font-bold text-white mb-6 tracking-tight group-hover:text-indigo-500 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-zinc-500 leading-relaxed mb-10 max-w-sm group-hover:text-zinc-300 transition-colors">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-12">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-zinc-900 text-zinc-400 text-[10px] font-bold uppercase tracking-widest border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>

                  <motion.a 
                    href="#"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-3 text-white font-bold group/btn"
                  >
                    <span className="text-xs uppercase tracking-[0.3em] border-b border-indigo-600 pb-1">View Architecture</span>
                    <FiArrowUpRight className="w-4 h-4 text-indigo-500 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}