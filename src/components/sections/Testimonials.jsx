import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';

export default function Testimonials() {
  const { testimonials } = portfolioData;

  // We duplicate the array to allow for a seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="
        relative
        z-10
        w-full
        bg-[#0C0C0C]
        pt-20
        pb-32
        overflow-hidden
      "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 mb-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col items-center"
        >
          <h2
            className="
              text-center
              font-display
              font-black
              tracking-[-0.05em]
              leading-none
              text-white
              z-10
            "
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            }}
          >
            What People Say <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e0e0e0] to-[#808080]">
              About Me
            </span>
          </h2>
          
          {/* Floating Emoji Right */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 md:right-20 top-0 md:top-10 text-5xl md:text-7xl z-0 hidden sm:block"
          >
            😍
          </motion.div>
          
          {/* Floating Emoji Left */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -left-4 md:left-20 bottom-0 md:-bottom-10 text-5xl md:text-7xl z-0 hidden sm:block"
          >
            😲
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex w-full overflow-hidden py-4">
        {/* Fading Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 px-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
          // Ensure width accommodates duplicate elements
          style={{ width: "max-content" }}
        >
          {duplicatedTestimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="
                flex-shrink-0
                w-[300px]
                sm:w-[380px]
                md:w-[450px]
                rounded-[32px]
                border border-white/20
                bg-[#111]
                p-6
                md:p-8
                flex flex-col gap-6
                hover:border-white/40
                transition-colors
                duration-300
              "
            >
              <p className="text-white/80 text-sm md:text-base leading-relaxed flex-grow">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-white/10 shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-xs md:text-sm tracking-wider uppercase">
                    {testimonial.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Closing Animation Area */}
      <div className="mt-32 w-full flex justify-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="relative"
        >
           <div className="text-[100px] md:text-[150px] leading-none select-none">
             🤝
           </div>
        </motion.div>
      </div>
    </section>
  );
}
