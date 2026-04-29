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
      className="py-24 px-6 md:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-cyan-400 font-medium mb-3">Achievements</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-14">
          Beyond academics
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
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