import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";

export function Floating() {
  const [show, setShow] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#F59E0B] z-[70]"
      />

      {/* Back to Top Button */}
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#F59E0B] text-[#1C0A00] font-display text-xl shadow-lg hover:scale-110 transition-transform"
          aria-label="Back to top"
        >
          ♪
        </button>
      )}
    </>
  );
}