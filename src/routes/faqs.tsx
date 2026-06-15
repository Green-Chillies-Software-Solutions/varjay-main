import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { ContactStrip } from "@/components/varjay/ContactStrip";
import { breadcrumbSchema, faqSchema, ldJson } from "@/components/varjay/schema";

const URL = "https://instrument-story-spark.lovable.app/faqs";

const FAQS = [
  {
    q: "Where is your class located?",
    a: "Our class is near Moraj residency off Palm beach road, Sector 1, Sanpada, Navi Mumbai.",
  },
  {
    q: "What are the instruments you teach in your academy?",
    a: "We teach Tabla, Keyboard, Guitar, Violin, Harmonium and Hindustani vocal.",
  },
  {
    q: "Do you have different faculties for the different instruments?",
    a: "Yes, we have the following faculties for the following instruments:\n• Shri Arvind Rao (owner) for Tabla\n• Shri Bharat Patil for Keyboard, Guitar & Violin\n• Shri Vishal Rajguru for Harmonium & Hindustani Vocal",
  },
  {
    q: "How many students in a Batch?",
    a: "We take only limited students in a batch, average 5 to 7.",
  },
  {
    q: "When are the sessions conducted for different instruments?",
    a: "Presently we are conducting the sessions as per the details given below (subject to change, please confirm before joining):\n\nTabla:\n• Mon to Sat morning: 10 am to 1 pm\n• Mon evening: 3:00 pm to 6:00 pm\n• Wed evening: 3:00 pm to 9:00 pm\n• Sat evening: 3:00 pm to 7:00 pm\n\nHindustani Vocal & Harmonium:\n• Tue & Fri evening: 6:30 pm to 9:30 pm\n\nEach session is of 1 hour duration & twice a week (Monthly 8 sessions). We conduct group sessions only. In case of private tuitions or Online sessions you may contact/message us.",
  },
  {
    q: "What is your fee structure?",
    a: "Presently we charge Rs 1500 per month for Tabla, Vocal & Harmonium. Presently we charge Rs 2000 per month for Keyboard, Guitar & Violin. The fees has to be paid by the latest on 10th of the same month.",
  },
  {
    q: "Is there any admission fee or Registration fee?",
    a: "No. Presently we don't charge any admission fee or Registration fee.",
  },
  {
    q: "Do you offer any discount in case of 1 or more admissions?",
    a: "Sorry we don't offer any discounts. We are lower or equal to the general market fees.",
  },
  {
    q: "In case if the student misses any session, what is your policy?",
    a: "The student can compensate the session by attending the next available session in coordination with the owners of the academy.",
  },
  {
    q: "Within how many months can I learn the basics?",
    a: "It depends on your capability to pick up, understand the lessons & your practice at home.",
  },
  {
    q: "Is there any particular Syllabus you follow?",
    a: "We follow Gandharva Syllabus for Tabla, Harmonium & Hindustani Vocal. We follow Trinity school of London for Keyboard, Guitar & Violin.",
  },
  {
    q: "Where & When do we buy the instruments?",
    a: "We suggest that you may buy from our known dealers. We leave it to your choice when you want to purchase the instruments, but we suggest that buying the instrument after a month of your joining, will be more ideal, so that you can practice at home.",
  },
];

// ─── THE BLUE PALETTE (DARK TO LIGHT) ────────────────────────────────────────
const NAVY = "#0B1F3A"; // Deep Navy (Hero background)
const BLUE = "#5BB8E8"; // Vibrant Sky Blue (Accents, Buttons)
const ACCENT = "#A8D8F0"; // Soft Blue Accent
const LIGHT = "#EBF5FB"; // Ice Blue (Section background)
const WHITE = "#FFFFFF"; // Accordion background

const notes = ["♩", "♪", "♫", "♬", "𝄞"];

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — Varjay Music Academy" },
      {
        name: "description",
        content:
          "Common questions about classes, fees, online learning, certifications, batch sizes, and starting age at Varjay Music Academy.",
      },
      { property: "og:title", content: "FAQs — Varjay Music Academy" },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      ldJson(faqSchema(FAQS)),
      ldJson(
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "FAQs", url: "/faqs" },
        ]),
      ),
    ],
  }),
  component: FAQsPage,
});

