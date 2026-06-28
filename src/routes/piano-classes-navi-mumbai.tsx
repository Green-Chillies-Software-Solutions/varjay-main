import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin } from "lucide-react";

import { ContactStrip } from "@/components/varjay/ContactStrip";
import { breadcrumbSchema, courseSchema, ldJson } from "@/components/varjay/schema";

const PAGE_URL      = "https://www.varjaymusic.com/piano-classes-navi-mumbai";
const HERO_IMG      = "https://varjaymusic.com/wp-content/uploads/2024/05/piano-classes.jpg";
const YOUTUBE_EMBED = "https://www.youtube.com/embed/TSMSVuhv9Cw";

// ─── PALETTE ────────────────────────────────────────────────────────────────
const INK      = "#0A0F1E";
const CRIMSON  = "#F4813A";
const INDIGO   = "#3D5AF1";
const IVORY    = "#F9F3E8";
const TEAL     = "#17C8A3";
const NAVY     = "#0B1F3A";
const LIGHT_BG = "#EBF5FB";
const VIOLET   = "#7C3AED";          // piano-specific accent

const notes = ["♩", "♪", "♫", "♬", "𝄞"];

const LOCATIONS = [
  { label: "Navi Mumbai", color: CRIMSON },
  { label: "Vashi",       color: INDIGO  },
  { label: "Sanpada",     color: TEAL    },
];

const WHY_POINTS = [
  "Experienced instructors passionate about quality music education",
  "Both online and offline classes — choose what suits your schedule",
  "Individual attention so every student progresses at their own pace",
  "Structured lessons from beginner through to advanced levels",
  "Focus on practical understanding and long-term musical development",
  "Welcoming atmosphere for all age groups and experience levels",
];

const SECTIONS = [
  {
    id: "vashi",
    tag: "VASHI",
    color: INDIGO,
    heading: (
      <>
        Piano Classes in <em style={{ color: CRIMSON }}>Vashi</em>
      </>
    ),
    body: [
      "Students looking for piano classes in Vashi can learn in a positive and motivating environment where every lesson focuses on developing confidence and improving musical ability. The academy believes that consistent practice combined with expert instruction helps students achieve better learning outcomes.",
      "Each student receives personalised guidance according to their learning pace. This approach enables learners to strengthen their understanding of piano techniques while gradually improving coordination, rhythm, and musical expression. The structured teaching method ensures that every lesson contributes to long-term musical development.",
    ],
  },
  {
    id: "sanpada",
    tag: "SANPADA",
    color: TEAL,
    heading: (
      <>
        Piano Classes in <em style={{ color: CRIMSON }}>Sanpada</em>
      </>
    ),
    body: [
      "If you are searching for piano classes in Sanpada, Varjay Music Academy provides quality music education with experienced teachers dedicated to helping students succeed. The academy encourages learners to develop discipline, practise regularly, and enjoy the process of mastering the piano.",
      "Students are guided through every stage of learning with clear instruction and continuous support. The academy's welcoming atmosphere allows learners to ask questions, improve their skills confidently, and continue growing throughout their musical journey.",
    ],
  },
  {
    id: "experienced",
    tag: "OUR FACULTY",
    color: VIOLET,
    heading: (
      <>
        Learn with <em style={{ color: CRIMSON }}>Experienced</em> Music Instructors
      </>
    ),
    body: [
      "Varjay Music Academy is committed to providing high-quality music education through experienced faculty members who are passionate about teaching. The academy offers both online and offline music classes, allowing students to choose the learning format that best fits their schedule and convenience.",
      "Every lesson focuses on practical understanding and gradual improvement. Students receive consistent encouragement to practise regularly while building confidence through structured learning and expert guidance.",
    ],
  },
];

