import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { INSTRUMENTS } from "./data";

/* ── Design tokens ─────────────────────────────────────────────────────── */
const SKY = "#A8D8F0";
const DEEP = "#042C53";
const INK = "#0C2340";
const IVORY = "#F9F7F2";
const SAFFRON = "#F4813A";
const TURMERIC = "#E8B84B";
const TEAL = "#0BC4A0";
const CRIMSON = "#E8284E";
const LAVENDER = "#7C5CFC";
const FOREST = "#12B76A";
const ROSE = "#F0407A";
const SKY_ACC = "#2196F3";

const PLAYFAIR = "'Playfair Display', Georgia, serif";

/* ── Per-instrument config ─────────────────────────────────────────────── */
const INSTRUMENT_ORDER = [
  "Tabla", "Piano", "Guitar",
  "Dholak", "Harmonium", "Violin",
  "Vocal", "Flute", "Mandolin",
];

const INSTRUMENT_META: Record<string, { accent: string; solidBg: string; note: string }> = {
  Tabla: { accent: "#FF6B1A", solidBg: "#DC3C00", note: "♩" },
  Piano: { accent: "#00E5BE", solidBg: "#006E58", note: "𝄞" },
  Guitar: { accent: "#FF1F4B", solidBg: "#B40028", note: "♫" },
  Dholak: { accent: "#8B6EFF", solidBg: "#4B1ED2", note: "♬" },
  Harmonium: { accent: "#FFD020", solidBg: "#A06400", note: "♪" },
  Violin: { accent: "#1AE07A", solidBg: "#006432", note: "♭" },
  Vocal: { accent: "#FF6B1A", solidBg: "#DC3C00", note: "𝄢" },
  Flute: { accent: "#38AEFF", solidBg: "#0050B4", note: "♮" },
  Mandolin: { accent: "#FF3D88", solidBg: "#B40050", note: "♯" },
};

const BG_NOTES = ["♩", "♪", "♫", "♬", "𝄞", "𝄢", "♭", "♮", "♯"];

