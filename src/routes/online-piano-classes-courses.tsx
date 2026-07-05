import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, Globe, MonitorPlay, Keyboard } from "lucide-react";

import { ContactStrip } from "@/components/varjay/ContactStrip";
import { breadcrumbSchema, courseSchema, ldJson } from "@/components/varjay/schema";

const PAGE_URL     = "https://www.varjaymusic.com/online-piano-classes-courses";
// You can replace this with a specific image for piano classes later
const HERO_IMG     = "https://images.unsplash.com/photo-1552422535-c45813c61732?w=1200&q=80"; 

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
  { label: "Certified Curriculum", color: TEAL,    icon: Keyboard },
];

const WHY_POINTS = [
  "Live one-to-one online classes[cite: 5]",
  "Experienced and trained faculty[cite: 5]",
  "Certified curriculum[cite: 5]",
  "Flexible online learning[cite: 5]",
  "Beginner to advanced learning levels[cite: 5]",
  "Examination preparation[cite: 5]",
  "Students from India and abroad[cite: 5]",
  "Personalized guidance during every session[cite: 5]"
];

const LEVELS = [
  "Beginner Level[cite: 5]",
  "Intermediate Level[cite: 5]",
  "Advanced Level[cite: 5]",
  "Examination Preparation[cite: 5]"
];

const SECTIONS = [
  {
    id: "anywhere",
    tag: "LEARN FROM ANYWHERE",
    color: INDIGO,
    heading: (
      <>
        Learn Piano from <em style={{ color: CRIMSON }}>Anywhere</em>
      </>
    ),
    body: [
      "Varjay Music Academy believes quality music education should be accessible regardless of location. Through live online sessions, students can learn directly from experienced instructors while enjoying the flexibility of studying from home.[cite: 5]",
      "The academy follows a personalized teaching approach where every student receives one-to-one attention during each lesson. This allows instructors to understand individual learning progress, provide regular feedback, and guide students according to their learning pace.[cite: 5]",
      "Students from India as well as other countries continue their music education through the academy's online learning platform, making quality instruction available wherever they are.[cite: 5]"
    ],
  },
  {
    id: "structured",
    tag: "PROGRESSIVE LEARNING",
    color: TEAL,
    heading: (
      <>
        Structured Online <em style={{ color: CRIMSON }}>Piano Courses</em>
      </>
    ),
    body: [
      "A well-organized curriculum helps students develop confidence while learning music. Varjay Music Academy follows a structured teaching methodology that allows students to progress gradually.[cite: 5]",
      "This progressive structure helps beginners establish strong fundamentals before moving toward more advanced learning. Students continue building their skills through guided lessons supported by experienced teachers.[cite: 5]",
      "The academy emphasizes consistent improvement rather than rushing through lessons, allowing students to enjoy every stage of their piano learning journey.[cite: 5]"
    ],
  },
  {
    id: "personalized",
    tag: "INDIVIDUAL ATTENTION",
    color: GOLD,
    heading: (
      <>
        <em style={{ color: CRIMSON }}>Personalized</em> One-to-One Piano Learning
      </>
    ),
    body: [
      "One of the key advantages of the academy's online piano classes is the focus on individualized instruction.[cite: 5]",
      "Every online session is conducted on a one-to-one basis, enabling teachers to understand each student's learning style, provide focused guidance, monitor individual progress, help students improve gradually, and encourage regular practice.[cite: 5]",
      "This personalized approach creates an effective learning environment where students receive dedicated attention throughout their musical journey.[cite: 5]"
    ],
  },
  {
    id: "faculty",
    tag: "EXPERT INSTRUCTION",
    color: CRIMSON,
    heading: (
      <>
        Experienced Faculty & <em style={{ color: INDIGO }}>Certified Curriculum</em>
      </>
    ),
    body: [
      "Learning from experienced teachers can make a significant difference in music education. Varjay Music Academy is supported by qualified and trained faculty members who guide students through structured lessons and practical learning.[cite: 5]",
      "The academy is led by Founder and Head of Tabla, Arvind V. Rao, who has over fifteen years of learning experience and more than ten years of teaching experience. Under the academy's commitment to quality education, students benefit from experienced instructors who encourage steady musical growth through professional guidance.[cite: 5]",
      "According to the information available on the website, students learn through Trinity-certified and ABGMV-certified curriculum while also following the local university syllabus. By combining structured learning with personalized instruction, the academy provides a clear pathway for students pursuing piano education.[cite: 5]"
    ],
  },
];

