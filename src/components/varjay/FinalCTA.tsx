import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

// ─── COLOUR PALETTE ──────────────────────────────────────────────────────────
const BLUE     = "#5BB8E8";
const NAVY     = "#0B1F3A";
const NAVY_MID = "#0F2847";
const ACCENT   = "#A8D8F0";
const WHITE    = "#EEF6FC";
// ─────────────────────────────────────────────────────────────────────────────

const avatars = ["AK", "VK", "NP", "RP", "SG"];
const avatarColors = ["#1A5276", "#1B4F72", "#154360", "#0E6655", "#1A5276"];

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
      style={{ background: NAVY }}
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 50%, ${BLUE}18, transparent 70%)`,
        }}
      />

      {/* Top border shimmer */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: `linear-gradient(to right, transparent, ${BLUE}60, ${ACCENT}40, ${BLUE}60, transparent)`,
        }}
      />

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${BLUE}40 1px, transparent 1px), linear-gradient(90deg, ${BLUE}40 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xl tracking-widest mb-6 uppercase"
          style={{ color: BLUE }}
        >
          START YOUR JOURNEY
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-semibold leading-tight"
          style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: WHITE }}
        >
          Ready to play your{" "}
          <span className="italic" style={{ color: BLUE }}>first note?</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-5 text-lg"
          style={{ color: `${ACCENT}CC` }}
        >
          No admission fee. No registration fee. Just you and your instrument.
        </motion.p>

        {/* Divider */}
        <div
          className="mx-auto mt-8 w-16 h-[1px]"
          style={{ background: `linear-gradient(to right, transparent, ${BLUE}80, transparent)` }}
        />

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          {/* ✅ Changed from <a href> to <Link> with hash */}
          <Link
            to="/register"
            hash="enquiry-form"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            style={{
              background: BLUE,
              color: NAVY,
              boxShadow: `0 8px 32px ${BLUE}50`,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#7FCBF0";
              e.currentTarget.style.transform = "scale(1.04)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = BLUE;
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Register Now <ArrowRight className="w-5 h-5" />
          </Link>

          <a
            href="tel:+917770003037"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            style={{
              border: `1.5px solid ${BLUE}60`,
              color: BLUE,
              background: "transparent",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = `${BLUE}18`;
              e.currentTarget.style.borderColor = BLUE;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = `${BLUE}60`;
            }}
          >
            <Phone className="w-5 h-5" /> +91 777 000 3037
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <div className="flex -space-x-3">
            {avatars.map((a, i) => (
              <div
                key={a}
                className="w-10 h-10 rounded-full border-2 text-xs font-bold flex items-center justify-center"
                style={{
                  background: avatarColors[i],
                  borderColor: NAVY,
                  color: ACCENT,
                }}
              >
                {a}
              </div>
            ))}
          </div>
          <p
            className="font-mono text-xs"
            style={{ color: `${ACCENT}80` }}
          >
            Join 150+ students already learning
          </p>
        </motion.div>
      </div>
    </section>
  );
}
