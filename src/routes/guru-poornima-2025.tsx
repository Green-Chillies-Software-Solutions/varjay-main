import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { ContactStrip } from "@/components/varjay/ContactStrip";
import { breadcrumbSchema, ldJson } from "@/components/varjay/schema";

const URL = "https://varjaymusic.com/guru-poornima-2025";

const PHOTOS = Array.from({ length: 18 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `https://varjaymusic.com/wp-content/uploads/2025/11/gp${n}.jpg`;
});

// ─── HERO PALETTE ────────────────────────────────────────────────────────────
const INK = "#0A0F1E";
const SAFFRON = "#F4813A";
const TURMERIC = "#E8B84B"; // Primary accent for tradition/Guru Poornima
const INDIGO = "#3D5AF1";
const IVORY = "#F9F3E8";

const notes = ["♩", "♪", "♫", "♬", "𝄞"];

export const Route = createFileRoute("/guru-poornima-2025")({
  head: () => ({
    meta: [
      { title: "Guru Poornima 2025 — Varjay Music Academy" },
      {
        name: "description",
        content:
          "Photos from the Guru Poornima 2025 celebration at Varjay Music Academy, honouring our teachers and students' performances.",
      },
      { property: "og:title", content: "Guru Poornima 2025" },
      { property: "og:url", content: URL },
      { property: "og:image", content: PHOTOS[0] },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      ldJson(
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Guru Poornima 2025", url: "/guru-poornima-2025" },
        ]),
      ),
    ],
  }),
  component: GuruPoornimaPage,
});

function GuruPoornimaPage() {
  return (
    <main className="w-full overflow-hidden">

      {/* ─── CUSTOM EVENT HERO ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: INK, minHeight: "85svh" }}>

        {/* Painterly blobs + staff lines */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute" style={{ width: "70vw", height: "70vh", top: "-20%", left: "-15%", background: `radial-gradient(ellipse, ${INDIGO}18 0%, transparent 70%)`, transform: "rotate(-20deg)" }} />
          <div className="absolute" style={{ width: "50vw", height: "60vh", bottom: "-10%", left: "5%", background: `radial-gradient(ellipse, ${TURMERIC}12 0%, transparent 65%)` }} />
          {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute w-full" style={{ top: `${35 + i * 4}%`, height: "1px", background: `linear-gradient(to right, transparent, ${IVORY}06 20%, ${IVORY}06 80%, transparent)` }} />
          ))}
        </div>

        {/* RIGHT — Image panel (desktop split alignment) */}
        <div className="absolute inset-y-0 right-0 hidden md:block z-10" style={{ width: "50%", clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
          <motion.div initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className="absolute inset-0">
            <img
              src={PHOTOS[0]}
              alt="Guru Poornima Celebration"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-48 pointer-events-none" style={{ background: `linear-gradient(to right, ${INK}, transparent)` }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to bottom, ${INK}88 0%, transparent 20%, transparent 70%, ${INK}EE 100%)` }} />
          <div className="absolute inset-0 pointer-events-none opacity-30" style={{ background: `linear-gradient(135deg, ${INDIGO}55 0%, transparent 50%, ${TURMERIC}44 100%)`, mixBlendMode: "color" }} />
        </div>

        {/* Mobile image */}
        <div className="absolute inset-0 md:hidden z-0">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6 }} className="absolute inset-0">
            <img
              src={PHOTOS[0]}
              alt="Guru Poornima Celebration"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${INK}F5, ${INK}CC 55%, ${INK}88)` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${INK}66, transparent 30%, transparent 58%, ${INK} 100%)` }} />
        </div>

        {/* Floating music notes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {notes.map((note, i) => {
            const c = [TURMERIC, SAFFRON, INDIGO, IVORY, TURMERIC][i];
            return (
              <motion.span key={i} className="absolute select-none"
                style={{ fontFamily: "serif", fontSize: `${1.5 + (i % 3) * 0.8}rem`, left: `${10 + i * 15}%`, top: `${25 + (i % 4) * 12}%`, color: `${c}22` }}
                animate={{ y: [-20, -60, -20], opacity: [0.08, 0.22, 0.08], rotate: [-8, 8, -8] }}
                transition={{ duration: 5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}>
                {note}
              </motion.span>
            );
          })}
        </div>

        {/* LEFT CONTENT PANEL */}
        <div className="relative z-20 flex flex-col justify-center min-h-[85svh] pb-16 pt-24"
          style={{ maxWidth: "55%", paddingLeft: "max(3rem,5vw)", paddingRight: "max(2rem,4vw)" }}>

          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex self-start items-center gap-2.5 px-4 py-2 rounded-full font-mono text-[10px] mb-8 tracking-widest uppercase"
            style={{ border: `1px solid ${TURMERIC}45`, background: `${TURMERIC}12`, color: TURMERIC }}>
            EVENT · JULY 2025
          </motion.div>

          <div className="max-w-xl">
            <h1 className="font-serif leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.8rem,5.5vw,5.5rem)" }}>
              <motion.span
                initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
                className="block" style={{ color: IVORY }}>
                Guru Poornima
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35, duration: 0.8 }}
                className="block italic" style={{ color: TURMERIC, textShadow: `0 0 50px ${TURMERIC}40` }}>
                2025.
              </motion.span>
            </h1>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-8 max-w-md">
            <div className="w-12 h-[2px] mb-6 rounded-full" style={{ background: `linear-gradient(to right, ${SAFFRON}, ${TURMERIC})` }} />
            <p className="text-lg leading-relaxed" style={{ color: `${IVORY}CC` }}>
              An evening of gratitude — our students offered their performances at the feet of their gurus. Photos from a memorable celebration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── EVENT PHOTO GRID (DARK MODE) ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {PHOTOS.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 6) * 0.1, duration: 0.6 }}
              className="rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: `1px solid rgba(255,255,255,0.08)`,
                boxShadow: `0 8px 30px rgba(0,0,0,0.2)`,
              }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0A0F1E]/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                <img
                  src={src}
                  alt={`Guru Poornima 2025 — photo ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <ContactStrip />
    </main>
  );
}
