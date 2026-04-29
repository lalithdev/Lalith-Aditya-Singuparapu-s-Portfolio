import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 font-medium mb-3">About Me</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Building real products,
            <br />
            not just projects.
          </h2>

          <p className="text-gray-400 leading-relaxed text-lg">
            I’m Lalith Aditya Singuparapu, an AI Full Stack Developer and
            AI + NLP enthusiast focused on building scalable applications
            with strong backend architecture and clean frontend systems.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg mt-5">
            My flagship project, CertifyMe, is a production-level
            certification tracking platform helping students and
            administrators manage certification workflows efficiently.
            I enjoy solving real-world problems using React, Spring Boot,
            PostgreSQL, and modern development practices.
          </p>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
        >
          <div className="space-y-6">
            <div>
              <p className="text-gray-400 text-sm">Education</p>
              <h3 className="text-xl font-semibold">
                B.Tech CSE — KL University
              </h3>
            </div>

            <div>
              <p className="text-gray-400 text-sm">CGPA</p>
              <h3 className="text-xl font-semibold">9.09</h3>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Current Focus</p>
              <h3 className="text-xl font-semibold">
                Full Stack + AI Systems
              </h3>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Special Interest</p>
              <h3 className="text-xl font-semibold">
                NLP + Production Systems
              </h3>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;