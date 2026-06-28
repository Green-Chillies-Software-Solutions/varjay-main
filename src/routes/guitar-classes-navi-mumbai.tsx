import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin } from "lucide-react";

import { ContactStrip } from "@/components/varjay/ContactStrip";
import { breadcrumbSchema, courseSchema, ldJson } from "@/components/varjay/schema";

const PAGE_URL = "https://www.varjaymusic.com/guitar-classes-navi-mumbai";
const GUITAR_IMG = "https://varjaymusic.com/wp-content/uploads/2024/05/how-to-play-acous123tic-guitar.jpg";

// ─── PALETTE (matches /guitar) ───────────────────────────────────────────────
const INK     = "#0A0F1E";
const CRIMSON = "#F4813A";
const INDIGO  = "#3D5AF1";
const IVORY   = "#F9F3E8";
const TEAL    = "#17C8A3";
const NAVY    = "#0B1F3A";
const LIGHT_BG = "#EBF5FB";

const notes = ["♩", "♪", "♫", "♬", "𝄞"];

const LOCATIONS = [
  { label: "Navi Mumbai", color: CRIMSON },
  { label: "Vashi",       color: INDIGO  },
  { label: "Sanpada",     color: TEAL    },
];

const WHY_POINTS = [
  "Experienced instructors passionate about teaching",
  "Both online and offline music classes available",
  "Practical, enjoyable sessions — not rote memorisation",
  "Personalised pace — move forward only when ready",
  "Positive atmosphere that keeps students motivated",
  "Beginner to advanced — all skill levels welcome",
];

const SECTIONS = [
  {
    id: "vashi",
    tag: "VASHI",
    color: INDIGO,
    heading: <>Guitar Classes in <em style={{ color: CRIMSON }}>Vashi</em> for Every Learner</>,
    body: [
      "Students searching for guitar classes in Vashi can benefit from the academy's structured teaching approach. The training emphasises proper finger placement, chord progressions, rhythm, strumming patterns, scales, and overall musical understanding. Lessons are designed to help students develop both technical skills and confidence while enjoying the learning experience.",
      "The academy believes that every student learns differently. Therefore, instructors guide learners according to their individual progress, ensuring concepts are understood before moving to the next stage. This personalised approach helps students remain motivated and continue improving throughout their musical journey.",
    ],
  },
  {
    id: "sanpada",
    tag: "SANPADA",
    color: TEAL,
    heading: <>Guitar Classes in <em style={{ color: CRIMSON }}>Sanpada</em> with Professional Music Training</>,
    body: [
      "For aspiring musicians seeking guitar classes in Sanpada, Varjay Music Academy provides quality instruction delivered by experienced music educators. The academy focuses on building strong musical fundamentals that help students perform with greater confidence and accuracy.",
      "Students are encouraged to practise regularly under expert guidance while learning techniques that improve coordination, rhythm, and musical expression. The academy creates a positive atmosphere where students can comfortably ask questions, practise consistently, and continue refining their guitar-playing skills.",
    ],
  },
];

