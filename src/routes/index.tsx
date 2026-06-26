import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/varjay/Hero";
import { Instruments } from "@/components/varjay/Instruments";
import { About } from "@/components/varjay/About";
import { Faculty } from "@/components/varjay/Faculty";
import { WhyVarjay } from "@/components/varjay/WhyVarjay";
import { Stats } from "@/components/varjay/Stats";
import { Testimonials } from "@/components/varjay/Testimonials";
import { YouTube } from "@/components/varjay/YouTube";
import { Gallery } from "@/components/varjay/Gallery";
import { FinalCTA } from "@/components/varjay/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Varjay Music Academy Classes in sanpada,Navi Mumbai — Where Talent Becomes Music" },
      { name: "description", content: "Varjay Music Premium Academy Classes in sanpada,Navi Mumbai. Learn tabla, guitar, piano, harmonium & more. Small batches of 5–7. ABGMV certified. Online & offline classes." },
      { property: "og:title", content: "Varjay Music Academy" },
      { property: "og:description", content: "9 instruments. 150+ students. Certified curriculum. Online & offline." },
      { property: "og:image", content: "https://varjaymusic.com/wp-content/uploads/2024/07/tabla.jpg" },
      
      // SEO & Site Verification Tags
      { name: "google-site-verification", content: "xvPKuYwQsIeHYjj0ZAZSV4CgQb02XTpxLu7OwC5w1DE" },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "canonical", href: "https://varjaymusic.com/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&family=Tiro+Devanagari+Hindi&display=swap",
      },
    ],
    // Google Analytics (GA4) Scripts
    scripts: [
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-KZQ78D3JNH",
      },
      {
        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KZQ78D3JNH');
        `,
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <Instruments />
      <About />
      <Faculty />
      <WhyVarjay />
      <Stats />
      <Testimonials />
      <YouTube />
      <Gallery />
      <FinalCTA />
    </main>
  );
}
