import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Wifi,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
} from "lucide-react";
import { ContactStrip } from "@/components/varjay/ContactStrip";

// ─── ROUTE ───────────────────────────────────────────────────────────────────
export const Route = createFileRoute("/onlinecourses")({
  head: () => ({
    meta: [
      { title: "Online Courses — Varjay Music Academy" },
      {
        name: "description",
        content:
          "Learn Tabla, Dholak, Keyboard, Guitar, Violin, Flute, Vocal, Harmonium, Ukulele, Mandolin, Sitar & Veena online with certified Hindustani and Carnatic faculty at Varjay Music Academy.",
      },
      { property: "og:title", content: "Online Courses — Varjay Music Academy" },
      {
        property: "og:description",
        content:
          "Certified online music lessons — Hindustani, Carnatic & Western. Flexible timings.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://varjaymusic.com/online-courses" },
    ],
  }),
  component: OnlineCoursesPage,
});

// ─── PALETTE ─────────────────────────────────────────────────────────────────
const NAVY = "#0B1F3A";
const BLUE = "#5BB8E8";
const ACCENT = "#A8D8F0";
const LIGHT = "#EBF5FB";

// ─── DATA ─────────────────────────────────────────────────────────────────────
const ONLINE_INSTRUMENTS = [
  // 1. Tabla
  {
    id: "tabla",
    name: "Tabla",
    style: "Hindustani",
    color: "#F59E0B",
    img: "https://images.unsplash.com/photo-1568219656418-15c329312bf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    faculty: [
      {
        name: "Guru Arvind",
        avatar: "GA",
        bio: "Guru Arvind is the founder of Varjay Music Academy and a Visharad in Tabla. With years of performance and teaching experience in Hindustani classical percussion, he guides students from the very basics of Tabla through advanced compositions, taals, and independent performance.",
      },
    ],
  },
  // 2. Dholak
  {
    id: "dholak",
    name: "Dholak",
    style: "Indian Classical",
    color: "#F43F5E",
    img: "https://www.carvedculture.in/cdn/shop/articles/Indian-Dholak_Drum-The-Complete-Guide_68f25b2e-b994-460f-8768-2da4673398ac.jpg?v=1774273778&width=900",
    faculty: [
      {
        name: "Guru Arvind",
        avatar: "GA",
        bio: "Guru Arvind brings the same depth of rhythmic knowledge to Dholak as he does to Tabla, teaching classical rhythms, layakari, and repertoire suitable for a range of performance contexts.",
      },
    ],
  },
  // 3. Keyboard / Piano (Western)
  {
    id: "keyboard-western",
    name: "Keyboard / Piano",
    style: "Western",
    color: "#0984E3",
    img: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&q=80",
    faculty: [
      {
        name: "Chandru P.",
        avatar: "CP",
        bio: "Chandru P. is a skilled keyboard instructor specialising in Western keyboard techniques, covering theory, sight-reading, and performance skills. Education: Chandru holds a BA in History from St. Joseph's College, Tiruchirappalli (2020) with 62%, and completed his HSC (84.25%) and SSLC (88%) from Thanthai Hans Roever Hr. Sec. School, Perambalur. He is currently pursuing a BA in Music from The Tamil Nadu Dr. J. Jayalalithaa Music and Fine Arts University, Chennai (expected 2025). Music Skills: He is proficient in Veena, keyboard, and vocal performance, and is currently learning the piano.",
      },
      {
        name: "Aabhas Shrivastava",
        avatar: "AS",
        bio: "Aabhas Shrivastava is a motivated musician and student music therapist with an extensive background in music and psychology, skilled in preparing customised lesson plans for individual learners. He is currently pursuing a degree in Piano from Trinity College of Music.",
      },
      {
        name: "Ansil Achankunju",
        avatar: "AA",
        bio: "Ansil Achankunju is a Guitar & Keyboard Faculty member and a passionate musician with extensive Western music experience. He specialises in acoustic guitar, electric guitar, and keyboard, teaching various styles including Bollywood, Western pop, rock, and acoustic. Affiliated with the Trinity School of Music, London, Ansil blends theory with practical songwriting so students can play their favourites from day one.",
      },
    ],
  },
  // 4. Keyboard (Carnatic)
  {
    id: "keyboard-carnatic",
    name: "Keyboard",
    style: "Carnatic",
    color: "#A29BFE",
    img: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80",
    faculty: [
      {
        name: "Sumalatha T.R.",
        avatar: "ST",
        bio: "Very passionate and dedicated music teacher having 7 years of experience in teaching vocal and instrumental music to students. Skilled in Carnatic music, violin, and keyboard playing, committed to creating a positive learning environment and helping students build confidence, creativity, and a love for music.",
      },
    ],
  },
  // 5. Guitar
  {
    id: "guitar",
    name: "Guitar",
    style: "Western",
    color: "#0D9488",
    img: "https://cdn.mos.cms.futurecdn.net/Mt4Uis69VRU6EsBbTdF5Qm-750-80.jpg.webp",
    faculty: [
      {
        name: "Aabhas Shrivastav",
        avatar: "AS",
        bio: "Aabhas Shrivastava is a motivated musician and student music therapist with an extensive background in music and psychology, skilled in preparing customised lesson plans for individual learners. Since 2020, he has been working at Aalaap Studio in a dual role — as a Guitar Teacher and as a Production Artist. He is currently pursuing a degree in Piano from Trinity College of Music.",
      },
      {
        name: "Raju Kirtunia",
        avatar: "RK",
        bio: "Raju Kirtunia is a highly experienced multi-instrument music educator, holding Grade V in Nylon String Guitar from the Calcutta School of Music under Trinity College of London, and Grade VIII in Spanish Guitar from the University of West London. He brings over 30 years of teaching experience in Spanish Guitar and more than 20 years each in Nylon String Guitar, Bass Guitar, Mandolin, and Ukulele.",
      },
      {
        name: "Ansil Achankunju",
        avatar: "AA",
        bio: "Ansil Achankunju is a Guitar & Keyboard Faculty member and a passionate musician with extensive Western music experience. He specialises in acoustic guitar, electric guitar, and keyboard, teaching various styles including Bollywood, Western pop, rock, and acoustic. Affiliated with the Trinity School of Music, London, Ansil blends theory with practical songwriting so students can play their favourites from day one.",
      },
    ],
  },
  {

    id: "hindustani guitar",
    name: "Hindustani Guitar",
    style: "Hindustani",
    color: "#D63031",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq58olQpWAYMnAm6wwkUDMGVRbkpaKH1rwwdVcUMiPAAEbW7CXMdLi0wuR&s=10",
    faculty: [
      {
        name: "Aabhas Shrivastav",
        avatar: "AS",
        bio: "Aabhas Shrivastava is a motivated musician and student music therapist with an extensive background in music and psychology, skilled in preparing customised lesson plans for individual learners. Since 2020, he has been working at Aalaap Studio in a dual role — as a Guitar Teacher and as a Production Artist. He is currently pursuing a degree in Piano from Trinity College of Music.",
      }
    ],
  },
  // 6. Violin (Hindustani)
  {
    id: "violin-hindustani",
    name: "Violin",
    style: "Hindustani",
    color: "#00B894",
    img: "https://images.unsplash.com/photo-1692553173440-bc496a6f5e19?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    faculty: [
      {
        name: "Shivangi",
        avatar: "SH",
        bio: "Shivangi Sovenkumar Mehta is a Mumbai-based musician with 7 years of experience playing the violin across three traditions — Western, Carnatic, and Hindustani classical — with her primary expertise in Hindustani classical. She is also a flute player, adding another dimension to her musical repertoire. She is multilingual, proficient in English, Hindi, Marathi, and Gujarati.",
      },
    ],
  },
  // 7. Violin (Carnatic)
  {
    id: "violin-carnatic",
    name: "Violin",
    style: "Carnatic",
    color: "#FDCB6E",
    img: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=800&q=80",
    faculty: [
      {
        name: "Sivashree S.P.",
        avatar: "SS",
        bio: "S.P. Sivashree is a young violin teacher and performer based in Puducherry, with a B.Sc. in Computer Science and an ongoing B.F.A. in Music (Violin) from Annamalai University DDE. She has over a year of professional teaching experience as an online Violin Teacher. Alongside teaching, she is an active performer, regularly appearing in stage concerts and performances across Puducherry and other states. Her achievements include First Prize wins at the Kala Utsav State & District Level Competition and the NITPY Karaikal Inter-State Level Competition, a World Record Certificate from Puduvai Kalaimamani Viruthalargal Sangam, and the prestigious Siruvar Seermani Award from Puducherry. She comes from a musically accomplished family, being the daughter of Dr. V. Sivakumar, M.Mus., Ph.D.",
      },
      {
        name: "Sumalatha T.R.",
        avatar: "ST",
        bio: "Very passionate and dedicated music teacher having 7 years of experience in teaching vocal and instrumental music to students. Skilled in Carnatic music, violin, and keyboard playing, committed to creating a positive learning environment and helping students build confidence, creativity, and a love for music.",
      },
    ],
  },
  // 8. Flute
  {
    id: "flute",
    name: "Flute",
    style: "Hindustani",
    color: "#5BB8E8",
    img: "https://images.unsplash.com/photo-1645772647876-76f184a402a1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    faculty: [
      {
        name: "Kaizan Vandrevala",
        avatar: "KV",
        bio: "Kaizan Vandrevala is a dedicated Hindustani music educator with 7 years of experience teaching professional bamboo flute, specialising in imparting music education right from the basics — covering Alankaars, Raagas, Taal, and songs. A key strength of his is ear training, where he identifies the root note/key of any song by listening and teaches students to do the same. He has deep expertise in Raga-based training, guiding students through the melodic atmosphere of a Raga, linking it to compositions, and helping them play tracks without relying on notations.",
      },
    ],
  },
  // 9. Vocal (Hindustani)
  {
    id: "vocal-hindustani",
    name: "Vocal",
    style: "Hindustani",
    color: "#6C5CE7",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    faculty: [
      {
        name: "Akanksha Shah",
        avatar: "AK",
        bio: "Akanksha Shah received her musical training under the guidance of the renowned Padma Bhushan awardee musician Pandit Hariharan ji and his disciple Shri Matang Parikh ji. During her 7 years of training, she spent 2+ years in Mumbai and 5+ years in Ahmedabad learning music under Shri Matang Parikh ji of the Mewati Gharana. During this period, 111 fellow disciples together got their names recorded in the India Book of Records.",
      },
      {
        name: "Vishal R. Rajguru",
        avatar: "VR",
        bio: "Vishal R. Rajguru is a Vocal & Harmonium Faculty with over 5 years of teaching experience. He also serves as a music teacher at a school in Vashi, Navi Mumbai. Affiliated with the Akhil Bharatiya Gandharva Mahavidyalaya Mandal (ABGMV), he teaches all levels from Prarambhik to Visharad.",
      },
    ],
  },
  // 10. Vocal (Carnatic)
  {
    id: "vocal-carnatic",
    name: "Vocal",
    style: "Carnatic",
    color: "#E17055",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    faculty: [
      {
        name: "Roopavathi Kotte",
        avatar: "RK",
        bio: "She is certified in Carnatic Music Vocals from PSTU, Hyderabad, and has 6 years of experience.Education: Roopavathi holds a Certificate in Carnatic Music (Vocals) from Potti Sreeramulu Telugu University, Hyderabad (2019), and completed her Intermediate from Sree Nidhi High School (2022) with 70.6%. She is currently pursuing a BA in Carnatic Music Vocals at PSG College of Arts and Science.Achievements: She won 1st place in a State Level Singing Competition for women, secured 2nd place at an International Level Singing Competition organized by Swaranatya Sambhrama, and claimed 1st place in Padya competitions at Balotsav.Strengths: She identifies her key strengths as confidence, creative thinking, a positive attitude, and smart thinking.",
      },
      {
        name: "Sumalatha T.R.",
        avatar: "ST",
        bio: "Very passionate and dedicated music teacher having 7 years of experience in teaching vocal and instrumental music to students. Skilled in Carnatic music, violin, and keyboard playing, committed to creating a positive learning environment and helping students build confidence, creativity, and a love for music.",
      },
    ],
  },
  // 11. Harmonium
  {
    id: "harmonium",
    name: "Harmonium",
    style: "Hindustani",
    color: "#0EA5E9",
    img: "https://i.ibb.co/rRL7TfkT/harmonium.jpg",
    faculty: [
      {
        name: "Vishal R. Rajguru",
        avatar: "VR",
        bio: "Vishal R. Rajguru is a Vocal & Harmonium Faculty with over 5 years of teaching experience. He also serves as a music teacher at a school in Vashi, Navi Mumbai. Affiliated with the Akhil Bharatiya Gandharva Mahavidyalaya Mandal (ABGMV), he teaches all levels from Prarambhik to Visharad.",
      },
    ],
  },
  // 12. Ukulele
  {
    id: "ukulele",
    name: "Ukulele",
    style: "Western",
    color: "#22C55E",
    img: "https://cordobaguitars.com/data/6/0a000415015e69438d167c20c/image/jpeg",
    imgPosition: "center center",
    faculty: [
      {
        name: "Raju Kirtunia",
        avatar: "RK",
        bio: "Raju Kirtunia brings over 20 years of Ukulele teaching experience, covering chords, strumming patterns, fingerpicking, and repertoire across folk and popular styles.",
      },
    ],
  },
  // 13. Mandolin
  {
    id: "mandolin",
    name: "Mandolin",
    style: "Multi-style",
    color: "#D63031",
    img: "https://www.calmusical.com/wp-content/uploads/2025/02/2100AF-e1741164363242.jpg",
    imgPosition: "center 30%",
    faculty: [
      {
        name: "Raju Kirtunia",
        avatar: "RK",
        bio: "Raju Kirtunia is a highly experienced multi-instrument music educator, holding Grade V in Nylon String Guitar from the Calcutta School of Music under Trinity College of London, and Grade VIII in Spanish Guitar from the University of West London. He brings over 20 years of teaching experience in Mandolin, online and offline.",
      },
    ],
  },
  // 14. Sitar
  {
    id: "sitar",
    name: "Sitar",
    style: "Hindustani",
    color: "#F97316",
    img: "https://m.media-amazon.com/images/I/51izbO+NA9L._SL1280_.jpg",
    faculty: [
      {
        name: "To be announced",
        avatar: "VA",
        bio: "Our Sitar faculty details will be announced soon. Please enquire below to be notified and to discuss your requirements.",
      },
    ],
  },
  // 15. Veena
  {
    id: "veena",
    name: "Veena",
    style: "Carnatic",
    color: "#A855F7",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Saraswati_veena_%28Indian_long-necked_lute%29.png/1920px-Saraswati_veena_%28Indian_long-necked_lute%29.png",
    faculty: [
      {
        name: "To be announced",
        avatar: "VA",
        bio: "Our Veena faculty details will be announced soon. Please enquire below to be notified and to discuss your requirements.",
      },
    ],
  },
];

