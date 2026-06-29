import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { ContactStrip } from "@/components/varjay/ContactStrip";
import { Faculty } from "@/components/varjay/Faculty";
import { About as AboutSection } from "@/components/varjay/About";
import { WhyVarjay } from "@/components/varjay/WhyVarjay";
import { Stats } from "@/components/varjay/Stats";
import { breadcrumbSchema, ldJson, organizationSchema } from "@/components/varjay/schema";

// ─── UPDATED PRODUCTION URL ──────────────────────────────────────────────────
const URL = "https://varjaymusic.com/about";

// ─── HERO PALETTE ────────────────────────────────────────────────────────────
const INK = "#0A0F1E";
const SAFFRON = "#F4813A";
const INDIGO = "#3D5AF1";
const IVORY = "#F9F3E8";
const TEAL = "#17C8A3";

const notes = ["♩", "♪", "♫", "♬", "𝄞"];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Varjay Music Academy — Sanpada, Navi Mumbai" },
      {
        name: "description",
        content:
          "Founded by Arvind Bhandari, Varjay Music Academy teaches 9+ instruments in Sanpada, Navi Mumbai with ABGMV certified curriculum. Small batches, online & offline.",
      },
      { property: "og:title", content: "About Varjay Music Academy" },
      { property: "og:description", content: "Where talent meets tradition." },
      { property: "og:url", content: URL },
      // Added Robots Meta Tag
      { name: "robots", content: "index, follow" },
    ],
    links: [
      // Updated Canonical Link
      { rel: "canonical", href: URL }
    ],
    scripts: [
      // Google tag (gtag.js)
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=AW-18276813430",
      },
      {
        children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`,
      },
      ldJson(organizationSchema()),
      ldJson(
        breadcrumbSchema([
          { name: "Home", url: "https://varjaymusic.com/" },
          { name: "About", url: URL },
        ]),
      ),
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="w-full overflow-hidden">

      {/* ─── CUSTOM ABOUT HERO (MATCHING HOME HERO) ─────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: INK, minHeight: "85svh" }}>

        {/* Painterly blobs + staff lines */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute" style={{ width: "70vw", height: "70vh", top: "-20%", left: "-15%", background: `radial-gradient(ellipse, ${INDIGO}18 0%, transparent 70%)`, transform: "rotate(-20deg)" }} />
          <div className="absolute" style={{ width: "50vw", height: "60vh", bottom: "-10%", left: "5%", background: `radial-gradient(ellipse, ${SAFFRON}12 0%, transparent 65%)` }} />
          {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute w-full" style={{ top: `${35 + i * 4}%`, height: "1px", background: `linear-gradient(to right, transparent, ${IVORY}06 20%, ${IVORY}06 80%, transparent)` }} />
          ))}
        </div>

        {/* RIGHT — Image panel (desktop split alignment) */}
        <div className="absolute inset-y-0 right-0 hidden md:block z-10" style={{ width: "50%", clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
          <motion.div initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className="absolute inset-0">
            <img
              src="https://i.ibb.co/BVZTvSpG/arvind.jpg"
              alt="Guru Arvind"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-48 pointer-events-none" style={{ background: `linear-gradient(to right, ${INK}, transparent)` }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to bottom, ${INK}88 0%, transparent 20%, transparent 70%, ${INK}EE 100%)` }} />
          <div className="absolute inset-0 pointer-events-none opacity-30" style={{ background: `linear-gradient(135deg, ${INDIGO}55 0%, transparent 50%, ${SAFFRON}33 100%)`, mixBlendMode: "color" }} />
        </div>

        {/* Mobile image */}
        <div className="absolute inset-0 md:hidden z-0">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6 }} className="absolute inset-0">
            <img
              src="https://i.ibb.co/BVZTvSpG/arvind.jpg"
              alt="Guru Arvind"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${INK}F5, ${INK}CC 55%, ${INK}88)` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${INK}66, transparent 30%, transparent 58%, ${INK} 100%)` }} />
        </div>

        {/* Floating music notes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {notes.map((note, i) => {
            const c = [SAFFRON, TEAL, INDIGO, IVORY, SAFFRON][i];
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
            style={{ border: `1px solid ${SAFFRON}45`, background: `${SAFFRON}12`, color: SAFFRON }}>
            ABOUT US
          </motion.div>

          <div className="max-w-xl">
            <h1 className="font-serif leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.8rem,5.5vw,5.5rem)" }}>
              <motion.span
                initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
                className="block" style={{ color: IVORY }}>
                Where talent
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35, duration: 0.8 }}
                className="block italic" style={{ color: SAFFRON, textShadow: `0 0 50px ${SAFFRON}40` }}>
                meets tradition.
              </motion.span>
            </h1>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-8 max-w-md">
            <div className="w-12 h-[2px] mb-6 rounded-full" style={{ background: `linear-gradient(to right, ${SAFFRON}, ${TEAL})` }} />
            <p className="text-lg leading-relaxed" style={{ color: `${IVORY}CC` }}>
              Varjay Music Academy is a Sanpada, Navi Mumbai-based academy teaching 9+ Indian & Western instruments to 150+ students across India and abroad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── EXISTING SECTIONS ──────────────────────────────────────────────── */}
      <AboutSection />
      <Faculty />
      <WhyVarjay />
      <Stats />
      <ContactStrip />

    </main>
  );
}
