import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { ContactStrip } from "@/components/varjay/ContactStrip";
import { breadcrumbSchema, courseSchema, ldJson } from "@/components/varjay/schema";

const URL = "https://instrument-story-spark.lovable.app/guitar";

const TOPICS = [
  "Open chords, barre chords, power chords",
  "Strumming patterns, fingerstyle, picking",
  "Reading TAB and basic Western notation",
  "Scales — major, minor, pentatonic, blues",
  "Lead playing, bends, vibrato, hammer-on/pull-off",
  "Songs from Bollywood, Western pop, rock & acoustic",
];

const TIMINGS = [
  "Monday — 6:00 PM to 9:00 PM",
  "Thursday — 5:00 PM to 9:00 PM",
  "Sunday morning — 9:00 AM to 1:00 PM",
];

// ─── PALETTE ─────────────────────────────────────────────────────────────────
// Hero (dark)
const INK = "#0A0F1E";
const CRIMSON = "#F4813A";
const INDIGO = "#3D5AF1";
const IVORY = "#F9F3E8";
const TEAL = "#17C8A3";

// Light sections
const NAVY = "#0B1F3A";
const LIGHT_BG = "#EBF5FB";

const notes = ["♩", "♪", "♫", "♬", "𝄞"];

export const Route = createFileRoute("/guitar")({
  head: () => ({
    meta: [
      { title: "Guitar & Keyboard Classes — Varjay Music Academy, Navi Mumbai" },
      {
        name: "description",
        content:
          "Learn acoustic & electric guitar and keyboard at Varjay Music Academy. Chords, strumming, fingerstyle, lead — beginner to advanced. Online & offline in Sanpada.",
      },
      { property: "og:title", content: "Guitar & Keyboard Classes — Varjay" },
      { property: "og:url", content: URL },
      { property: "og:image", content: "https://varjaymusic.com/wp-content/uploads/2024/05/how-to-play-acous123tic-guitar.jpg" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      ldJson(
        courseSchema({
          name: "Guitar & Keyboard Classes",
          description:
            "Acoustic & electric guitar and keyboard lessons from beginner to advanced. Trinity School of Music affiliated. Online & offline classes in Sanpada, Navi Mumbai.",
          slug: "/guitar",
          category: "Acoustic & Electric Guitar, Keyboard",
        }),
      ),
      ldJson(
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Courses", url: "/courses" },
          { name: "Guitar & Keyboard", url: "/guitar" },
        ]),
      ),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="w-full overflow-hidden" style={{ background: LIGHT_BG }}>

      {/* ─── HERO (dark — unchanged) ─────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: INK, minHeight: "85svh" }}>

        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute" style={{ width: "70vw", height: "70vh", top: "-20%", left: "-15%", background: `radial-gradient(ellipse, ${INDIGO}18 0%, transparent 70%)`, transform: "rotate(-20deg)" }} />
          <div className="absolute" style={{ width: "50vw", height: "60vh", bottom: "-10%", left: "5%", background: `radial-gradient(ellipse, ${CRIMSON}12 0%, transparent 65%)` }} />
          {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute w-full" style={{ top: `${35 + i * 4}%`, height: "1px", background: `linear-gradient(to right, transparent, ${IVORY}06 20%, ${IVORY}06 80%, transparent)` }} />
          ))}
        </div>

        {/* Desktop right image */}
        <div className="absolute inset-y-0 right-0 hidden md:block z-10" style={{ width: "50%", clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
          <motion.div initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className="absolute inset-0">
            <img src="https://varjaymusic.com/wp-content/uploads/2024/05/how-to-play-acous123tic-guitar.jpg" alt="Playing acoustic guitar" className="w-full h-full object-cover object-center" />
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-48 pointer-events-none" style={{ background: `linear-gradient(to right, ${INK}, transparent)` }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to bottom, ${INK}88 0%, transparent 20%, transparent 70%, ${INK}EE 100%)` }} />
          <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: `linear-gradient(135deg, ${INDIGO}55 0%, transparent 50%, ${CRIMSON}44 100%)`, mixBlendMode: "color" }} />
        </div>

        {/* Mobile image */}
        <div className="absolute inset-0 md:hidden z-0">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6 }} className="absolute inset-0">
            <img src="https://varjaymusic.com/wp-content/uploads/2024/05/how-to-play-acous123tic-guitar.jpg" alt="Playing acoustic guitar" className="w-full h-full object-cover object-center" />
          </motion.div>
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${INK}F5, ${INK}CC 55%, ${INK}88)` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${INK}66, transparent 30%, transparent 58%, ${INK} 100%)` }} />
        </div>

        {/* Floating notes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {notes.map((note, i) => {
            const c = [CRIMSON, TEAL, INDIGO, IVORY, CRIMSON][i];
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
            style={{ border: `1px solid ${CRIMSON}45`, background: `${CRIMSON}12`, color: CRIMSON }}>
            WESTERN · STRINGS & KEYS
          </motion.div>
          <div className="max-w-xl">
            <h1 className="font-serif leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.4rem,5vw,5rem)" }}>
              <motion.span initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="block" style={{ color: IVORY }}>Guitar &</motion.span>
              <motion.span initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.32, duration: 0.8 }} className="block" style={{ color: CRIMSON }}>Keyboard.</motion.span>
            </h1>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mt-6 max-w-md">
            <div className="w-12 h-[2px] mb-6 rounded-full" style={{ background: `linear-gradient(to right, ${CRIMSON}, ${INDIGO})` }} />
            <p className="text-lg leading-relaxed" style={{ color: `${IVORY}CC` }}>
              Acoustic, electric, fingerstyle, lead — pick your sound and we'll get you playing your favourite songs in weeks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── WHAT YOU'LL LEARN + GUITAR & KEYBOARD IMAGE ─────────────────── */}
      <section className="py-24" style={{ background: LIGHT_BG }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">

          {/* Guitar + Keyboard image */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
            <div className="absolute inset-0 blur-3xl opacity-15 rounded-3xl" style={{ background: `linear-gradient(to top right, ${CRIMSON}, ${INDIGO})` }} />
            <img
              src="https://varjaymusic.com/wp-content/uploads/2024/05/how-to-play-acous123tic-guitar.jpg"
              alt="Guitar and Keyboard"
              className="rounded-3xl w-full object-cover relative z-10"
              style={{ border: "1px solid #A8D8F0", boxShadow: `0 12px 40px rgba(232,54,93,0.12)`, maxHeight: "420px", objectFit: "cover" }}
              loading="lazy"
            />
          </motion.div>

          {/* Topics */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:pt-6">
            <p className="font-mono text-xs sm:text-sm font-bold tracking-widest mb-3 uppercase" style={{ color: CRIMSON }}>WHAT YOU'LL LEARN</p>
            <h2 className="font-serif text-4xl font-semibold leading-tight mb-8" style={{ color: NAVY }}>
              From first <em style={{ color: CRIMSON }}>chord</em> to first solo.
            </h2>
            <ul className="space-y-3">
              {TOPICS.map((t, i) => (
                <motion.li key={t} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border transition-colors"
                  style={{ borderColor: "#A8D8F0" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = `${CRIMSON}40`)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "#A8D8F0")}>
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: TEAL }} />
                  <span className="text-base leading-snug" style={{ color: `${NAVY}CC` }}>{t}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ─── FACULTY ─────────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: LIGHT_BG }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="font-mono text-xs sm:text-sm font-bold tracking-widest mb-3 uppercase text-center" style={{ color: CRIMSON }}>FACULTY</p>
            <h2 className="font-serif text-3xl font-semibold text-center mb-12" style={{ color: NAVY }}>Learn from the best</h2>

            <div className="rounded-3xl bg-white p-8 md:p-12 grid md:grid-cols-[auto_1fr] gap-10 items-center"
              style={{ border: `1px solid ${CRIMSON}25`, boxShadow: `0 8px 32px rgba(232,54,93,0.08)` }}>

              {/* Faculty photo */}
              <div className="flex flex-col items-center gap-3 shrink-0">
                <div className="w-36 h-44 rounded-2xl overflow-hidden"
                  style={{ border: `2px solid ${CRIMSON}40`, boxShadow: `0 4px 20px rgba(232,54,93,0.15)` }}>
                  <img
                    src="https://i.ibb.co/v4TxhPXQ/guitarsir.png"
                    alt="Ansil Achankunju"
                    className="w-full h-full object-cover object-top"
                    onError={e => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                      (e.currentTarget.parentElement as HTMLElement).style.background = `linear-gradient(135deg, ${CRIMSON}33, ${INDIGO}22)`;
                      (e.currentTarget.parentElement as HTMLElement).innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:2.5rem;font-family:serif;color:${CRIMSON}">A</div>`;
                    }}
                  />
                </div>
                <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: CRIMSON }}>Faculty</span>
              </div>

              <div>
                <h3 className="font-serif text-2xl mb-1" style={{ color: NAVY }}>Ansil Achankunju</h3>
                <p className="font-mono text-xs tracking-widest mb-5 uppercase" style={{ color: CRIMSON }}>Guitar & Keyboard Faculty — Varjay Music Academy</p>
                {/* About is blank in the sheet — placeholder */}
                <p className="text-sm leading-relaxed mb-5" style={{ color: `${NAVY}80` }}>
                  Ansil is a passionate guitarist and keyboard player with extensive experience in Western music. His teaching approach blends theory with practical songwriting, helping students play their favourite songs from day one.
                </p>
                <ul className="space-y-2">
                  {[
                    "Specialises in acoustic, electric guitar & keyboard",
                    "Affiliated with Trinity School of Music, London",
                    "Teaches Bollywood, Western pop, rock & acoustic styles",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: `${NAVY}99` }}>
                      <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: TEAL }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SYLLABUS ────────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: LIGHT_BG }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="font-mono text-xs sm:text-sm font-bold tracking-widest mb-3 uppercase text-center" style={{ color: CRIMSON }}>SYLLABUS</p>
            <h2 className="font-serif text-3xl font-semibold text-center mb-3" style={{ color: NAVY }}>Structured learning path</h2>
            <p className="text-center mb-10 text-sm" style={{ color: `${NAVY}60` }}>
              Affiliation: Trinity School of Music, London
            </p>

            {/* Single fee card — syllabus levels TBD */}
            <div
              className="rounded-2xl bg-white p-8 text-center"
              style={{
                border: `1px solid ${CRIMSON}25`,
                boxShadow: `0 4px 16px rgba(232,54,93,0.07)`,
              }}
            >
              <p
                className="font-mono text-xs tracking-widest uppercase mb-3"
                style={{ color: `${NAVY}60` }}
              >
                Learning Stages
              </p>

              <h3
                className="font-serif text-2xl font-semibold mb-6"
                style={{ color: NAVY }}
              >
                Progressive Musical Development
              </h3>

              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { label: "Beginner", color: TEAL },
                  { label: "Intermediate", color: CRIMSON },
                  { label: "Advanced", color: INDIGO },
                ].map((stage) => (
                  <span
                    key={stage.label}
                    className="px-4 py-2 rounded-full text-sm font-semibold font-mono"
                    style={{
                      background: `${stage.color}18`,
                      color: stage.color,
                      border: `1px solid ${stage.color}40`,
                    }}
                  >
                    {stage.label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── TIMINGS ─────────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: LIGHT_BG }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="font-mono text-xs sm:text-sm font-bold tracking-widest mb-2 uppercase text-center" style={{ color: CRIMSON }}>CLASS TIMINGS</p>
            <p className="text-center text-xs mb-10 font-mono" style={{ color: `${NAVY}50` }}>(Liable to change)</p>

            <div className="grid sm:grid-cols-3 gap-4">
              {TIMINGS.map((t, i) => (
                <motion.div key={t} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="rounded-2xl p-5 flex items-center gap-4 bg-white"
                  style={{ border: "1px solid #A8D8F0", boxShadow: "0 2px 8px rgba(91,184,232,0.08)" }}>
                  <div className="w-2 h-10 rounded-full shrink-0" style={{ background: `linear-gradient(to bottom, ${CRIMSON}, ${INDIGO})` }} />
                  <p className="text-sm leading-relaxed" style={{ color: `${NAVY}BB` }}>{t}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── VIDEOS — GUITAR & KEYBOARD ──────────────────────────────────── */}
      <section className="py-20" style={{ background: LIGHT_BG }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="font-mono text-xs sm:text-sm font-boldtracking-widest mb-3 uppercase text-center" style={{ color: CRIMSON }}>WATCH & LEARN</p>
            <h2 className="font-serif text-3xl font-semibold text-center mb-12" style={{ color: NAVY }}>See us in action</h2>

            <div className="grid md:grid-cols-2 gap-8">

              {/* Guitar video */}
              <div>
                <p className="font-mono text-xs tracking-widest uppercase mb-3 text-center" style={{ color: TEAL }}>Guitar</p>
                <div className="relative rounded-3xl overflow-hidden"
                  style={{ border: `1px solid ${CRIMSON}35`, boxShadow: `0 8px 32px rgba(232,54,93,0.12)`, aspectRatio: "9/16" }}>
                  <iframe
                    src="https://www.youtube.com/embed/jUe6qmKuGRA"
                    title="Guitar class at Varjay Music Academy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Keyboard video */}
              <div>
                <p className="font-mono text-xs tracking-widest uppercase mb-3 text-center" style={{ color: INDIGO }}>Keyboard</p>
                <div className="relative rounded-3xl overflow-hidden"
                  style={{ border: `1px solid ${INDIGO}35`, boxShadow: `0 8px 32px rgba(61,90,241,0.12)`, aspectRatio: "16/9" }}>
                  <iframe
                    src="https://www.youtube.com/embed/ldgVXtaDZgw"
                    title="Keyboard class at Varjay Music Academy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      <ContactStrip defaultCourse="Guitar & Keyboard" />
    </main>
  );
}