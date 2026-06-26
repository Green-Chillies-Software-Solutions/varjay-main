import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Send, Loader2 } from "lucide-react";

import { breadcrumbSchema, ldJson, localBusinessSchema } from "@/components/varjay/schema";

// ─── UPDATED PRODUCTION URL ──────────────────────────────────────────────────
const URL = "https://varjaymusic.com/contact";

// REPLACE THIS WITH YOUR NEW APPS SCRIPT DEPLOYMENT URL
const SHEETS_URL = "https://script.google.com/macros/s/AKfycbyPFjEVM13qY-y9SQ8yksr3S8fVRprIiERXvJQEwK7i6ZBk-_sqeGP6UsmBKWAEZ2ZJ/exec";

const NAVY = "#0B1F3A";
const BLUE = "#5BB8E8";
const ACCENT = "#A8D8F0";
const LIGHT = "#EBF5FB";
const WHITE = "#FFFFFF";

const notes = ["♩", "♪", "♫", "♬", "𝄞"];

// Helper: Exponential Backoff Retry for robustness against network or GAS timeouts
async function fetchWithRetry(url: string, options: RequestInit, retries = 3): Promise<any> {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, {
        ...options,
        redirect: "follow", // <-- ADD THIS LINE to handle Google's internal redirects
      });
      const json = await res.json().catch(() => ({ status: "success" }));

      if (json.status === "error") throw new Error(json.message);
      return json;
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, i)));
    }
  }
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Varjay Music Academy" },
      { name: "description", content: "Call +91 777 000 3036 or send an enquiry. Studio in Sanpada, Navi Mumbai. Online classes worldwide. Mon–Sat, 10 AM – 8 PM." },
      { property: "og:title", content: "Contact Varjay Music Academy" },
      { property: "og:url", content: URL },
      // Added Robots Meta Tag
      { name: "robots", content: "index, follow" },
    ],
    links: [
      // Canonical link automatically utilizes the updated URL constant
      { rel: "canonical", href: URL }
    ],
    scripts: [
      ldJson(localBusinessSchema()),
      ldJson(breadcrumbSchema([{ name: "Home", url: "https://varjaymusic.com/" }, { name: "Contact", url: URL }])),
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError(null);

    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();

    const errs: Record<string, string> = {};
    if (name.length < 2) errs.name = "Please enter your name";
    if (!/^[0-9 +\-()]{7,20}$/.test(phone)) errs.phone = "Enter a valid phone number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Enter a valid email";
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setErrors({});
    setSubmitting(true);

    try {
      await fetchWithRetry(SHEETS_URL, {
        method: "POST",
        // Using text/plain to bypass CORS preflight errors
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          name, phone, email, message,
          page: window.location.pathname,
          submittedAt: new Date().toISOString(),
        }),
      });

      navigate({ to: "/thank-you" });
    } catch (err: any) {
      console.error("Contact form error:", err);
      setSubmitError("We are experiencing high traffic. Please try clicking 'Send Message' again, or contact us directly.");
      setSubmitting(false);
    }
  }

  const inputStyles = "w-full rounded-xl bg-[#EBF5FB] border border-[#A8D8F0]/60 px-5 py-4 text-sm text-[#0B1F3A] placeholder:text-[#0B1F3A]/40 focus:outline-none focus:border-[#5BB8E8] focus:ring-2 focus:ring-[#5BB8E8]/30 transition-all";
  const labelStyles = "block font-mono text-[11px] tracking-widest text-[#0B1F3A]/60 mb-2 uppercase font-semibold";

  return (
    <main className="w-full overflow-hidden relative bg-white">

      {/* ─── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: NAVY, minHeight: "80svh" }}>

        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute" style={{ width: "70vw", height: "70vh", top: "-20%", left: "-15%", background: `radial-gradient(ellipse, ${BLUE}18 0%, transparent 70%)`, transform: "rotate(-20deg)" }} />
          <div className="absolute" style={{ width: "50vw", height: "60vh", bottom: "-10%", left: "5%", background: `radial-gradient(ellipse, ${ACCENT}12 0%, transparent 65%)` }} />
          {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute w-full" style={{ top: `${35 + i * 4}%`, height: "1px", background: `linear-gradient(to right, transparent, ${LIGHT}06 20%, ${LIGHT}06 80%, transparent)` }} />
          ))}
        </div>

        <div className="absolute inset-y-0 right-0 hidden md:block z-10" style={{ width: "50%", clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
          <motion.div initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className="absolute inset-0">
            <img src="https://varjaymusic.com/wp-content/uploads/2024/05/SRG_1204-copy-scaled-1-1024x576.jpg" alt="Varjay Music Academy Studio" className="w-full h-full object-cover object-center" />
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-48 pointer-events-none" style={{ background: `linear-gradient(to right, ${NAVY}, transparent)` }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to bottom, ${NAVY}88 0%, transparent 20%, transparent 70%, ${NAVY}EE 100%)` }} />
          <div className="absolute inset-0 pointer-events-none opacity-30" style={{ background: `linear-gradient(135deg, ${BLUE}55 0%, transparent 50%, ${ACCENT}33 100%)`, mixBlendMode: "color" }} />
        </div>

        <div className="absolute inset-0 md:hidden z-0">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6 }} className="absolute inset-0">
            <img src="https://varjaymusic.com/wp-content/uploads/2024/05/SRG_1204-copy-scaled-1-1024x576.jpg" alt="Varjay Music Academy Studio" className="w-full h-full object-cover object-center" />
          </motion.div>
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${NAVY}F5, ${NAVY}CC 55%, ${NAVY}88)` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${NAVY}66, transparent 30%, transparent 58%, ${NAVY} 100%)` }} />
        </div>

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

        <div className="relative z-20 flex flex-col justify-center min-h-[80svh] pb-16 pt-24"
          style={{ maxWidth: "55%", paddingLeft: "max(3rem,5vw)", paddingRight: "max(2rem,4vw)" }}>
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex self-start items-center gap-2.5 px-4 py-2 rounded-full font-mono text-[10px] mb-8 tracking-widest uppercase"
            style={{ border: `1px solid ${BLUE}45`, background: `${BLUE}12`, color: BLUE }}>
            CONTACT US
          </motion.div>
          <div className="max-w-xl">
            <h1 className="font-serif leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.8rem,5.5vw,5.5rem)" }}>
              <motion.span initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="block" style={{ color: LIGHT }}>
                We&apos;d love to
              </motion.span>
              <motion.span initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35, duration: 0.8 }} className="block italic" style={{ color: BLUE, textShadow: `0 0 50px ${BLUE}40` }}>
                hear from you.
              </motion.span>
            </h1>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-8 max-w-md">
            <div className="w-12 h-[2px] mb-6 rounded-full" style={{ background: `linear-gradient(to right, ${BLUE}, ${ACCENT})` }} />
            <p className="text-lg leading-relaxed" style={{ color: `${LIGHT}CC` }}>
              Whether you&apos;re starting out at 7 or 70 — drop us a line. We reply within a few hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── FORM SECTION ──────────────────────────────────────────────────── */}
      <section className="relative z-20 py-24" style={{ background: LIGHT }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24 items-start">

          {/* Left: Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="font-mono text-[11px] tracking-widest text-[#5BB8E8] uppercase font-bold mb-4">Get in Touch</p>
            <h2 className="font-serif text-4xl font-semibold text-[#0B1F3A] leading-tight mb-6">Let&apos;s make some music.</h2>
            <p className="text-[#0B1F3A]/70 leading-relaxed mb-10 text-lg">
              Visit our academy in Sanpada or drop us a message right here. We are always happy to discuss your musical journey.
            </p>

            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-[#5BB8E8]/30 shadow-sm flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#5BB8E8]" />
                </div>
                <div>
                  <p className="font-semibold text-[#0B1F3A] text-lg">Varjay Music Academy</p>
                  <p className="text-[#0B1F3A]/60 mt-1">
                    Shop No. 1 & 2, Sai-Jyot Co-op Hsg Society, Plot No. 78 to 81,
                    Near Narayan Dairy, Sector 1, Sanpada,
                    Navi Mumbai - 400705, Maharashtra
                  </p>
                  <p className="text-[#0B1F3A]/60 mt-1">Studio + online classes worldwide</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-[#5BB8E8]/30 shadow-sm flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#5BB8E8]" />
                </div>
                <div>
                  <p className="font-semibold text-[#0B1F3A] text-lg">
                    <a href="tel:+917770003037" className="hover:text-[#5BB8E8] transition-colors">+91 77700 03037</a>
                  </p>
                  <p className="font-semibold text-[#0B1F3A] text-lg">
                    <a href="tel:+917770003038" className="hover:text-[#5BB8E8] transition-colors">+91 77700 03038</a>
                  </p>
                  <p className="font-semibold text-[#0B1F3A] text-lg">
                    <a href="tel:+917770003036" className="hover:text-[#5BB8E8] transition-colors">+91 77700 03036</a>
                  </p>
                  <p className="text-[#0B1F3A]/60 mt-1">Call or WhatsApp us directly</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-[#5BB8E8]/30 shadow-sm flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#5BB8E8]" />
                </div>
                <div>
                  <p className="font-semibold text-[#0B1F3A] text-lg">
                    <a href="mailto:varjaymusic@gmail.com" className="hover:text-[#5BB8E8] transition-colors">varjaymusic@gmail.com</a>
                  </p>
                  <p className="text-[#0B1F3A]/60 mt-1">We typically reply within 24 hours</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="rounded-3xl p-8 sm:p-10 relative overflow-hidden bg-white shadow-xl border border-[#A8D8F0]/50">

            <form onSubmit={onSubmit} className="relative z-10 grid gap-6" noValidate>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelStyles}>Name</label>
                  <input name="name" required type="text" placeholder="Your full name" className={inputStyles} />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className={labelStyles}>Contact Number</label>
                  <input name="phone" required type="tel" placeholder="+91 ..." className={inputStyles} />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className={labelStyles}>Email Address</label>
                <input name="email" required type="email" placeholder="you@example.com" className={inputStyles} />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className={labelStyles}>Message</label>
                <textarea name="message" required rows={4} placeholder="How can we help you start your musical journey?" className={`${inputStyles} resize-none`} />
              </div>

              {submitError && (
                <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-3">{submitError}</p>
              )}

              <button type="submit" disabled={submitting}
                className="mt-2 w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed bg-[#0B1F3A] text-[#5BB8E8] hover:bg-[#162F52] shadow-md shadow-[#0B1F3A]/10">
                {submitting
                  ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                  : <>Send Message <Send className="w-4 h-4" /></>}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ─── MAP ───────────────────────────────────────────────────────────── */}
      <section className="relative z-20 pb-24 pt-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-lg border border-[#A8D8F0]/30 transition-all">
            <iframe
              title="Varjay Music Academy — Sanpada, Navi Mumbai"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6071.253390655967!2d73.00133280709336!3d19.06256699373783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c14ff1555555%3A0x14f6d1028ac46b89!2sVarjay%20Music%20Academy!5e0!3m2!1sen!2sin!4v1781597302141!5m2!1sen!2sin"
              className="w-full h-[420px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

    </main>
  );
}
