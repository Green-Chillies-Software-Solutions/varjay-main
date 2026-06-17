import { motion } from "framer-motion";
import { FacebookIcon, InstagramIcon,YoutubeIcon} from "./SocialIcons";

const badges = [
  { label: "Visharad — Tabla", color: "bg-rose-100 text-rose-800" },
  { label: "10+ Years Teaching", color: "bg-teal-100 text-teal-800" },
  { label: "Alankar in Progress", color: "bg-violet-100 text-violet-800" },
  { label: "ABGMV Certified", color: "bg-rose-100 text-rose-800" },
];

export function Faculty() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="font-mono text-xl text-[#F59E0B] tracking-widest mb-3">
            MEET OUR TEACHER
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-[#1C0A00] font-semibold">
            Learn from a master.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-[35%_65%] rounded-3xl overflow-hidden shadow-2xl bg-[#FEF3C7]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative min-h-[480px]"
          >
            <a
  href="https://ibb.co/7xGDzBmx"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://i.ibb.co/cKN9vRnK/Whats-App-Image-2026-06-05-at-11-28-58.jpg"
    alt="Arvind V. Rao"
    className="absolute inset-0 w-full h-full object-cover object-top"
  />
</a>
          </motion.div>

          <div className="p-10 lg:p-14">
            <span className="inline-block px-3 py-1 rounded-full bg-[#F59E0B] text-[#1C0A00] font-mono text-[10px] tracking-widest">
              FOUNDER & HEAD OF TABLA
            </span>
            <h3 className="font-display text-5xl text-[#1C0A00] mt-4 font-semibold">
              Arvind V. Rao
            </h3>

            <div className="flex flex-wrap gap-2 mt-5">
              {badges.map((b) => (
                <span
                  key={b.label}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium ${b.color}`}
                >
                  {b.label}
                </span>
              ))}
            </div>

            <p className="mt-6 text-[#1C0A00]/80 leading-relaxed">
              Arvind V. Rao has been learning tabla for over 15+ years and has teaching experience
              of over 10+ years. He currently pursues Alankar under Guru Shri Praveen Karkareji. His students range from local beginners to international learners performing on stage.
            </p>

            <blockquote className="mt-6 font-display italic text-2xl text-[#F43F5E] leading-snug border-l-4 border-[#F43F5E] pl-5">
              "Every student who walks in leaves with rhythm in their heart."
            </blockquote>

            <div className="flex gap-4 mt-8">
                {[
                  { Icon: YoutubeIcon, href: "https://www.youtube.com/channel/UCxrYgHmwDxVIpVjFvVadKYA" },
                  { Icon: FacebookIcon, href: "https://www.facebook.com/p/Varjay-Music-Academy-100077740792261/" },
                  { Icon: InstagramIcon, href: "https://www.instagram.com/varjay.music.academy/" },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-[#F59E0B] hover:border-[#F59E0B] text-[#1C0A00] hover:text-white flex items-center justify-center transition-colors shadow-lg"
                  >
                    <social.Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}