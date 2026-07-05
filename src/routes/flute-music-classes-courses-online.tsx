import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, Globe, MonitorPlay, Music } from "lucide-react";

import { ContactStrip } from "@/components/varjay/ContactStrip";
import { breadcrumbSchema, courseSchema, ldJson } from "@/components/varjay/schema";

const PAGE_URL     = "https://www.varjaymusic.com/flute-music-classes-courses-online";
// You can replace this with a specific image for flute classes later
const HERO_IMG     = "https://images.unsplash.com/photo-1596767527632-414436577cfc?w=1200&q=80"; 

// ─── PALETTE (matches site) ──────────────────────────────────────────────────
const INK      = "#0A0F1E";
const CRIMSON  = "#F4813A";
const INDIGO   = "#3D5AF1";
const IVORY    = "#F9F3E8";
const TEAL     = "#17C8A3";
const NAVY     = "#0B1F3A";
const LIGHT_BG = "#EBF5FB";
const GOLD     = "#D4A017";

const notes = ["♩", "♪", "♫", "♬", "𝄞"];

const HIGHLIGHTS = [
  { label: "Live 1-on-1 Sessions", color: CRIMSON, icon: MonitorPlay },
  { label: "Global Students",      color: INDIGO,  icon: Globe },
  { label: "Certified Curriculum", color: TEAL,    icon: Music },
];

const WHY_POINTS = [
  "Live one-to-one online classes",
  "Experienced and trained faculty",
  "Certified curriculum",
  "Flexible online learning",
  "Beginner to advanced learning levels",
  "Examination preparation",
  "Students from India and abroad",
  "Individual attention during every session"
];

const LEVELS = [
  "Beginner Level",
  "Intermediate Level",
  "Advanced Level",
  "Examination Preparation"
];

const SECTIONS = [
  {
    id: "anywhere",
    tag: "LEARN FROM HOME",
    color: INDIGO,
    heading: (
      <>
        Learn Flute from <em style={{ color: CRIMSON }}>Anywhere</em>
      </>
    ),
    body: [
      "Varjay Music Academy believes that learning music should not be limited by location. Through live online classes, students can receive professional instruction while studying from home.",
      "Every online session is conducted individually, allowing teachers to understand each student's learning style and provide focused guidance. This personalized teaching approach enables learners to receive immediate feedback, regular progress monitoring, and continuous encouragement throughout every stage of learning.",
      "Students from India as well as other countries can participate in online flute classes while enjoying the flexibility of learning according to their schedule."
    ],
  },
  {
    id: "structured",
    tag: "PROGRESSIVE LEARNING",
    color: TEAL,
    heading: (
      <>
        Structured <em style={{ color: CRIMSON }}>Flute Music</em> Courses
      </>
    ),
    body: [
      "A well-planned curriculum helps students develop musical skills gradually. Varjay Music Academy follows a structured educational pathway that supports learners from beginner level to advanced learning.",
      "This organized learning structure ensures that students first build strong fundamentals before progressing to higher levels. Each stage is supported by experienced faculty who provide systematic instruction and personalized guidance.",
      "The academy's flute music courses online are designed to encourage steady improvement while helping students enjoy every step of their musical journey."
    ],
  },
  {
    id: "personalized",
    tag: "INDIVIDUAL ATTENTION",
    color: GOLD,
    heading: (
      <>
        <em style={{ color: CRIMSON }}>Personalized</em> One-to-One Learning
      </>
    ),
    body: [
      "One of the key strengths of Varjay Music Academy is its personalized learning methodology.",
      "Every flute class is conducted on a one-to-one basis, allowing teachers to focus entirely on each student's progress. This teaching approach helps instructors understand individual learning needs, provide immediate corrections, monitor regular progress, encourage consistent practice, and offer personalized guidance.",
      "Individual attention creates a positive learning environment where students receive dedicated support throughout their music education."
    ],
  },
  {
    id: "faculty",
    tag: "EXPERT INSTRUCTION",
    color: CRIMSON,
    heading: (
      <>
        Learn from <em style={{ color: INDIGO }}>Experienced Faculty</em>
      </>
    ),
    body: [
      "Experienced teachers play an important role in helping students develop their musical abilities. Varjay Music Academy is supported by qualified and trained faculty members who are committed to providing quality music education.",
      "The academy's Founder and Head of Tabla, Arvind V. Rao, has more than fifteen years of learning experience and over ten years of teaching experience. Under the academy's educational approach, students benefit from experienced instructors who guide them through structured lessons and continuous learning.",
      "Professional instruction combined with personalized teaching allows students to build confidence while improving their musical skills."
    ],
  },
];

