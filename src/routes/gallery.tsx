import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { ContactStrip } from "@/components/varjay/ContactStrip";
import { GALLERY } from "@/components/varjay/data";
import { breadcrumbSchema, ldJson } from "@/components/varjay/schema";

const URL = "https://varjaymusic.com/gallery";

const EXTRA = [
  "https://i.ibb.co/MDGNcnCY/IMG20250727190819.jpg",
  "https://i.ibb.co/KcB7TMg8/IMG20250727190237.jpg",
  "https://i.ibb.co/kbnkg4p/IMG20250727190325.jpg",
  "https://i.ibb.co/5Wr9yxgV/IMG20250727190339.jpg",
  "https://i.ibb.co/CsQPTbzn/IMG20250727190359.jpg",
  "https://i.ibb.co/ymXMFsNq/IMG20250727190411.jpg",
  "https://i.ibb.co/9jdGGBk/IMG20250727190523.jpg",
  "https://i.ibb.co/jv56RjKB/IMG20250727190850.jpg",
  "https://i.ibb.co/9k9c4NbP/IMG20250727190203.jpg",
  "https://i.ibb.co/7xsPk2T7/IMG20250727190212.jpg",
  "https://i.ibb.co/RGCDDG8N/IMG20250727190224.jpg",
  "https://i.ibb.co/PGtBgxBP/IMG20250727190248.jpg",
  "https://i.ibb.co/pjmFR74g/IMG20250727190305.jpg",
  "https://i.ibb.co/CpPvcwyn/IMG20250727190430.jpg",
  "https://i.ibb.co/fVpQDyS1/IMG20250727190442.jpg",
  "https://i.ibb.co/yFxnqWMs/IMG20250727190512.jpg",
  "https://i.ibb.co/gZMHCM1x/IMG20250727190455.jpg",
  "https://i.ibb.co/1JpLmdTZ/IMG20250727190539.jpg",
];

const Tabla_Prambhik_Certificates = [
  "https://i.ibb.co/6054gmz5/Advait-Prarambhik.jpg",

  "https://i.ibb.co/8DF95qSc/Arnav-Prarambhik.jpg",

  "https://i.ibb.co/5W9gMX24/Sarthak-Prarambhik.jpg",

  "https://i.ibb.co/ymYmVn4X/Nilantik-Prarambhik.jpg",

  "https://i.ibb.co/bRW5D2D2/Group-photo-Prarambhik.jpg",
];

const Tabla_Prathamik_Certificates = [
  "https://i.ibb.co/MxqDMXNd/Advait-Praveshika-Pratham.jpg",
  "https://i.ibb.co/0yzyVQ84/Advait-with-Guru.jpg",
  "https://i.ibb.co/21xXCxmN/Arnav-Praveshika-Pratham-1.jpg",
  "https://i.ibb.co/KczzrLsx/Arnav-Shide-Praveshika.jpg",
  "https://i.ibb.co/fdVNzBbr/Nilantik-Praveshika-Pratham.jpg",
  "https://i.ibb.co/nsr1Xwc7/Nilantik-Praveshika-Pratham-with-guru.jpg",
  "https://i.ibb.co/bjLSYYcZ/Sarthak-Praveshika-Pratham-1.jpg",
  "https://i.ibb.co/cKGhggmw/Sarthak-Praveshika-Pratham-1-with-guru.jpg",
  "https://i.ibb.co/8DVJfm5M/Group-photo-Praveshika-Pratham.jpg",
];
const ALL = [...EXTRA];

// Extracted YouTube Links from the provided sheet
const YOUTUBE_VIDEOS = [
  "https://www.youtube.com/embed/-O8iiXMCGFo",
  "https://www.youtube.com/embed/s9i4ojE5erQ",
  "https://www.youtube.com/embed/v3UblXP6JrM",
  "https://www.youtube.com/embed/QIdfJMdqH5U",
  "https://www.youtube.com/embed/dr07SwBdzaY",
  "https://www.youtube.com/embed/y3R6O_kYpbE",
  "https://www.youtube.com/embed/AjFjXt6BWss",
  "https://www.youtube.com/embed/wNK0m7fJAek",
  "https://www.youtube.com/embed/nndl_TORWqU",
  "https://www.youtube.com/embed/o8ixU-7JxXU",
  "https://www.youtube.com/embed/OtplWm3UKFc",
  "https://www.youtube.com/embed/qpSgZVCz5YQ",
  "https://www.youtube.com/embed/CQ7rcK7pWCM",
  "https://www.youtube.com/embed/LDdRb41L4-M",
];

