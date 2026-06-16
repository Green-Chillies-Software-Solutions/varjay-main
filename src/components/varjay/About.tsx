import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const pills = [
  { label: "🏆 ABGMV Certified", color: "bg-[#EBF5FB] text-[#185FA5] border-[#A8D8F0]" },
  { label: "👥 Max 5–7 per batch", color: "bg-[#EBF5FB] text-[#185FA5] border-[#A8D8F0]" },
  { label: "🏆 Trinity Certified", color: "bg-[#D4EEFA] text-[#0C447C] border-[#85B7EB]" },
  { label: "💻 Online & Offline", color: "bg-[#D4EEFA] text-[#0C447C] border-[#85B7EB]" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    /*
      pt-20 compensates for the Hero stats card that overhangs into this section
      by translate-y-1/2 (~half the card height ≈ ~56px → use pt-20 to be safe)
    */
    <section id="about" ref={ref} className="bg-[#EBF5FB] pt-20 pb-0 overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[680px]">

        {/* Image with parallax */}
        {/* Adjusted mobile height to 300px so it fits nicely before the text */}
        <div className="relative h-[300px] sm:h-[400px] lg:h-auto overflow-hidden">
          <motion.img
            style={{ y }}
            src="https://varjaymusic.com/wp-content/uploads/2024/05/SRG_1204-copy-scaled-1-1024x576.jpg"
            alt="Inside Varjay"
            className="absolute inset-0 w-full h-[120%] object-cover lg:rounded-r-[2rem]"
          />
          {/* Subtle blue tint overlay */}
          <div className="absolute inset-0 bg-[#5BB8E8]/10 lg:rounded-r-[2rem]" />
        </div>

        {/* Text panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          // Adjusted padding for mobile (p-6) while keeping desktop (lg:p-16)
          className="bg-white p-6 sm:p-10 lg:p-16 flex flex-col justify-center"
        >
          <p className="font-mono text-sm md:text-xl text-[#5BB8E8] tracking-widest mb-2 md:mb-3 uppercase">
            Our Story
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-[#0B1F3A] font-semibold leading-tight">
            Music, taught the way<br />it deserves to be.
          </h2>
          <div className="mt-4 md:mt-6 space-y-4 text-sm md:text-base text-[#0B1F3A]/70 leading-relaxed">
            <p>
              Varjay Music Academy was founded in January 2021 — in the middle of a pandemic — with one belief: great music education should be accessible to everyone. Initially we started with online classes, and in Diwali 2021 we opened our doors for offline classes in Sanpada.
            </p>
            <p>
              Today, 150+ students from across India and abroad learn with us. We offer small
              batches of just 5–7 students for offline classes, as well as personalized online 
              one-to-one sessions. All our programs feature a certified curriculum, led by 
              qualified, experienced, and trained faculty.
            </p>
          </div>

          {/* Credential pills - Stacks into 1 column on mobile to prevent squishing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 md:mt-8">
            {pills.map((p) => (
              <div
                key={p.label}
                className={`px-4 py-3 rounded-full border text-[11px] sm:text-xs font-medium font-body flex items-center justify-center sm:justify-start ${p.color}`}
              >
                {p.label}
              </div>
            ))}
          </div>
          
          <p className="font-sanskrit text-lg md:text-xl text-[#378ADD] mt-6 text-center sm:text-left">
            "We follow syllabus local university"
          </p>

          <a
            href="/about"
            className="mt-6 md:mt-8 inline-flex items-center justify-center sm:justify-start gap-2 text-[#5BB8E8] font-semibold hover:gap-3 transition-all"
          >
            Read Our Story <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}