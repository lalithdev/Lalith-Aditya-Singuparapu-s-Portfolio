import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { FiExternalLink, FiCheckCircle, FiActivity } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

export default function SignatureProject() {
  const project = portfolioData.flagshipProject;

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-zinc-700" />
            <span className="text-zinc-400 font-mono text-sm tracking-wider uppercase">Signature Project</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-zinc-100"
          >
            Production Engineering
          </motion.h2>
        </div>

        {/* Project Showcase */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Presentation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-zinc-500 to-zinc-800 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative aspect-[16/10] bg-[#0a0a0a] rounded-xl border border-zinc-800/50 overflow-hidden flex flex-col">
              {/* Mock Browser Header */}
              <div className="h-10 bg-[#111] border-b border-zinc-800/50 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                </div>
                <div className="mx-auto flex-1 max-w-sm bg-[#1a1a1a] h-6 rounded-md border border-zinc-800 flex items-center justify-center">
                  <span className="text-[10px] text-zinc-500 font-mono">certifyme.production.app</span>
                </div>
              </div>
              
              {/* Mock App Content - Abstract UI to look premium */}
              <div className="flex-1 p-8 bg-grid-pattern relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
                <div className="flex gap-6 h-full opacity-80">
                  {/* Sidebar mock */}
                  <div className="w-32 flex flex-col gap-3">
                    <div className="w-full h-8 bg-zinc-800/50 rounded-md" />
                    <div className="w-full h-4 bg-zinc-900 rounded-md" />
                    <div className="w-full h-4 bg-zinc-900 rounded-md" />
                    <div className="w-full h-4 bg-zinc-900 rounded-md" />
                  </div>
                  {/* Main content mock */}
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="w-48 h-8 bg-zinc-800 rounded-md" />
                    <div className="flex gap-4">
                      <div className="flex-1 h-24 bg-gradient-to-br from-zinc-800/50 to-transparent border border-zinc-800/30 rounded-lg" />
                      <div className="flex-1 h-24 bg-gradient-to-br from-zinc-800/50 to-transparent border border-zinc-800/30 rounded-lg" />
                      <div className="flex-1 h-24 bg-gradient-to-br from-zinc-800/50 to-transparent border border-zinc-800/30 rounded-lg" />
                    </div>
                    <div className="flex-1 bg-zinc-900/50 rounded-lg border border-zinc-800/30 mt-2" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technical Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 text-emerald-400 text-sm font-medium mb-4">
              <FiActivity className="w-4 h-4" />
              {project.type}
            </div>
            
            <h3 className="text-3xl font-bold text-zinc-100 mb-4">{project.name}</h3>
            
            <p className="text-zinc-400 mb-8 leading-relaxed">
              {project.description}
            </p>

            <div className="space-y-4 mb-8">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-zinc-600 mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {project.techStack.map(tech => (
                <span key={tech} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-xs text-zinc-400 font-mono">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a 
                href={project.demo}
                className="flex items-center gap-2 bg-zinc-100 text-zinc-950 px-5 py-2.5 rounded-lg font-medium text-sm transition-transform hover:scale-105"
              >
                View Live System
                <FiExternalLink className="w-4 h-4" />
              </a>
              <a 
                href={project.github}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-800 text-zinc-300 hover:bg-zinc-900 transition-colors text-sm font-medium"
              >
                <FaGithub className="w-4 h-4" />
                Source Code
              </a>
            </div>

          </motion.div>
        </div>
        
        {/* Metrics Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-px bg-zinc-800/50 border border-zinc-800/50 rounded-2xl overflow-hidden glass-panel"
        >
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="bg-[#050505] p-6 text-center">
              <div className="text-zinc-500 text-xs uppercase tracking-widest mb-2 font-mono">{metric.label}</div>
              <div className="text-zinc-200 font-medium">{metric.value}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
