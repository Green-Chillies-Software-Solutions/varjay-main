import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, Globe, MonitorPlay, Music } from "lucide-react";

import { ContactStrip } from "@/components/varjay/ContactStrip";
import { breadcrumbSchema, courseSchema, ldJson } from "@/components/varjay/schema";

const PAGE_URL     = "https://www.varjaymusic.com/online-music-classes";
// You can replace this with a specific image for online classes later
const HERO_IMG     = "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1200&q=80"; 

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
  "Live one-to-one online sessions",
  "Experienced and trained faculty",
  "Certified learning curriculum (Trinity & ABGMV)",
  "Flexible learning from home",
  "Suitable for students across India and internationally",
  "Individual attention during every class",
];

const INSTRUMENTS = [
  "Tabla", "Piano & Keyboard", "Guitar", "Dholak", 
  "Harmonium", "Mandolin", "Violin", "Flute"
];

const VOCALS = [
  "Hindustani Singing", "Carnatic Singing", "Western Singing"
];

const SECTIONS = [
  {
    id: "beginners",
    tag: "FOR BEGINNERS",
    color: INDIGO,
    heading: (
      <>
        Online Music Classes for <em style={{ color: CRIMSON }}>Beginners</em>
      </>
    ),
    body: [
      "Starting music can feel challenging without proper guidance. Varjay Music Academy has developed structured online music classes for beginners that focus on building strong fundamentals before moving toward advanced concepts.",
      "The academy follows clearly organized learning levels: Beginner, Intermediate, Advanced, and Examination Preparation. This structured approach allows beginners to learn step by step while developing confidence throughout their musical journey.",
      "Students receive personal guidance during live online sessions, making it easier to understand techniques and practice effectively.",
    ],
  },
  {
    id: "kids",
    tag: "FOR KIDS",
    color: TEAL,
    heading: (
      <>
        Online Music Classes for <em style={{ color: CRIMSON }}>Kids</em>
      </>
    ),
    body: [
      "Children often learn music best through regular practice and personal encouragement. Varjay Music Academy offers online music classes for kids through personalized sessions designed to provide individual attention.",
      "Parents looking for flexible learning from home can choose online classes where children learn directly from experienced teachers. Student feedback highlights the gradual learning approach that starts with basics and progresses according to each child's learning capacity.",
      "The academy's teaching philosophy emphasizes helping every student develop musical skills through consistent guidance rather than rushing through lessons.",
    ],
  },
  {
    id: "one-to-one",
    tag: "PERSONALIZED LEARNING",
    color: GOLD,
    heading: (
      <>
        <em style={{ color: CRIMSON }}>One-to-One</em> Live Sessions
      </>
    ),
    body: [
      "Unlike large group classes, Varjay Music Academy offers personalized online one-to-one sessions. This learning format allows teachers to understand each student's learning speed, correct techniques during live classes, and provide focused guidance.",
      "Teachers monitor student progress regularly and help learners prepare systematically. Personal attention becomes especially valuable for beginners and young learners who require continuous feedback while building musical foundations.",
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
      "Quality teaching plays an important role in music education. The academy's programs are led by qualified, experienced, and trained faculty. Founder and Head of Tabla, Arvind V. Rao, has more than fifteen years of tabla learning experience and over ten years of teaching experience.",
      "Students benefit from a structured curriculum designed for progressive learning. Programs include certified pathways (Trinity and ABGMV) from beginner through examination preparation. This organized approach helps students continue learning with clearly defined milestones.",
    ],
  },
];

