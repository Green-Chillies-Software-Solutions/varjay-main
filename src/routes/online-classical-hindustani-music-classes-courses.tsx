import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, Globe, MonitorPlay, Mic2 } from "lucide-react";

import { ContactStrip } from "@/components/varjay/ContactStrip";
import { breadcrumbSchema, courseSchema, ldJson } from "@/components/varjay/schema";

const PAGE_URL     = "https://www.varjaymusic.com/online-classical-hindustani-music-classes-courses";
// You can replace this with a specific image for classical/hindustani classes later
const HERO_IMG     = "https://images.unsplash.com/photo-1516280440502-22956de6fbb1?w=1200&q=80"; 

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
  { label: "Certified Curriculum", color: TEAL,    icon: Mic2 },
];

const WHY_POINTS = [
  "Live one-to-one online classes",
  "Experienced and trained faculty",
  "Certified curriculum",
  "Flexible online learning",
  "Beginner to advanced learning levels",
  "Examination preparation",
  "Students from India and abroad",
  "Individual attention during every lesson"
];

const LEVELS = [
  "Beginner Level",
  "Intermediate Level",
  "Advanced Level",
  "Examination Preparation"
];

const SECTIONS = [
  {
    id: "home",
    tag: "LEARN FROM HOME",
    color: INDIGO,
    heading: (
      <>
        Learn Classical Music from <em style={{ color: CRIMSON }}>Home</em>
      </>
    ),
    body: [
      "Varjay Music Academy offers live online classes that allow students to learn directly from experienced instructors without the need to travel.",
      "The academy believes that quality music education should be accessible to learners regardless of their location.",
      "Every online session is conducted on a one-to-one basis, enabling teachers to focus on the individual needs of every student. This personalized approach helps learners receive continuous guidance, regular feedback, and support throughout their musical journey.",
      "Students can conveniently attend classes from home while maintaining consistent interaction with qualified faculty members."
    ],
  },
  {
    id: "hindustani",
    tag: "VOCAL PROGRAMS",
    color: TEAL,
    heading: (
      <>
        <em style={{ color: CRIMSON }}>Hindustani Singing</em> at Varjay Music Academy
      </>
    ),
    body: [
      "Varjay Music Academy offers Hindustani Singing as one of its vocal music programs. Students interested in online Hindustani music classes courses can learn through personalized online sessions supported by the academy's structured curriculum.",
      "The academy focuses on gradual learning that allows students to develop their musical understanding through regular practice and guided instruction.",
      "Every lesson is designed to help learners progress according to their individual learning pace while receiving direct support from experienced teachers. With flexible online learning, students can continue their Hindustani music education from anywhere."
    ],
  },
  {
    id: "personalized",
    tag: "INDIVIDUAL ATTENTION",
    color: GOLD,
    heading: (
      <>
        <em style={{ color: CRIMSON }}>Personalized</em> One-to-One Online Classes
      </>
    ),
    body: [
      "One of the key advantages of learning at Varjay Music Academy is the personalized one-to-one teaching model.",
      "Individual sessions allow teachers to understand each student's learning style, provide immediate feedback, monitor regular progress, encourage consistent practice, and offer personalized guidance.",
      "This teaching methodology creates an effective learning environment where every student receives focused attention throughout the learning process."
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
      "Varjay Music Academy is supported by experienced and trained faculty members who are committed to providing quality music education.",
      "The academy's Founder and Head of Tabla, Arvind V. Rao, has more than fifteen years of learning experience and over ten years of teaching experience. Under the academy's guidance, students benefit from professional instruction that encourages steady musical development.",
      "According to the academy's website, students learn through Trinity-certified and ABGMV-certified curriculum while also following the local university syllabus. This educational framework provides a clear learning pathway from beginner level through examination preparation."
    ],
  },
];

