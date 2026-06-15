import { motion } from "framer-motion";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./SocialIcons";

const badges = [
  { label: "Visharad — Tabla", color: "bg-rose-100 text-rose-800 border border-rose-200" },
  { label: "10+ Years Teaching", color: "bg-teal-100 text-teal-800 border border-teal-200" },
  { label: "Alankar in Progress", color: "bg-violet-100 text-violet-800 border border-violet-200" },
  { label: "ABGMV Certified", color: "bg-amber-100 text-amber-800 border border-amber-200" },
];

export function Faculty() {
  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="mb-10 md:mb-16 text-center">
          <p className="font-mono text-sm md:text-base text-[#F59E0B] tracking-widest mb-3 font-semibold uppercase">
            Meet Our Teacher
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1C0A00] font-bold tracking-tight">
            Learn from a master.
          </h2>
        </div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(245,158,11,0.2)] bg-[#FEF3C7]"
        >
          {/* Image Section - Adjusts height on mobile, fixed width on desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative w-full lg:w-[40%] xl:w-[35%] h-[350px] sm:h-[450px] lg:h-auto shrink-0"
          >
            <a
              href="https://ibb.co/7xGDzBmx"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <img
                src="https://i.ibb.co/cKN9vRnK/Whats-App-Image-2026-06-05-at-11-28-58.jpg"
                alt="Arvind V. Rao"
                className="absolute inset-0 w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
              />
            </a>
            {/* Soft gradient overlay at the bottom of the image for better blending if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FEF3C7]/40 to-transparent lg:hidden pointer-events-none" />
          </motion.div>

          {/* Content Section */}
          <div className="w-full lg:w-[60%] xl:w-[65%] p-8 sm:p-10 lg:p-14 xl:p-16 flex flex-col justify-center">

            <span className="inline-block self-start px-3.5 py-1.5 rounded-full bg-[#F59E0B]/20 text-[#D97706] border border-[#F59E0B]/30 font-mono text-[10px] sm:text-xs tracking-widest font-bold mb-4">
              FOUNDER & HEAD OF TABLA
            </span>

            <h3 className="font-display text-4xl sm:text-5xl text-[#1C0A00] font-bold tracking-tight">
              Arvind V. Rao
            </h3>

            {/* Badges - using flex-wrap to ensure they never break out of the container */}
            <div className="flex flex-wrap gap-2.5 mt-6">
              {badges.map((b) => (
                <span
                  key={b.label}
                  className={`px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide ${b.color}`}
                >
                  {b.label}
                </span>
              ))}
            </div>

            <p className="mt-6 text-[#1C0A00]/80 text-base sm:text-lg leading-relaxed font-body">
              Arvind V. Rao has been learning tabla for over 15 years and has teaching experience
              of over 7 years. He currently pursues Alankar under Guru Shri Praveen Karkareji. His students range from local beginners to international learners performing on stage.
            </p>

            {/* Blockquote */}
            <blockquote className="mt-8 font-display italic text-xl sm:text-2xl text-[#E11D48] leading-snug border-l-4 border-[#E11D48] pl-5 py-1">
              "Every student who walks in leaves with rhythm in their heart."
            </blockquote>

            {/* Social Icons */}
            <div className="flex gap-3 sm:gap-4 mt-10">
              {[
                { Icon: YoutubeIcon, href: "https://www.youtube.com/channel/UCxrYgHmwDxVIpVjFvVadKYA", label: "YouTube" },
                { Icon: FacebookIcon, href: "https://www.facebook.com/p/Varjay-Music-Academy-100077740792261/", label: "Facebook" },
                { Icon: InstagramIcon, href: "https://www.instagram.com/varjay.music.academy/", label: "Instagram" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  // Changed background from white/5 (invisible on light bg) to solid white with shadows
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white border border-amber-200 text-[#1C0A00] hover:bg-[#F59E0B] hover:border-[#F59E0B] hover:text-white flex items-center justify-center transition-all shadow-sm hover:shadow-lg shadow-amber-900/10"
                >
                  <social.Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}