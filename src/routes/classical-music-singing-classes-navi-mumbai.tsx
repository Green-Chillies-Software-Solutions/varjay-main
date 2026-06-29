import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin } from "lucide-react";

import { ContactStrip } from "@/components/varjay/ContactStrip";
import { breadcrumbSchema, courseSchema, ldJson } from "@/components/varjay/schema";

const PAGE_URL     = "https://www.varjaymusic.com/classical-music-singing-classes-navi-mumbai";
const HERO_IMG     = "https://varjaymusic.com/wp-content/uploads/2024/05/classical-vocal.jpg";
const YOUTUBE_EMBED = "https://www.youtube.com/embed/TSMSVuhv9Cw";

// ─── PALETTE (matches site) ──────────────────────────────────────────────────
const INK      = "#0A0F1E";
const CRIMSON  = "#F4813A";
const INDIGO   = "#3D5AF1";
const IVORY    = "#F9F3E8";
const TEAL     = "#17C8A3";
const NAVY     = "#0B1F3A";
const LIGHT_BG = "#EBF5FB";
const GOLD     = "#D4A017";          // accent for classical / raga feel

const notes = ["♩", "♪", "♫", "♬", "𝄞"];

const LOCATIONS = [
  { label: "Navi Mumbai", color: CRIMSON },
  { label: "Vashi",       color: INDIGO  },
  { label: "Sanpada",     color: TEAL    },
];

const WHY_POINTS = [
  "Experienced instructors who understand every student's learning needs",
  "Both online and offline music classes for flexible scheduling",
  "Individual attention ensuring steady, confident progress",
  "Structured lessons from beginner to advanced performer level",
  "Focus on strong musical fundamentals — not rote memorisation",
  "Encouraging atmosphere that inspires discipline and consistency",
];

const SECTIONS = [
  {
    id: "vashi",
    tag: "VASHI",
    color: INDIGO,
    heading: (
      <>
        Classical Music Singing Classes in <em style={{ color: CRIMSON }}>Vashi</em>
      </>
    ),
    body: [
      "Students looking for classical music singing classes in Vashi can learn through well-organised lessons designed to strengthen vocal techniques and musical understanding. The academy emphasises regular practice, proper guidance, and gradual progression so that students can confidently develop their singing abilities.",
      "Each session is conducted with attention to individual learning needs, enabling students to understand concepts clearly before progressing to advanced lessons. This personalised teaching method helps learners improve consistently while enjoying every stage of their musical education.",
    ],
  },
  {
    id: "sanpada",
    tag: "SANPADA",
    color: TEAL,
    heading: (
      <>
        Classical Music Singing Classes in <em style={{ color: CRIMSON }}>Sanpada</em>
      </>
    ),
    body: [
      "For students seeking classical music singing classes in Sanpada, Varjay Music Academy offers quality music education delivered by experienced faculty members. The academy creates an encouraging learning environment where students are motivated to practise regularly and refine their vocal skills through structured instruction.",
      "Learning classical music requires discipline, consistency, and expert guidance. The academy supports students throughout this journey by providing practical learning experiences that help improve musical expression, confidence, and overall performance.",
    ],
  },
  {
    id: "experienced",
    tag: "OUR FACULTY",
    color: GOLD,
    heading: (
      <>
        Learn from <em style={{ color: CRIMSON }}>Experienced</em> Music Teachers
      </>
    ),
    body: [
      "Varjay Music Academy believes that quality music education begins with experienced instructors who understand the learning needs of every student. The academy offers both online and offline music classes, allowing students to choose the learning mode that best suits their schedule and preferences.",
      "The classes focus on developing strong musical fundamentals while making learning enjoyable and engaging. Students receive continuous guidance that encourages them to improve their vocal abilities through consistent practice and personalised instruction.",
    ],
  },
];