// Split the videos for the two vertical sliders
const SLIDER_1_VIDEOS = YOUTUBE_VIDEOS.slice(0, 9);
const SLIDER_2_VIDEOS = YOUTUBE_VIDEOS.slice(9, 18);

// ─── THE CORRECT BLUE PALETTE ────────────────────────────────────────────────
const NAVY = "#0B1F3A"; // Deep Navy
const BLUE = "#5BB8E8"; // Vibrant Sky Blue
const ACCENT = "#A8D8F0"; // Soft Blue Accent
const LIGHT = "#EBF5FB"; // Ice Blue Background

const notes = ["♩", "♪", "♫", "♬", "𝄞"];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Varjay Music Academy" },
      {
        name: "description",
        content:
          "Photos from classes, performances, and events at Varjay Music Academy, Sanpada, Navi Mumbai.",
      },
      { property: "og:title", content: "Gallery — Varjay Music Academy" },
      { property: "og:url", content: URL },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      ldJson(
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Gallery", url: "/gallery" },
        ]),
      ),
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <main className="w-full overflow-hidden">
      {/* Inline styles for vertical scrolling animation so we can pause on hover */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-scroll-up {
          animation: scrollUp 40s linear infinite;
        }
        .animate-scroll-down {
          animation: scrollDown 45s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* ─── CUSTOM GALLERY HERO (NAVY & SKY BLUE) ────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: NAVY, minHeight: "85svh" }}>

        {/* Painterly blobs + staff lines using the Blue Palette */}
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
              src={EXTRA[0]} // Using the first extra image as hero
              alt="Varjay Music Performance"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-48 pointer-events-none" style={{ background: `linear-gradient(to right, ${NAVY}, transparent)` }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to bottom, ${NAVY}88 0%, transparent 20%, transparent 70%, ${NAVY}EE 100%)` }} />
          <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: `linear-gradient(135deg, ${BLUE}55 0%, transparent 50%, ${ACCENT}33 100%)`, mixBlendMode: "color" }} />
        </div>

        {/* Mobile image */}
        <div className="absolute inset-0 md:hidden z-0">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6 }} className="absolute inset-0">
            <img
              src={EXTRA[0]}
              alt="Varjay Music Performance"
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
        <div className="relative z-20 flex flex-col justify-center min-h-[85svh] pb-16 pt-24"
          style={{ maxWidth: "55%", paddingLeft: "max(3rem,5vw)", paddingRight: "max(2rem,4vw)" }}>

          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex self-start items-center gap-2.5 px-4 py-2 rounded-full font-mono text-[10px] mb-8 tracking-widest uppercase"
            style={{ border: `1px solid ${BLUE}45`, background: `${BLUE}12`, color: BLUE }}>
            GALLERY
          </motion.div>

          <div className="max-w-xl">
            <h1 className="font-serif leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.8rem,5.5vw,5.5rem)" }}>
              <motion.span
                initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
                className="block" style={{ color: LIGHT }}>
                Life at
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35, duration: 0.8 }}
                className="block italic" style={{ color: BLUE, textShadow: `0 0 50px ${BLUE}40` }}>
                Varjay.
              </motion.span>
            </h1>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-8 max-w-md">
            <div className="w-12 h-[2px] mb-6 rounded-full" style={{ background: `linear-gradient(to right, ${BLUE}, ${ACCENT})` }} />
            <p className="text-lg leading-relaxed" style={{ color: `${LIGHT}CC` }}>
              Glimpses from our classrooms, stage performances, and festival celebrations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── YOUTUBE VIDEO GALLERY (VERTICAL AUTO-SCROLL SLIDERS) ───────────── */}
      <section className="py-24 overflow-hidden relative" style={{ background: NAVY }}>
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl" style={{ color: LIGHT }}>
            Live <span className="italic" style={{ color: BLUE }}>Performances</span>
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: `${LIGHT}CC` }}>
            Watch our talented students take the stage in recitals, festivals, and competitions.
          </p>
        </div>

        {/* Sliders Container (Masked for fade effect at top and bottom) */}
        <div
          className="max-w-7xl mx-auto px-6 h-[800px] flex gap-6 md:gap-10 relative overflow-hidden"
          style={{ maskImage: "linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)", WebkitMaskImage: "linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)" }}
        >
          {/* Slider 1: Scrolls Up */}
          <div className="w-full md:w-1/2 relative h-full">
            <div className="animate-scroll-up pause-on-hover flex flex-col gap-6 w-full absolute top-0">
              {/* Duplicating array to create a seamless loop */}
              {[...SLIDER_1_VIDEOS, ...SLIDER_1_VIDEOS].map((src, i) => (
                <div key={`slider1-${i}`} className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl border" style={{ borderColor: `${BLUE}30`, background: "#000" }}>
                  <iframe
                    className="w-full h-full pointer-events-auto"
                    src={src}
                    title={`Varjay Performance Video ${i}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              ))}
            </div>
          </div>

          {/* Slider 2: Scrolls Down (Hidden on mobile to save space, but visible on Desktop) */}
          <div className="hidden md:block w-full md:w-1/2 relative h-full">
            <div className="animate-scroll-down pause-on-hover flex flex-col gap-6 w-full absolute top-0">
              {[...SLIDER_2_VIDEOS, ...SLIDER_2_VIDEOS].map((src, i) => (
                <div key={`slider2-${i}`} className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl border" style={{ borderColor: `${BLUE}30`, background: "#000" }}>
                  <iframe
                    className="w-full h-full pointer-events-auto"
                    src={src}
                    title={`Varjay Performance Video ${i}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── MASONRY IMAGE GRID (LIGHT BLUE BACKGROUND) ───────────────────── */}
      <section className="py-24" style={{ background: LIGHT }}>
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl" style={{ color: NAVY }}>
            Photo <span className="italic" style={{ color: BLUE }}>Gallery</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="columns-2 md:columns-3 gap-5 [column-fill:_balance]">
            {ALL.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 5) * 0.1, duration: 0.6 }}
                className="mb-5 rounded-2xl overflow-hidden break-inside-avoid group cursor-pointer"
                style={{
                  border: `1px solid ${ACCENT}50`,
                  boxShadow: `0 4px 20px rgba(11, 31, 58, 0.05)`,
                }}
              >
                <div className="relative overflow-hidden">
                  {/* Subtle hover overlay using the Navy color */}
                  <div className="absolute inset-0 bg-[#0B1F3A]/0 group-hover:bg-[#0B1F3A]/10 transition-colors duration-500 z-10 pointer-events-none" />
                  <img
                    src={src}
                    alt={`Varjay Music Academy moment ${i + 1}`}
                    loading="lazy"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ─── EXAM CERTIFICATES SECTION (NAVY BACKGROUND) ──────────────────── */}
      <section className="py-24" style={{ background: NAVY }}>
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl" style={{ color: LIGHT }}>
            Exam <span className="italic" style={{ color: BLUE }}>Certificates</span>
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: `${LIGHT}CC` }}>
            Celebrating our students' achievements in Tabla examinations.
          </p>
        </div>

        {/* SUBSECTION 1 — Tabla Prarambhik */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-[2px] rounded-full" style={{ background: `linear-gradient(to right, ${BLUE}, ${ACCENT})` }} />
            <h3 className="font-serif text-2xl md:text-3xl" style={{ color: LIGHT }}>
              Tabla <span className="italic" style={{ color: BLUE }}>Prarambhik</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {Tabla_Prambhik_Certificates.map((src, i) => (
              <motion.div
                key={`prarambhik-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 4) * 0.1, duration: 0.6 }}
                className="rounded-2xl overflow-hidden group cursor-pointer"
                style={{
                  border: `1px solid ${BLUE}30`,
                  boxShadow: `0 4px 20px rgba(0,0,0,0.25)`,
                }}
              >
                <div className="relative overflow-hidden aspect-[4/5]">
                  <div className="absolute inset-0 bg-[#0B1F3A]/0 group-hover:bg-[#0B1F3A]/20 transition-colors duration-500 z-10 pointer-events-none" />
                  <img
                    src={src}
                    alt={`Tabla Prarambhik certificate ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SUBSECTION 2 — Tabla Praveshika Pratham */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-[2px] rounded-full" style={{ background: `linear-gradient(to right, ${BLUE}, ${ACCENT})` }} />
            <h3 className="font-serif text-2xl md:text-3xl" style={{ color: LIGHT }}>
              Tabla <span className="italic" style={{ color: BLUE }}>Praveshika Pratham</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {Tabla_Prathamik_Certificates.map((src, i) => (
              <motion.div
                key={`praveshika-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 4) * 0.1, duration: 0.6 }}
                className="rounded-2xl overflow-hidden group cursor-pointer"
                style={{
                  border: `1px solid ${BLUE}30`,
                  boxShadow: `0 4px 20px rgba(0,0,0,0.25)`,
                }}
              >
                <div className="relative overflow-hidden aspect-[4/5]">
                  <div className="absolute inset-0 bg-[#0B1F3A]/0 group-hover:bg-[#0B1F3A]/20 transition-colors duration-500 z-10 pointer-events-none" />
                  <img
                    src={src}
                    alt={`Tabla Praveshika Pratham certificate ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactStrip />
    </main>
  );
}
