import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { ContactStrip } from "@/components/varjay/ContactStrip";
import { breadcrumbSchema, ldJson } from "@/components/varjay/schema";

const PAGE_URL = "https://instrument-story-spark.lovable.app/offline-courses";

// ─── PALETTE ─────────────────────────────────────────────────────────────────
const INK = "#0A0F1E";
const IVORY = "#F9F3E8";
const NAVY = "#0B1F3A";
const LIGHT_BG = "#EBF5FB";

const TURMERIC = "#E8B84B";
const SAFFRON = "#F4813A";
const CRIMSON = "#F4813A";
const INDIGO = "#3D5AF1";
const TEAL = "#17C8A3";

export const Route = createFileRoute("/offlinecourses")({
  head: () => ({
    meta: [
      { title: "Offline Courses — Varjay Music Academy, Navi Mumbai" },
      {
        name: "description",
        content:
          "Tabla & Dholak, Guitar & Keyboard, and Hindustani Vocal & Harmonium offline classes at Varjay Music Academy, Sanpada, Navi Mumbai.",
      },
      { property: "og:title", content: "Offline Courses — Varjay Music Academy" },
      { property: "og:url", content: PAGE_URL },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      ldJson(
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Offline Courses", url: "/offlinecourses" },
        ]),
      ),
    ],
  }),
  component: Page,
});

// ─── DATA ─────────────────────────────────────────────────────────────────────

const TABLA_SYLLABUS = [
  { level: "Beginner", exams: ["Prarambhik (Base Level)", "Praveshika Pratham (Entry Level)", "Praveshika Poorna (Entry Level)"], color: TURMERIC },
  { level: "Intermediate", exams: ["Madhyama Pratham (Mid Level 1)", "Madhyama Poorna (Mid Level 2)"], color: SAFFRON },
  { level: "Advanced", exams: ["Visharath Pratham (Mid Level 1)", "Visharath Poorna (Mid Level 2)"], color: INDIGO },
];

const TABLA_TIMINGS = [
  "Monday - 6.30 pm to 9.30 pm",
  "Thursday - 6.30 pm to 9.30 pm",
  "Saturday - 6.00 pm to 9.00 pm",
];

const GUITAR_TIMINGS = [
  "Monday — 6:30 pm to 9:30 pm",
  "Thursday — 6:30 pm to 9:30 pm",
  "Saturday — 6:00 pm to 9:00 pm",
];

const HINDUSTANI_TIMINGS = [
   "Tuesday - 6.00 pm to 9.00 pm",
   "Friday - 6.00 pm to 9.00 pm",
   "Sunday - 11.00 am to 1.00 pm"
];


const HINDUSTANI_SYLLABUS = [
  { level: "Beginner", exams: ["Prarambhik (Base Level)", "Praveshika Pratham (Entry Level)", "Praveshika Poorna (Entry Level)"], color: TEAL },
  { level: "Intermediate", exams: ["Madhyama Pratham (Mid Level 1)", "Madhyama Poorna (Mid Level 2)"], color: SAFFRON },
  { level: "Advanced", exams: ["Visharath Pratham (Mid Level 1)", "Visharath Poorna (Mid Level 2)"], color: INDIGO },
];

// ─── SHARED COMPONENTS ────────────────────────────────────────────────────────

