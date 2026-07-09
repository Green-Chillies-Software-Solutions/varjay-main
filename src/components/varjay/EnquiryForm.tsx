import { useState, useRef, useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { Loader2, Send, ShieldCheck, PhoneCall } from "lucide-react";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  type ConfirmationResult,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { INSTRUMENTS } from "./data";

const SHEETS_URL = "https://script.google.com/macros/s/AKfycbybwjpLBZq6R8eXapduoXL-Ih7ujzLQCOGknBXWeGT4PtsTCvh8FwPxsvbPOBMwflcU4w/exec";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().regex(/^[0-9 +\-()]{7,20}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(120),
  course: z.array(z.string()).min(1, "Please choose at least one course"),
  message: z.string().trim().max(600).optional(),
});

const COURSE_OPTIONS = [
  ...INSTRUMENTS.map((i) =>
    i.name === "Vocal" ? "Vocal (Hindustani, Carnatic & Western)" : i.name
  ),
  "Not sure yet",
];

async function fetchWithRetry(url: string, options: RequestInit, retries = 3): Promise<any> {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, options);
      const json = await res.json().catch(() => ({ status: "success" }));
      if (json.status === "error") throw new Error(json.message);
      return json;
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise((resolve) => setTimeout(resolve, 1000 * Math.pow(2, i)));
    }
  }
}

// Normalizes to E.164 for Firebase. Assumes India (+91) if no country code given.
function toE164(raw: string): string {
  const digits = raw.replace(/[^\d+]/g, "");
  if (digits.startsWith("+")) return digits;
  if (digits.length === 10) return `+91${digits}`;
  return `+${digits}`;
}

type Props = {
  variant?: "card" | "inline";
  defaultCourse?: string;
  title?: string;
  subtitle?: string;
};

