import { TESTIMONIALS } from "./data";

export function Testimonials() {
  // Looping multiple times ensures the marquee doesn't run out of content on ultra-wide screens
  const loop = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="bg-[#EBF5FB] py-20 md:py-28 overflow-hidden relative">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-12 md:mb-16 text-center">
        <p className="font-mono text-xs sm:text-sm text-[#5BB8E8] tracking-[0.2em] mb-3 font-bold uppercase">
          Student Voices
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#0B1F3A] font-bold tracking-tight">
          Hear it from them.
        </h2>
      </div>

      <div className="relative flex items-center w-full">
        {/* Left/right fade masks - increased width for a smoother premium fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 lg:w-48 z-10 bg-gradient-to-r from-[#EBF5FB] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 lg:w-48 z-10 bg-gradient-to-l from-[#EBF5FB] to-transparent" />

        {/* Marquee Track - Added `items-stretch` and `py-4` to enforce equal heights and protect shadows */}
        <div className="flex items-stretch gap-5 md:gap-6 w-max animate-marquee pause-on-hover px-4 py-4">
          {loop.map((t, i) => (
            <div
              key={i}
              className="relative w-[280px] sm:w-[320px] md:w-[380px] shrink-0 bg-white rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 md:p-8 border border-[#A8D8F0]/30 hover:border-[#5BB8E8]/50 hover:shadow-[0_8px_30px_rgb(91,184,232,0.12)] transition-all duration-300 group flex flex-col"
            >
              {/* Decorative Background Quote Mark */}
              <div className="absolute top-2 right-6 text-6xl font-serif text-[#EBF5FB] select-none pointer-events-none group-hover:text-[#D4EEFA] transition-colors">
                "
              </div>

              {/* Stars - using a warm gold to pop against the blue theme */}
              <div className="text-[#F5D97A] mb-3 md:mb-4 text-sm md:text-base tracking-widest drop-shadow-sm relative z-10">
                ★★★★★
              </div>

              {/* Quote Text - `flex-grow` forces it to take up available vertical space */}
              <p className="italic text-[#0B1F3A]/75 leading-relaxed text-sm md:text-base mb-6 relative z-10 flex-grow">
                "{t.quote}"
              </p>

              {/* Footer / Meta Data - `mt-auto` ensures it snaps cleanly to the bottom */}
              <div className="mt-auto pt-4 md:pt-5 border-t border-[#EBF5FB] flex items-center justify-between gap-3 relative z-10">
                <p className="font-mono text-xs md:text-sm font-bold text-[#0C447C] truncate">
                  {t.name}
                </p>
                <span className="px-3 py-1.5 rounded-full bg-[#F5FBFF] text-[#185FA5] text-[10px] md:text-[11px] font-mono font-semibold tracking-wide border border-[#A8D8F0]/40 shrink-0 shadow-sm">
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