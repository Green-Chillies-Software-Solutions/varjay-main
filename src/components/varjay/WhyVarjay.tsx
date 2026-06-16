import { motion } from "framer-motion";
import { BookOpen, Users, CheckCircle2 } from "lucide-react";

function OnlineIcon({ className = "w-7 h-7 text-[#5BB8E8]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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
    desc: "Structured levels: Beginner → Intermediate → Advanced → Exam prep. Certified by Trinity/Gandharva",
  },
  {
    Icon: Users,
    title: "Maximum 5–7 Per offline Batch",
    desc: "Every student is part of Varjay Family, is known by name, not by seat number.",
  },
  {
    Icon: OnlineIcon,
    title: "Online Classes",
    desc: "Live one-to-one sessions with our expert teachers.",
  },
  {
    Icon: CheckCircle2,
    title: "No Admission Fee",
    desc: "Zero registration charges. Zero hidden costs. Just monthly fee starting at : ₹1,500.",
  },
];

export function WhyVarjay() {
  return (
    /*
      Dark navy panel — the "20% dark" piece of the 80/20 split.
      Uses the logo's deep background colour with sky-blue accents.
    */
    <section className="bg-[#0B1F3A] text-white py-24 relative overflow-hidden">
      {/* Decorative background rings */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-[#5BB8E8]/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full border border-[#5BB8E8]/8"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <p className="font-mono text-xl text-[#5BB8E8]/60 tracking-widest text-center mb-4 uppercase">
          Why Choose Us
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-center font-semibold mb-16 text-white">
          Why 300+ students chose Varjay
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 lg:divide-x divide-[#5BB8E8]/15">
          {items.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="px-8 py-8 lg:py-0 group"
            >
              {/* Icon in a blue circle */}
              <div className="w-14 h-14 rounded-2xl bg-[#5BB8E8]/10 border border-[#5BB8E8]/20 flex items-center justify-center mb-6 group-hover:bg-[#5BB8E8]/20 transition-colors">
                <Icon className="w-7 h-7 text-[#5BB8E8]" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-white">
                {title}
              </h3>
              <p className="text-[#A8D8F0]/70 leading-relaxed text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}