export const Route = createFileRoute("/piano-classes-navi-mumbai")({
  head: () => ({
    meta: [
      {
        title: "Piano Classes in Navi Mumbai | Piano Classes in Vashi & Sanpada",
      },
      {
        name: "description",
        content:
          "Join piano classes in Navi Mumbai, Vashi & Sanpada at Varjay Music Academy. Learn from expert instructors through structured online and offline music classes.",
      },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: "Piano Classes in Navi Mumbai — Varjay Music Academy",
      },
      { property: "og:url",   content: PAGE_URL  },
      { property: "og:image", content: HERO_IMG  },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      ldJson(
        courseSchema({
          name: "Piano Classes in Navi Mumbai, Vashi & Sanpada",
          description:
            "Structured piano lessons for all levels at Varjay Music Academy. Online & offline classes in Navi Mumbai, Vashi & Sanpada.",
          slug: "/piano-classes-navi-mumbai",
          category: "Piano",
        }),
      ),
      ldJson(
        breadcrumbSchema([
          { name: "Home",                       url: "/"                         },
          { name: "Courses",                    url: "/courses"                  },
          { name: "Piano Classes Navi Mumbai",  url: "/piano-classes-navi-mumbai" },
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
      <section className="relative overflow-hidden" style={{ background: INK, minHeight: "85svh" }}>

        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute" style={{ width: "70vw", height: "70vh", top: "-20%", left: "-15%", background: `radial-gradient(ellipse, ${VIOLET}18 0%, transparent 70%)`, transform: "rotate(-20deg)" }} />
          <div className="absolute" style={{ width: "50vw", height: "60vh", bottom: "-10%", left: "5%", background: `radial-gradient(ellipse, ${CRIMSON}12 0%, transparent 65%)` }} />
          {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute w-full" style={{ top: `${35 + i * 4}%`, height: "1px", background: `linear-gradient(to right, transparent, ${IVORY}06 20%, ${IVORY}06 80%, transparent)` }} />
          ))}
        </div>

        {/* Desktop right image */}
        <div className="absolute inset-y-0 right-0 hidden md:block z-10" style={{ width: "50%", clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
          <motion.div initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className="absolute inset-0">
            <img
              src={HERO_IMG}
              alt="Piano Classes in Navi Mumbai"
              className="w-full h-full object-cover object-center"
              onError={e => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                (e.currentTarget.parentElement as HTMLElement).style.background = `linear-gradient(135deg, ${VIOLET}33, ${INDIGO}22)`;
              }}
            />
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-48 pointer-events-none" style={{ background: `linear-gradient(to right, ${INK}, transparent)` }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to bottom, ${INK}88 0%, transparent 20%, transparent 70%, ${INK}EE 100%)` }} />
          <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: `linear-gradient(135deg, ${VIOLET}55 0%, transparent 50%, ${CRIMSON}44 100%)`, mixBlendMode: "color" }} />
        </div>

        {/* Mobile image */}
        <div className="absolute inset-0 md:hidden z-0">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6 }} className="absolute inset-0">
            <img
              src={HERO_IMG}
              alt="Piano Classes in Navi Mumbai"
              className="w-full h-full object-cover object-center"
              onError={e => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                (e.currentTarget.parentElement as HTMLElement).style.background = `linear-gradient(135deg, ${VIOLET}22, ${INDIGO}33)`;
              }}
            />
          </motion.div>
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${INK}F5, ${INK}CC 55%, ${INK}88)` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${INK}66, transparent 30%, transparent 58%, ${INK} 100%)` }} />
        </div>

        {/* Floating notes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {notes.map((note, i) => {
            const c = [VIOLET, TEAL, INDIGO, IVORY, CRIMSON][i];
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
            className="inline-flex self-start items-center gap-2.5 px-4 py-2 rounded-full font-mono text-[10px] mb-8 tracking-widest uppercase"
            style={{ border: `1px solid ${VIOLET}45`, background: `${VIOLET}12`, color: VIOLET }}>
            WESTERN · KEYS
          </motion.div>

          <div className="max-w-xl">
            {/* ← SEO H1 */}
            <h1 className="font-serif leading-[1.05] tracking-tight" style={{ fontSize: "clamp(1.9rem,4vw,4rem)" }}>
              <motion.span initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="block" style={{ color: IVORY }}>Piano Classes</motion.span>
              <motion.span initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.32, duration: 0.8 }} className="block" style={{ color: CRIMSON }}>in Navi Mumbai,</motion.span>
              <motion.span initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.44, duration: 0.8 }} className="block" style={{ color: IVORY }}>Vashi &amp; Sanpada.</motion.span>
            </h1>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.56 }} className="mt-6 max-w-md">
            <div className="w-12 h-[2px] mb-6 rounded-full" style={{ background: `linear-gradient(to right, ${VIOLET}, ${CRIMSON})` }} />
            <p className="text-lg leading-relaxed" style={{ color: `${IVORY}CC` }}>
              Structured piano lessons for every level — beginner to advanced — with individual attention and expert guidance.
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {LOCATIONS.map((loc) => (
                <span key={loc.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold"
                  style={{ background: `${loc.color}18`, color: loc.color, border: `1px solid ${loc.color}40` }}>
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
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
            <div className="absolute inset-0 blur-3xl opacity-15 rounded-3xl" style={{ background: `linear-gradient(to top right, ${VIOLET}, ${INDIGO})` }} />
            <div className="relative rounded-3xl overflow-hidden z-10" style={{ border: `1px solid ${CRIMSON}35`, boxShadow: `0 12px 40px rgba(232,54,93,0.12)`, aspectRatio: "16/9" }}>
              <iframe
                src={YOUTUBE_EMBED}
                title="Piano Classes at Varjay Music Academy — Navi Mumbai, Vashi & Sanpada"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Intro copy */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:pt-4 space-y-5">
            <p className="font-mono text-xs font-bold tracking-widest uppercase" style={{ color: CRIMSON }}>ABOUT THE ACADEMY</p>
            <p className="text-base leading-relaxed" style={{ color: `${NAVY}CC` }}>
              Learning the piano is an exciting journey that helps students develop musical knowledge, confidence, and creativity. If you are searching for piano classes in Navi Mumbai, Varjay Music Academy offers structured music education designed for students of different age groups and learning levels. With experienced instructors and a student-focused teaching approach, the academy provides an encouraging environment where every learner can build strong musical fundamentals while enjoying the learning process.
            </p>
            <p className="text-base leading-relaxed" style={{ color: `${NAVY}CC` }}>
              At Varjay Music Academy, piano lessons are conducted through well-planned sessions that help students progress step by step. Every class is designed to provide individual attention so learners can understand concepts thoroughly before advancing to the next level. Whether you are a beginner or looking to enhance your existing piano skills, the academy supports your musical journey with professional guidance and practical learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── VASHI / SANPADA / EXPERIENCED SECTIONS ───────────────────────── */}
      {SECTIONS.map((sec) => (
        <section key={sec.id} className="py-20" style={{ background: LIGHT_BG }}>
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <p className="font-mono text-xs font-bold tracking-widest uppercase text-center mb-3" style={{ color: sec.color }}>
                {sec.tag}
              </p>
              <h2 className="font-serif text-3xl font-semibold text-center mb-10" style={{ color: NAVY }}>
                {sec.heading}
              </h2>
              <div className="rounded-3xl bg-white p-8 md:p-12 space-y-5" style={{ border: `1px solid ${sec.color}25`, boxShadow: `0 8px 32px ${sec.color}10` }}>
                {sec.body.map((para, i) => (
                  <p key={i} className="text-base leading-relaxed" style={{ color: `${NAVY}CC` }}>{para}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* ─── WHY CHOOSE VARJAY ─────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: LIGHT_BG }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="font-mono text-xs font-bold tracking-widest uppercase text-center mb-3" style={{ color: CRIMSON }}>
              WHY CHOOSE US
            </p>
            <h2 className="font-serif text-3xl font-semibold text-center mb-4" style={{ color: NAVY }}>
              Why Choose <em style={{ color: CRIMSON }}>Varjay</em> Music Academy for Piano Classes?
            </h2>
            <p className="text-center text-sm mb-12 max-w-xl mx-auto" style={{ color: `${NAVY}70` }}>
              Choosing the right music academy is an important step toward achieving your musical goals.
            </p>

            <ul className="space-y-3">
              {WHY_POINTS.map((point, i) => (
                <motion.li key={point}
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 * i }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border transition-colors"
                  style={{ borderColor: "#A8D8F0" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = `${CRIMSON}40`)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "#A8D8F0")}>
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: TEAL }} />
                  <span className="text-base leading-snug" style={{ color: `${NAVY}CC` }}>{point}</span>
                </motion.li>
              ))}
            </ul>

            {/* Closing copy */}
            <div className="mt-10 rounded-3xl bg-white p-8 md:p-10" style={{ border: `1px solid ${VIOLET}25`, boxShadow: `0 4px 20px ${VIOLET}10` }}>
              <p className="text-base leading-relaxed text-center" style={{ color: `${NAVY}BB` }}>
                If you are looking for piano classes in Navi Mumbai, piano classes in Vashi, or piano classes in Sanpada, Varjay Music Academy offers professional instruction, flexible online and offline learning options, and a structured approach to music education. With experienced teachers and a commitment to helping students grow musically, the academy continues to inspire learners to develop their piano skills while enjoying the rewarding experience of learning music.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {LOCATIONS.map((loc) => (
                  <span key={loc.label} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-mono font-semibold"
                    style={{ background: `${loc.color}15`, color: loc.color, border: `1px solid ${loc.color}40` }}>
                    <MapPin className="w-3.5 h-3.5" />
                    {loc.label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactStrip defaultCourse="Piano" />
    </main>
  );
}