const COURSE_OPTIONS = ONLINE_INSTRUMENTS.map((i) => `${i.name} (${i.style})`);

// ─── TYPES ────────────────────────────────────────────────────────────────────
type FacultyMember = { name: string; avatar: string; bio: string };
type Instrument = (typeof ONLINE_INSTRUMENTS)[0] & { imgPosition?: string };

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function FacultyCard({ faculty, color }: { faculty: FacultyMember; color: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="rounded-2xl bg-white border p-6"
      style={{ borderColor: `${color}30` }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
          style={{ background: color }}
        >
          {faculty.avatar}
        </div>
        <div>
          <p className="font-semibold text-[#0B1F3A] text-base leading-tight">
            {faculty.name}
          </p>
          <p className="text-xs text-[#0B1F3A]/50 mt-0.5">Faculty</p>
        </div>
      </div>

      <div className="relative">
        <p
          className={`text-sm text-[#0B1F3A]/70 leading-relaxed ${!expanded ? "line-clamp-3" : ""
            }`}
        >
          {faculty.bio}
        </p>
        {faculty.bio.length > 160 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 flex items-center gap-1 text-xs font-semibold transition-colors"
            style={{ color }}
          >
            {expanded ? (
              <>Show less <ChevronUp className="w-3.5 h-3.5" /></>
            ) : (
              <>Read more <ChevronDown className="w-3.5 h-3.5" /></>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

function InstrumentSection({
  instrument,
  index,
}: {
  instrument: Instrument;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      id={instrument.id}
      className="scroll-mt-24"
    >
      <div
        className={`flex flex-col md:flex-row gap-8 items-start mb-8 ${!isEven ? "md:flex-row-reverse" : ""
          }`}
      >
        {/* Image */}
        <div className="w-full md:w-2/5 shrink-0">
          <div
            className="relative rounded-3xl overflow-hidden aspect-[4/3]"
            style={{ boxShadow: `0 16px 48px ${instrument.color}25` }}
          >
            <img
              src={instrument.img}
              alt={`${instrument.name} ${instrument.style}`}
              className="w-full h-full object-cover"
              style={{ objectPosition: instrument.imgPosition ?? "center center" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${instrument.color}30 0%, transparent 60%)`,
              }}
            />
            <div className="absolute top-4 left-4">
              <span
                className="px-3 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase text-white"
                style={{ background: instrument.color }}
              >
                {instrument.style}
              </span>
            </div>
          </div>
        </div>

        {/* Title + intro */}
        <div className="flex-1 pt-2">
          <p
            className="font-mono text-xs tracking-widest uppercase mb-2"
            style={{ color: instrument.color }}
          >
            Online Classes
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl tracking-tight leading-none"
            style={{ color: NAVY }}
          >
            {instrument.name}
          </h2>
          <div
            className="w-10 h-[3px] rounded-full mt-4 mb-5"
            style={{ background: instrument.color }}
          />
          <p className="text-[#0B1F3A]/65 text-base leading-relaxed max-w-lg">
            Learn {instrument.name} ({instrument.style}) online with our certified
            faculty. Sessions are flexible, tailored to your pace, and conducted
            live one-on-one.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Live sessions", "Flexible timing"].map(
              (tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border"
                  style={{
                    borderColor: `${instrument.color}40`,
                    color: instrument.color,
                    background: `${instrument.color}0A`,
                  }}
                >
                  <CheckCircle2 className="w-3 h-3" />
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Faculty cards */}
      <div
        className={`grid gap-5 ${instrument.faculty.length === 1
          ? "lg:grid-cols-1 max-w-xl"
          : "sm:grid-cols-2"
          }`}
      >
        {instrument.faculty.map((f) => (
          <FacultyCard key={f.name} faculty={f} color={instrument.color} />
        ))}
      </div>
    </motion.div>
  );
}

function OnlineEnquiryForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleCourse = (course: string) => {
    setSelectedCourses((prev) =>
      prev.includes(course) ? prev.filter((c) => c !== course) : [...prev, course]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-[#5BB8E8]/15 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 text-[#5BB8E8]" />
        </div>
        <h3 className="font-display text-2xl font-semibold text-[#1C0A00] mb-2">
          We'll be in touch soon!
        </h3>
        <p className="text-[#57534e]">
          Thank you for reaching out. Our team will contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#1C0A00]/60 mb-1.5 uppercase tracking-wider">
            Full Name *
          </label>
          <input
            required
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-[#E7E5E4] bg-white text-[#1C0A00] text-sm placeholder:text-[#A8A29E] focus:outline-none focus:border-[#5BB8E8] focus:ring-2 focus:ring-[#5BB8E8]/20 transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#1C0A00]/60 mb-1.5 uppercase tracking-wider">
            Phone / WhatsApp *
          </label>
          <input
            required
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-[#E7E5E4] bg-white text-[#1C0A00] text-sm placeholder:text-[#A8A29E] focus:outline-none focus:border-[#5BB8E8] focus:ring-2 focus:ring-[#5BB8E8]/20 transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#1C0A00]/60 mb-1.5 uppercase tracking-wider">
          Email Address
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-[#E7E5E4] bg-white text-[#1C0A00] text-sm placeholder:text-[#A8A29E] focus:outline-none focus:border-[#5BB8E8] focus:ring-2 focus:ring-[#5BB8E8]/20 transition-all"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#1C0A00]/60 mb-2 uppercase tracking-wider">
          Courses You're Interested In{" "}
          <span className="normal-case font-normal text-[#A8A29E]">
            (select all that apply)
          </span>
        </label>
        <div className="flex flex-wrap gap-2">
          {COURSE_OPTIONS.map((course) => {
            const active = selectedCourses.includes(course);
            return (
              <button
                key={course}
                type="button"
                onClick={() => toggleCourse(course)}
                className="px-3 py-1.5 rounded-full text-xs font-semibold border transition-all"
                style={
                  active
                    ? { background: NAVY, borderColor: NAVY, color: BLUE }
                    : { background: "white", borderColor: "#E7E5E4", color: "#1C0A00" }
                }
              >
                {active && <span className="mr-1">✓</span>}
                {course}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#1C0A00]/60 mb-1.5 uppercase tracking-wider">
          Message
        </label>
        <textarea
          rows={3}
          placeholder="Any questions or special requirements..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-[#E7E5E4] bg-white text-[#1C0A00] text-sm placeholder:text-[#A8A29E] focus:outline-none focus:border-[#5BB8E8] focus:ring-2 focus:ring-[#5BB8E8]/20 transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all hover:opacity-90 active:scale-[0.99]"
        style={{ background: NAVY, color: BLUE }}
      >
        Send Enquiry →
      </button>
    </form>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
function OnlineCoursesPage() {
  return (
    <main className="w-full overflow-hidden bg-white">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: NAVY, minHeight: "75svh" }}
      >
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute"
            style={{
              width: "65vw",
              height: "65vh",
              top: "-20%",
              right: "-10%",
              background: `radial-gradient(ellipse, ${BLUE}18 0%, transparent 65%)`,
            }}
          />
          <div
            className="absolute"
            style={{
              width: "45vw",
              height: "55vh",
              bottom: "-15%",
              left: "5%",
              background: `radial-gradient(ellipse, ${ACCENT}12 0%, transparent 65%)`,
            }}
          />
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full"
              style={{
                top: `${35 + i * 5}%`,
                height: "1px",
                background: `linear-gradient(to right, transparent, ${LIGHT}06 20%, ${LIGHT}06 80%, transparent)`,
              }}
            />
          ))}
        </div>

        {/* Desktop right image panel */}
        <div
          className="absolute inset-y-0 right-0 hidden md:block z-10"
          style={{
            width: "48%",
            clipPath: "polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80"
              alt="Online music classes"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          <div
            className="absolute inset-y-0 left-0 w-48 pointer-events-none"
            style={{ background: `linear-gradient(to right, ${NAVY}, transparent)` }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, ${NAVY}88 0%, transparent 20%, transparent 70%, ${NAVY}EE 100%)`,
            }}
          />
        </div>

        {/* Mobile image */}
        <div className="absolute inset-0 md:hidden z-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6 }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80"
              alt="Online music classes"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, ${NAVY}F5, ${NAVY}CC 55%, ${NAVY}88)`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, ${NAVY}66, transparent 30%, transparent 58%, ${NAVY} 100%)`,
            }}
          />
        </div>

        {/* Hero content */}
        <div
          className="relative z-20 flex flex-col justify-center min-h-[75svh] pb-16 pt-24"
          style={{
            maxWidth: "55%",
            paddingLeft: "max(3rem,5vw)",
            paddingRight: "max(2rem,4vw)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex self-start items-center gap-2 px-4 py-2 rounded-full font-mono text-[10px] mb-8 tracking-widest uppercase"
            style={{ border: `1px solid ${BLUE}45`, background: `${BLUE}12`, color: BLUE }}
          >
            <Wifi className="w-3 h-3" />
            Online Courses
          </motion.div>

          <div className="max-w-lg">
            <h1
              className="font-serif leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.6rem,5vw,5rem)" }}
            >
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="block"
                style={{ color: LIGHT }}
              >
                Learn music
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.8 }}
                className="block italic"
                style={{ color: BLUE, textShadow: `0 0 50px ${BLUE}40` }}
              >
                from anywhere.
              </motion.span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 max-w-md"
          >
            <div
              className="w-10 h-[2px] mb-5 rounded-full"
              style={{ background: `linear-gradient(to right, ${BLUE}, ${ACCENT})` }}
            />
            <p className="text-lg leading-relaxed" style={{ color: `${LIGHT}CC` }}>
              Live one-on-one lessons in Tabla, Dholak, Keyboard, Guitar, Violin,
              Flute, Vocal, Harmonium, Ukulele, Mandolin, Sitar & Veena —
              Hindustani, Carnatic and Western. Flexible timings, certified faculty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── WHY ONLINE ────────────────────────────────────────────────────── */}
      <section className="py-14" style={{ background: LIGHT }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                ),
                title: "Learn from Anywhere",
                desc: "Join from any city, country, or time zone. All you need is a device and a stable connection.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    <path d="M22 20v-2a4 4 0 0 0-3-3.87" />
                  </svg>
                ),
                title: "Certified Faculty",
                desc: "All teachers are certified professionals with years of performance and teaching experience.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
                  </svg>
                ),
                title: "Flexible Scheduling",
                desc: "Timings are mutually decided between faculty and student to suit your lifestyle.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-7 border border-[#A8D8F0]/40 flex flex-col items-center"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: `${BLUE}15`, border: `1.5px solid ${BLUE}30` }}
                >
                  {item.icon}
                </div>
                <p className="font-semibold text-[#0B1F3A] mb-1.5">{item.title}</p>
                <p className="text-sm text-[#0B1F3A]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTRUMENT SECTIONS ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-24">
          {ONLINE_INSTRUMENTS.map((instrument, index) => (
            <InstrumentSection key={instrument.id} instrument={instrument} index={index} />
          ))}
        </div>
      </section>

      {/* ── ENQUIRY SECTION ───────────────────────────────────────────────── */}
      <ContactStrip defaultCourse="Not sure yet" />
    </main>
  );
}
