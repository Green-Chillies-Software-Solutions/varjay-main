import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { ContactStrip } from "@/components/varjay/ContactStrip";
import { breadcrumbSchema, courseSchema, ldJson } from "@/components/varjay/schema";

const URL = "https://instrument-story-spark.lovable.app/tabla";

const TOPICS = [
  "Hand technique — Na, Tin, Tete, Dha, Dhin",
  "Theka — Teen Taal, Kaharwa, Dadra, Rupak, Ek Taal",
  "Qaida, Rela, Tukda & Chakradar compositions",
  "Layakari — single, double, triple speeds",
  "Solo performance & accompaniment with vocal/instrument",
  "ABGMV board exam preparation",
];

const DHOLAK_TOPICS = [
  "Basic strokes — Dha, Dhin, Taa, Tirakita",
  "Theka — Kaharwa, Dadra, Bhajani, Keherwa",
  "Folk & Bollywood rhythms",
  "Wedding & festive compositions",
  "Accompaniment with vocal & bhajan",
];

const SYLLABUS = [
  {
    level: "Beginner",
    exams: ["Prarambhik (Base Level)", "Praveshika Pratham (Entry Level)", "Praveshika Poorna (Entry Level)"],
    color: "#E8B84B",
  },
  {
    level: "Intermediate",
    exams: ["Madhyama Pratham (Mid Level 1)", "Madhyama Poorna (Mid Level 2)"],
    color: "#F4813A",
  },
  {
    level: "Advanced",
    exams: ["Visharath Pratham (Mid Level 1)", "Visharath Poorna (Mid Level 2)"],
    color: "#3D5AF1",
  },
];

const TIMINGS = [
  "Monday - 6.30 pm to 9.30 pm",
  "Thursday - 6.30 pm to 9.30 pm",
  "Saturday - 6.00 pm to 9.00 pm",
];

// ─── PALETTE ─────────────────────────────────────────────────────────────────
// Hero (dark)
const INK = "#0A0F1E";
const TURMERIC = "#E8B84B";
const SAFFRON = "#F4813A";
const INDIGO = "#3D5AF1";
const IVORY = "#F9F3E8";

// Light sections (matches onlinecourses)
const NAVY = "#0B1F3A";
const LIGHT_BG = "#EBF5FB";   // why-online strip

const notes = ["♩", "♪", "♫", "♬", "𝄞"];

