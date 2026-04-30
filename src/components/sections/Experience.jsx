import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { FiBriefcase } from 'react-icons/fi';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-32 relative bg-[#020202]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <FiBriefcase className="w-5 h-5 text-indigo-500" />
            <span className="text-indigo-500 font-bold text-xs tracking-[0.5em] uppercase">Engineering Trajectory</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
            Architectural <br />
            <span className="text-zinc-800">History</span>
          </h2>
        </div>

        {/* Experience List */}
        <div className="space-y-12">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group grid md:grid-cols-12 gap-8 items-start py-12 border-t border-white/5 hover:bg-white/[0.01] transition-colors px-4 -mx-4 rounded-3xl"
            >
              {/* Period */}
              <div className="md:col-span-3">
                <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.4em]">{exp.period}</span>
              </div>

              {/* Role & Company */}
              <div className="md:col-span-4">
                <h3 className="text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-indigo-500 transition-colors">{exp.role}</h3>
                <span className="text-indigo-900 font-bold text-sm tracking-[0.2em] uppercase">{exp.company}</span>
              </div>

              {/* Description */}
              <div className="md:col-span-5">
                <p className="text-zinc-500 leading-relaxed text-sm mb-6">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest border border-white/10 px-2 py-1 rounded-md bg-white/5">
                      {skill}
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