import { GALLERY } from "./data";

export function Gallery() {
  const loop = [...GALLERY, ...GALLERY];

  return (
    <section id="gallery" className="bg-[#FEFAF1] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="font-mono text-xl text-[#F59E0B] tracking-widest mb-3">
          FROM OUR ACADEMY
        </p>
        <h2 className="font-display text-5xl md:text-6xl text-[#1C0A00] font-semibold mb-4">
          Life at Varjay
        </h2>
        <p className="text-lg md:text-xl text-gray-600">
          Stage performances are offered to students every year.
        </p>
      </div>

      <div className="relative">
        {/* Added hover:[animation-play-state:paused] to safely support pause-on-hover via standard Tailwind */}
        <div className="flex gap-5 w-max animate-marquee-slow hover:[animation-play-state:paused]">
          {loop.map((src, i) => (
            <div
              key={i}
              // Removed fixed width, added responsive heights, and allowed natural width
              className="h-[200px] md:h-[280px] w-auto rounded-2xl overflow-hidden shrink-0 shadow-md bg-white flex items-center justify-center"
            >
              <img
                src={src}
                alt={`Varjay Gallery Image ${i + 1}`}
                // Changed w-full to w-auto and removed object-cover to prevent cropping
                className="h-full w-auto hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
