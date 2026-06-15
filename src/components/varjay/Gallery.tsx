import { GALLERY } from "./data";

export function Gallery() {
  // Looping ensures the marquee doesn't run out of content on ultra-wide screens
  const loop = [...GALLERY, ...GALLERY, ...GALLERY];

  return (
    <section id="gallery" className="bg-[#FEFAF1] py-20 md:py-28 overflow-hidden relative">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-10 md:mb-16 text-center relative z-20">
        <p className="font-mono text-sm md:text-base text-[#F59E0B] tracking-widest mb-3 font-semibold uppercase">
          From Our Academy
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1C0A00] font-bold tracking-tight">
          Life at Varjay
        </h2>
      </div>

      <div className="relative flex items-center w-full">
        {/* Left/right fade masks - creates a premium disappearing effect */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 lg:w-48 z-10 bg-gradient-to-r from-[#FEFAF1] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 lg:w-48 z-10 bg-gradient-to-l from-[#FEFAF1] to-transparent" />

        {/* Marquee Track 
            Changed from animate-marquee-slow to animate-marquee.
            Added animationDuration style for explicit speed control. 
            Lower the number (e.g., "15s") to make it move faster.
        */}
        <div 
          className="flex items-center gap-5 md:gap-6 w-max animate-marquee hover:[animation-play-state:paused] px-4 py-6"
          style={{ animationDuration: "15s" }}
        >
          {loop.map((src, i) => (
            <div
              key={i}
              className="relative h-[240px] sm:h-[280px] md:h-[340px] w-auto shrink-0 rounded-[1.5rem] overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-amber-900/5 hover:shadow-[0_15px_40px_rgba(245,158,11,0.12)] hover:border-[#F59E0B]/30 transition-all duration-300 group flex items-center justify-center"
            >
              <img
                src={src}
                alt={`Varjay Gallery Image ${i + 1}`}
                className="h-full w-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              
              {/* Subtle inner shadow overlay for a polished photo look */}
              <div className="absolute inset-0 pointer-events-none rounded-[1.5rem] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}