export const Route = createFileRoute("/online-piano-classes-courses")({
  head: () => ({
    meta: [
      {
        title: "Online Piano Classes & Online Piano Courses | Varjay Music Academy",
      },
      {
        name: "description",
        content:
          "Join online piano classes at Varjay Music Academy with live one-to-one lessons, experienced faculty, certified curriculum, and flexible online piano courses.",
      },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: "Online Piano Classes & Online Piano Courses | Varjay Music Academy",
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
          name: "Online Piano Classes & Online Piano Courses",
          description:
            "Join online piano classes at Varjay Music Academy with live one-to-one lessons, experienced faculty, certified curriculum, and flexible online piano courses.",
          slug: "/online-piano-classes-courses",
          category: "Online Piano Education",
        }),
      ),
      ldJson(
        breadcrumbSchema([
          { name: "Home",                 url: "/" },
          { name: "Courses",              url: "/courses" },
          { name: "Online Piano Classes", url: "/online-piano-classes-courses" },
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
              alt="Online piano classes courses at Varjay Music Academy"
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
              alt="Online piano classes courses at Varjay Music Academy"
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
                Online Piano
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.32, duration: 0.8 }}
                className="block"
                style={{ color: CRIMSON }}
              >
                Classes &
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.44, duration: 0.8 }}
                className="block"
                style={{ color: IVORY }}
              >
                Courses.
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
              Join online piano classes with live one-to-one lessons, experienced faculty, certified curriculum, and flexible online piano courses.[cite: 5]
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
              Personalized Live Learning
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: `${NAVY}CC` }}>
              Learning the piano has become more convenient with flexible online education that allows students to build their musical skills from the comfort of home.[cite: 5]
            </p>
            <p className="text-lg leading-relaxed" style={{ color: `${NAVY}CC` }}>
              At Varjay Music Academy, online piano classes are designed to provide personalized learning through live one-to-one sessions conducted by experienced faculty. Established in 2021, the academy has been dedicated to offering structured music education for students across India and abroad through both online and offline learning options.[cite: 5]
            </p>
            <p className="text-lg leading-relaxed" style={{ color: `${NAVY}CC` }}>
              Whether you are starting your musical journey or looking to improve your existing skills, the academy's online piano courses are designed to support learners at every stage with a systematic curriculum and individual guidance.[cite: 5]
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
              The learning pathway guides students clearly from foundational techniques to advanced examination preparation.[cite: 5]
            </p>

            {/* Levels */}
            <div className="rounded-3xl p-8 bg-[#FFF4F0] border border-[#F4813A]/20">
              <h3 className="font-serif text-2xl font-semibold mb-6 text-center" style={{ color: NAVY }}>Learning Stages</h3>
              <div className="grid sm:grid-cols-2 gap-4 justify-center">
                {LEVELS.map((level) => (
                  <div key={level} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white shadow-sm border border-[#F4813A]/10 text-center">
                    <Keyboard className="w-6 h-6" style={{ color: CRIMSON }} />
                    <span className="text-sm font-semibold" style={{ color: NAVY }}>{level}</span>
                  </div>
                ))}
              </div>
            </div>
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
              Students choose Varjay Music Academy because of its student-focused approach and structured learning environment.[cite: 5]
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
                More Than Just Piano Learning
              </h3>
              <p className="text-base leading-relaxed text-center mb-4" style={{ color: `${NAVY}BB` }}>
                Varjay Music Academy focuses on helping students grow through both learning and performance opportunities. The academy regularly shares student performances, musical events, annual stage performances, and examination activities that showcase students' progress. These activities encourage learners to apply their skills while building confidence through practical musical experiences.[cite: 5]
              </p>
              <p className="text-base leading-relaxed text-center" style={{ color: `${NAVY}BB` }}>
                If you are looking for online piano classes that combine flexibility with personalized teaching, Varjay Music Academy offers a structured learning experience designed for students of different age groups and learning levels. Through live one-to-one instruction, experienced faculty, and certified curriculum, the academy helps students develop their musical skills with confidence.[cite: 5]
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactStrip defaultCourse="Online Piano" />
    </main>
  );
}
