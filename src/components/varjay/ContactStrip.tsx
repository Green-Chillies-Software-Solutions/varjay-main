import { EnquiryForm } from "./EnquiryForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactStrip({ defaultCourse }: { defaultCourse?: string }) {
  return (
    <section id="contact" className="bg-[#FEFAF1] py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
  <div>
    <p className="font-mono text-xs text-[#F59E0B] tracking-widest mb-3">
      GET IN TOUCH
    </p>

    <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1C0A00] leading-tight">
      Book  your class.
    </h2>

    <p className="mt-4 text-[#57534e] text-lg max-w-md">
      Tell us which instrument you'd like to learn. We'll recommend a batch and
      time that fits you.
    </p>

    <ul className="mt-8 space-y-4 text-[#1C0A00]">
      <li className="flex items-start gap-3">
        <span className="w-10 h-10 rounded-full bg-amber-100 text-[#F59E0B] flex items-center justify-center shrink-0">
          <MapPin className="w-4 h-4" />
        </span>
        <div>
          <p className="font-semibold">Varjay Music Academy</p>
          <p className="text-sm text-[#78716C]">
            Shop No. 1 & 2, Sai-Jyot Co-op Hsg Society, Plot No. 106 A,
            Next to Rekhi-Sai Orchid Co-op Hsg Society, Sector 1,
            Sanpada, Navi Mumbai - 400705, Maharashtra
          </p>
        </div>
      </li>

      <li className="flex items-start gap-3">
        <span className="w-10 h-10 rounded-full bg-amber-100 text-[#F59E0B] flex items-center justify-center shrink-0">
          <Phone className="w-4 h-4" />
        </span>
        <div>
          <p className="font-semibold">
            <a href="tel:+917770003037" className="hover:text-[#F59E0B]">
              +91 77700 03037
            </a>
          </p>
          <p className="font-semibold">
            <a href="tel:+917770003038" className="hover:text-[#F59E0B]">
              +91 77700 03038
            </a>
          </p>
          <p className="font-semibold">
            <a href="tel:+917770003036" className="hover:text-[#F59E0B]">
              +91 77700 03036
            </a>
          </p>
          <p className="text-sm text-[#78716C]">Call or WhatsApp</p>
        </div>
      </li>

      <li className="flex items-start gap-3">
        <span className="w-10 h-10 rounded-full bg-amber-100 text-[#F59E0B] flex items-center justify-center shrink-0">
          <Mail className="w-4 h-4" />
        </span>
        <div>
          <p className="font-semibold">
            <a
              href="mailto:varjaymusic@gmail.com"
              className="hover:text-[#F59E0B]"
            >
              varjaymusic@gmail.com
            </a>
          </p>
        </div>
      </li>

      <li className="flex items-start gap-3">
        <span className="w-10 h-10 rounded-full bg-amber-100 text-[#F59E0B] flex items-center justify-center shrink-0">
          <Clock className="w-4 h-4" />
        </span>
        <div>
          <p className="font-semibold">Mon – Sun · 09:00 AM – 9:00 PM</p>
        </div>
      </li>
    </ul>
  </div>
        <EnquiryForm defaultCourse={defaultCourse} />
</div>
    </section>
  );
}
