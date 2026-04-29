import { motion } from "framer-motion";

const experiences = [
  {
    title: "Certification Tracking Platform",
    role: "Full Stack Developer",
    duration: "Feb 2026 – Present",
    points: [
      "Built production-level certification tracking workflows",
      "Developing backend services using Spring Boot + Hibernate",
      "Designed scalable React frontend architecture",
      "Structured PostgreSQL integration for real-time updates",
    ],
  },
  {
    title: "Project Management Portal",
    role: "Full Stack Developer",
    duration: "Nov 2025",
    points: [
      "Built student submission + faculty evaluation system",
      "Developed Node.js backend APIs",
      "Designed responsive React workflows",
      "Managed evaluation lifecycle and data updates",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-cyan-400 font-medium mb-3">Experience</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-14">
          Building systems with real-world value
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <div className="flex flex-col md:flex-row md:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                  <p className="text-cyan-400">{exp.role}</p>
                </div>

                <p className="text-gray-400">{exp.duration}</p>
              </div>

              <ul className="mt-6 space-y-3 text-gray-300">
                {exp.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;