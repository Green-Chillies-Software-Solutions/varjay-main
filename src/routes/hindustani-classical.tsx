import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { ContactStrip } from "@/components/varjay/ContactStrip";
import { breadcrumbSchema, courseSchema, ldJson } from "@/components/varjay/schema";

const URL = "https://instrument-story-spark.lovable.app/hindustani-classical";

const SYLLABUS = [
  { level: "Beginner", exams: ["Prarambhik (Base Level)", "Praveshika Pratham (Entry Level)", "Praveshika Poorna (Entry Level)"], color: "#17C8A3" },
  { level: "Intermediate", exams: ["Madhyama Pratham (Mid Level 1)", "Madhyama Poorna (Mid Level 2)"], color: "#F4813A" },
  { level: "Advanced", exams: ["Visharath Pratham (Mid Level 1)", "Visharath Poorna (Mid Level 2)"], color: "#3D5AF1" },
];

// ─── PALETTE ─────────────────────────────────────────────────────────────────
const INK      = "#0A0F1E";
const TEAL     = "#17C8A3";
const SAFFRON  = "#F4813A";
const INDIGO   = "#3D5AF1";
const IVORY    = "#F9F3E8";
const NAVY     = "#0B1F3A";
const LIGHT_BG = "#EBF5FB";

const notes = ["♩", "♪", "♫", "♬", "𝄞"];

