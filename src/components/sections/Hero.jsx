import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 font-medium mb-3">
            AI Full Stack Developer
          </p>

          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6">
            Lalith Aditya
            <br />
            Singuparapu
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8">
            Building scalable full-stack applications with modern UI,
            powerful backend systems, and AI-driven problem solving.
            Passionate about React, Spring Boot, and NLP systems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold flex items-center gap-2">
              View Projects
              <ArrowRight size={18} />
            </button>

            <button className="px-6 py-3 rounded-xl border border-white/20 hover:border-cyan-400 transition">
              Download Resume
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a href="https://github.com/lalithdev" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
                <FaGithub size={24} />
                
                         </a>

            <a href="https://linkedin.com/in/lalith-aditya-singuparapu" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
              <FaLinkedin size={24} />
            </a>
          </div>
        </motion.div>

        {/* Right Side Premium Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
            <div className="space-y-6">
              <div>
                <p className="text-gray-400 text-sm">Current Focus</p>
                <h3 className="text-xl font-semibold">
                  AI + Full Stack Systems
                </h3>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Flagship Project</p>
                <h3 className="text-xl font-semibold">
                  CertifyMe Platform
                </h3>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Tech Stack</p>
                <h3 className="text-xl font-semibold">
                  React • Spring Boot • PostgreSQL
                </h3>
              </div>

              <div>
                <p className="text-gray-400 text-sm">CGPA</p>
                <h3 className="text-xl font-semibold">
                  9.09
                </h3>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;