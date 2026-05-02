import { motion } from "framer-motion";

const achievements = [
  "Code4Change National-Level Hackathon Participant",
  "Social Internship – Agriculture Domain",
  "Smoke Detection and Fire Alarm System (IoT)",
  "Smart Irrigation System – Sustainable Innovation",
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 px-6 md:px-10 border-t border-white/5 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="section-label">Achievements</span>
          <h2 className="section-heading">
            Beyond academics
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl p-6 hover:border-pink-500/30 transition-colors text-white font-medium"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;