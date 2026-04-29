import { motion } from "framer-motion";

const certifications = [
  "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
  "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
  "Software Engineer Intern – HackerRank",
];

function Certifications() {
  return (
    <section
      className="py-24 px-6 md:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-cyan-400 font-medium mb-3">Certifications</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-14">
          Verified technical growth
        </h2>

        <div className="grid gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              {cert}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;