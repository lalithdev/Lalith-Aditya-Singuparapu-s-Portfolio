import { motion } from "framer-motion";
import { FiActivity } from 'react-icons/fi';

const activities = [
  "Active participant in tech communities and open-source discussions.",
  "Volunteer at local coding bootcamps for underprivileged youth.",
  "Regular attendee of web architecture and AI meetups.",
  "Passionate about exploring modern frontend frameworks and UI/UX design.",
];

export default function ExtraActivities() {
  return (
    <section
      id="extra-activities"
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
          <span className="section-label">Extra Activities</span>
          <h2 className="section-heading">
            Involvement
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-2xl border border-white/[0.06] bg-[#050505] hover:border-violet-500/30 transition-all duration-300"
            >
              <div className="w-10 h-10 mb-4 rounded-xl bg-violet-950/20 border border-violet-500/20 flex items-center justify-center text-violet-500 group-hover:scale-110 transition-transform">
                <FiActivity className="w-5 h-5" />
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-200 transition-colors">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
