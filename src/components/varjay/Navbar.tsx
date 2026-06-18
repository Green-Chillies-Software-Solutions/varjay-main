import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ChevronRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

const navLinks = [
  { label: "Gallery", to: "/gallery" },
  { label: "FAQs", to: "/faqs" },
];

const courseButtons = [
  { label: "All Courses", to: "/courses" },
  { label: "Online Courses", to: "/onlinecourses" },
  { label: "Offline Courses", to: "/offlinecourses" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [open]);

  // Reset the courses accordion whenever the drawer closes
  useEffect(() => {
    if (!open) setMobileCoursesOpen(false);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ease-in-out ${
        scrolled ? "bg-transparent pt-4 px-4" : "bg-[#EBF5FB] border-b border-[#A8D8F0]/60 pt-0 px-0"
      }`}
    >
      <nav
        className={`mx-auto max-w-6xl transition-all duration-400 ease-in-out flex items-center justify-between ${
          scrolled
            ? "bg-white shadow-[0_8px_30px_rgba(11,31,58,0.12)] border border-[#A8D8F0]/40 rounded-full px-6 py-2"
            : "bg-transparent px-6 py-2"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="relative z-10 group flex items-center">
          <div className="origin-left transform scale-[1.3] md:scale-[1.5] transition-transform duration-400 group-hover:scale-[1.35] md:group-hover:scale-[1.55]">
            <img
              src="https://varjaymusic.com/wp-content/uploads/2024/05/logo.png"
              alt="Varjay Music Academy"
              className={`w-auto transition-all duration-400 ease-in-out ${
                scrolled ? "h-8 md:h-10" : "h-12 md:h-14"
              }`}
            />
          </div>
        </Link>

        {/* Desktop nav links */}
        {/* Order: Home → About → Courses → Gallery → FAQs → Contact */}
        <div className="hidden lg:flex items-center gap-6 lg:gap-8">
          {/* 1. Home */}
          <Link
            to="/"
            activeProps={{ className: "text-[#5BB8E8]" }}
            activeOptions={{ exact: true }}
            className="group relative font-bold text-sm text-[#0B1F3A] hover:text-[#5BB8E8] transition-colors tracking-wide py-2"
          >
            Home
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#5BB8E8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
          </Link>

          {/* 2. About */}
          <Link
            to="/about"
            activeProps={{ className: "text-[#5BB8E8]" }}
            className="group relative font-bold text-sm text-[#0B1F3A] hover:text-[#5BB8E8] transition-colors tracking-wide py-2"
          >
            About
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#5BB8E8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
          </Link>

          {/* 3. Courses Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <button className="group relative inline-flex items-center gap-1.5 font-bold text-sm text-[#0B1F3A] hover:text-[#5BB8E8] transition-colors tracking-wide py-2">
              Courses
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  coursesOpen ? "rotate-180 text-[#5BB8E8]" : ""
                }`}
              />
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#5BB8E8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </button>

            {/* Dropdown Content */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 w-56 transition-all duration-300 ease-out origin-top ${
                coursesOpen
                  ? "opacity-100 scale-100 visible translate-y-0"
                  : "opacity-0 scale-95 invisible -translate-y-2"
              }`}
            >
              <div className="rounded-3xl bg-white shadow-[0_20px_40px_-15px_rgba(11,31,58,0.2)] border border-[#A8D8F0]/50 overflow-hidden p-3">
                <div className="space-y-2">
                  {courseButtons.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className="group flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-bold tracking-wide text-[#0B1F3A] bg-[#F8FCFF] border border-[#A8D8F0]/80 hover:bg-[#EBF5FB] hover:border-[#5BB8E8] hover:text-[#0B1F3A] transition-all duration-200"
                    >
                      {l.label}
                      {l.isNew && (
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#5BB8E8] text-white uppercase tracking-wider shadow-sm">
                          <Sparkles className="w-3 h-3" /> New
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4. Gallery & 5. FAQs */}
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-[#5BB8E8]" }}
              className="group relative font-bold text-sm text-[#0B1F3A] hover:text-[#5BB8E8] transition-colors tracking-wide py-2"
            >
              {l.label}
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#5BB8E8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </Link>
          ))}

          {/* 6. Contact */}
          <Link
            to="/contact"
            activeProps={{ className: "text-[#5BB8E8]" }}
            className="group relative font-bold text-sm text-[#0B1F3A] hover:text-[#5BB8E8] transition-colors tracking-wide py-2"
          >
            Contact
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#5BB8E8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
          </Link>
        </div>

        {/* CTA button — Register Now */}
        <div className="hidden lg:block ml-2">
          <Link
            to="/register"
            className="group relative inline-flex items-center justify-center px-7 py-2.5 rounded-full bg-[#0B1F3A] text-white font-bold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(11,31,58,0.3)] hover:-translate-y-0.5 overflow-hidden border border-[#0B1F3A]"
          >
            <span className="relative z-10">Register Now</span>
            <div className="absolute inset-0 bg-[#5BB8E8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden relative z-10 p-2 text-[#0B1F3A] hover:text-[#5BB8E8] transition-colors"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu — compact slide-in drawer */}
      {/* Order: Home → About → Courses → Gallery → FAQs → Contact → Register Now */}

      {/* Backdrop */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-[55] bg-[#0B1F3A]/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[60] h-full w-full max-w-[320px] bg-white shadow-[-8px_0_30px_rgba(11,31,58,0.15)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#EBF5FB]">
          <img
            src="https://varjaymusic.com/wp-content/uploads/2024/05/logo.png"
            alt="Varjay"
            className="h-9 w-auto"
          />
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="p-1.5 rounded-full bg-[#EBF5FB] text-[#0B1F3A] hover:bg-[#5BB8E8] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav list */}
        <div className="flex-1 overflow-y-auto px-3 py-2">
          <Link
            to="/"
            onClick={closeMenu}
            activeProps={{ className: "text-[#5BB8E8]" }}
            activeOptions={{ exact: true }}
            className="flex items-center justify-between px-3 py-3 rounded-xl text-base font-bold text-[#0B1F3A] hover:bg-[#EBF5FB] hover:text-[#5BB8E8] transition-colors"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
            activeProps={{ className: "text-[#5BB8E8]" }}
            className="flex items-center justify-between px-3 py-3 rounded-xl text-base font-bold text-[#0B1F3A] hover:bg-[#EBF5FB] hover:text-[#5BB8E8] transition-colors"
          >
            About
          </Link>

          {/* Courses accordion */}
          <button
            onClick={() => setMobileCoursesOpen((v) => !v)}
            className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-base font-bold text-[#0B1F3A] hover:bg-[#EBF5FB] hover:text-[#5BB8E8] transition-colors"
            aria-expanded={mobileCoursesOpen}
          >
            Courses
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                mobileCoursesOpen ? "rotate-180 text-[#5BB8E8]" : "text-[#0B1F3A]/50"
              }`}
            />
          </button>
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              mobileCoursesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="ml-3 pl-3 border-l-2 border-[#A8D8F0]/60 my-1 space-y-0.5">
                {courseButtons.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={closeMenu}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-[#0B1F3A]/80 hover:bg-[#EBF5FB] hover:text-[#5BB8E8] transition-colors"
                  >
                    {l.label}
                    <span className="flex items-center gap-1.5">
                      {l.isNew && (
                        <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-[#5BB8E8] text-white uppercase tracking-wider">
                          New
                        </span>
                      )}
                      <ChevronRight className="w-3.5 h-3.5 opacity-40" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={closeMenu}
              activeProps={{ className: "text-[#5BB8E8]" }}
              className="flex items-center justify-between px-3 py-3 rounded-xl text-base font-bold text-[#0B1F3A] hover:bg-[#EBF5FB] hover:text-[#5BB8E8] transition-colors"
            >
              {l.label}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={closeMenu}
            activeProps={{ className: "text-[#5BB8E8]" }}
            className="flex items-center justify-between px-3 py-3 rounded-xl text-base font-bold text-[#0B1F3A] hover:bg-[#EBF5FB] hover:text-[#5BB8E8] transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* CTA footer */}
        <div className="px-4 py-4 border-t border-[#EBF5FB]">
          <Link
            to="/register"
            onClick={closeMenu}
            className="flex w-full items-center justify-center px-6 py-3 rounded-full bg-[#0B1F3A] text-white font-bold text-sm shadow-md shadow-[#0B1F3A]/15 active:scale-95 transition-transform"
          >
            Register Now
          </Link>
        </div>
      </div>
    </header>
  );
}
