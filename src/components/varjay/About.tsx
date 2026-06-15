import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const pills = [
  { label: "🏆 ABGMV Certified", color: "bg-[#EBF5FB] text-[#185FA5] border-[#A8D8F0]" },
  { label: "👥 Max 5–7 per batch", color: "bg-[#EBF5FB] text-[#185FA5] border-[#A8D8F0]" },
  { label: "🏅 Trinity Certified", color: "bg-[#D4EEFA] text-[#0C447C] border-[#85B7EB]" },
  { label: "💻 Online & Offline", color: "bg-[#D4EEFA] text-[#0C447C] border-[#85B7EB]" },
];

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Adjusted parallax to ensure smooth scrolling without breaking container bounds
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="about"
      ref={ref}
      className="bg-[#EBF5FB] pt-24 pb-16 md:pt-32 md:pb-24 px-5 md:px-8 overflow-hidden"
    >
      {/* Premium Elevated Card Container
        Limits max width on ultra-wide screens and creates a cohesive UI block 
      */}
      <div className="max-w-7xl mx-auto bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(12,68,124,0.1)] overflow-hidden flex flex-col lg:flex-row">

        {/* Image Half with Parallax */}
        <div className="relative w-full lg:w-1/2 h-[350px] sm:h-[450px] lg:h-auto overflow-hidden bg-[#0C447C]">
          <motion.img
            style={{ y }}
            src="https://varjaymusic.com/wp-content/uploads/2024/05/SRG_1204-copy-scaled-1-1024x576.jpg"
            alt="Inside Varjay Music Academy"
            // Scale > 100% is required to hide empty edges during parallax movement
            className="absolute top-[-10%] left-0 w-full h-[120%] object-cover origin-center"
          />
          {/* Subtle overlay to blend the image with the brand colors */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C447C]/40 to-[#5BB8E8]/10" />
        </div>

        {/* Text Half */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 sm:p-12 lg:p-16 xl:p-20 relative">

          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#EBF5FB] rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <p className="font-mono text-xs sm:text-sm font-bold text-[#5BB8E8] tracking-[0.2em] mb-4 uppercase">
              Our Story
            </p>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#0B1F3A] font-bold leading-[1.15] tracking-tight">
              Music, taught the way <br className="hidden sm:block" /> it deserves to be.
            </h2>

            <div className="mt-6 space-y-4 text-[#0B1F3A]/75 text-base sm:text-lg leading-relaxed font-body">
              <p>
                Varjay Music Academy was founded in January 2021 — in the middle of a pandemic — with one belief: great music education should be accessible to everyone. Initially, we started with online classes, and in Diwali 2021, we opened our doors for offline classes in Sanpada.
              </p>
              <p>
                Today, 150+ students from across India and abroad learn with us. We offer small batches of just 5–7 students for offline classes, as well as personalized online one-to-one sessions. All our programs feature a certified curriculum, led by qualified, experienced, and trained faculty.
              </p>
            </div>

            {/* Credential Pills - Switched to flex-wrap for flawless mobile adaptation */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 mt-8">
              {pills.map((p) => (
                <div
                  key={p.label}
                  className={`px-4 py-2.5 rounded-full border text-[11px] sm:text-xs font-semibold font-body tracking-wide transition-colors ${p.color}`}
                >
                  {p.label}
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-[#EBF5FB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <p className="font-serif italic text-[15px] text-[#378ADD] font-medium leading-snug max-w-[250px]">
                "We follow the syllabus as per the local university."
              </p>

              <a
                href="#about"
                className="group inline-flex items-center gap-2.5 bg-[#0C447C] text-white px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-[#185FA5] transition-all duration-300 shadow-lg shadow-[#0C447C]/20 shrink-0"
              >
                Read Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}