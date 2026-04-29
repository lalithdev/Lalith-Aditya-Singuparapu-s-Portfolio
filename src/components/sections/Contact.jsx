import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-cyan-400 font-medium mb-3">
            Contact
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let’s build something impactful
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            I’m always open to internships, collaborations,
            full-stack opportunities, and innovative AI projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Left Card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <Mail className="text-cyan-400" />
                <p>2400031810cse4@gmail.com</p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-cyan-400" />
                <p>+91 83416 47137</p>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <a
                  href="https://github.com/lalithdev"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 transition"
                >
                  <FaGithub size={26} />
                </a>

                <a
                  href="https://linkedin.com/in/lalith-aditya-singuparapu"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 transition"
                >
                  <FaLinkedin size={26} />
                </a>
              </div>
            </div>
          </div>

          {/* Right CTA */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">
              Available for impactful work
            </h3>

            <p className="text-gray-400 mb-8">
              Full Stack Development • AI Systems • NLP Solutions •
              Production-grade Applications
            </p>

            <button className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold">
              Download Resume
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;