export const Route = createFileRoute("/online-flute-music-classes-courses")({
  head: () => ({
    meta: [
      {
        title: "Flute Music Classes Courses Online | Varjay Music Academy",
      },
      {
        name: "description",
        content:
          "Join flute music classes courses online at Varjay Music Academy with live one-to-one learning, experienced faculty, certified curriculum, and flexible online classes.",
      },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: "Flute Music Classes Courses Online | Varjay Music Academy",
      },
      { property: "og:url",   content: PAGE_URL },
      { property: "og:image", content: HERO_IMG },
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
          name: "Flute Music Classes Courses Online",
          description:
            "Join flute music classes courses online at Varjay Music Academy with live one-to-one learning, experienced faculty, certified curriculum, and flexible online classes.",
          slug: "/online-flute-music-classes-courses",
          category: "Online Flute Education",
        }),
      ),
      ldJson(
        breadcrumbSchema([
          { name: "Home",                 url: "/" },
          { name: "Courses",              url: "/courses" },
          { name: "Online Flute Classes", url: "/online-flute-music-classes-courses" },
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
              background: `radial-gradient(ellipse, ${TEAL}10 0%, transparent 65%)`,
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
              alt="Online flute music classes online at Varjay Music Academy"
              className="w-full h-full object-cover object-center"
              onError={e => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                (e.currentTarget.parentElement as HTMLElement).style.background =
                  `linear-gradient(135deg, ${TEAL}33, ${INDIGO}22)`;
              }}
            />
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-48 pointer-events-none" style={{ background: `linear-gradient(to right, ${INK}, transparent)` }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to bottom, ${INK}88 0%, transparent 20%, transparent 70%, ${INK}EE 100%)` }} />
          <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: `linear-gradient(135deg, ${INDIGO}55 0%, transparent 50%, ${TEAL}33 100%)`, mixBlendMode: "color" }} />
        </div>

        {/* Mobile image */}
        <div className="absolute inset-0 md:hidden z-0">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6 }} className="absolute inset-0">
            <img
              src={HERO_IMG}
              alt="Online flute music classes online at Varjay Music Academy"
              className="w-full h-full object-cover object-center"
              onError={e => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                (e.currentTarget.parentElement as HTMLElement).style.background =
                  `linear-gradient(135deg, ${TEAL}22, ${INDIGO}33)`;
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
            style={{ border: `1px solid ${TEAL}45`, background: `${TEAL}12`, color: TEAL }}
          >
            GLOBAL E-LEARNING
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
                Flute Music
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.32, duration: 0.8 }}
                className="block"
                style={{ color: CRIMSON }}
              >
                Classes Courses
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.44, duration: 0.8 }}
                className="block"
                style={{ color: IVORY }}
              >
                Online.
              </motion.span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.56 }}
            className="mt-6 max-w-md"
          >
            <div className="w-12 h-[2px] mb-6 rounded-full" style={{ background: `linear-gradient(to right, ${TEAL}, ${CRIMSON})` }} />
            <p className="text-lg leading-relaxed" style={{ color: `${IVORY}CC` }}>
              Join flute music classes courses online at Varjay Music Academy with live one-to-one learning, certified curriculum, and experienced faculty.
            </p>

            {/* Highlights pills */}
            <div className="flex flex-wrap gap-2 mt-5">
              {HIGHLIGHTS.map((hl) => (
                <span
                  key={hl.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold"
                  style={{ background: `${hl.color}18`, color: hl.color, border: `1px solid ${hl.color}40` }}
                >
                  <hl.icon className="w-3 h-3" />
                  {hl.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── INTRO ─────────────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: LIGHT_BG }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="font-mono text-xs font-bold tracking-widest uppercase" style={{ color: CRIMSON }}>
              ACCESSIBLE MUSIC EDUCATION
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold" style={{ color: NAVY }}>
              Personalized One-to-One Learning
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: `${NAVY}CC` }}>
              Learning the flute is a rewarding musical journey that combines technique, dedication, and regular practice.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: `${NAVY}CC` }}>
              At Varjay Music Academy, flute music classes online are designed to provide students with quality music education through live one-to-one learning. Established in 2021, the academy has been committed to making music education accessible by offering structured courses, experienced faculty, and flexible online learning for students across India and abroad.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: `${NAVY}CC` }}>
              Whether you are taking your first step into instrumental music or continuing your learning journey, the academy's flute music courses online provide a structured and personalized approach that helps students progress with confidence from the comfort of their homes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── DYNAMIC CONTENT SECTIONS ──────────────────────────────────────── */}
      {SECTIONS.map((sec, index) => (
        <section key={sec.id} className="py-16" style={{ background: index % 2 === 0 ? "white" : LIGHT_BG }}>
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

      {/* ─── LEVELS (ONE COLUMN) ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-xs font-bold tracking-widest uppercase text-center mb-3" style={{ color: INDIGO }}>
              OUR CURRICULUM
            </p>
            <h2 className="font-serif text-3xl font-semibold text-center mb-4" style={{ color: NAVY }}>
              Structured Learning Pathway
            </h2>
            <p className="text-center text-sm mb-12 max-w-xl mx-auto" style={{ color: `${NAVY}70` }}>
              A well-planned curriculum helps students develop musical skills gradually. Varjay Music Academy follows a structured educational pathway that supports learners from beginner level to advanced learning.
            </p>

            {/* Levels */}
            <div className="rounded-3xl p-8 bg-[#FFF4F0] border border-[#F4813A]/20">
              <h3 className="font-serif text-2xl font-semibold mb-6 text-center" style={{ color: NAVY }}>Learning Stages</h3>
              <div className="grid sm:grid-cols-2 gap-4 justify-center">
                {LEVELS.map((level) => (
                  <div key={level} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white shadow-sm border border-[#F4813A]/10 text-center">
                    <Music className="w-6 h-6" style={{ color: CRIMSON }} />
                    <span className="text-sm font-semibold" style={{ color: NAVY }}>{level}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-sm mt-8 max-w-xl mx-auto" style={{ color: `${NAVY}70` }}>
              This organized learning structure ensures that students first build strong fundamentals before progressing to higher levels. Each stage is supported by experienced faculty who provide systematic instruction and personalized guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── WHY CHOOSE VARJAY & TRUSTED BY ────────────────────────────────── */}
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
              Why Choose Varjay Music Academy?
            </h2>
            <p className="text-center text-sm mb-12 max-w-xl mx-auto" style={{ color: `${NAVY}70` }}>
              Students choose Varjay Music Academy because of its student-focused teaching methodology and structured educational system.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4">
              {WHY_POINTS.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border transition-colors"
                  style={{ borderColor: "#A8D8F0" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = `${CRIMSON}40`)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "#A8D8F0")}
                >
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: TEAL }} />
                  <span className="text-sm font-semibold leading-snug" style={{ color: `${NAVY}CC` }}>{point}</span>
                </motion.li>
              ))}
            </ul>

            {/* Closing copy */}
            <div
              className="mt-12 rounded-3xl bg-white p-8 md:p-10"
              style={{ border: `1px solid ${GOLD}25`, boxShadow: `0 4px 20px ${GOLD}10` }}
            >
              <h3 className="font-serif text-2xl font-semibold text-center mb-4" style={{ color: NAVY }}>
                Performance Opportunities and Practical Learning
              </h3>
              <p className="text-base leading-relaxed text-center mb-4" style={{ color: `${NAVY}BB` }}>
                Music education extends beyond regular classroom instruction. Varjay Music Academy encourages students to showcase their learning through practical musical experiences. The academy regularly features student performances, musical events, annual stage performances, examination activities, and student gallery highlights.
              </p>
              <p className="text-base leading-relaxed text-center mb-4" style={{ color: `${NAVY}BB` }}>
                These opportunities allow students to demonstrate their progress while becoming part of a growing community of music learners. Today, the academy proudly serves more than 150 students from India and around the world through both online and offline learning programs.
              </p>
              <p className="text-base leading-relaxed text-center" style={{ color: `${NAVY}BB` }}>
                If you are searching for flute music classes online or flute music courses online, Varjay Music Academy offers a structured and flexible learning experience designed to help students develop their musical skills through professional instruction. With personalized teaching, flexible online education, and a commitment to quality music learning, Varjay Music Academy continues to inspire aspiring musicians by making flute education accessible to students across India and abroad.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactStrip defaultCourse="Online Flute" />
    </main>
  );
}
