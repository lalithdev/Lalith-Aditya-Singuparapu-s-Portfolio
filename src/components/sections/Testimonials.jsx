import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolio';
import { supabase } from '../../lib/supabase';
import { FiX } from 'react-icons/fi';
import Magnetic from '../common/Magnetic';

export default function Testimonials() {
const [testimonials, setTestimonials] = useState([]);
const sectionRef = useRef(null);
const [isModalOpen, setIsModalOpen] = useState(false);
const [statusMessage, setStatusMessage] = useState(null);
const [hoverRating, setHoverRating] = useState(0);

const [formData, setFormData] = useState({
name: '',
role: '',
rating: 0,
message: '',
});

const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.rating === 0) {
    setStatusMessage({ type: 'error', text: 'Please select a rating (stars) before submitting.' });
    return;
  }

  try {
    const { error } = await supabase
      .from('testimonials')
      .insert([
        {
          name: formData.name,
          role: formData.role,
          rating: formData.rating,
          message: formData.message,
          approved: true,
        },
      ]);

    if (error) {
      console.error(error);
      setStatusMessage({ type: 'error', text: 'Failed to submit testimonial. Please try again.' });
      return;
    }

    setFormData({
      name: '',
      role: '',
      rating: 0,
      message: '',
    });

    // Explicitly fetch testimonials again to update the UI immediately
    fetchTestimonials();

    setStatusMessage({ type: 'success', text: 'Thank you! Your testimonial has been added.' });

    setTimeout(() => {
      setIsModalOpen(false);
      setStatusMessage(null);
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 1500);

  } catch (err) {
    console.error(err);
    setStatusMessage({ type: 'error', text: 'An unexpected error occurred. Please try again.' });
  }
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
[0.96, 1]
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
MARQUEE LOGIC
============================================
*/

const row1Base = testimonials;

const row2Base = [...testimonials].reverse();

const row1 = [...row1Base, ...row1Base];
const row2 = [...row2Base, ...row2Base];
useEffect(() => {
  fetchTestimonials();
}, []);

const fetchTestimonials = async () => {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .eq('approved', true)
    .order('created_at', {
      ascending: false,
    });

  if (!error && data) {
    // DB uses 'message', local renderer expects 'text', map it
    const formattedData = data.map(item => ({
      ...item,
      text: item.message,
    }));
    setTestimonials(formattedData);
  }
};
useEffect(() => {
  const channel = supabase
    .channel('testimonials-live')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'testimonials',
      },
      () => {
        fetchTestimonials();
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}, []);
return (
<motion.section
ref={sectionRef}
id="testimonials"
style={{
y,
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
        duration: 0.8,
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
              <div
                className="text-lg tracking-widest relative inline-block bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, #FFD700 ${(testimonial.rating / 5) * 100}%, rgba(255,255,255,0.2) ${(testimonial.rating / 5) * 100}%)`
                }}
              >
                ★★★★★
              </div>

              <span className="font-bold text-sm">
                {Number(testimonial.rating).toFixed(1)}
              </span>
            </div>
          </div>

          <p className="text-white/80 text-xs md:text-sm leading-relaxed flex-grow text-center">
            "{testimonial.text}"
          </p>

          <div className="flex items-center justify-start gap-3 mt-auto pt-3 border-t border-white/10">

            <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 shrink-0">
              <img
                src={
                  testimonial.image ||
                  'https://i.pravatar.cc/150?img=3'
                }
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
              <div
                className="text-lg tracking-widest relative inline-block bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, #FFD700 ${(testimonial.rating / 5) * 100}%, rgba(255,255,255,0.2) ${(testimonial.rating / 5) * 100}%)`
                }}
              >
                ★★★★★
              </div>

              <span className="font-bold text-sm">
                {Number(testimonial.rating).toFixed(1)}
              </span>
            </div>
          </div>

          <p className="text-white/80 text-xs md:text-sm leading-relaxed flex-grow text-center">
            "{testimonial.text}"
          </p>

          <div className="flex items-center justify-start gap-3 mt-auto pt-3 border-t border-white/10">

            <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 shrink-0">
              <img
                src={
                  testimonial.image ||
                  'https://i.pravatar.cc/150?img=3'
                }
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

  {/* =
  {/* ================================= */}
  {/* LUXURY CTA (Split Layout)         */}
  {/* ================================= */}

  <div className="relative mt-16 md:mt-24 mb-20 w-full max-w-7xl mx-auto px-6 z-30 overflow-hidden min-h-[500px] flex items-center justify-center">

    {/* ambient glow */}
    <div className="absolute w-[500px] h-[500px] bg-white/[0.03] blur-[140px] rounded-full pointer-events-none" />

    <motion.div layout className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-24 xl:gap-32">
      
      {/* LEFT SIDE (Content) */}
      <motion.div layout className="flex flex-col items-center text-center max-w-md w-full">
        
        {/* floating icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="relative mb-8"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="text-[70px] md:text-[100px] leading-none select-none drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
          >
            🤝
          </motion.div>
        </motion.div>

        <h3
          className="text-white font-display font-black tracking-[-0.04em] leading-none"
          style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}
        >
          Share Your<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
            Experience
          </span>
        </h3>

        <p className="mt-5 text-white/50 max-w-md text-sm md:text-base leading-relaxed">
          Your words help shape meaningful collaborations and inspire future work experiences.
        </p>

        <AnimatePresence mode="popLayout">
          {!isModalOpen && (
            <Magnetic>
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="
                  group relative mt-10 inline-flex items-center justify-center
                  px-8 md:px-10 py-4 rounded-full border border-white/20
                  bg-gradient-to-b from-white/[0.08] to-white/[0.01]
                  backdrop-blur-xl overflow-hidden
                  transition-all duration-500 hover:border-white/40 hover:from-white/[0.12] hover:to-white/[0.02] cursor-pointer
                  shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                "
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_70%)]" />
                <span className="relative z-10 text-white font-bold uppercase tracking-[0.2em] text-[11px] md:text-xs">
                  SHARE YOUR EXPERIENCE WORKING WITH ME
                </span>
              </motion.button>
            </Magnetic>
          )}
        </AnimatePresence>
      </motion.div>

      {/* RIGHT SIDE (Form) */}
      <AnimatePresence mode="popLayout">
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0, x: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: 40, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full max-w-lg lg:w-1/2"
          >
            <div className="relative w-full bg-[#0C0C0C] border border-white/10 rounded-[32px] p-6 sm:p-8 shadow-2xl z-10">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setStatusMessage(null);
                }}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors cursor-pointer"
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
                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
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
                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="What are you to lalith?"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-white/70 text-xs font-bold uppercase tracking-wider">
                    Rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const activeRating = hoverRating || formData.rating;
                      return (
                        <div
                          key={star}
                          className="relative text-3xl cursor-pointer"
                          onMouseLeave={() => setHoverRating(0)}
                        >
                          {/* Background (Empty) */}
                          <span className="text-white/20">★</span>
                          
                          {/* Left Half Click Area */}
                          <div 
                            className="absolute top-0 left-0 w-1/2 h-full z-10"
                            onMouseEnter={() => setHoverRating(star - 0.5)}
                            onClick={() => setFormData({ ...formData, rating: star - 0.5 })}
                          />
                          
                          {/* Right Half Click Area */}
                          <div 
                            className="absolute top-0 right-0 w-1/2 h-full z-10"
                            onMouseEnter={() => setHoverRating(star)}
                            onClick={() => setFormData({ ...formData, rating: star })}
                          />
                          
                          {/* Foreground (Filled) */}
                          <div 
                            className="absolute top-0 left-0 h-full overflow-hidden pointer-events-none text-[#FFD700] transition-all"
                            style={{ 
                              width: activeRating >= star ? '100%' : activeRating >= star - 0.5 ? '50%' : '0%' 
                            }}
                          >
                            ★
                          </div>
                        </div>
                      );
                    })}
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
                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                    placeholder="Working with Lalith was..."
                  />
                </div>

                {statusMessage && (
                  <div className={`mt-2 p-3 rounded-xl text-sm font-medium ${statusMessage.type === 'error' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-green-500/10 text-green-400 border border-green-500/20'}`}>
                    {statusMessage.text}
                  </div>
                )}

                <button
                  type="submit"
                  className="mt-4 w-full bg-white text-black font-bold uppercase tracking-wider py-4 rounded-xl hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  Submit Testimonial
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  </div>

</motion.section>

  );
}