/* ── Tilt card ─────────────────────────────────────────────────────────── */
function TiltCard({
  inst,
  index,
  height = 300,
}: {
  inst: typeof INSTRUMENTS[number];
  index: number;
  height?: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  const meta = INSTRUMENT_META[inst.name] ?? {
    accent: SAFFRON, solidBg: "#B43200", note: "♪",
  };

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleMouseLeave() {
    x.set(0); y.set(0); setHovered(false);
  }

  return (
    <motion.a
      ref={ref}
      href="#contact"
      className="relative block cursor-pointer flex-1"
      style={{ borderRadius: "18px", height: `${height}px`, perspective: 1500 }}
      initial={{ opacity: 0, y: 60, scale: 0.85, rotateX: 25, rotateY: -10 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="w-full h-full relative"
        style={{
          rotateX, rotateY,
          transformStyle: "preserve-3d",
          borderRadius: "18px",
          border: hovered ? `2px solid ${meta.accent}` : "2px solid rgba(255,255,255,0.25)",
          overflow: "hidden",
          boxShadow: hovered
            ? `0 42px 90px rgba(4,44,83,0.35), 0 0 0 1px ${meta.accent}55`
            : "0 6px 28px rgba(4,44,83,0.18)",
          transition: "box-shadow 0.3s, border 0.3s",
        }}
        animate={{
          y: hovered ? -25 : 0,
        }}
        transition={{
          y: { type: "spring", stiffness: 350, damping: 20 },
        }}
      >
        {/* Image */}
        <img
          src={inst.img}
          alt={inst.name}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            transform: hovered ? "scale(1.1)" : "scale(1.0)",
            transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1)",
          }}
        />

        {/* Optimized Dual-Overlay: 
          - Darkens the top slightly so the note & category are always visible.
          - Leaves the middle transparent to show the image clearly.
          - Fades into the solid color at the bottom for the title & link.
        */}
        <div className="absolute inset-0" style={{
          background: `
            linear-gradient(
              to bottom, 
              rgba(0,0,0,0.55) 0%, 
              transparent 25%, 
              transparent 45%, 
              rgba(0,0,0,0.4) 75%, 
              ${meta.solidBg} 100%
            )
          `,
        }} />

        {/* Accent glow bloom on hover */}
        {hovered && (
          <div className="absolute inset-0 pointer-events-none" style={{
            background: `radial-gradient(ellipse 80% 38% at 50% 108%, ${meta.accent}65, transparent 65%)`,
          }} />
        )}

        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{
          background: `linear-gradient(to right, transparent, ${meta.accent}, transparent)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s",
        }} />

        {/* Ghost note (Top Right) - Increased size and added heavy text shadow */}
        <span className="absolute top-4 right-5 select-none pointer-events-none" style={{
          fontFamily: PLAYFAIR,
          fontSize: "2.4rem",
          color: IVORY,
          opacity: 1,
          textShadow: "0 2px 10px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)",
        }}>
          {meta.note}
        </span>

        {/* Category chip (Top Left) - Changed to solid background for perfect visibility */}
        <div className="absolute top-5 left-5" style={{ opacity: 1 }}>
          <span className="px-3.5 py-1.5 rounded-full font-mono text-[10px] tracking-widest font-bold" style={{
            background: meta.accent,
            color: "#FFFFFF",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
          }}>
            {inst.category}
          </span>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 style={{
            fontFamily: PLAYFAIR,
            fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", // Made slightly larger
            color: IVORY,
            lineHeight: 1.05,
            fontWeight: 700,
            textShadow: "0 2px 14px rgba(0,0,0,0.8)",
          }}>
            {inst.name}
          </h3>

          {/* Learn More - Changed to crisp white (IVORY) instead of the accent color */}
          <div className="mt-3 flex items-center gap-2 font-bold text-sm tracking-wide" style={{
            color: IVORY,
            opacity: hovered ? 1 : 0.85,
            transform: hovered ? "translateY(0)" : "translateY(4px)",
            transition: "opacity 0.3s, transform 0.3s",
          }}>
            Learn More <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Left accent bar */}
        <div className="absolute left-0 top-8 bottom-8 w-[3px] rounded-r-full" style={{
          background: meta.accent,
          boxShadow: `0 0 12px ${meta.accent}`,
          opacity: hovered ? 1 : 0.3,
          transition: "opacity 0.3s",
        }} />
      </motion.div>
    </motion.a>
  );
}

/* ── Main section ──────────────────────────────────────────────────────── */
export function Instruments() {
  const ordered = INSTRUMENT_ORDER
    .map(name => INSTRUMENTS.find(i => i.name === name))
    .filter(Boolean) as typeof INSTRUMENTS;

  const displayList = ordered.length === 9 ? ordered : INSTRUMENTS.slice(0, 9);

  const row1 = displayList.slice(0, 3);
  const row2 = displayList.slice(3, 6);
  const row3 = displayList.slice(6, 9);

  return (
    <section
      id="instruments"
      className="relative overflow-hidden py-24"
      style={{ background: `linear-gradient(160deg, #C2E8F8 0%, ${SKY} 45%, #7EC8E8 100%)` }}
    >
      {/* ── Ambient background ─────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute" style={{ width: "800px", height: "800px", top: "-260px", right: "-200px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(255,255,255,0.40) 0%, transparent 68%)" }} />
        <div className="absolute" style={{ width: "500px", height: "500px", bottom: "-150px", left: "-120px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(4,44,83,0.16) 0%, transparent 70%)" }} />
        {[...Array(6)].map((_, i) => (
          <div key={i} className="absolute w-full" style={{ top: `${12 + i * 15}%`, height: "1px", background: "linear-gradient(to right, transparent, rgba(4,44,83,0.08) 20%, rgba(4,44,83,0.12) 50%, rgba(4,44,83,0.08) 80%, transparent)" }} />
        ))}
        {BG_NOTES.map((note, i) => (
          <span key={i} className="absolute select-none" style={{ fontFamily: PLAYFAIR, fontSize: `${2.4 + (i % 4) * 1.4}rem`, left: `${(i * 11 + 3) % 92}%`, top: `${(i * 17 + 5) % 85}%`, color: i % 2 === 0 ? "rgba(4,44,83,0.07)" : "rgba(255,255,255,0.20)", transform: `rotate(${-15 + (i % 6) * 8}deg)`, userSelect: "none" }}>{note}</span>
        ))}
        <svg className="absolute top-0 left-0 w-56 h-56 opacity-[0.055]" viewBox="0 0 200 200">
          <circle cx="10" cy="10" r="80" fill={DEEP} /><circle cx="60" cy="5" r="28" fill={DEEP} /><circle cx="5" cy="68" r="22" fill={DEEP} />
        </svg>
        <svg className="absolute bottom-0 right-0 w-64 h-64 opacity-[0.055]" viewBox="0 0 200 200">
          <circle cx="190" cy="190" r="88" fill={DEEP} /><circle cx="145" cy="194" r="32" fill={DEEP} /><circle cx="194" cy="142" r="26" fill={DEEP} />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Section header ──────────────────────────── */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8 flex-wrap">
            <div className="h-px flex-shrink-0 w-12" style={{ background: "rgba(4,44,83,0.25)" }} />
            {[
              { label: "HINDUSTANI", color: SAFFRON },
              { label: "CARNATIC", color: TEAL },
              { label: "WESTERN", color: CRIMSON },
            ].map(({ label, color }) => (
              <span key={label} className="px-4 py-1.5 rounded-full font-mono text-[12px] tracking-widest" style={{ background: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.70)", color: INK, backdropFilter: "blur(10px)" }}>
                <span style={{ color }}>{label}</span>
              </span>
            ))}
          </div>

          <p className="mb-4 tracking-[0.28em] uppercase" style={{ fontFamily: PLAYFAIR, fontSize: "1.0rem", color: SAFFRON, fontWeight: 700 }}>
            Our Story
          </p>

          <h2 style={{ fontFamily: PLAYFAIR, lineHeight: 1, fontWeight: 800, margin: 0 }}>
            <span style={{ display: "block", fontSize: "clamp(1.9rem,3.5vw,2.8rem)", fontStyle: "italic", color: "rgba(4,44,83,0.26)", letterSpacing: "-0.01em", marginBottom: "0.06em" }}>Discover</span>
            <span style={{ display: "block", fontSize: "clamp(2.6rem,5vw,4.2rem)", color: DEEP, letterSpacing: "-0.025em", lineHeight: 0.95, marginBottom: "-0.08em" }}>Your Perfect</span>
            <span style={{ display: "block", fontSize: "clamp(5.5rem,11.5vw,10rem)", lineHeight: 0.82, fontStyle: "italic", letterSpacing: "-0.03em", background: `linear-gradient(130deg, ${SAFFRON} 0%, ${TURMERIC} 60%, rgba(4,44,83,0.7) 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", WebkitTextStroke: "1px rgba(4,44,83,0.06)" }}>Instrument</span>
          </h2>

          <div className="mt-6 flex gap-1.5 items-center">
            {[SAFFRON, TEAL, CRIMSON, LAVENDER, TURMERIC].map((c, i) => (
              <div key={i} className="rounded-full" style={{ height: i === 0 ? "3px" : i === 1 ? "2.5px" : "2px", width: i === 0 ? "52px" : i === 1 ? "32px" : i === 2 ? "18px" : i === 3 ? "10px" : "6px", background: c, opacity: 1 - i * 0.14 }} />
            ))}
          </div>

          <p className="mt-6 max-w-md leading-relaxed" style={{ fontFamily: PLAYFAIR, fontStyle: "italic", fontSize: "1.05rem", color: "rgba(4,44,83,0.50)" }}>
            From the ancient rhythms of the tabla to the modern strings of the guitar — every sound has a home here.
          </p>
        </div>

        {/* ── Honeycomb grid ───────────────────────── */}
        <div className="flex flex-col gap-4">

          <div className="flex gap-4 items-end">
            {row1.map((inst, i) => {
              const isMiddle = i === 1;
              const h = isMiddle ? 370 : 290;
              return (
                <div key={inst.name} className="flex-1" style={{ height: `${h}px` }}>
                  <TiltCard inst={inst} index={i} height={h} />
                </div>
              );
            })}
          </div>

          <div className="flex gap-4">
            {row2.map((inst, i) => (
              <div key={inst.name} className="flex-1" style={{ height: "300px" }}>
                <TiltCard inst={inst} index={i + 3} height={300} />
              </div>
            ))}
          </div>

          <div className="flex gap-4 items-start">
            {row3.map((inst, i) => {
              const isMiddle = i === 1;
              const h = isMiddle ? 370 : 290;
              return (
                <div key={inst.name} className="flex-1" style={{ height: `${h}px` }}>
                  <TiltCard inst={inst} index={i + 6} height={h} />
                </div>
              );
            })}
          </div>

        </div>

        {/* ── Separator ───────────────────────────────── */}
        <div className="flex justify-center gap-6 mt-8 mb-2 opacity-25 select-none" aria-hidden="true">
          {["♩", "𝄞", "♪", "𝄞", "♩"].map((n, i) => (
            <span key={i} style={{ fontFamily: PLAYFAIR, fontSize: "1.4rem", color: DEEP }}>{n}</span>
          ))}
        </div>

        {/* ── Bottom CTA ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="flex items-center gap-4 justify-center mb-8">
            <div className="flex-1 max-w-32 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(4,44,83,0.20))" }} />
            <div className="flex gap-2 items-center">
              {[SAFFRON, TEAL, CRIMSON].map((c, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: c, opacity: 0.7 }} />
              ))}
            </div>
            <div className="flex-1 max-w-32 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(4,44,83,0.20))" }} />
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-base tracking-wide transition-all duration-300"
            style={{ fontFamily: PLAYFAIR, background: "rgba(255,255,255,0.55)", border: "1.5px solid rgba(255,255,255,0.78)", color: DEEP, backdropFilter: "blur(16px)", boxShadow: "0 4px 24px rgba(4,44,83,0.12), inset 0 1px 0 rgba(255,255,255,0.90)" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.78)"; e.currentTarget.style.boxShadow = "0 8px 40px rgba(4,44,83,0.20), inset 0 1px 0 rgba(255,255,255,0.90)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.55)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(4,44,83,0.12), inset 0 1px 0 rgba(255,255,255,0.90)"; }}
          >
            Explore All Instruments
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}