export const Route = createFileRoute("/online-classical-hindustani-music-classes-courses")({
  head: () => ({
    meta: [
      {
        title: "Online Classical & Hindustani Music Classes Courses | Varjay Music Academy",
      },
      {
        name: "description",
        content:
          "Join online classical music classes courses and online Hindustani music classes courses with live one-to-one learning, certified curriculum, and experienced faculty.",
      },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: "Online Classical & Hindustani Music Classes Courses | Varjay Music Academy",
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
          name: "Online Classical & Hindustani Music Classes Courses",
          description:
            "Join online classical music classes courses and online Hindustani music classes courses with live one-to-one learning, certified curriculum, and experienced faculty.",
          slug: "/online-classical-hindustani-music-classes-courses",
          category: "Online Classical Music Education",
        }),
      ),
      ldJson(
        breadcrumbSchema([
          { name: "Home",                 url: "/" },
          { name: "Courses",              url: "/courses" },
          { name: "Online Classical & Hindustani", url: "/online-classical-hindustani-music-classes-courses" },
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
              alt="Online Classical & Hindustani Music Classes Courses at Varjay Music Academy"
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
              alt="Online Classical & Hindustani Music Classes Courses at Varjay Music Academy"
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
                Online Classical
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.32, duration: 0.8 }}
                className="block"
                style={{ color: CRIMSON }}
              >
                & Hindustani Music
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.44, duration: 0.8 }}
                className="block"
                style={{ color: IVORY }}
              >
                Classes Courses.
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
              Join online classical music classes courses and online Hindustani music classes courses with live one-to-one learning, certified curriculum, and experienced faculty.
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
              Master Classical & Hindustani Music
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: `${NAVY}CC` }}>
              Indian classical music is built on dedication, structured learning, and continuous practice.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: `${NAVY}CC` }}>
              At Varjay Music Academy, online classical music classes courses and online Hindustani music classes courses are designed to provide students with professional music education through live one-to-one online sessions. Established in 2021, the academy is committed to making quality music learning accessible through experienced faculty, certified curriculum, and flexible online education.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: `${NAVY}CC` }}>
              Students from India and abroad can learn from the comfort of their homes while following a structured learning pathway that supports steady musical growth. Whether you are beginning your musical journey or continuing your training, Varjay Music Academy provides personalized guidance that helps students progress with confidence.
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
              Structured Learning for Every Level
            </h2>
            <p className="text-center text-sm mb-12 max-w-xl mx-auto" style={{ color: `${NAVY}70` }}>
              A systematic curriculum helps students build confidence while developing strong musical foundations. Varjay Music Academy follows an organized learning structure designed to support learners throughout different stages of music education.
            </p>

            {/* Levels */}
            <div className="rounded-3xl p-8 bg-[#FFF4F0] border border-[#F4813A]/20">
              <h3 className="font-serif text-2xl font-semibold mb-6 text-center" style={{ color: NAVY }}>Learning Pathway</h3>
              <div className="grid sm:grid-cols-2 gap-4 justify-center">
                {LEVELS.map((level) => (
                  <div key={level} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white shadow-sm border border-[#F4813A]/10 text-center">
                    <Mic2 className="w-6 h-6" style={{ color: CRIMSON }} />
                    <span className="text-sm font-semibold" style={{ color: NAVY }}>{level}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-sm mt-8 max-w-xl mx-auto" style={{ color: `${NAVY}70` }}>
              This progressive learning model ensures that students understand fundamental concepts before moving to more advanced lessons. Both online classical music classes courses and online Hindustani music classes courses follow this structured educational approach.
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
              Students select Varjay Music Academy because of its structured learning approach and personalized educational experience.
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
                Student Performances and Learning Experience
              </h3>
              <p className="text-base leading-relaxed text-center mb-4" style={{ color: `${NAVY}BB` }}>
                Music education extends beyond classroom instruction. Varjay Music Academy encourages students to participate in musical activities that help build confidence and practical experience. The academy regularly showcases: student performances, musical events, annual stage performances, examination activities, and student gallery highlights.
              </p>
              <p className="text-base leading-relaxed text-center mb-4" style={{ color: `${NAVY}BB` }}>
                These opportunities allow students to demonstrate their progress while becoming part of an active music-learning community. Today, the academy serves more than 150 students from India and around the world, reflecting its dedication to providing accessible music education through both online and offline learning.
              </p>
              <p className="text-base leading-relaxed text-center" style={{ color: `${NAVY}BB` }}>
                If you are looking for online classical music classes courses or online Hindustani music classes courses, Varjay Music Academy offers a structured and flexible learning experience that supports students at every stage of their musical education. Through live one-to-one instruction, experienced faculty, and a certified curriculum, the academy provides personalized guidance that helps learners build confidence and improve consistently.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactStrip defaultCourse="Online Classical / Hindustani" />
    </main>
  );
}
