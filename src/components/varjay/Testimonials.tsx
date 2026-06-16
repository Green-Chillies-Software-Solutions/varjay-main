import { TESTIMONIALS } from "./data";

export function Testimonials() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="bg-[#EBF5FB] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <p className="font-mono text-xl text-[#5BB8E8] tracking-widest mb-3 uppercase">
          Student Voices
        </p>
        <h2 className="font-display text-5xl md:text-6xl text-[#0B1F3A] font-semibold">
          Hear it from them.
        </h2>
      </div>

      <div className="relative">
        {/* Left/right fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 z-10 bg-gradient-to-r from-[#EBF5FB] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 z-10 bg-gradient-to-l from-[#EBF5FB] to-transparent" />

        <div className="flex gap-6 w-max animate-marquee pause-on-hover">
          {loop.map((t, i) => (
            <div
              key={i}
              className="w-[320px] shrink-0 bg-white rounded-2xl shadow-sm p-6 border border-[#A8D8F0]/50 hover:border-[#5BB8E8]/60 transition-colors"
            >
              {/* Stars in sky-blue */}
              <div className="text-[#5BB8E8] mb-3 tracking-wide text-sm">★★★★★</div>
              <p className="italic text-[#0B1F3A]/70 leading-relaxed line-clamp-3 text-sm">
                "{t.quote}"
              </p>
              <div className="mt-5 flex items-center justify-between">
                <p className="font-mono text-xs font-bold text-[#185FA5]">{t.name}</p>
                <span className="px-3 py-1 rounded-full bg-[#D4EEFA] text-[#0C447C] text-[10px] font-mono border border-[#A8D8F0]/50">
                  {t.instrument}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}