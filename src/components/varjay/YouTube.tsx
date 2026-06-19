import { Play, ArrowRight } from "lucide-react";

const videos = [
  { title: "Tabla Solo — Arnav Shinde", url: "https://www.youtube.com/watch?v=-O8iiXMCGFo" },
  { title: "Republic Day Special 2025", url: "https://www.youtube.com/watch?v=v3UblXP6JrM" },
  { title: "Keyboard Solo — Vijayashish Satapathy", url: "https://www.youtube.com/watch?v=QIdfJMdqH5U" },
];

export function YouTube() {
  return (
    <section id="youtube" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-mono text-xl text-[#0D9488] tracking-widest mb-3">ON STAGE</p>
          <h2 className="font-display text-5xl md:text-6xl text-[#1C0A00] font-semibold leading-tight">
            Our students,<br />performing live.
          </h2>
          <p className="mt-6 text-[#1C0A00]/70 leading-relaxed">
            Watch performances, exam recordings, and musical moments from our students on YouTube.
          </p>

          <div className="mt-8 space-y-3">
            {videos.map((v) => (
              <a
                key={v.title}
                href={v.url}
                target="_blank" rel="noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-[#FEFAF1] border border-amber-100 hover:border-[#F59E0B] hover:bg-amber-50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#0D9488] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                <span className="font-medium text-sm text-[#1C0A00]">{v.title}</span>
              </a>
            ))}
          </div>

          <a
            href="https://www.youtube.com/channel/UCxrYgHmwDxVIpVjFvVadKYA"
            target="_blank" rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D9488] text-white font-semibold hover:bg-[#115e59] transition-colors"
          >
            Visit Our Full Channel <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/TSMSVuhv9Cw"
            title="Varjay Music"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
