import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { FiArrowUpRight } from 'react-icons/fi';

export default function SelectedWork() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4"
            >
              Selected Work
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 max-w-lg"
            >
              A curated collection of scalable systems and intelligent applications.
            </motion.p>
          </div>
          <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href={portfolioData.personal.github}
            className="group flex items-center gap-2 text-sm text-zinc-300 hover:text-zinc-100 transition-colors"
          >
            View GitHub Archive 
            <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.selectedWork.map((work, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glass-card rounded-2xl p-8 md:p-10 flex flex-col h-full relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/0 via-zinc-800/0 to-zinc-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex-1">
                <div className="w-12 h-12 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:text-zinc-100">
                  {work.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-zinc-100 mb-3">{work.title}</h3>
                <p className="text-zinc-400 leading-relaxed mb-8">
                  {work.description}
                </p>
              </div>

              <div className="relative z-10 mt-auto pt-6 border-t border-zinc-800/50">
                <div className="flex flex-wrap gap-2 mb-6">
                  {work.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400/80 text-xs font-medium border border-emerald-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {work.tech.map(tech => (
                    <span key={tech} className="text-xs text-zinc-500 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