export const Route = createFileRoute("/classical-music-singing-classes-navi-mumbai")({
  head: () => ({
    meta: [
      {
        title:
          "Best classical music singing classes in Navi Mumbai|classical music singing classes in Vashi & Sanpada",
      },
      {
        name: "description",
        content:
          "Join the best classical music singing classes in Navi Mumbai, Vashi & Sanpada at Varjay Music Academy with expert instructors and online & offline training.",
      },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content:
          "Best Classical Music Singing Classes in Navi Mumbai — Varjay Music Academy",
      },
      { property: "og:url",   content: PAGE_URL  },
      { property: "og:image", content: HERO_IMG  },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      // Google tag (gtag.js)
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=AW-18276813430",
      },
      {
        children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18276813430');`,
      },
      ldJson(
        courseSchema({
          name: "Classical Music Singing Classes in Navi Mumbai, Vashi & Sanpada",
          description:
            "Structured Indian classical music vocal training for all levels at Varjay Music Academy. Online & offline classes in Navi Mumbai, Vashi & Sanpada.",
          slug: "/classical-music-singing-classes-navi-mumbai",
          category: "Indian Classical Vocal",
        }),
      ),
      ldJson(
        breadcrumbSchema([
          { name: "Home",                              url: "/"                                              },
          { name: "Courses",                           url: "/courses"                                       },
          { name: "Classical Singing Classes Navi Mumbai", url: "/classical-music-singing-classes-navi-mumbai" },
        ]),
      ),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="w-full overflow-hidden" style={{ background: LIGHT_BG }}>

      {/* ─── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: INK, minHeight: "85svh" }}
      >
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute"
            style={{
              width: "70vw", height: "70vh", top: "-20%", left: "-15%",
              background: `radial-gradient(ellipse, ${INDIGO}18 0%, transparent 70%)`,
              transform: "rotate(-20deg)",
            }}
          />
          <div
            className="absolute"
            style={{
              width: "50vw", height: "60vh", bottom: "-10%", left: "5%",
              background: `radial-gradient(ellipse, ${GOLD}10 0%, transparent 65%)`,
            }}
          />
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full"
              style={{
                top: `${35 + i * 4}%`, height: "1px",
                background: `linear-gradient(to right, transparent, ${IVORY}06 20%, ${IVORY}06 80%, transparent)`,
              }}
            />
          ))}
        </div>

        {/* Desktop right image */}
        <div
          className="absolute inset-y-0 right-0 hidden md:block z-10"
          style={{ width: "50%", clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <img
              src={HERO_IMG}
              alt="Classical Music Singing Classes Navi Mumbai"
              className="w-full h-full object-cover object-center"
              onError={e => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                (e.currentTarget.parentElement as HTMLElement).style.background =
                  `linear-gradient(135deg, ${GOLD}33, ${INDIGO}22)`;
              }}
            />
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-48 pointer-events-none" style={{ background: `linear-gradient(to right, ${INK}, transparent)` }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to bottom, ${INK}88 0%, transparent 20%, transparent 70%, ${INK}EE 100%)` }} />
          <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: `linear-gradient(135deg, ${INDIGO}55 0%, transparent 50%, ${GOLD}33 100%)`, mixBlendMode: "color" }} />
        </div>

        {/* Mobile image */}
        <div className="absolute inset-0 md:hidden z-0">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6 }} className="absolute inset-0">
            <img
              src={HERO_IMG}
              alt="Classical Music Singing Classes Navi Mumbai"
              className="w-full h-full object-cover object-center"
              onError={e => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                (e.currentTarget.parentElement as HTMLElement).style.background =
                  `linear-gradient(135deg, ${GOLD}22, ${INDIGO}33)`;
              }}
            />
          </motion.div>
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${INK}F5, ${INK}CC 55%, ${INK}88)` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${INK}66, transparent 30%, transparent 58%, ${INK} 100%)` }} />
        </div>

        {/* Floating notes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {notes.map((note, i) => {
            const c = [GOLD, TEAL, INDIGO, IVORY, CRIMSON][i];
            return (
              <motion.span
                key={i}
                className="absolute select-none"
                style={{
                  fontFamily: "serif",
                  fontSize: `${1.5 + (i % 3) * 0.8}rem`,
                  left: `${10 + i * 15}%`,
                  top: `${25 + (i % 4) * 12}%`,
                  color: `${c}22`,
                }}
                animate={{ y: [-20, -60, -20], opacity: [0.08, 0.22, 0.08], rotate: [-8, 8, -8] }}
                transition={{ duration: 5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
              >
                {note}
              </motion.span>
            );
          })}
        </div>

        {/* Hero text */}
        <div
          className="relative z-20 flex flex-col justify-center min-h-[85svh] pb-16 pt-24"
          style={{ maxWidth: "55%", paddingLeft: "max(3rem,5vw)", paddingRight: "max(2rem,4vw)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex self-start items-center gap-2.5 px-4 py-2 rounded-full font-mono text-[10px] mb-8 tracking-widest uppercase"
            style={{ border: `1px solid ${GOLD}45`, background: `${GOLD}12`, color: GOLD }}
          >
            INDIAN CLASSICAL · VOCAL
          </motion.div>

          <div className="max-w-xl">
            {/* ← SEO H1 */}
            <h1 className="font-serif leading-[1.05] tracking-tight" style={{ fontSize: "clamp(1.9rem,4vw,4rem)" }}>
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="block"
                style={{ color: IVORY }}
              >
                Best Classical
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.32, duration: 0.8 }}
                className="block"
                style={{ color: CRIMSON }}
              >
                Music Singing
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.44, duration: 0.8 }}
                className="block"
                style={{ color: IVORY }}
              >
                Classes in Navi Mumbai.
              </motion.span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.56 }}
            className="mt-6 max-w-md"
          >
            <div className="w-12 h-[2px] mb-6 rounded-full" style={{ background: `linear-gradient(to right, ${GOLD}, ${CRIMSON})` }} />
            <p className="text-lg leading-relaxed" style={{ color: `${IVORY}CC` }}>
              Structured Indian classical vocal training for beginners to aspiring performers — with expert guidance at every step.
            </p>

            {/* Location pills */}
            <div className="flex flex-wrap gap-2 mt-5">
              {LOCATIONS.map((loc) => (
                <span
                  key={loc.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold"
                  style={{ background: `${loc.color}18`, color: loc.color, border: `1px solid ${loc.color}40` }}
                >
                  <MapPin className="w-3 h-3" />
                  {loc.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── INTRO + VIDEO ─────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: LIGHT_BG }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">

          {/* YouTube video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div
              className="absolute inset-0 blur-3xl opacity-15 rounded-3xl"
              style={{ background: `linear-gradient(to top right, ${GOLD}, ${INDIGO})` }}
            />
            <div
              className="relative rounded-3xl overflow-hidden z-10"
              style={{
                border: `1px solid ${CRIMSON}35`,
                boxShadow: `0 12px 40px rgba(232,54,93,0.12)`,
                aspectRatio: "16/9",
              }}
            >
              <iframe
                src={YOUTUBE_EMBED}
                title="Classical Music Singing Classes at Varjay Music Academy — Navi Mumbai"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Intro copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pt-4 space-y-5"
          >
            <p className="font-mono text-xs font-bold tracking-widest uppercase" style={{ color: CRIMSON }}>
              ABOUT THE ACADEMY
            </p>
            <p className="text-base leading-relaxed" style={{ color: `${NAVY}CC` }}>
              If you are searching for the best classical music singing classes in Navi Mumbai, Varjay Music Academy provides a structured learning environment where students can develop their vocal abilities under the guidance of experienced music instructors. The academy is dedicated to helping learners explore Indian classical music through systematic training that supports both beginners and aspiring performers.
            </p>
            <p className="text-base leading-relaxed" style={{ color: `${NAVY}CC` }}>
              At Varjay Music Academy, every student receives individual attention to ensure steady progress throughout their musical journey. The teaching approach focuses on building a strong musical foundation while encouraging students to learn at a comfortable pace. Whether you are beginning your classical music education or looking to strengthen your existing skills, the academy offers a supportive atmosphere that inspires confidence and continuous improvement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── VASHI / SANPADA / EXPERIENCED SECTIONS ───────────────────────── */}
      {SECTIONS.map((sec) => (
        <section key={sec.id} className="py-20" style={{ background: LIGHT_BG }}>
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p
                className="font-mono text-xs font-bold tracking-widest uppercase text-center mb-3"
                style={{ color: sec.color }}
              >
                {sec.tag}
              </p>
              <h2
                className="font-serif text-3xl font-semibold text-center mb-10"
                style={{ color: NAVY }}
              >
                {sec.heading}
              </h2>
              <div
                className="rounded-3xl bg-white p-8 md:p-12 space-y-5"
                style={{ border: `1px solid ${sec.color}25`, boxShadow: `0 8px 32px ${sec.color}10` }}
              >
                {sec.body.map((para, i) => (
                  <p key={i} className="text-base leading-relaxed" style={{ color: `${NAVY}CC` }}>
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* ─── WHY CHOOSE VARJAY ─────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: LIGHT_BG }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-xs font-bold tracking-widest uppercase text-center mb-3" style={{ color: CRIMSON }}>
              WHY CHOOSE US
            </p>
            <h2 className="font-serif text-3xl font-semibold text-center mb-4" style={{ color: NAVY }}>
              Why Choose <em style={{ color: CRIMSON }}>Varjay</em> Music Academy?
            </h2>
            <p className="text-center text-sm mb-12 max-w-xl mx-auto" style={{ color: `${NAVY}70` }}>
              Varjay Music Academy has built a learning environment where students can confidently pursue their passion for music, welcoming learners of all ages and experience levels.
            </p>

            <ul className="space-y-3">
              {WHY_POINTS.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border transition-colors"
                  style={{ borderColor: "#A8D8F0" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = `${CRIMSON}40`)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "#A8D8F0")}
                >
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: TEAL }} />
                  <span className="text-base leading-snug" style={{ color: `${NAVY}CC` }}>{point}</span>
                </motion.li>
              ))}
            </ul>

            {/* Closing copy */}
            <div
              className="mt-10 rounded-3xl bg-white p-8 md:p-10"
              style={{ border: `1px solid ${GOLD}25`, boxShadow: `0 4px 20px ${GOLD}10` }}
            >
              <p className="text-base leading-relaxed text-center" style={{ color: `${NAVY}BB` }}>
                If you are looking for the best classical music singing classes in Navi Mumbai, or searching for reliable classical music singing classes in Vashi or classical music singing classes in Sanpada, Varjay Music Academy provides professional instruction designed to help students grow as musicians. With experienced faculty, flexible online and offline learning options, and a student-focused teaching approach, the academy continues to help aspiring singers build confidence, strengthen their musical foundation, and enjoy the lifelong journey of learning classical music.
              </p>

              {/* Location tags */}
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {LOCATIONS.map((loc) => (
                  <span
                    key={loc.label}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-mono font-semibold"
                    style={{ background: `${loc.color}15`, color: loc.color, border: `1px solid ${loc.color}40` }}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    {loc.label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactStrip defaultCourse="Classical Vocal" />
    </main>
  );
}
