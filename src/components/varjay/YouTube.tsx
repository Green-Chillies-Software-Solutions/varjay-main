import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

const videos = [
  { title: "Tabla Solo — Arnav Shinde", url: "https://www.youtube.com/watch?v=-O8iiXMCGFo" },
  { title: "Republic Day Special 2025", url: "https://www.youtube.com/channel/UCxrYgHmwDxVIpVjFvVadKYA" },
  { title: "Keyboard Solo — Vijayashish Satapathy", url: "https://www.youtube.com/channel/UCxrYgHmwDxVIpVjFvVadKYA" },
];

// Stagger variants for the video list
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } }
};

export function YouTube() {
  return (
    <section id="youtube" className="bg-white py-20 md:py-28 relative overflow-hidden">
      
      {/* Subtle ambient background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 right-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#0D9488]/[0.03] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[#F59E0B]/[0.03] rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
        
        {/* Left Column: Text & Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center"
        >
          <p className="font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#0D9488] mb-4">
            On Stage
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1C0A00] font-bold tracking-tight leading-[1.1] mb-6">
            Our students, <br className="hidden sm:block" /> performing live.
          </h2>
          <p className="text-[#1C0A00]/70 text-base sm:text-lg leading-relaxed font-body max-w-lg mb-8 md:mb-10">
            Watch performances, exam recordings, and musical moments from our students on our official YouTube channel.
          </p>

          {/* Interactive Video List */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-3 sm:space-y-4"
          >
            {videos.map((v) => (
              <motion.a
                variants={itemVariants}
                key={v.title}
                href={v.url}
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-4 sm:gap-5 p-3.5 sm:p-5 rounded-2xl bg-[#FEFAF1]/50 border border-amber-100/60 hover:border-[#F59E0B]/50 hover:bg-amber-50 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(245,158,11,0.08)]"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#0D9488] text-white flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(13,148,136,0.3)] transition-all duration-300">
                  <Play className="w-5 h-5 fill-current ml-1" />
                </div>
                <span className="font-semibold text-[15px] sm:text-base text-[#1C0A00] leading-snug group-hover:text-[#0D9488] transition-colors">
                  {v.title}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Primary CTA */}
          <div className="mt-10 sm:mt-12">
            <a
              href="https://www.youtube.com/channel/UCxrYgHmwDxVIpVjFvVadKYA"
              target="_blank" 
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#0D9488] text-white font-semibold text-sm sm:text-base tracking-wide hover:bg-[#0F766E] transition-all duration-300 shadow-lg shadow-teal-900/20 hover:shadow-teal-900/40 w-full sm:w-auto"
            >
              Visit Our Full Channel 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Premium Iframe Player */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full mx-auto max-w-2xl lg:max-w-none"
        >
          {/* Outer glow for the video player */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#0D9488]/20 to-[#F59E0B]/20 blur-2xl rounded-[2.5rem] -z-10 opacity-70" />
          
          <div className="aspect-video rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] border border-gray-200/50 bg-gray-900 relative group">
            <iframe
              className="w-full h-full absolute inset-0"
              src="https://www.youtube.com/embed/TSMSVuhv9Cw"
              title="Varjay Music Performances"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}