export const Route = createFileRoute("/online-music-classes")({
  head: () => ({
    meta: [
      {
        title: "Online Music Classes for Beginners & Kids | Varjay Music Academy",
      },
      {
        name: "description",
        content:
          "Join online music classes at Varjay Music Academy with one-to-one live sessions for beginners and kids. Learn from experienced faculty from anywhere.",
      },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: "Online Music Classes for Beginners & Kids | Varjay Music Academy",
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
          name: "Online Music Classes for Beginners & Kids",
          description:
            "Join online music classes at Varjay Music Academy with one-to-one live sessions for beginners and kids. Learn from experienced faculty from anywhere.",
          slug: "/online-music-classes",
          category: "Online Music Education",
        }),
      ),
      ldJson(
        breadcrumbSchema([
          { name: "Home",                 url: "/" },
          { name: "Courses",              url: "/courses" },
          { name: "Online Music Classes", url: "/online-music-classes" },
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
              alt="Online music classes by Varjay Music Academy"
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
              alt="Online music classes by Varjay Music Academy"
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
                Online Music
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.32, duration: 0.8 }}
                className="block"
                style={{ color: CRIMSON }}
              >
                Classes for
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.44, duration: 0.8 }}
                className="block"
                style={{ color: IVORY }}
              >
                Beginners & Kids.
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
              Flexible, one-to-one live sessions from the comfort of your home. Accessible to students across India and abroad.
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
              Start Your Musical Journey From Home
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: `${NAVY}CC` }}>
              Learning music has become more flexible than ever, allowing students to develop their skills from the comfort of home. At Varjay Music Academy, online music classes are designed to make quality music education accessible to students across India and abroad through personalized live learning sessions.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: `${NAVY}CC` }}>
              Since its beginning in 2021, the academy has focused on providing structured music education led by qualified and experienced faculty. Whether you are exploring music for the first time or looking for guided instruction, the academy offers online music classes that combine personal attention, certified curriculum, and flexible learning.
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

      {/* ─── INSTRUMENTS & VOCALS (TWO COLUMNS) ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-xs font-bold tracking-widest uppercase text-center mb-3" style={{ color: INDIGO }}>
              OUR PROGRAMS
            </p>
            <h2 className="font-serif text-3xl font-semibold text-center mb-4" style={{ color: NAVY }}>
              Learn Multiple Musical Instruments Online
            </h2>
            <p className="text-center text-sm mb-12 max-w-xl mx-auto" style={{ color: `${NAVY}70` }}>
              Students can choose from various instrumental and vocal programs offered by the academy. Each program follows the academy's structured curriculum and is taught by qualified faculty members.
            </p>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Instruments */}
              <div className="rounded-3xl p-8 bg-[#EBF5FB] border border-[#A8D8F0]/50">
                <h3 className="font-serif text-2xl font-semibold mb-6 text-center" style={{ color: NAVY }}>Instruments</h3>
                <div className="grid grid-cols-2 gap-4">
                  {INSTRUMENTS.map((inst) => (
                    <div key={inst} className="flex items-center gap-2">
                      <Music className="w-4 h-4" style={{ color: INDIGO }} />
                      <span className="text-sm font-semibold" style={{ color: NAVY }}>{inst}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vocals */}
              <div className="rounded-3xl p-8 bg-[#FFF4F0] border border-[#F4813A]/20">
                <h3 className="font-serif text-2xl font-semibold mb-6 text-center" style={{ color: NAVY }}>Vocal Training</h3>
                <div className="grid gap-4">
                  {VOCALS.map((vocal) => (
                    <div key={vocal} className="flex items-center gap-2">
                      <Music className="w-4 h-4" style={{ color: CRIMSON }} />
                      <span className="text-sm font-semibold" style={{ color: NAVY }}>{vocal}</span>
                    </div>
                  ))}
                </div>
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
              Why Choose <em style={{ color: CRIMSON }}>Online</em> Music Classes?
            </h2>
            <p className="text-center text-sm mb-12 max-w-xl mx-auto" style={{ color: `${NAVY}70` }}>
              Online learning allows students to attend lessons without geographical limitations while receiving direct guidance from experienced teachers.
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
                Trusted by Students and Families
              </h3>
              <p className="text-base leading-relaxed text-center mb-4" style={{ color: `${NAVY}BB` }}>
                The academy serves more than 150 students from India and abroad while maintaining a strong reputation among learners and parents. Testimonials appreciate the friendly teaching approach, patient faculty, progressive learning, and positive experiences for children.
              </p>
              <p className="text-base leading-relaxed text-center" style={{ color: `${NAVY}BB` }}>
                Varjay Music Academy continues its mission of helping students transform their talent into meaningful musical milestones through flexible online learning. Varjay Music Academy encourages students to experience music through performances, examination recordings, and annual stage performance opportunities beyond the classroom.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactStrip defaultCourse="Online Classes" />
    </main>
  );
}
