import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { ContactStrip } from "@/components/varjay/ContactStrip";
import { INSTRUMENTS } from "@/components/varjay/data";
import { breadcrumbSchema, courseSchema, ldJson } from "@/components/varjay/schema";

const URL = "https://instrument-story-spark.lovable.app/courses";

const SLUG: Record<string, string> = {
  Tabla: "/tabla",
  Guitar: "/guitar",
};

// ─── THE BLUE PALETTE (DARK TO LIGHT) ────────────────────────────────────────
const NAVY = "#0B1F3A"; // Deep Navy (Hero background)
const BLUE = "#5BB8E8"; // Vibrant Sky Blue (Accents, Buttons)
const ACCENT = "#A8D8F0"; // Soft Blue Accent
const LIGHT = "#EBF5FB"; // Ice Blue (Section background)
const WHITE = "#FFFFFF"; // Card background

const notes = ["♩", "♪", "♫", "♬", "𝄞"];

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "All Courses — Varjay Music Academy" },
      {
        name: "description",
        content:
          "Tabla, Guitar, Piano, Harmonium, Violin, Flute, Dholak, Ukulele, Mandolin & Hindustani vocals. Trinity/Gandharva Certified, batches of 5–7, online & offline.",
      },
      { property: "og:title", content: "Courses — Varjay Music Academy" },
      { property: "og:description", content: "9 instruments, certified curriculum." },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      ldJson(
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Courses", url: "/courses" },
        ]),
      ),
      ...INSTRUMENTS.map((i) =>
        ldJson(
          courseSchema({
            name: `${i.name} Lessons — Varjay Music Academy`,
            description: `Learn ${i.name} (${i.category}) at Varjay Music Academy, Navi Mumbai. Online & offline classes.`,
            slug: SLUG[i.name] ?? "/courses",
            category: i.category,
          }),
        ),
      ),
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <main className="w-full overflow-hidden bg-white">

      {/* ─── CUSTOM COURSES HERO (NAVY) ─────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: NAVY, minHeight: "80svh" }}>

        {/* Painterly blobs + staff lines */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute" style={{ width: "70vw", height: "70vh", top: "-20%", left: "-15%", background: `radial-gradient(ellipse, ${BLUE}18 0%, transparent 70%)`, transform: "rotate(-20deg)" }} />
          <div className="absolute" style={{ width: "50vw", height: "60vh", bottom: "-10%", left: "5%", background: `radial-gradient(ellipse, ${ACCENT}12 0%, transparent 65%)` }} />
          {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute w-full" style={{ top: `${35 + i * 4}%`, height: "1px", background: `linear-gradient(to right, transparent, ${LIGHT}08 20%, ${LIGHT}08 80%, transparent)` }} />
          ))}
        </div>

        {/* RIGHT — Image panel (desktop split alignment) */}
        <div className="absolute inset-y-0 right-0 hidden md:block z-10" style={{ width: "50%", clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
          <motion.div initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1200&q=80"
              alt="Music Courses"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-48 pointer-events-none" style={{ background: `linear-gradient(to right, ${NAVY}, transparent)` }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to bottom, ${NAVY}88 0%, transparent 20%, transparent 70%, ${NAVY}EE 100%)` }} />
          <div className="absolute inset-0 pointer-events-none opacity-30" style={{ background: `linear-gradient(135deg, ${BLUE}55 0%, transparent 50%, ${ACCENT}33 100%)`, mixBlendMode: "color" }} />
        </div>

        {/* Mobile image */}
        <div className="absolute inset-0 md:hidden z-0">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6 }} className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1200&q=80"
              alt="Music Courses"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${NAVY}F5, ${NAVY}CC 55%, ${NAVY}88)` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${NAVY}66, transparent 30%, transparent 58%, ${NAVY} 100%)` }} />
        </div>

        {/* Floating music notes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {notes.map((note, i) => {
            const c = [BLUE, ACCENT, LIGHT, BLUE, ACCENT][i];
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

        {/* LEFT CONTENT PANEL */}
        <div className="relative z-20 flex flex-col justify-center min-h-[80svh] pb-16 pt-24"
          style={{ maxWidth: "55%", paddingLeft: "max(3rem,5vw)", paddingRight: "max(2rem,4vw)" }}>

          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex self-start items-center gap-2.5 px-4 py-2 rounded-full font-mono text-[10px] mb-8 tracking-widest uppercase"
            style={{ border: `1px solid ${BLUE}45`, background: `${BLUE}12`, color: BLUE }}>
            OUR COURSES
          </motion.div>

          <div className="max-w-xl">
            <h1 className="font-serif leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.8rem,5.5vw,5.5rem)" }}>
              <motion.span
                initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
                className="block" style={{ color: LIGHT }}>
                Learn the
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35, duration: 0.8 }}
                className="block italic" style={{ color: BLUE, textShadow: `0 0 50px ${BLUE}40` }}>
                instrument
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
                className="block text-[0.6em] mt-2" style={{ color: LIGHT }}>
                you've always dreamed of.
              </motion.span>
            </h1>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} className="mt-8 max-w-md">
            <div className="w-12 h-[2px] mb-6 rounded-full" style={{ background: `linear-gradient(to right, ${BLUE}, ${ACCENT})` }} />
            <p className="text-lg leading-relaxed" style={{ color: `${LIGHT}CC` }}>
              Indian classical and Western — taught by certified gurus. Small batches of 5–7 for offline classes. For online, only one-on-one is available.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── INSTRUMENT CARDS GRID (LIGHT THEME) ──────────────────────────── */}
      <section className="py-24 relative z-20" style={{ background: LIGHT }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {INSTRUMENTS.map((i, index) => {
              const slug = SLUG[i.name];

              const Card = (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 bg-white hover:shadow-xl"
                  style={{
                    border: `1px solid ${ACCENT}50`,
                    borderTopColor: i.color,
                    borderTopWidth: 4,
                  }}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={i.img}
                      alt={i.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <p className="font-mono text-[10px] tracking-widest uppercase" style={{ color: i.color }}>
                      {i.category}
                    </p>
                    <h3 className="font-serif text-2xl tracking-tight mt-1 text-[#0B1F3A]">
                      {i.name}
                    </h3>
                    <p className="text-sm mt-2 text-[#0B1F3A]/60">
  Beginner to advanced · Online & offline
  {i.curriculum ? ` · ${i.curriculum}.` : "."}
</p>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold transition-colors" style={{ color: i.color }}>
                      {slug ? "Learn more" : "Enquire"} <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              );

              return slug ? (
                <Link key={i.name} to={slug} className="block">
                  {Card}
                </Link>
              ) : (
                <Link key={i.name} to="/contact" className="block">
                  {Card}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <ContactStrip />
    </main>
  );
}