function FAQsPage() {
  return (
    <main className="w-full overflow-hidden bg-white">

      {/* ─── CUSTOM FAQS HERO (NAVY) ──────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: NAVY, minHeight: "80svh" }}>

        {/* Painterly blobs + staff lines */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute" style={{ width: "70vw", height: "70vh", top: "-20%", left: "-15%", background: `radial-gradient(ellipse, ${BLUE}18 0%, transparent 70%)`, transform: "rotate(-20deg)" }} />
          <div className="absolute" style={{ width: "50vw", height: "60vh", bottom: "-10%", left: "5%", background: `radial-gradient(ellipse, ${ACCENT}12 0%, transparent 65%)` }} />
          {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute w-full" style={{ top: `${35 + i * 4}%`, height: "1px", background: `linear-gradient(to right, transparent, ${LIGHT}08 20%, ${LIGHT}08 80%, transparent)` }} />
          ))}
        </div>

        {/* RIGHT — Abstract gradient panel for FAQs (desktop split alignment) */}
        <div className="absolute inset-y-0 right-0 hidden md:block z-10" style={{ width: "50%", clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0F2847 100%)` }} />

          <div className="absolute inset-y-0 left-0 w-48 pointer-events-none" style={{ background: `linear-gradient(to right, ${NAVY}, transparent)` }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to bottom, ${NAVY}88 0%, transparent 20%, transparent 70%, ${NAVY}EE 100%)` }} />
          <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: `linear-gradient(135deg, ${BLUE}55 0%, transparent 50%, ${ACCENT}33 100%)`, mixBlendMode: "color" }} />

          {/* Subtle large question mark decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2 }}
            className="absolute right-20 top-1/2 -translate-y-1/2 font-serif select-none pointer-events-none"
            style={{ fontSize: "25rem", color: `${LIGHT}08`, fontWeight: 700 }}
          >
            ?
          </motion.div>
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
            className="inline-flex self-start items-center gap-2.5 px-4 py-2 rounded-full font-mono text-[14px] mb-8 tracking-widest uppercase"
            style={{ border: `1px solid ${BLUE}45`, background: `${BLUE}12`, color: BLUE }}>
            FAQS
          </motion.div>

          <div className="max-w-xl">
            <h1 className="font-serif leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.8rem,5.5vw,5.5rem)" }}>
              <motion.span
                initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
                className="block" style={{ color: LIGHT }}>
                Questions,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35, duration: 0.8 }}
                className="block italic" style={{ color: BLUE, textShadow: `0 0 50px ${BLUE}40` }}>
                answered.
              </motion.span>
            </h1>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-8 max-w-md">
            <div className="w-12 h-[2px] mb-6 rounded-full" style={{ background: `linear-gradient(to right, ${BLUE}, ${ACCENT})` }} />
            <p className="text-lg leading-relaxed" style={{ color: `${LIGHT}CC` }}>
              Everything you wanted to know about classes, fees, syllabuses, and starting your musical journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ACCORDION LIST (LIGHT THEME) ─────────────────────────────── */}
      <section className="py-24 relative z-20" style={{ background: LIGHT }}>
        <div className="max-w-3xl mx-auto px-6 space-y-4">
          {FAQS.map((f, i) => (
            <motion.details
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              key={i}
              className="group rounded-2xl transition-all duration-300 bg-white shadow-sm hover:shadow-md"
              style={{
                border: `1px solid ${ACCENT}50`,
              }}
            >
              <summary className="cursor-pointer list-none p-6 flex items-start justify-between gap-4 outline-none rounded-2xl transition-colors">
                <h2 className="font-serif text-xl tracking-tight text-[#0B1F3A]">
                  {f.q}
                </h2>
                <span
                  className="text-2xl leading-none transition-transform duration-300 group-open:rotate-45 shrink-0 text-[#5BB8E8]"
                >
                  +
                </span>
              </summary>
              <p className="px-6 pb-6 pt-2 text-sm leading-relaxed whitespace-pre-line text-[#0B1F3A]/70">
                {f.a}
              </p>
            </motion.details>
          ))}
        </div>
      </section>

      <ContactStrip />
    </main>
  );
}