import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

type Crumb = { label: string; to?: string };

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
  image?: string;
};

export function PageHeader({ eyebrow, title, subtitle, crumbs = [], image }: Props) {
  return (
    <header className="relative overflow-hidden bg-[#1C0A00] text-[#FEFAF1]">
      {image && (
        <div className="absolute inset-0 opacity-30">
          <img src={image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C0A00] via-[#1C0A00]/80 to-transparent" />
        </div>
      )}
      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-amber-200/80 mb-5">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-[#F59E0B]">
            <Home className="w-3 h-3" /> Home
          </Link>
          {crumbs.map((c, i) => (
            <span key={i} className="inline-flex items-center gap-2">
              <ChevronRight className="w-3 h-3" />
              {c.to ? (
                <Link to={c.to} className="hover:text-[#F59E0B]">
                  {c.label}
                </Link>
              ) : (
                <span className="text-[#F59E0B]">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        {eyebrow && (
          <p className="font-mono text-xs text-[#F59E0B] tracking-widest mb-3">{eyebrow}</p>
        )}
        <h1
          className="font-display font-semibold leading-[1.05]"
          style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-amber-50/80 leading-relaxed">{subtitle}</p>
        )}
      </div>
    </header>
  );
}
