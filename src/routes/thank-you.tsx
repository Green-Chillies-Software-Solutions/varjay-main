import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Phone, MessageCircle } from "lucide-react";

const URL = "https://varjaymusic.com/thank-you";

// ─── HERO PALETTE ────────────────────────────────────────────────────────────
const INK = "#0A0F1E";
const TEAL = "#17C8A3"; // Success/Action color
const INDIGO = "#3D5AF1";
const SAFFRON = "#F4813A";
const IVORY = "#F9F3E8";

const notes = ["♩", "♪", "♫", "♬", "𝄞"];

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank you — Varjay Music Academy" },
      { name: "description", content: "Thanks for your enquiry. We'll get back within a few hours." },
      { name: "robots", content: "noindex, follow" },
      { property: "og:url", content: URL },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://varjaymusic.com/thank-you" }],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <main className="w-full min-h-[85svh] flex flex-col relative overflow-hidden" style={{ background: INK }}>

      {/* ─── AMBIENT BACKGROUND EFFECTS ───────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute" style={{ width: "70vw", height: "70vh", top: "-20%", left: "-15%", background: `radial-gradient(ellipse, ${INDIGO}18 0%, transparent 70%)`, transform: "rotate(-20deg)" }} />
        <div className="absolute" style={{ width: "50vw", height: "60vh", bottom: "-10%", right: "5%", background: `radial-gradient(ellipse, ${TEAL}12 0%, transparent 65%)` }} />
        {[...Array(5)].map((_, i) => (
          <div key={i} className="absolute w-full" style={{ top: `${35 + i * 4}%`, height: "1px", background: `linear-gradient(to right, transparent, ${IVORY}06 20%, ${IVORY}06 80%, transparent)` }} />
        ))}
      </div>

      {/* Floating music notes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {notes.map((note, i) => {
          const c = [TEAL, SAFFRON, INDIGO, IVORY, TEAL][i];
          return (
            <motion.span key={i} className="absolute select-none"
              style={{ fontFamily: "serif", fontSize: `${1.5 + (i % 3) * 0.8}rem`, left: `${10 + i * 15}%`, top: `${25 + (i % 4) * 12}%`, color: `${c}15` }}
              animate={{ y: [-20, -60, -20], opacity: [0.08, 0.22, 0.08], rotate: [-8, 8, -8] }}
              transition={{ duration: 5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}>
              {note}
            </motion.span>
          );
        })}
      </div>

      {/* ─── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <section className="flex-1 flex items-center relative z-20">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-8 relative"
            style={{ background: `${TEAL}15`, border: `1px solid ${TEAL}40`, color: TEAL }}
          >
            {/* Glowing ring effect */}
            <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: TEAL }} />
            <CheckCircle2 className="w-12 h-12 relative z-10" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-mono text-xs tracking-widest mb-4 uppercase"
            style={{ color: SAFFRON }}
          >
            ENQUIRY RECEIVED
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="font-serif font-semibold tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", color: IVORY, lineHeight: 1.1 }}
          >
            Thank you. <span className="italic" style={{ color: TEAL, textShadow: `0 0 40px ${TEAL}40` }}>We've got it.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="mt-6 text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: `${IVORY}B3` }}
          >
            Our team will reach out within a few hours to schedule your class feel free to message us directly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-4 justify-center items-center"
          >
            <a
              href="tel:+917770003037"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold transition-colors"
              style={{ border: `1.5px solid ${TEAL}60`, color: TEAL }}
              onMouseEnter={(e) => { e.currentTarget.style.background = `${TEAL}15`; e.currentTarget.style.borderColor = TEAL; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = `${TEAL}60`; }}
            >
              <Phone className="w-5 h-5" /> Call +91 777 000 3037
            </a>

            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-semibold transition-colors ml-2"
              style={{ color: `${IVORY}99` }}
              onMouseEnter={(e) => e.currentTarget.style.color = IVORY}
              onMouseLeave={(e) => e.currentTarget.style.color = `${IVORY}99`}
            >
              Back to home <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="mt-24 grid sm:grid-cols-3 gap-6 text-left"
          >
            {[
              { to: "/courses", eyebrow: "EXPLORE", title: "All Courses", desc: "9 instruments to choose from." },
              { to: "/gallery", eyebrow: "SEE", title: "Gallery", desc: "Life at Varjay." },
              { to: "/faqs", eyebrow: "READ", title: "FAQs", desc: "Common questions, answered." }
            ].map((card, i) => (
              <Link
                key={card.title}
                to={card.to}
                className="group rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                }}
              >
                <p className="font-mono text-[10px] tracking-widest uppercase transition-colors group-hover:text-white" style={{ color: SAFFRON }}>
                  {card.eyebrow}
                </p>
                <p className="font-serif text-2xl tracking-tight mt-2" style={{ color: IVORY }}>
                  {card.title}
                </p>
                <p className="text-sm mt-2" style={{ color: `${IVORY}80` }}>
                  {card.desc}
                </p>
              </Link>
            ))}
          </motion.div>

        </div>
      </section>
    </main>
  );
}
