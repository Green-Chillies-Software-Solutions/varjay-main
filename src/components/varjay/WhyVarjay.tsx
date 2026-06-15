import { motion } from "framer-motion";
import { BookOpen, Users, CheckCircle2 } from "lucide-react";

// Custom SVG icon matching the stroke properties of lucide-react
function OnlineIcon({ className = "w-7 h-7 text-[#5BB8E8]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </svg>
  );
}

const items = [
  {
    Icon: BookOpen,
    title: "World Class Curriculum",
    desc: "Structured levels: Beginner → Intermediate → Advanced → Exam prep. Certified by Trinity & Gandharva.",
  },
  {
    Icon: Users,
    title: "Max 5–7 Per Batch",
    desc: "Every student is part of the Varjay Family, known by their name, not by a seat number.",
  },
  {
    Icon: OnlineIcon,
    title: "Online Classes",
    desc: "Live, interactive one-to-one sessions with our expert teachers from anywhere in the world.",
  },
  {
    Icon: CheckCircle2,
    title: "No Admission Fee",
    desc: "Zero registration charges. Zero hidden costs. Just a flat monthly fee starting at ₹1,500.",
  },
];

export function WhyVarjay() {
  return (
    <section className="bg-[#0B1F3A] text-white py-20 md:py-28 relative overflow-hidden">

      {/* Ambient background glows for enterprise aesthetic */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-[30%] -right-[10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-[#5BB8E8] opacity-[0.03] blur-[100px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-[#5BB8E8] opacity-[0.04] blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="font-mono text-xs sm:text-sm font-bold text-[#5BB8E8] tracking-[0.2em] mb-4 uppercase">
            Why Choose Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Why 300+ students chose Varjay
          </h2>
        </div>

        {/* Responsive Grid: 1 col (mobile) -> 2 cols (tablet) -> 4 cols (desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {items.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col h-full p-8 sm:p-10 rounded-[2rem] bg-gradient-to-b from-[#5BB8E8]/[0.08] to-transparent border border-[#5BB8E8]/[0.08] hover:border-[#5BB8E8]/[0.2] hover:from-[#5BB8E8]/[0.12] transition-all duration-300"
            >
              {/* Icon Container with hover lift and glow */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0B1F3A] border border-[#5BB8E8]/20 flex items-center justify-center mb-6 sm:mb-8 group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_-10px_rgba(91,184,232,0.4)] group-hover:border-[#5BB8E8]/40 transition-all duration-300 shrink-0">
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#5BB8E8]" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">
                {title}
              </h3>
              <p className="text-[#A8D8F0]/70 leading-relaxed text-sm sm:text-base font-body">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}