export function EnquiryForm({
  variant = "card",
  defaultCourse,
  title = "Enquire about a class",
  subtitle = "Fill in your details and we'll get back to you within a few hours.",
}: Props) {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedCourses, setSelectedCourses] = useState<string[]>(
    defaultCourse ? [defaultCourse] : []
  );

  // --- OTP state ---
  const [phoneValue, setPhoneValue] = useState("");
  const [otpValue, setOtpValue] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifyingOtp, setVerifyingOtp] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [otpError, setOtpError] = useState<string | null>(null);
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const recaptchaRef = useRef<RecaptchaVerifier | null>(null);
  const recaptchaContainerId = useRef(`recaptcha-${Math.random().toString(36).slice(2)}`);

  useEffect(() => {
    return () => {
      recaptchaRef.current?.clear();
    };
  }, []);

  const toggleCourse = (course: string) => {
    setSelectedCourses((prev) =>
      prev.includes(course)
        ? prev.filter((c) => c !== course)
        : [...prev, course]
    );
  };

  // Reset verification if the user edits the phone number after verifying
  function handlePhoneChange(v: string) {
    setPhoneValue(v);
    if (phoneVerified || otpSent) {
      setPhoneVerified(false);
      setOtpSent(false);
      setOtpValue("");
      setConfirmationResult(null);
      setOtpError(null);
    }
  }

  async function sendOtp() {
    setOtpError(null);

    if (!/^[0-9 +\-()]{7,20}$/.test(phoneValue.trim())) {
      setOtpError("Enter a valid phone number first");
      return;
    }

    setSendingOtp(true);
    try {
      if (!recaptchaRef.current) {
        recaptchaRef.current = new RecaptchaVerifier(auth, recaptchaContainerId.current, {
          size: "invisible",
        });
      }
      const formatted = toE164(phoneValue);
      const result = await signInWithPhoneNumber(auth, formatted, recaptchaRef.current);
      setConfirmationResult(result);
      setOtpSent(true);
    } catch (err: any) {
      console.error("OTP send error:", err);
      setOtpError(
        err?.code === "auth/invalid-phone-number"
          ? "That phone number looks invalid."
          : "Couldn't send OTP. Please check the number and try again."
      );
      recaptchaRef.current?.clear();
      recaptchaRef.current = null;
    } finally {
      setSendingOtp(false);
    }
  }

  async function verifyOtp() {
    if (!confirmationResult) return;
    setOtpError(null);
    setVerifyingOtp(true);
    try {
      await confirmationResult.confirm(otpValue.trim());
      setPhoneVerified(true);
    } catch (err) {
      setOtpError("Incorrect OTP. Please try again.");
    } finally {
      setVerifyingOtp(false);
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError(null);

    if (!phoneVerified) {
      setSubmitError("Please verify your phone number with the OTP before submitting.");
      return;
    }

    const form = e.currentTarget;
    const fd = new FormData(form);

    const raw = {
      name: String(fd.get("name") || ""),
      phone: phoneValue,
      email: String(fd.get("email") || ""),
      course: selectedCourses,
      message: String(fd.get("message") || ""),
    };

    const parsed = schema.safeParse(raw);

    if (!parsed.success) {
      const fieldErrs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        const k = String(i.path[0] ?? "");
        if (k && !fieldErrs[k]) fieldErrs[k] = i.message;
      });
      setErrors(fieldErrs);
      return;
    }

    setErrors({});
    setSubmitting(true);

    const coursesString = parsed.data.course.join(", ");
    const payload = {
      ...parsed.data,
      course: coursesString,
      phoneVerified: true,
      page: typeof window !== "undefined" ? window.location.pathname : "",
      submittedAt: new Date().toISOString(),
    };

    try {
      await fetchWithRetry(SHEETS_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });

      navigate({ to: "/thank-you" });
    } catch (err: any) {
      console.error("Enquiry submission error:", err);
      setSubmitError(
        "We are experiencing high traffic. Please try clicking 'Send' one more time, or contact us directly."
      );
      setSubmitting(false);
    }
  }

  const wrap =
    variant === "card"
      ? "bg-white rounded-3xl shadow-xl border border-amber-100 p-7 md:p-9"
      : "";

  const input =
    "w-full rounded-xl border border-amber-200 bg-white px-4 py-3 text-[15px] text-[#1C0A00] placeholder:text-[#a8a29e] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/40 focus:border-[#F59E0B]";

  return (
    <div className={wrap}>
      <p className="font-mono text-[11px] tracking-widest text-[#F59E0B]">ENQUIRY FORM</p>
      <h3 className="font-display text-2xl md:text-3xl text-[#1C0A00] font-semibold mt-1">
        {title}
      </h3>
      <p className="text-sm text-[#78716C] mt-2">{subtitle}</p>

      {/* Invisible reCAPTCHA anchor required by Firebase */}
      <div id={recaptchaContainerId.current} />

      <form onSubmit={onSubmit} className="mt-6 grid gap-4" noValidate>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="font-mono text-[11px] tracking-wider text-[#78716C]">NAME *</label>
            <input name="name" className={`${input} mt-1`} placeholder="Your full name" />
            {errors.name && <p className="text-xs text-[#F43F5E] mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="font-mono text-[11px] tracking-wider text-[#78716C]">PHONE *</label>
            <div className="flex gap-2 mt-1">
              <input
                name="phone"
                value={phoneValue}
                onChange={(e) => handlePhoneChange(e.target.value)}
                disabled={phoneVerified}
                className={`${input} ${phoneVerified ? "opacity-70" : ""}`}
                placeholder="+91 ..."
              />
              {!phoneVerified && (
                <button
                  type="button"
                  onClick={sendOtp}
                  disabled={sendingOtp || !phoneValue.trim()}
                  className="shrink-0 px-4 rounded-xl border border-[#F59E0B] text-[#F59E0B] text-[13px] font-medium hover:bg-[#F59E0B]/10 transition-colors disabled:opacity-50 whitespace-nowrap"
                >
                  {sendingOtp ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : otpSent ? (
                    "Resend"
                  ) : (
                    "Send OTP"
                  )}
                </button>
              )}
              {phoneVerified && (
                <span className="shrink-0 inline-flex items-center gap-1 px-3 rounded-xl bg-emerald-50 text-emerald-600 text-[12px] font-medium">
                  <ShieldCheck className="w-4 h-4" /> Verified
                </span>
              )}
            </div>
            {errors.phone && <p className="text-xs text-[#F43F5E] mt-1">{errors.phone}</p>}

            {otpSent && !phoneVerified && (
              <div className="flex gap-2 mt-2">
                <input
                  value={otpValue}
                  onChange={(e) => setOtpValue(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  inputMode="numeric"
                  placeholder="Enter 6-digit OTP"
                  className={`${input} !py-2.5`}
                />
                <button
                  type="button"
                  onClick={verifyOtp}
                  disabled={verifyingOtp || otpValue.length < 4}
                  className="shrink-0 px-4 rounded-xl bg-[#1C0A00] text-white text-[13px] font-medium disabled:opacity-50 whitespace-nowrap"
                >
                  {verifyingOtp ? <Loader2 className="w-4 h-4 animate-spin" /> : "Verify"}
                </button>
              </div>
            )}
            {otpError && <p className="text-xs text-[#F43F5E] mt-1">{otpError}</p>}
            {otpSent && !phoneVerified && !otpError && (
              <p className="text-[11px] text-[#a8a29e] mt-1 flex items-center gap-1">
                <PhoneCall className="w-3 h-3" /> OTP sent — enter it above to verify.
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="font-mono text-[11px] tracking-wider text-[#78716C]">EMAIL *</label>
          <input name="email" type="email" className={`${input} mt-1`} placeholder="you@example.com" />
          {errors.email && <p className="text-xs text-[#F43F5E] mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="font-mono text-[11px] tracking-wider text-[#78716C]">
            COURSES / INSTRUMENTS (Select all that apply) *
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {COURSE_OPTIONS.map((c) => {
              const isSelected = selectedCourses.includes(c);
              return (
                <button
                  type="button"
                  key={c}
                  onClick={() => toggleCourse(c)}
                  className={`px-3.5 py-2 rounded-full border text-[13px] transition-all duration-200 ${isSelected
                    ? "bg-[#F59E0B] border-[#F59E0B] text-white font-medium shadow-sm shadow-amber-500/20"
                    : "bg-white border-amber-200 text-[#78716C] hover:border-amber-400 hover:text-[#1C0A00]"
                    }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
          {errors.course && <p className="text-xs text-[#F43F5E] mt-1">{errors.course}</p>}
        </div>

        <div>
          <label className="font-mono text-[11px] tracking-wider text-[#78716C]">
            MESSAGE (OPTIONAL)
          </label>
          <textarea
            name="message"
            rows={3}
            className={`${input} mt-1 resize-none`}
            placeholder="When would you like to start? Online or offline?"
          />
        </div>

        {submitError && (
          <p className="text-sm text-[#F43F5E] bg-red-50 border border-red-100 rounded-xl px-4 py-3">
            {submitError}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting || !phoneVerified}
          className="mt-2 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#F59E0B] text-[#1C0A00] font-semibold hover:bg-[#d97706] hover:text-white transition-colors shadow-lg shadow-amber-500/30 disabled:opacity-60"
        >
          {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          {submitting ? "Sending..." : phoneVerified ? "Send enquiry" : "Verify phone to continue"}
        </button>

        <p className="text-[11px] text-[#a8a29e] font-mono mt-1">
          By submitting you agree to be contacted on the details above.
        </p>
      </form>
    </div>
  );
}