export const Route = createFileRoute("/hindustani-classical")({
  head: () => ({
    meta: [
      { title: "Hindustani Vocal & Harmonium — Varjay Music Academy, Navi Mumbai" },
      {
        name: "description",
        content:
          "Learn Hindustani Classical vocals and Harmonium at Varjay Music Academy. ABGMV-certified syllabus from Prarambhik to Visharad. Online & offline in Sanpada, Navi Mumbai.",
      },
      { property: "og:title", content: "Hindustani Vocal & Harmonium — Varjay" },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      ldJson(
        courseSchema({
          name: "Hindustani Vocal & Harmonium",
          description:
            "Hindustani classical vocal and harmonium training (Prarambhik to Visharad) with ABGMV-aligned syllabus. Online & offline.",
          slug: "/hindustani-classical",
          category: "Indian Classical Vocals & Harmonium",
        }),
      ),
      ldJson(
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Courses", url: "/courses" },
          { name: "Hindustani Vocal & Harmonium", url: "/hindustani-classical" },
        ]),
      ),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="w-full overflow-hidden" style={{ background: LIGHT_BG }}>

      {/* ─── HERO (dark) ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: INK, minHeight: "85svh" }}>

        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute" style={{ width: "70vw", height: "70vh", top: "-20%", left: "-15%", background: `radial-gradient(ellipse, ${INDIGO}18 0%, transparent 70%)`, transform: "rotate(-20deg)" }} />
          <div className="absolute" style={{ width: "50vw", height: "60vh", bottom: "-10%", left: "5%", background: `radial-gradient(ellipse, ${TEAL}12 0%, transparent 65%)` }} />
          {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute w-full" style={{ top: `${35 + i * 4}%`, height: "1px", background: `linear-gradient(to right, transparent, ${IVORY}06 20%, ${IVORY}06 80%, transparent)` }} />
          ))}
        </div>

        {/* Desktop right image */}
        <div className="absolute inset-y-0 right-0 hidden md:block z-10" style={{ width: "50%", clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
          <motion.div initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className="absolute inset-0">
            <img src="https://varjaymusic.com/wp-content/uploads/2024/05/SRG_1204-copy-scaled-1-1024x576.jpg" alt="Hindustani Classical Vocals" className="w-full h-full object-cover object-center" />
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-48 pointer-events-none" style={{ background: `linear-gradient(to right, ${INK}, transparent)` }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to bottom, ${INK}88 0%, transparent 20%, transparent 70%, ${INK}EE 100%)` }} />
          <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: `linear-gradient(135deg, ${INDIGO}55 0%, transparent 50%, ${TEAL}44 100%)`, mixBlendMode: "color" }} />
        </div>

        {/* Mobile image */}
        <div className="absolute inset-0 md:hidden z-0">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6 }} className="absolute inset-0">
            <img src="https://varjaymusic.com/wp-content/uploads/2024/05/SRG_1204-copy-scaled-1-1024x576.jpg" alt="Hindustani Classical Vocals" className="w-full h-full object-cover object-center" />
          </motion.div>
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${INK}F5, ${INK}CC 55%, ${INK}88)` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${INK}66, transparent 30%, transparent 58%, ${INK} 100%)` }} />
        </div>

        {/* Floating notes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {notes.map((note, i) => {
            const c = [TEAL, SAFFRON, INDIGO, IVORY, TEAL][i];
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
            style={{ border: `1px solid ${TEAL}45`, background: `${TEAL}12`, color: TEAL }}>
            VOCALS · HARMONIUM · INDIAN CLASSICAL
          </motion.div>
          <div className="max-w-xl">
            <h1 className="font-serif leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.4rem,5vw,5rem)" }}>
              <motion.span initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="block" style={{ color: IVORY }}>Hindustani</motion.span>
              <motion.span initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.32, duration: 0.8 }} className="block italic" style={{ color: TEAL, textShadow: `0 0 50px ${TEAL}40` }}>Vocal &</motion.span>
              <motion.span initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.44, duration: 0.8 }} className="block" style={{ color: IVORY }}>Harmonium.</motion.span>
            </h1>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="mt-6 max-w-md">
            <div className="w-12 h-[2px] mb-6 rounded-full" style={{ background: `linear-gradient(to right, ${TEAL}, ${SAFFRON})` }} />
            <p className="text-lg leading-relaxed" style={{ color: `${IVORY}CC` }}>
              A formal vocal training path rooted in raag, taal and bandish — taught with the patience of an old gurukul.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── INSTRUMENTS IMAGE STRIP ─────────────────────────────────────── */}
      <section className="py-16" style={{ background: LIGHT_BG }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="font-mono text-xs sm:text-sm font-bold tracking-widest mb-10 uppercase text-center" style={{ color: TEAL }}>
              VOCAL & HARMONIUM
            </p>

            {/* ── FIXED: bigger cards using a responsive grid ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Harmonium */}
              <div className="rounded-2xl bg-white overflow-hidden flex flex-col items-center justify-center p-8"
                style={{ border: "1px solid #A8D8F0", boxShadow: "0 4px 24px rgba(23,200,163,0.12)", minHeight: "300px" }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Harmonium_20151009_%2823914086965%29.jpg/1280px-Harmonium_20151009_%2823914086965%29.jpg"
                  alt="Harmonium"
                  className="w-full h-56 object-contain"
                />
                <p className="mt-4 font-mono text-xs sm:text-sm font-bold tracking-widest uppercase text-center" style={{ color: TEAL }}>Harmonium</p>
              </div>

              {/* Mic */}
              <div className="rounded-2xl bg-white overflow-hidden flex flex-col items-center justify-center p-8"
                style={{ border: "1px solid #A8D8F0", boxShadow: "0 4px 24px rgba(23,200,163,0.12)", minHeight: "300px" }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Shure_mikrofon_55S.jpg/960px-Shure_mikrofon_55S.jpg"
                  alt="Microphone"
                  className="w-full h-56 object-contain"
                />
                <p className="mt-4 font-mono text-xs sm:text-sm font-bold tracking-widest uppercase text-center" style={{ color: TEAL }}>Vocals</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FACULTY ─────────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: LIGHT_BG }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="font-mono text-xs sm:text-sm font-bold tracking-widest mb-3 uppercase text-center" style={{ color: TEAL }}>FACULTY</p>
            <h2 className="font-serif text-3xl font-semibold text-center mb-12" style={{ color: NAVY }}>Learn from the best</h2>

            <div className="rounded-3xl bg-white p-8 md:p-12 grid md:grid-cols-[auto_1fr] gap-10 items-start"
              style={{ border: `1px solid ${TEAL}30`, boxShadow: `0 8px 32px rgba(23,200,163,0.09)` }}>

              {/* Faculty photo */}
              <div className="flex flex-col items-center gap-3 shrink-0">
                <div className="w-36 h-44 rounded-2xl overflow-hidden"
                  style={{ border: `2px solid ${TEAL}50`, boxShadow: `0 4px 20px rgba(23,200,163,0.18)` }}>
                  <img
                    src="https://i.ibb.co/4nd03SPm/hindustanivocal.png"
                    alt="Vishal R. Rajguru"
                    className="w-full h-full object-cover object-top"
                    onError={e => {
                      const el = e.currentTarget as HTMLImageElement;
                      el.style.display = "none";
                      const parent = el.parentElement as HTMLElement;
                      parent.style.background = `linear-gradient(135deg, ${TEAL}33, ${INDIGO}22)`;
                      parent.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:2.5rem;font-family:serif;color:${TEAL}">V</div>`;
                    }}
                  />
                </div>
                <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: TEAL }}>Faculty</span>
              </div>

              {/* Bio */}
              <div>
                <h3 className="font-serif text-2xl mb-1" style={{ color: NAVY }}>Vishal R. Rajguru</h3>
                <p className="font-mono text-xs tracking-widest mb-5 uppercase" style={{ color: TEAL }}>Vocal & Harmonium Faculty — Varjay Music Academy</p>
                <p className="text-sm leading-relaxed mb-5" style={{ color: `${NAVY}88` }}>
                  He has 5 years of teaching experience in Vocals and Harmonium, and also works as a music teacher in a school in Vashi, Navi Mumbai.
                </p>
                <ul className="space-y-2">
                  {[
                    "5 years of teaching experience in Vocals & Harmonium",
                    "Music teacher at a school in Vashi, Navi Mumbai",
                    "Affiliated with Akhil Bharatiya Gandharva Mahavidyalaya Mandal (ABGMV)",
                    "Teaches all levels from Prarambhik to Visharad",
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
            <p className="font-mono text-xs sm:text-sm font-bold tracking-widest mb-3 uppercase text-center" style={{ color: TEAL }}>SYLLABUS</p>
            <h2 className="font-serif text-3xl font-semibold text-center mb-3" style={{ color: NAVY }}>Structured learning path</h2>
            <p className="text-center mb-10 text-sm" style={{ color: `${NAVY}60` }}>
              Affiliation: Akhil Bharatiya Gandharva Mahavidyalaya Mandal (ABGMV)
            </p>

            <div className="space-y-4">
              {SYLLABUS.map(({ level, exams, color }, i) => (
                <motion.div key={level} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="rounded-2xl p-6 grid md:grid-cols-[1fr_2fr] gap-4 items-center bg-white"
                  style={{ border: `1px solid ${color}30`, boxShadow: `0 2px 12px ${color}0D` }}>
                  <div>
                    <span className="px-3 py-1.5 rounded-full text-xs font-semibold font-mono tracking-wide"
                      style={{ background: `${color}18`, color }}>
                      {level}
                    </span>
                  </div>
                  <div className="space-y-1">
                    {exams.map(e => (
                      <p key={e} className="text-sm" style={{ color: `${NAVY}BB` }}>{e}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── TIMINGS ─────────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: LIGHT_BG }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="font-mono text-xs sm:text-sm font-bold tracking-widest mb-2 uppercase text-center" style={{ color: TEAL }}>CLASS TIMINGS</p>
            <p className="text-center text-xs mb-10 font-mono" style={{ color: `${NAVY}50` }}>(Liable to change)</p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                "Tuesday Evening — 6:30 PM to 9:30 PM",
                "Friday Evening — 6:30 PM to 9:30 PM",
              ].map((t, i) => (
                <motion.div key={t} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="rounded-2xl p-5 flex items-center gap-4 bg-white"
                  style={{ border: "1px solid #A8D8F0", boxShadow: "0 2px 8px rgba(91,184,232,0.08)" }}>
                  <div className="w-2 h-10 rounded-full shrink-0" style={{ background: `linear-gradient(to bottom, ${TEAL}, ${SAFFRON})` }} />
                  <p className="text-sm leading-relaxed" style={{ color: `${NAVY}BB` }}>{t}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── VIDEO (portrait mode) ───────────────────────────────────────── */}
      <section className="py-20" style={{ background: LIGHT_BG }}>
        <div className="max-w-sm mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="font-mono text-xs sm:text-sm font-bold tracking-widest mb-3 uppercase text-center" style={{ color: TEAL }}>WATCH & LEARN</p>
            <h2 className="font-serif text-3xl font-semibold text-center mb-10" style={{ color: NAVY }}>See us in action</h2>

            <div className="relative rounded-3xl overflow-hidden"
              style={{ border: `1px solid ${TEAL}40`, boxShadow: `0 8px 32px rgba(23,200,163,0.14)`, aspectRatio: "9/16" }}>
              {/* ── FIXED: proper YouTube embed URL ── */}
              <iframe
                src="https://www.youtube.com/embed/0Re6a8Wb_B4"
                title="Hindustani Vocal class at Varjay Music Academy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <ContactStrip defaultCourse="Vocals (Hindustani Classical)" />
    </main>
  );
}