export const Route = createFileRoute("/guitar-classes-navi-mumbai")({
  head: () => ({
    meta: [
      {
        title:
          "Guitar Classes in Vashi, Sanpada & Navi Mumbai | Guitar Courses in Vashi, Sanpada & Navi Mumbai",
      },
      {
        name: "description",
        content:
          "Join guitar classes courses in Navi Mumbai, Vashi & Sanpada at Varjay Music Academy. Learn from expert instructors with structured offline music training classes.",
      },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content:
          "Guitar Classes in Vashi, Sanpada & Navi Mumbai — Varjay Music Academy",
      },
      { property: "og:url",   content: PAGE_URL  },
      { property: "og:image", content: GUITAR_IMG },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      ldJson(
        courseSchema({
          name: "Guitar Classes in Navi Mumbai, Vashi & Sanpada",
          description:
            "Structured guitar training for all levels at Varjay Music Academy. Online & offline classes in Sanpada, Vashi, Navi Mumbai.",
          slug: "/guitar-classes-navi-mumbai",
          category: "Acoustic & Electric Guitar",
        }),
      ),
      ldJson(
        breadcrumbSchema([
          { name: "Home",                     url: "/"                              },
          { name: "Courses",                  url: "/courses"                       },
          { name: "Guitar Classes Navi Mumbai", url: "/guitar-classes-navi-mumbai" },
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
              background: `radial-gradient(ellipse, ${CRIMSON}12 0%, transparent 65%)`,
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
              src={GUITAR_IMG}
              alt="Guitar Classes in Navi Mumbai, Vashi & Sanpada"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-48 pointer-events-none" style={{ background: `linear-gradient(to right, ${INK}, transparent)` }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to bottom, ${INK}88 0%, transparent 20%, transparent 70%, ${INK}EE 100%)` }} />
          <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: `linear-gradient(135deg, ${INDIGO}55 0%, transparent 50%, ${CRIMSON}44 100%)`, mixBlendMode: "color" }} />
        </div>

        {/* Mobile image */}
        <div className="absolute inset-0 md:hidden z-0">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6 }} className="absolute inset-0">
            <img
              src={GUITAR_IMG}
              alt="Guitar Classes in Navi Mumbai, Vashi & Sanpada"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${INK}F5, ${INK}CC 55%, ${INK}88)` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${INK}66, transparent 30%, transparent 58%, ${INK} 100%)` }} />
        </div>

        {/* Floating notes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {notes.map((note, i) => {
            const c = [CRIMSON, TEAL, INDIGO, IVORY, CRIMSON][i];
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
            style={{ border: `1px solid ${CRIMSON}45`, background: `${CRIMSON}12`, color: CRIMSON }}
          >
            VARJAY MUSIC ACADEMY
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
                Guitar Classes in
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.32, duration: 0.8 }}
                className="block"
                style={{ color: CRIMSON }}
              >
                Navi Mumbai,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.44, duration: 0.8 }}
                className="block"
                style={{ color: IVORY }}
              >
                Vashi &amp; Sanpada.
              </motion.span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.56 }}
            className="mt-6 max-w-md"
          >
            <div className="w-12 h-[2px] mb-6 rounded-full" style={{ background: `linear-gradient(to right, ${CRIMSON}, ${INDIGO})` }} />
            <p className="text-lg leading-relaxed" style={{ color: `${IVORY}CC` }}>
              Learn with expert guidance at Varjay Music Academy — structured, practical, and built for every skill level.
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

      {/* ─── INTRO ─────────────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: LIGHT_BG }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div
              className="absolute inset-0 blur-3xl opacity-15 rounded-3xl"
              style={{ background: `linear-gradient(to top right, ${CRIMSON}, ${INDIGO})` }}
            />
            <img
              src={GUITAR_IMG}
              alt="Guitar Classes in Navi Mumbai, Vashi & Sanpada"
              className="rounded-3xl w-full object-cover relative z-10"
              style={{
                border: "1px solid #A8D8F0",
                boxShadow: `0 12px 40px rgba(232,54,93,0.12)`,
                maxHeight: "420px",
                objectFit: "cover",
              }}
              loading="lazy"
            />
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
              If you are looking for guitar classes in Navi Mumbai, Varjay Music Academy offers structured music training designed for learners of different age groups and skill levels. Whether you are taking your first step into music or looking to improve your playing techniques, the academy provides a supportive learning environment where students can build confidence while developing their musical abilities.
            </p>
            <p className="text-base leading-relaxed" style={{ color: `${NAVY}CC` }}>
              Varjay Music Academy is committed to making music education engaging, practical, and accessible. Every lesson is conducted with a focus on helping students understand the fundamentals of guitar while gradually progressing toward advanced techniques. Students receive individual attention, allowing them to learn comfortably at their own pace and strengthen their musical foundation through consistent practice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── VASHI + SANPADA SECTIONS ──────────────────────────────────────── */}
      {SECTIONS.map((sec, idx) => (
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
              <h2 className="font-serif text-3xl font-semibold text-center mb-10" style={{ color: NAVY }}>
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

      {/* ─── WHY VARJAY ────────────────────────────────────────────────────── */}
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
            <h2 className="font-serif text-3xl font-semibold text-center mb-12" style={{ color: NAVY }}>
              Why Learn Guitar at <em style={{ color: CRIMSON }}>Varjay</em> Music Academy?
            </h2>

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
          </motion.div>
        </div>
      </section>

      {/* ─── BEGIN YOUR JOURNEY ────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: LIGHT_BG }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl bg-white p-10 md:p-14 text-center"
            style={{ border: `1px solid ${CRIMSON}25`, boxShadow: `0 8px 32px rgba(232,54,93,0.08)` }}
          >
            <p className="font-mono text-xs font-bold tracking-widest uppercase mb-3" style={{ color: CRIMSON }}>
              BEGIN YOUR MUSICAL JOURNEY
            </p>
            <h2 className="font-serif text-3xl font-semibold mb-6" style={{ color: NAVY }}>
              The right place to start playing.
            </h2>
            <p className="text-base leading-relaxed max-w-2xl mx-auto mb-6" style={{ color: `${NAVY}BB` }}>
              Choosing the right music academy plays an important role in your learning experience. If you are searching for reliable guitar classes in Navi Mumbai, guitar classes in Vashi, or guitar classes in Sanpada, Varjay Music Academy offers a structured and student-focused approach to learning guitar.
            </p>
            <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: `${NAVY}BB` }}>
              With experienced faculty, personalised guidance, flexible learning options, and a commitment to quality music education, the academy helps students build confidence and develop their guitar skills step by step. Whether your goal is to learn for personal enjoyment or to strengthen your musical abilities, Varjay Music Academy provides the right environment to begin and continue your guitar learning journey.
            </p>

            {/* Location tags */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
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
          </motion.div>
        </div>
      </section>

      <ContactStrip defaultCourse="Guitar" />
    </main>
  );
}
