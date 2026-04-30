import { motion } from 'framer-motion';

export default function Philosophy() {
  return (
    <section className="py-32 relative bg-[#050505] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-zinc-500 font-mono text-sm tracking-[0.2em] uppercase mb-8">Engineering Ethos</p>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-200 leading-[1.2] mb-10 max-w-4xl mx-auto">
            "I build systems that don't just solve today's problems, but <span className="text-zinc-400 italic">scale elegantly</span> for tomorrow's challenges."
          </h2>

          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-zinc-500">
            <span className="glass-panel px-4 py-2 rounded-full">Systems Thinking</span>
            <span className="glass-panel px-4 py-2 rounded-full">AI Integration</span>
            <span className="glass-panel px-4 py-2 rounded-full">Clean Code Architecture</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
