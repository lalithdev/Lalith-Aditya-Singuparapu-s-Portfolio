import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { FiShield, FiArrowUpRight } from 'react-icons/fi';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-32 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <FiShield className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-bold text-xs tracking-[0.5em] uppercase">Trust Architecture</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
            Enterprise <br />
            <span className="text-zinc-800">Validation</span>
          </h2>
        </div>

        {/* Validation Gallery */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-8 rounded-3xl bg-[#050505] border border-white/5 flex items-center justify-between hover:border-violet-500/30 transition-all duration-700 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-violet-500 text-xl shadow-elite group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">{cert.title}</h3>
                  <span className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest">{cert.issuer}</span>
                </div>
              </div>

              <div className="relative z-10 text-zinc-700 group-hover:text-cyan-400 transition-colors">
                <FiArrowUpRight className="w-6 h-6" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}