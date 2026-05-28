import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { FiX } from 'react-icons/fi';

export default function Testimonials() {
const { testimonials } = portfolioData;

const sectionRef = useRef(null);
const [isModalOpen, setIsModalOpen] = useState(false);

const [formData, setFormData] = useState({
name: '',
role: '',
rating: 5,
message: '',
});

const handleSubmit = (e) => {
e.preventDefault();


const subject = encodeURIComponent(
  `Testimonial from ${formData.name}`
);

const body = encodeURIComponent(
  `Name: ${formData.name}


Role: ${formData.role}
Rating: ${formData.rating} Stars

Testimonial:
${formData.message}`
);


window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;

setIsModalOpen(false);

setFormData({
  name: '',
  role: '',
  rating: 5,
  message: '',
});

};

/*
============================================
CINEMATIC TRANSITION LOGIC
============================================
*/

const { scrollYProgress } = useScroll({
target: sectionRef,
offset: ['start end', 'start center'],
});

// section reveal
const y = useTransform(scrollYProgress, [0, 1], [180, 0]);

const opacity = useTransform(
scrollYProgress,
[0, 0.4, 1],
[0.2, 0.6, 1]
);

const scale = useTransform(
scrollYProgress,
[0, 1],
[0.94, 1]
);

// top project closing effect
const topMaskOpacity = useTransform(
scrollYProgress,
[0, 0.35],
[1, 0]
);

const topMaskY = useTransform(
scrollYProgress,
[0, 1],
[0, -180]
);

// cinematic reveal
const clipPath = useTransform(
scrollYProgress,
[0, 1],
[
'inset(18% 0% 0% 0% round 60px)',
'inset(0% 0% 0% 0% round 60px)',
]
);

/*
============================================
INFINITE MARQUEE
============================================
*/

const row1 = [...testimonials, ...testimonials];

const row2Base = [...testimonials].reverse();

const row2 = [...row2Base, ...row2Base];

return (
<motion.section
ref={sectionRef}
id="testimonials"
style={{
y,
opacity,
scale,
clipPath,
}}
className="
relative
z-20
w-full
    bg-[#050505]

    -mt-[100vh]

    pt-16
    md:pt-24

    pb-32

    rounded-[40px]
    sm:rounded-[50px]
    md:rounded-[60px]

    border-t
    border-b
    border-white/10

    shadow-[0_-20px_40px_rgba(0,0,0,0.5)]

    overflow-hidden
  "
>

  {/* ============================== */}
  {/* PROJECTS CLOSING TRANSITION */}
  {/* ============================== */}

  <motion.div
    style={{
      opacity: topMaskOpacity,
      y: topMaskY,
    }}
    className="
      absolute
      top-0
      left-0
      w-full
      h-[260px]

      z-40

      pointer-events-none

      bg-gradient-to-b
      from-[#050505]
      via-[#050505]
      to-transparent
    "
  />

  {/* top cinematic glow */}
  <div
    className="
      absolute
      top-0
      left-0
      w-full
      h-40

      bg-gradient-to-b
      from-transparent
      via-[#050505]/80
      to-[#050505]

      z-20
      pointer-events-none
    "
  />

  {/* center glow */}
  <div
    className="
      absolute
      inset-0
      bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]
      pointer-events-none
    "
  />

  {/* ================================= */}
  {/* HEADING */}
  {/* ================================= */}

  <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 mb-10 md:mb-12 relative z-30">

    <motion.div
      initial={{
        opacity: 0,
        y: 120,
        scale: 0.85,
        filter: 'blur(10px)',
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1],
      }}
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
        What People
        <br />

        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e0e0e0] to-[#808080]">
          Are Saying
        </span>
      </h2>

      {/* floating emoji right */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          -right-4
          md:right-20
          top-0
          md:top-10

          text-5xl
          md:text-7xl

          z-0
          hidden
          sm:block
        "
      >
        😍
      </motion.div>

      {/* floating emoji left */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="
          absolute
          -left-4
          md:left-20
          bottom-0
          md:-bottom-10

          text-5xl
          md:text-7xl

          z-0
          hidden
          sm:block
        "
      >
        😲
      </motion.div>
    </motion.div>
  </div>

  {/* ================================= */}
  {/* MARQUEE */}
  {/* ================================= */}

  <div className="relative flex flex-col gap-6 w-full overflow-hidden py-4 z-20">

    {/* fade left */}
    <div
      className="
        absolute
        left-0
        top-0
        bottom-0

        w-20
        md:w-40

        bg-gradient-to-r
        from-[#050505]
        to-transparent

        z-10
        pointer-events-none
      "
    />

    {/* fade right */}
    <div
      className="
        absolute
        right-0
        top-0
        bottom-0

        w-20
        md:w-40

        bg-gradient-to-l
        from-[#050505]
        to-transparent

        z-10
        pointer-events-none
      "
    />

    {/* row 1 */}
    <motion.div
      className="flex gap-6 px-3"
      animate={{
        x: ['0%', '-50%'],
      }}
      transition={{
        ease: 'linear',
        duration: 40,
        repeat: Infinity,
      }}
      style={{
        width: 'max-content',
      }}
    >

      {row1.map((testimonial, idx) => (

        <div
          key={idx}
          className="
            flex-shrink-0

            w-[280px]
            sm:w-[320px]
            md:w-[380px]

            rounded-[24px]

            border
            border-white/20

            bg-[#111]

            p-5
            md:p-6

            flex
            flex-col
            gap-4

            hover:border-white/40

            transition-colors
            duration-300
          "
        >

          <div className="flex flex-col items-center gap-1 mb-1">
            <div className="flex items-center gap-2 text-white">
              <div className="flex gap-1 text-lg tracking-widest">
                ☆☆☆☆☆
              </div>

              <span className="font-bold text-sm">
                5.0
              </span>
            </div>
          </div>

          <p className="text-white/80 text-xs md:text-sm leading-relaxed flex-grow text-center">
            "{testimonial.text}"
          </p>

          <div className="flex items-center justify-start gap-3 mt-auto pt-3 border-t border-white/10">

            <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 shrink-0">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col items-start">
              <span className="text-white font-bold text-xs tracking-wider uppercase">
                {testimonial.name}
              </span>

              <span className="text-white/50 text-[10px] tracking-wide uppercase mt-0.5">
                {testimonial.role}
              </span>
            </div>
          </div>
        </div>
      ))}
    </motion.div>

    {/* row 2 */}
    <motion.div
      className="flex gap-6 px-3"
      animate={{
        x: ['-50%', '0%'],
      }}
      transition={{
        ease: 'linear',
        duration: 45,
        repeat: Infinity,
      }}
      style={{
        width: 'max-content',
      }}
    >

      {row2.map((testimonial, idx) => (

        <div
          key={`r2-${idx}`}
          className="
            flex-shrink-0

            w-[280px]
            sm:w-[320px]
            md:w-[380px]

            rounded-[24px]

            border
            border-white/20

            bg-[#111]

            p-5
            md:p-6

            flex
            flex-col
            gap-4

            hover:border-white/40

            transition-colors
            duration-300
          "
        >

          <div className="flex flex-col items-center gap-1 mb-1">
            <div className="flex items-center gap-2 text-white">
              <div className="flex gap-1 text-lg tracking-widest">
                ☆☆☆☆☆
              </div>

              <span className="font-bold text-sm">
                5.0
              </span>
            </div>
          </div>

          <p className="text-white/80 text-xs md:text-sm leading-relaxed flex-grow text-center">
            "{testimonial.text}"
          </p>

          <div className="flex items-center justify-start gap-3 mt-auto pt-3 border-t border-white/10">

            <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 shrink-0">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col items-start">
              <span className="text-white font-bold text-xs tracking-wider uppercase">
                {testimonial.name}
              </span>

              <span className="text-white/50 text-[10px] tracking-wide uppercase mt-0.5">
                {testimonial.role}
              </span>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  </div>

  {/* ================================= */}
  {/* LUXURY CTA */}
  {/* ================================= */}

  <div className="relative mt-16 md:mt-24 mb-10 w-full flex flex-col items-center justify-center z-30 overflow-hidden">

    {/* ambient glow */}
    <div className="absolute w-[500px] h-[500px] bg-white/[0.03] blur-[140px] rounded-full pointer-events-none" />

    {/* floating icon */}
    <motion.div
      initial={{
        scale: 0.5,
        opacity: 0,
      }}
      whileInView={{
        scale: 1,
        opacity: 1,
      }}
      viewport={{
        once: false,
      }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
      }}
      className="relative mb-10"
    >

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          text-[90px]
          md:text-[130px]

          leading-none
          select-none

          drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]
        "
      >
        🤝
      </motion.div>
    </motion.div>

    {/* content */}
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1,
      }}
      className="flex flex-col items-center text-center px-6"
    >

      <h3
        className="
          text-white
          font-display
          font-black
          tracking-[-0.04em]
          leading-none
        "
        style={{
          fontSize: 'clamp(2rem,5vw,4rem)',
        }}
      >
        Share Your
        <br />

        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
          Experience
        </span>
      </h3>

      <p className="mt-5 text-white/50 max-w-xl text-sm md:text-base leading-relaxed">
        Your words help shape meaningful collaborations and inspire future work experiences.
      </p>

      {/* CTA BUTTON */}
      <motion.button
        onClick={() => setIsModalOpen(true)}
        whileHover={{
          scale: 1.04,
          y: -2,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="
          group
          relative
          mt-10

          inline-flex
          items-center
          justify-center

          px-8
          md:px-10
          py-4

          rounded-full

          border
          border-white/10

          bg-white/[0.06]
          backdrop-blur-xl

          overflow-hidden

          transition-all
          duration-500

          hover:border-white/30
          hover:bg-white/[0.09]

          cursor-pointer
        "
      >

        {/* animated glow */}
        <div
          className="
            absolute
            inset-0

            opacity-0
            group-hover:opacity-100

            transition-opacity
            duration-700

            bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_70%)]
          "
        />

        <span
          className="
            relative
            z-10

            text-white
            font-bold
            uppercase

            tracking-[0.2em]

            text-[11px]
            md:text-xs
          "
        >
          Share your experience working with me
        </span>
      </motion.button>
    </motion.div>
  </div>

  {/* ================================= */}
  {/* MODAL */}
  {/* ================================= */}

  <AnimatePresence>

    {isModalOpen && (

      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

        {/* overlay */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="
            absolute
            inset-0

            bg-black/60
            backdrop-blur-sm
          "
          onClick={() => setIsModalOpen(false)}
        />

        {/* modal */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            y: 20,
          }}
          className="
            relative
            w-full
            max-w-lg

            bg-[#0C0C0C]

            border
            border-white/10

            rounded-[32px]

            p-6
            sm:p-8

            shadow-2xl

            z-10
          "
        >

          <button
            onClick={() => setIsModalOpen(false)}
            className="
              absolute
              top-6
              right-6

              text-white/50
              hover:text-white

              transition-colors
              cursor-pointer
            "
          >
            <FiX className="w-6 h-6" />
          </button>

          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
            Share Your Experience
          </h3>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >

            <div className="flex flex-col gap-1.5">

              <label className="text-white/70 text-xs font-bold uppercase tracking-wider">
                Your Name
              </label>

              <input
                required
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className="
                  w-full

                  bg-[#111]

                  border
                  border-white/10

                  rounded-xl

                  px-4
                  py-3

                  text-white

                  focus:outline-none
                  focus:border-white/30

                  transition-colors
                "
                placeholder="You are?"
              />
            </div>

            <div className="flex flex-col gap-1.5">

              <label className="text-white/70 text-xs font-bold uppercase tracking-wider">
                Role
              </label>

              <input
                required
                type="text"
                value={formData.role}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    role: e.target.value,
                  })
                }
                className="
                  w-full

                  bg-[#111]

                  border
                  border-white/10

                  rounded-xl

                  px-4
                  py-3

                  text-white

                  focus:outline-none
                  focus:border-white/30

                  transition-colors
                "
                placeholder="What are you to lalith?"
              />
            </div>

            <div className="flex flex-col gap-1.5">

              <label className="text-white/70 text-xs font-bold uppercase tracking-wider">
                Rating
              </label>

              <div className="flex gap-2">

                {[1, 2, 3, 4, 5].map((star) => (

                  <button
                    key={star}
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        rating: star,
                      })
                    }
                    className={`text-3xl transition-colors cursor-pointer ${
                      formData.rating >= star
                        ? 'text-[#FFD700]'
                        : 'text-white/20 hover:text-white/50'
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">

              <label className="text-white/70 text-xs font-bold uppercase tracking-wider">
                Your Message
              </label>

              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className="
                  w-full

                  bg-[#111]

                  border
                  border-white/10

                  rounded-xl

                  px-4
                  py-3

                  text-white

                  focus:outline-none
                  focus:border-white/30

                  transition-colors

                  resize-none
                "
                placeholder="Working with Lalith was..."
              />
            </div>

            <button
              type="submit"
              className="
                mt-4

                w-full

                bg-white
                text-black

                font-bold
                uppercase
                tracking-wider

                py-4

                rounded-xl

                hover:bg-gray-200

                transition-colors
                cursor-pointer
              "
            >
              Submit Testimonial
            </button>
          </form>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
</motion.section>


);
}
