import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowDown } from "lucide-react";
import { useRef } from "react";

import { EnquiryForm } from "@/components/varjay/EnquiryForm";
import { breadcrumbSchema, ldJson } from "@/components/varjay/schema";

const URL = "https://varjaymusic.com/register";

const perks = [
  "No admission fee · No registration fee",
  "Batches of 5–7 students (small group attention)",
  "Choose online or offline classes",
  "ABGMV certified curriculum",
  "Stage performance opportunities every year",
];

const INK = "#0A0F1E";
const TEAL = "#17C8A3";
const INDIGO = "#3D5AF1";
const SAFFRON = "#F4813A";
const IVORY = "#F9F3E8";

const notes = ["♩", "♪", "♫", "♬", "𝄞"];

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register — Varjay Music Academy" },
      {
        name: "description",
        content:
          "Register for tabla, guitar, piano, harmonium & more at Varjay Music Academy. No admission fee. Book a free trial class today.",
      },
      { property: "og:title", content: "Register — Varjay Music Academy" },
      { property: "og:url", content: URL },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      ldJson(
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Register", url: "/register" },
        ]),
      ),
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="w-full overflow-hidden">

      {/* ─── CUSTOM REGISTER HERO ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: INK, minHeight: "85svh" }}>

        {/* Painterly blobs + staff lines */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute" style={{ width: "70vw", height: "70vh", top: "-20%", left: "-15%", background: `radial-gradient(ellipse, ${INDIGO}18 0%, transparent 70%)`, transform: "rotate(-20deg)" }} />
          <div className="absolute" style={{ width: "50vw", height: "60vh", bottom: "-10%", left: "5%", background: `radial-gradient(ellipse, ${TEAL}12 0%, transparent 65%)` }} />
          {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute w-full" style={{ top: `${35 + i * 4}%`, height: "1px", background: `linear-gradient(to right, transparent, ${IVORY}06 20%, ${IVORY}06 80%, transparent)` }} />
          ))}
        </div>

        {/* RIGHT — Image panel (desktop split alignment) */}
        <div className="absolute inset-y-0 right-0 hidden md:block z-10" style={{ width: "50%", clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
          <motion.div initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className="absolute inset-0">
            <img
              src="https://varjaymusic.com/wp-content/uploads/2024/05/SRG_1204-copy-scaled-1-1024x576.jpg"
              alt="Varjay Music Academy Studio"
              className="w-full h-full object-cover object-center"
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
              src="https://varjaymusic.com/wp-content/uploads/2024/05/SRG_1204-copy-scaled-1-1024x576.jpg"
              alt="Varjay Music Academy Studio"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${INK}F5, ${INK}CC 55%, ${INK}88)` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${INK}66, transparent 30%, transparent 58%, ${INK} 100%)` }} />
        </div>

        {/* Floating music notes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {notes.map((note, i) => {
            const c = [TEAL, SAFFRON, INDIGO, IVORY, TEAL][i];
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
            style={{ border: `1px solid ${TEAL}45`, background: `${TEAL}12`, color: TEAL }}>
            REGISTER
          </motion.div>

          <div className="max-w-xl">
            <h1 className="font-serif leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.8rem,5.5vw,5.5rem)" }}>
              <motion.span
                initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
                className="block" style={{ color: IVORY }}>
                Start your
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35, duration: 0.8 }}
                className="block italic" style={{ color: TEAL, textShadow: `0 0 50px ${TEAL}40` }}>
                musical journey.
              </motion.span>
            </h1>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-8 max-w-md">
            <div className="w-12 h-[2px] mb-6 rounded-full" style={{ background: `linear-gradient(to right, ${TEAL}, ${INDIGO})` }} />
            <p className="text-lg leading-relaxed" style={{ color: `${IVORY}CC` }}>
              Fill the form below and we'll schedule your free trial class within 24 hours.
            </p>
          </motion.div>

          {/* ✅ Scroll-to-form CTA button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            onClick={scrollToForm}
            className="mt-10 self-start inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all hover:scale-105 active:scale-95 cursor-pointer"
            style={{ background: TEAL, color: INK }}
          >
            Register Now
            <ArrowDown className="w-4 h-4" />
          </motion.button>
        </div>
      </section>

      {/* ─── CONTENT GRID (DARK MODE UPDATED) ─────────────────────────────── */}
      {/* ✅ ref attached here so the button scrolls to this section */}
      <section ref={formRef} className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start relative z-20">

        {/* Left Side: Perks */}
        <div>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-mono text-xs tracking-widest mb-3 uppercase"
            style={{ color: TEAL }}
          >
            WHAT YOU GET
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-semibold leading-tight mb-10"
            style={{ color: IVORY }}
          >
            Five reasons students love Varjay.
          </motion.h2>

          <ul className="space-y-6">
            {perks.map((p, index) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <CheckCircle2 className="w-6 h-6 mt-0.5 shrink-0" style={{ color: TEAL }} />
                <span className="text-lg leading-relaxed" style={{ color: `${IVORY}E6` }}>{p}</span>
              </motion.li>
            ))}
          </ul>

          {/* Call box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 p-8 rounded-2xl relative overflow-hidden group"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="absolute inset-0 bg-[#17C8A3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <p className="font-serif text-2xl font-semibold mb-2" style={{ color: IVORY }}>
              Already decided? Call directly.
            </p>
            <a
              href="tel:+917770003036"
              className="inline-block text-3xl font-serif transition-colors hover:opacity-80"
              style={{ color: TEAL }}
            >
              +91 777 000 3037
            </a>
          </motion.div>
        </div>

        {/* Right Side: Form Component */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <EnquiryForm title="Register now" subtitle="Pick your instrument and we'll handle the rest." />
        </motion.div>
      </section>

    </main>
  );
}