export const Route = createFileRoute("/tabla")({
  head: () => ({
    meta: [
      { title: "Tabla & Dholak Classes — Varjay Music Academy, Navi Mumbai" },
      {
        name: "description",
        content:
          "Learn Tabla & Dholak from certified gurus. Beginner to advanced syllabus, Teen Taal to advanced layakari. Online & offline in Sanpada, Navi Mumbai.",
      },
      { property: "og:title", content: "Tabla & Dholak Classes — Varjay" },
      { property: "og:url", content: URL },
      { property: "og:image", content: "https://varjaymusic.com/wp-content/uploads/2024/07/tabla.jpg" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      ldJson(
        courseSchema({
          name: "Tabla & Dholak Classes",
          description:
            "Tabla & Dholak training from foundation to advanced. ABGMV-aligned syllabus. Online & offline classes in Sanpada, Navi Mumbai.",
          slug: "/tabla",
          category: "Indian Classical Percussion",
        }),
      ),
      ldJson(
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Courses", url: "/courses" },
          { name: "Tabla & Dholak", url: "/tabla" },
        ]),
      ),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="w-full overflow-hidden" style={{ background: LIGHT_BG }}>

      {/* ─── HERO (dark — unchanged) ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: INK, minHeight: "85svh" }}>

        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute" style={{ width: "70vw", height: "70vh", top: "-20%", left: "-15%", background: `radial-gradient(ellipse, ${INDIGO}18 0%, transparent 70%)`, transform: "rotate(-20deg)" }} />
          <div className="absolute" style={{ width: "50vw", height: "60vh", bottom: "-10%", left: "5%", background: `radial-gradient(ellipse, ${TURMERIC}12 0%, transparent 65%)` }} />
          {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute w-full" style={{ top: `${35 + i * 4}%`, height: "1px", background: `linear-gradient(to right, transparent, ${IVORY}06 20%, ${IVORY}06 80%, transparent)` }} />
          ))}
        </div>

        {/* Desktop right image */}
        <div className="absolute inset-y-0 right-0 hidden md:block z-10" style={{ width: "50%", clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
          <motion.div initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className="absolute inset-0">
            <img src="https://varjaymusic.com/wp-content/uploads/2024/07/tabla.jpg" alt="Tabla & Dholak" className="w-full h-full object-cover object-center" />
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-48 pointer-events-none" style={{ background: `linear-gradient(to right, ${INK}, transparent)` }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to bottom, ${INK}88 0%, transparent 20%, transparent 70%, ${INK}EE 100%)` }} />
          <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: `linear-gradient(135deg, ${INDIGO}55 0%, transparent 50%, ${TURMERIC}44 100%)`, mixBlendMode: "color" }} />
        </div>

        {/* Mobile image */}
        <div className="absolute inset-0 md:hidden z-0">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6 }} className="absolute inset-0">
            <img src="https://varjaymusic.com/wp-content/uploads/2024/07/tabla.jpg" alt="Tabla & Dholak" className="w-full h-full object-cover object-center" />
          </motion.div>
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${INK}F5, ${INK}CC 55%, ${INK}88)` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${INK}66, transparent 30%, transparent 58%, ${INK} 100%)` }} />
        </div>

        {/* Floating notes */}
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

        {/* Hero text */}
        <div className="relative z-20 flex flex-col justify-center min-h-[85svh] pb-16 pt-24"
          style={{ maxWidth: "55%", paddingLeft: "max(3rem,5vw)", paddingRight: "max(2rem,4vw)" }}>
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex self-start items-center gap-2.5 px-4 py-2 rounded-full font-mono text-[14px] mb-8 tracking-widest uppercase"
            style={{ border: `1px solid ${TURMERIC}45`, background: `${TURMERIC}12`, color: TURMERIC }}>
            INDIAN CLASSICAL · PERCUSSION
          </motion.div>
          <div className="max-w-xl">
            <h1 className="font-serif leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.4rem,5vw,5rem)" }}>
              <motion.span initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="block" style={{ color: IVORY }}>Tabla &</motion.span>
              <motion.span initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.32, duration: 0.8 }} className="block" style={{ color: TURMERIC }}>Dholak.</motion.span>
            </h1>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mt-6 max-w-md">
            <div className="w-12 h-[2px] mb-6 rounded-full" style={{ background: `linear-gradient(to right, ${TURMERIC}, ${SAFFRON})` }} />
            <p className="text-lg leading-relaxed" style={{ color: `${IVORY}CC` }}>
              The heartbeat of Hindustani music — taught with strong fundamentals, deep theory, and the joy of layakari.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── TABLA: WHAT YOU'LL LEARN (white) ───────────────────────────────── */}
      <section className="py-24" style={{ background: LIGHT_BG }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">

          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:pt-6">
            <p className="font-mono text-xs sm:text-sm font-bold tracking-widest mb-3 uppercase" style={{ color: TURMERIC }}>TABLA — WHAT YOU'LL LEARN</p>
            <h2 className="font-serif text-4xl font-semibold leading-tight mb-8" style={{ color: NAVY }}>
              From your first <em style={{ color: TURMERIC }}>Na</em> to your first solo.
            </h2>
            <ul className="space-y-3">
              {TOPICS.map((t, i) => (
                <motion.li key={t} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border transition-colors hover:border-[#E8B84B]/30 hover:bg-amber-50/30"
                  style={{ borderColor: "#E7E5E4" }}>
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: SAFFRON }} />
                  <span className="text-base leading-snug" style={{ color: `${NAVY}CC` }}>{t}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative order-first lg:order-last">
            <div className="absolute inset-0 blur-3xl opacity-15 rounded-3xl" style={{ background: `linear-gradient(to bottom left, ${TURMERIC}, ${SAFFRON})` }} />
            <img
              src="https://varjaymusic.com/wp-content/uploads/2024/08/tabla-details.jpg"
              alt="Tabla details"
              className="rounded-3xl w-full h-full object-cover relative z-10"
              style={{ border: "1px solid #E7E5E4", boxShadow: `0 12px 40px rgba(232,184,75,0.18)` }}
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* ─── TABLA DIAGRAM (light blue strip) ───────────────────────────────── */}
      <section className="py-20" style={{ background: LIGHT_BG }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="font-mono text-xs sm:text-sm font-bold tracking-widest mb-3 uppercase text-center" style={{ color: TURMERIC }}>ANATOMY OF THE TABLA</p>
            <h2 className="font-serif text-3xl font-semibold text-center mb-10" style={{ color: NAVY }}>Know your instrument</h2>

            <div className="relative rounded-3xl overflow-hidden" style={{ border: "1px solid #A8D8F0", boxShadow: "0 8px 32px rgba(91,184,232,0.12)" }}>
              <img
                src="https://varjaymusic.com/wp-content/uploads/2024/07/tabla.jpg"
                alt="Tabla diagram showing Kinaar, Gatthas (Tuners), Vadis (Straps) and Gudaris (Rings)"
                className="w-full object-cover"
                style={{ maxHeight: "420px", objectPosition: "center top" }}
                loading="lazy"
              />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(11,31,58,0.85) 0%, transparent 50%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-wrap gap-3 justify-center">
                {[
                  { label: "Gatthas (Tuners)", color: TURMERIC },
                  { label: "Kinaar", color: SAFFRON },
                  { label: "Vadis (Straps)", color: "#818cf8" },
                  { label: "Gudaris (Rings)", color: "#f0fdf4" },
                ].map(({ label, color }) => (
                  <span key={label} className="px-3 py-1 rounded-full font-mono text-xs tracking-wide"
                    style={{ background: `${color}22`, border: `1px solid ${color}66`, color }}>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── DHOLAK (white) ──────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: LIGHT_BG }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">

          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
            <div className="absolute inset-0 blur-3xl opacity-10 rounded-3xl" style={{ background: `linear-gradient(to bottom right, ${SAFFRON}, ${TURMERIC})` }} />
            <img
              src="https://www.carvedculture.in/cdn/shop/articles/Indian-Dholak_Drum-The-Complete-Guide_68f25b2e-b994-460f-8768-2da4673398ac.jpg?v=1774273778&width=900"
              alt="Dholak"
              className="rounded-3xl w-full object-cover relative z-10"
              style={{ border: "1px solid #E7E5E4", boxShadow: `0 12px 40px rgba(244,129,58,0.14)`, maxHeight: "420px", objectFit: "cover" }}
              loading="lazy"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:pt-6">
            <p className="font-mono text-xs sm:text-sm font-bold tracking-widest mb-3 uppercase" style={{ color: SAFFRON }}>DHOLAK — WHAT YOU'LL LEARN</p>
            <h2 className="font-serif text-4xl font-semibold leading-tight mb-8" style={{ color: NAVY }}>
              Rhythm that <em style={{ color: SAFFRON }}>moves</em> the soul.
            </h2>
            <ul className="space-y-3">
              {DHOLAK_TOPICS.map((t, i) => (
                <motion.li key={t} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border transition-colors hover:border-orange-200 hover:bg-orange-50/30"
                  style={{ borderColor: "#E7E5E4" }}>
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: TURMERIC }} />
                  <span className="text-base leading-snug" style={{ color: `${NAVY}CC` }}>{t}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ─── FACULTY (cream) ─────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: LIGHT_BG }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="font-mono text-xs sm:text-sm font-bold tracking-widest mb-3 uppercase text-center" style={{ color: TURMERIC }}>FACULTY</p>
            <h2 className="font-serif text-3xl font-semibold text-center mb-12" style={{ color: NAVY }}>Learn from the best</h2>

            <div className="rounded-3xl bg-white p-8 md:p-12 grid md:grid-cols-[auto_1fr] gap-8 items-center"
              style={{ border: `1px solid ${TURMERIC}30`, boxShadow: `0 8px 32px rgba(232,184,75,0.10)` }}>

              {/* ── Guru photo ── */}
              <div className="flex flex-col items-center gap-3 shrink-0">
                <div className="w-36 h-44 rounded-2xl overflow-hidden"
                  style={{ border: `2px solid ${TURMERIC}55`, boxShadow: `0 4px 20px ${TURMERIC}28` }}>
                  <img
                    src="https://i.ibb.co/BVZTvSpG/arvind.jpg"
                    alt="Arvind V. Rao — Founder & Owner, Varjay Music Academy"
                    className="w-full h-full object-cover object-top"
                    onError={e => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                      (e.currentTarget.parentElement as HTMLElement).style.background = `linear-gradient(135deg, ${TURMERIC}33, ${TURMERIC}22)`;
                      (e.currentTarget.parentElement as HTMLElement).innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:2.5rem;font-family:serif;color:${TURMERIC}">A</div>`;
                    }}
                  />
                </div>
                <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: TURMERIC }}>Founder & Owner</span>
              </div>

              <div>
                <h3 className="font-serif text-2xl mb-1" style={{ color: NAVY }}>Arvind V. Rao</h3>
                <p className="font-mono text-xs tracking-widest mb-5 uppercase" style={{ color: TURMERIC }}>Founder & Owner — Varjay Music Academy</p>
                <ul className="space-y-2">
                  {[
                    "Visharad in Tabla",
                    "Currently pursuing Alankar from Guru Shri Praveen Karkareji",
                    "10+ years of teaching experience in Tabla before founding the academy",
                    "Learning tabla for 10+ years, teaching for 7 years",
                    "Has trained local, national, and international students",
                    "Affiliated with Akhil Bharatiya Gandharva Mahavidyalaya Mandal (ABGMV)",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: `${NAVY}99` }}>
                      <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: SAFFRON }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SYLLABUS (white) ────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: LIGHT_BG }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="font-mono text-xs sm:text-sm font-bold tracking-widest mb-3 uppercase text-center"
              style={{ color: TURMERIC }}
            >
              SYLLABUS
            </p>

            <h2
              className="font-serif text-3xl font-semibold text-center mb-3"
              style={{ color: NAVY }}
            >
              Structured learning path
            </h2>

            <p
              className="text-center mb-10 text-sm"
              style={{ color: `${NAVY}60` }}
            >
              Affiliation: Akhil Bharatiya Gandharva Mahavidyalaya Mandal (ABGMV)
            </p>

            <div className="space-y-4">
              {SYLLABUS.map(({ level, exams, color }, i) => (
                <motion.div
                  key={level}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl p-6 grid md:grid-cols-[1fr_2fr] gap-4 items-center bg-white border"
                  style={{
                    borderColor: `${color}30`,
                    boxShadow: `0 2px 12px ${color}0D`,
                  }}
                >
                  <div>
                    <span
                      className="px-3 py-1.5 rounded-full text-xs font-semibold font-mono tracking-wide"
                      style={{ background: `${color}18`, color }}
                    >
                      {level}
                    </span>
                  </div>

                  <div className="space-y-1">
                    {exams.map((e) => (
                      <p
                        key={e}
                        className="text-sm"
                        style={{ color: `${NAVY}BB` }}
                      >
                        {e}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── TIMINGS (light blue strip) ──────────────────────────────────────── */}
      <section className="py-20" style={{ background: LIGHT_BG }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="font-mono text-xs sm:text-sm font-bold tracking-widest mb-2 uppercase text-center" style={{ color: TURMERIC }}>CLASS TIMINGS</p>
            <p className="text-center text-xs mb-10 font-mono" style={{ color: `${NAVY}50` }}>(Liable to change)</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {TIMINGS.map((t, i) => (
                <motion.div key={t} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="rounded-2xl p-5 flex items-center gap-4 bg-white"
                  style={{ border: "1px solid #A8D8F0", boxShadow: "0 2px 8px rgba(91,184,232,0.08)" }}>
                  <div className="w-2 h-10 rounded-full shrink-0" style={{ background: `linear-gradient(to bottom, ${TURMERIC}, ${SAFFRON})` }} />
                  <p className="text-sm leading-relaxed" style={{ color: `${NAVY}BB` }}>{t}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── VIDEO (cream) ───────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: LIGHT_BG }}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="font-mono text-xs sm:text-sm font-bold tracking-widest mb-3 uppercase text-center" style={{ color: TURMERIC }}>WATCH & LEARN</p>
            <h2 className="font-serif text-3xl font-semibold text-center mb-10" style={{ color: NAVY }}>See us in action</h2>

            <div className="relative rounded-3xl overflow-hidden"
              style={{ border: `1px solid ${TURMERIC}40`, boxShadow: `0 8px 40px rgba(232,184,75,0.15)`, aspectRatio: "16/9" }}>
              <iframe
                src="https://www.youtube.com/embed/bM0dw6W5aA4"
                title="Tabla performance at Varjay Music Academy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <ContactStrip defaultCourse="Tabla & Dholak" />
    </main>
  );
}