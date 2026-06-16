import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

// ─── COLOUR PALETTE ──────────────────────────────────────────────────────────
const BLUE     = "#5BB8E8";
const NAVY_MID = "#0F2847";

// ── GOLD TOKENS (three-stop shimmer for the numbers) ─────────────────────────
const GOLD_LIGHT  = "#F5D97A";   // highlight
const GOLD_MID    = "#C8963C";   // rich mid-gold
const GOLD_DARK   = "#8A5E1A";   // shadow stop
// ─────────────────────────────────────────────────────────────────────────────

type CountUpProps = {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

function CountUp({ to, prefix = "", suffix = "", decimals = 0 }: CountUpProps) {
  const ref    = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv     = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 18 });
  
  // Formats the number to ensure 5.0 stays 5.0
  const display = useTransform(spring, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  return (
    // Switched to items-baseline for perfect typographical alignment between different sizes
    <span ref={ref} className="inline-flex items-baseline justify-center gap-1.5 md:gap-2">
      {/* Prefix (Star) - Scaled down to match the font visual weight perfectly */}
      {prefix && <span className="text-[0.7em]">{prefix}</span>}
      
      <motion.span>{display}</motion.span>
      
      {/* Suffix (+) */}
      {suffix && <span className="text-[0.65em]">{suffix}</span>}
    </span>
  );
}

const stats = [
  { value: 5,   suffix: "+", prefix: "",  label: "YEARS",         decimals: 0 },
  { value: 300, suffix: "+", prefix: "",  label: "STUDENTS",      decimals: 0 },
  { value: 9,   suffix: "",  prefix: "",  label: "INSTRUMENTS",   decimals: 0 },
  { value: 3,   suffix: "",  prefix: "",  label: "VOCALS",        decimals: 0 },
  { value: 5.0, suffix: "",  prefix: "★", label: "GOOGLE RATINGS", decimals: 1 },
];

export function Stats() {
  return (
    <section
      style={{
        background: NAVY_MID,
        borderTop:    `1px solid ${BLUE}20`,
        borderBottom: `1px solid ${BLUE}20`,
      }}
      className="py-16 md:py-20 relative overflow-hidden"
    >
      {/* Subtle ambient glow behind the whole row */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(ellipse 70% 120% at 50% 50%, ${GOLD_MID}0A, transparent 70%)` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center items-center gap-y-12 lg:gap-y-0 lg:divide-x divide-[#5BB8E8]/15">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center px-2 sm:px-4 py-4 relative group w-1/2 sm:w-1/3 lg:w-auto lg:flex-1"
          >
            {/* Per-stat top glow line — gold */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-16 md:w-20 h-[1px] transition-opacity duration-300 group-hover:opacity-100 opacity-60"
              style={{ background: `linear-gradient(to right, transparent, ${GOLD_MID}80, transparent)` }}
            />

            {/* GOLD NUMBER CONTAINER */}
            <div
              className="font-serif font-light select-none tracking-tight"
              style={{
                fontSize: "clamp(2.75rem, 5vw, 4.5rem)",
                lineHeight: 1.15, // FIX: Increased line height to prevent clipping
                paddingBottom: "0.1em", // FIX: Extra bottom padding gives room for the bottom curves of 3, 5, 9, 0
                // Three-stop gold gradient: light highlight → rich mid → dark shadow
                background: `linear-gradient(160deg, ${GOLD_LIGHT} 0%, ${GOLD_MID} 45%, ${GOLD_DARK} 80%, ${GOLD_MID} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                // Subtle glow behind the number
                filter: `drop-shadow(0 0 16px ${GOLD_MID}40)`,
              }}
            >
              <CountUp to={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
            </div>

            {/* Bottom Heading Label */}
            <div
              className="font-mono text-[10px] md:text-xs font-semibold tracking-widest mt-2 uppercase drop-shadow-sm"
              style={{ color: GOLD_LIGHT }}
            >
              {s.label}
            </div>

            {/* Bottom accent dot — gold on hover */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: GOLD_LIGHT }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