function SyllabusBlock({
  syllabus,
  affiliation,
}: {
  syllabus: { level: string; exams: string[]; color: string }[];
  affiliation: string;
}) {
  return (
    <div>
      <p className="text-xs text-center mb-4" style={{ color: `${NAVY}55` }}>Affiliation: {affiliation}</p>
      <div className="space-y-3">
        {syllabus.map(({ level, exams, color }, i) => (
          <motion.div
            key={level}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl p-4 grid md:grid-cols-[1fr_2fr] gap-3 items-center bg-white border"
            style={{ borderColor: `${color}30` }}
          >
            <span className="px-3 py-1 rounded-full text-xs font-semibold font-mono w-fit" style={{ background: `${color}18`, color }}>{level}</span>
            <div className="space-y-0.5">
              {exams.map((e) => <p key={e} className="text-sm" style={{ color: `${NAVY}BB` }}>{e}</p>)}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function TimingsGrid({ timings, accent }: { timings: string[]; accent: string }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {timings.map((t, i) => (
        <motion.div
          key={t}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07 }}
          className="rounded-xl p-4 flex items-center gap-3 bg-white border border-[#A8D8F0]"
        >
          <div className="w-1.5 h-8 rounded-full shrink-0" style={{ background: `linear-gradient(to bottom, ${accent}, ${SAFFRON})` }} />
          <p className="text-sm leading-relaxed" style={{ color: `${NAVY}BB` }}>{t}</p>
        </motion.div>
      ))}
    </div>
  );
}

// ─── COURSE SECTION WRAPPER ───────────────────────────────────────────────────

function CourseSection({
  id,
  accent,
  tag,
  title,
  subtitle,
  children,
}: {
  id: string;
  accent: string;
  tag: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-20" style={{ background: LIGHT_BG }}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[3px] rounded-full" style={{ background: accent }} />
            <span
              className="px-3 py-1 rounded-full font-mono text-[10px] tracking-widest uppercase font-bold"
              style={{ background: `${accent}15`, color: accent, border: `1px solid ${accent}35` }}
            >
              {tag}
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold leading-tight mb-3" style={{ color: NAVY }}>
            {title}
          </h2>
          <p className="text-base leading-relaxed max-w-xl" style={{ color: `${NAVY}70` }}>{subtitle}</p>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function CourseDivider({ accent }: { accent: string }) {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 flex items-center gap-4">
      <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, ${accent}40)` }} />
      <span className="font-mono text-xs" style={{ color: `${accent}60` }}>✦</span>
      <div className="flex-1 h-px" style={{ background: `linear-gradient(to left, transparent, ${accent}40)` }} />
    </div>
  );
}

function SubHeading({ text, accent }: { text: string; accent: string }) {
  return (
    <h3 className="font-serif text-2xl font-semibold mt-10 mb-5 flex items-center gap-3" style={{ color: NAVY }}>
      <span className="w-2 h-2 rounded-full" style={{ background: accent }} />
      {text}
    </h3>
  );
}

function FacultyCard({
  imgSrc,
  imgAlt,
  fallbackLetter,
  accent,
  name,
  role,
  bio,
  bullets,
  bulletColor,
}: {
  imgSrc: string;
  imgAlt: string;
  fallbackLetter: string;
  accent: string;
  name: string;
  role: string;
  bio?: string;
  bullets: string[];
  bulletColor: string;
}) {
  return (
    <div
      className="rounded-2xl bg-white p-6 md:p-8 grid md:grid-cols-[auto_1fr] gap-6 items-start border"
      style={{ borderColor: `${accent}30` }}
    >
      <div className="flex flex-col items-center gap-2 shrink-0">
        <div className="w-28 h-36 rounded-xl overflow-hidden" style={{ border: `2px solid ${accent}55` }}>
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
              const p = e.currentTarget.parentElement as HTMLElement;
              p.style.background = `linear-gradient(135deg, ${accent}33, ${accent}22)`;
              p.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:2.5rem;font-family:serif;color:${accent}">${fallbackLetter}</div>`;
            }}
          />
        </div>
        <span className="font-mono text-[9px] tracking-widest uppercase" style={{ color: accent }}>Faculty</span>
      </div>
      <div>
        <h4 className="font-serif text-xl mb-1" style={{ color: NAVY }}>{name}</h4>
        <p className="font-mono text-[10px] tracking-widest mb-4 uppercase" style={{ color: accent }}>{role}</p>
        {bio && <p className="text-sm leading-relaxed mb-4" style={{ color: `${NAVY}80` }}>{bio}</p>}
        <ul className="space-y-1.5">
          {bullets.map((pt) => (
            <li key={pt} className="flex items-start gap-2.5 text-sm" style={{ color: `${NAVY}99` }}>
              <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: bulletColor }} />
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// TABLA & DHOLAK
// ════════════════════════════════════════════════════════════════════════════

function TablaDholakSection() {
  return (
    <CourseSection
      id="tabla"
      accent={TURMERIC}
      tag="Indian Classical · Percussion"
      title="Tabla & Dholak"
      subtitle="The heartbeat of Hindustani music — taught with strong fundamentals, deep theory, and the joy of layakari."
    >
      {/* Image pair */}
      <div className="grid md:grid-cols-2 gap-5 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden"
          style={{ boxShadow: `0 12px 40px rgba(232,184,75,0.18)`, aspectRatio: "4/3" }}
        >
          <img
            src="https://i.ibb.co/Z637L6hL/tabala.jpg"
            alt="Tabla"
            className="absolute inset-0 w-full h-full object-center "
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 px-5 py-3" style={{ background: `linear-gradient(to top, ${NAVY}CC, transparent)` }}>
            <p className="font-mono text-xs tracking-widest uppercase font-bold" style={{ color: TURMERIC }}>Tabla</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative rounded-2xl overflow-hidden"
          style={{ boxShadow: `0 12px 40px rgba(244,129,58,0.14)`, aspectRatio: "4/3" }}
        >
          <img
            src="https://www.carvedculture.in/cdn/shop/articles/Indian-Dholak_Drum-The-Complete-Guide_68f25b2e-b994-460f-8768-2da4673398ac.jpg?v=1774273778&width=900"
            alt="Dholak"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 px-5 py-3" style={{ background: `linear-gradient(to top, ${NAVY}CC, transparent)` }}>
            <p className="font-mono text-xs tracking-widest uppercase font-bold" style={{ color: SAFFRON }}>Dholak</p>
          </div>
        </motion.div>
      </div>

      {/* Faculty */}
      <SubHeading text="Faculty" accent={TURMERIC} />
      <FacultyCard
        imgSrc="https://i.ibb.co/BVZTvSpG/arvind.jpg"
        imgAlt="Arvind V. Rao"
        fallbackLetter="A"
        accent={TURMERIC}
        name="Arvind V. Rao"
        role="Founder & Owner — Varjay Music Academy"
        bullets={[
          "Visharad in Tabla",
          "Currently pursuing Alankar from Guru Shri Praveen Karkareji",
          "10+ years of teaching experience before founding the academy",
          "Trained local, national & international students",
          "Affiliated with ABGMV",
        ]}
        bulletColor={SAFFRON}
      />

      {/* Syllabus */}
      <SubHeading text="Syllabus" accent={TURMERIC} />
      <SyllabusBlock syllabus={TABLA_SYLLABUS} affiliation="Akhil Bharatiya Gandharva Mahavidyalaya Mandal (ABGMV)" />

      {/* Timings */}
      <SubHeading text="Class Timings" accent={TURMERIC} />
      <p className="text-xs font-mono mb-4" style={{ color: `${NAVY}50` }}>(Liable to change)</p>
      <TimingsGrid timings={TABLA_TIMINGS} accent={TURMERIC} />

      {/* Video */}
      <SubHeading text="Watch & Learn" accent={TURMERIC} />
      <div className="relative rounded-2xl overflow-hidden" style={{ border: `1px solid ${TURMERIC}40`, aspectRatio: "16/9" }}>
        <iframe
          src="https://www.youtube.com/embed/bM0dw6W5aA4"
          title="Tabla performance at Varjay Music Academy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      </div>
    </CourseSection>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// GUITAR & KEYBOARD
// ════════════════════════════════════════════════════════════════════════════

function GuitarKeyboardSection() {
  return (
    <CourseSection
      id="guitar"
      accent={CRIMSON}
      tag="Western · Strings & Keys"
      title="Guitar & Keyboard"
      subtitle="Acoustic, fingerstyle, lead — pick your sound and we'll get you playing your favourite songs in weeks."
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-2xl overflow-hidden mb-10"
        style={{ boxShadow: `0 12px 40px rgba(244,129,58,0.14)`, aspectRatio: "21/9" }}
      >
        <img
          src="https://i.ibb.co/1GndGKHY/guitar.jpg"
          alt="Guitar"
          className="absolute inset-0 w-full h-full object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to right, ${NAVY}55, transparent 50%)` }} />
      </motion.div>

      {/* Faculty */}
      <SubHeading text="Faculty" accent={CRIMSON} />
      <FacultyCard
        imgSrc="https://i.ibb.co/v4TxhPXQ/guitarsir.png"
        imgAlt="Ansil Achankunju"
        fallbackLetter="A"
        accent={CRIMSON}
        name="Ansil Achankunju"
        role="Guitar & Keyboard Faculty"
        bio="Passionate guitarist and keyboard player with extensive Western music experience. Blends theory with practical songwriting so students play favourites from day one."
        bullets={[
          "Specialises in acoustic, electric guitar & keyboard",
          "Affiliated with Trinity School of Music, London",
          "Teaches Bollywood, Western pop, rock & acoustic",
        ]}
        bulletColor={TEAL}
      />

      {/* Syllabus */}
      <SubHeading text="Syllabus" accent={CRIMSON} />
      <p className="text-xs mb-4" style={{ color: `${NAVY}55` }}>Affiliation: Trinity School of Music, London</p>
      <div className="flex flex-wrap gap-3">
        {[
          { label: "Beginner", color: TEAL },
          { label: "Intermediate", color: CRIMSON },
          { label: "Advanced", color: INDIGO },
        ].map((s) => (
          <span key={s.label} className="px-4 py-2 rounded-full text-sm font-semibold font-mono"
            style={{ background: `${s.color}18`, color: s.color, border: `1px solid ${s.color}40` }}>
            {s.label}
          </span>
        ))}
      </div>

      {/* Timings */}
      <SubHeading text="Class Timings" accent={CRIMSON} />
      <p className="text-xs font-mono mb-4" style={{ color: `${NAVY}50` }}>(Liable to change)</p>
      <div className="grid sm:grid-cols-3 gap-3">
        {GUITAR_TIMINGS.map((t, i) => (
          <motion.div key={t} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
            className="rounded-xl p-4 flex items-center gap-3 bg-white border border-[#A8D8F0]">
            <div className="w-1.5 h-8 rounded-full shrink-0" style={{ background: `linear-gradient(to bottom, ${CRIMSON}, ${INDIGO})` }} />
            <p className="text-sm" style={{ color: `${NAVY}BB` }}>{t}</p>
          </motion.div>
        ))}
      </div>

      {/* Videos */}
      <SubHeading text="Watch & Learn" accent={CRIMSON} />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="font-mono text-xs tracking-widest uppercase mb-2 text-center" style={{ color: TEAL }}>Guitar</p>
          <div className="relative rounded-2xl overflow-hidden" style={{ border: `1px solid ${CRIMSON}35`, aspectRatio: "9/16" }}>
            <iframe src="https://www.youtube.com/embed/jUe6qmKuGRA" title="Guitar class at Varjay Music Academy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" loading="lazy" />
          </div>
        </div>
        <div>
          <p className="font-mono text-xs tracking-widest uppercase mb-2 text-center" style={{ color: INDIGO }}>Keyboard</p>
          <div className="relative rounded-2xl overflow-hidden" style={{ border: `1px solid ${INDIGO}35`, aspectRatio: "16/9" }}>
            <iframe src="https://www.youtube.com/embed/ldgVXtaDZgw" title="Keyboard class at Varjay Music Academy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" loading="lazy" />
          </div>
        </div>
      </div>
    </CourseSection>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// HINDUSTANI VOCAL & HARMONIUM
// ════════════════════════════════════════════════════════════════════════════

function HindustaniSection() {
  return (
    <CourseSection
      id="hindustani"
      accent={TEAL}
      tag="Vocals · Harmonium · Indian Classical"
      title="Hindustani Vocal & Harmonium"
      subtitle="A formal vocal training path rooted in raag, taal and bandish — taught with the patience of an old gurukul."
    >
      {/* Instrument image pair */}
      <div className="grid sm:grid-cols-2 gap-5 mb-10">
        {[
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Harmonium_20151009_%2823914086965%29.jpg/1280px-Harmonium_20151009_%2823914086965%29.jpg",
            label: "Harmonium",
            color: TEAL,
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Shure_mikrofon_55S.jpg/960px-Shure_mikrofon_55S.jpg",
            label: "Vocals",
            color: SAFFRON,
          },
        ].map(({ src, label, color }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="relative rounded-2xl overflow-hidden bg-white border border-[#A8D8F0]"
            style={{ aspectRatio: "4/3" }}
          >
            <img src={src} alt={label} className="absolute inset-0 w-full h-full object-contain p-6" loading="lazy" />
            <div className="absolute bottom-0 left-0 right-0 px-5 py-3" style={{ background: `linear-gradient(to top, ${NAVY}99, transparent)` }}>
              <p className="font-mono text-xs tracking-widest uppercase font-bold" style={{ color }}>{label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Faculty */}
      <SubHeading text="Faculty" accent={TEAL} />
      <FacultyCard
        imgSrc="https://i.ibb.co/4nd03SPm/hindustanivocal.png"
        imgAlt="Vishal R. Rajguru"
        fallbackLetter="V"
        accent={TEAL}
        name="Vishal R. Rajguru"
        role="Vocal & Harmonium Faculty"
        bio="5+ years of teaching experience in Vocals and Harmonium. Also serves as a music teacher at a school in Vashi, Navi Mumbai."
        bullets={[
          "5+ years of teaching experience in Vocals & Harmonium",
          "Music teacher at a school in Vashi, Navi Mumbai",
          "Affiliated with ABGMV",
          "Teaches all levels from Prarambhik to Visharad",
        ]}
        bulletColor={TEAL}
      />

      {/* Syllabus */}
      <SubHeading text="Syllabus" accent={TEAL} />
      <SyllabusBlock syllabus={HINDUSTANI_SYLLABUS} affiliation="Akhil Bharatiya Gandharva Mahavidyalaya Mandal (ABGMV)" />

      {/* Timings */}
      <SubHeading text="Class Timings" accent={CRIMSON} />
      <p className="text-xs font-mono mb-4" style={{ color: `${NAVY}50` }}>(Liable to change)</p>
      <div className="grid sm:grid-cols-3 gap-3">
        {HINDUSTANI_TIMINGS.map((t, i) => (
          <motion.div key={t} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
            className="rounded-xl p-4 flex items-center gap-3 bg-white border border-[#A8D8F0]">
            <div className="w-1.5 h-8 rounded-full shrink-0" style={{ background: `linear-gradient(to bottom, ${CRIMSON}, ${INDIGO})` }} />
            <p className="text-sm" style={{ color: `${NAVY}BB` }}>{t}</p>
          </motion.div>
        ))}
      </div>

      {/* Video */}
      <SubHeading text="Watch & Learn" accent={TEAL} />
      <div className="max-w-xs mx-auto">
        <div className="relative rounded-2xl overflow-hidden" style={{ border: `1px solid ${TEAL}40`, aspectRatio: "9/16" }}>
          <iframe
            src="https://www.youtube.com/embed/0Re6a8Wb_B4"
            title="Hindustani Vocal class at Varjay Music Academy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </CourseSection>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// PAGE SHELL
// ════════════════════════════════════════════════════════════════════════════
function Page() {
  return (
    <main className="w-full overflow-hidden" style={{ background: LIGHT_BG }}>

      {/* ── SINGLE HERO ── */}
      <section className="relative overflow-hidden" style={{ background: INK, minHeight: "75svh" }}>
        {/* Ambient blobs */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute" style={{ width: "65vw", height: "65vh", top: "-20%", right: "-10%", background: `radial-gradient(ellipse, ${INDIGO}18 0%, transparent 65%)` }} />
          <div className="absolute" style={{ width: "45vw", height: "55vh", bottom: "-15%", left: "5%", background: `radial-gradient(ellipse, ${TURMERIC}10 0%, transparent 65%)` }} />
          {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute w-full" style={{ top: `${35 + i * 5}%`, height: "1px", background: `linear-gradient(to right, transparent, ${IVORY}06 20%, ${IVORY}06 80%, transparent)` }} />
          ))}
        </div>

        {/* Desktop right image panel */}
        <div className="absolute inset-y-0 right-0 hidden md:block z-10" style={{ width: "48%", clipPath: "polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
          <motion.div initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2.2, ease: [0.25, 0.46, 0.45, 0.94] }} className="absolute inset-0">
            <img
              src="https://i.ibb.co/j9G7zrGp/image.png"
              alt="Offline music classes at Varjay Music Academy"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-48 pointer-events-none" style={{ background: `linear-gradient(to right, ${INK}, transparent)` }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to bottom, ${INK}88 0%, transparent 20%, transparent 70%, ${INK}EE 100%)` }} />
          <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: `linear-gradient(135deg, ${INDIGO}55 0%, transparent 50%, ${TURMERIC}44 100%)`, mixBlendMode: "color" }} />
        </div>

        {/* Mobile image */}
        <div className="absolute inset-0 md:hidden z-0">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6 }} className="absolute inset-0">
            <img src="https://i.ibb.co/j9G7zrGp/image.png" alt="Offline music classes" className="w-full h-full object-cover" />
          </motion.div>
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${INK}F5, ${INK}CC 55%, ${INK}88)` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${INK}66, transparent 30%, transparent 58%, ${INK} 100%)` }} />
        </div>

        {/* Hero content */}
        <div className="relative z-20 flex flex-col justify-center min-h-[75svh] pb-16 pt-24"
          style={{ maxWidth: "55%", paddingLeft: "max(3rem,5vw)", paddingRight: "max(2rem,4vw)" }}>

          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex self-start items-center gap-2 px-4 py-2 rounded-full font-mono text-[10px] mb-8 tracking-widest uppercase"
            style={{ border: `1px solid ${TURMERIC}45`, background: `${TURMERIC}12`, color: TURMERIC }}>
            In-person classes
          </motion.div>

          <div className="max-w-lg">
            <h1 className="font-serif leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.6rem,5vw,5rem)" }}>
              <motion.span initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="block" style={{ color: IVORY }}>
                Offline
              </motion.span>
              <motion.span initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35, duration: 0.8 }} className="block italic" style={{ color: TURMERIC, textShadow: `0 0 50px ${TURMERIC}40` }}>
                Courses
              </motion.span>
            </h1>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="mt-8 max-w-md">
            <div className="w-10 h-[2px] mb-5 rounded-full" style={{ background: `linear-gradient(to right, ${TURMERIC}, ${SAFFRON})` }} />
            <p className="text-lg leading-relaxed" style={{ color: `${IVORY}CC` }}>
              Six instruments. Real teachers, real classrooms — in Sanpada, Navi Mumbai.
            </p>
          </motion.div>

          {/* Jump links */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-3 mt-8">
            {[
              { label: "Tabla & Dholak", id: "tabla", color: TURMERIC },
              { label: "Guitar & Keyboard", id: "guitar", color: CRIMSON },
              { label: "Hindustani Vocals & Harmonium", id: "hindustani", color: TEAL },
            ].map(({ label, id, color }) => (
              <a key={id} href={`#${id}`}
                className="px-5 py-2 rounded-full font-mono text-xs font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: `${color}18`, border: `1px solid ${color}50`, color }}>
                {label}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── THREE COURSES ── */}
      <TablaDholakSection />
      <CourseDivider accent={CRIMSON} />
      <GuitarKeyboardSection />
      <CourseDivider accent={TEAL} />
      <HindustaniSection />

      <ContactStrip defaultCourse="Offline Courses" />
    </main>
  );
}
