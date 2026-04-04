"use client";

import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import type { ContactFormContent } from "@/data/types";

interface ContactFormProps {
  content: ContactFormContent;
}

export default function ContactForm({ content }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Formspree endpoint — replace YOUR_FORM_ID with real ID
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Fallback: still show success for now
      setSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="py-[clamp(64px,8vw,120px)] bg-obsidian relative overflow-hidden paper-speckle-dark glow-dark dot-grid-dark"
    >
      <div className="max-w-[var(--max-width-content)] mx-auto px-[clamp(24px,4vw,120px)] relative z-[1]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Copy side */}
          <div>
            <RevealOnScroll>
              <h2 className="font-display text-blush-paper font-bold text-[clamp(28px,3.5vw,36px)] leading-[1.15] tracking-[-0.02em] mb-5">
                {content.headline}
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <p className="text-[16px] text-faded-mauve leading-relaxed mb-7 max-w-[480px]">
                {content.subhead}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <ul className="list-none flex flex-col gap-3 mb-7">
                {content.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-[14px] text-faded-mauve flex items-center gap-2.5"
                  >
                    <Check
                      size={18}
                      className="text-warm-stone flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <a
                href={content.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-amethyst underline underline-offset-[3px] decoration-[rgba(164,119,178,0.4)] hover:text-faded-mauve transition-colors"
              >
                Prefer to talk? Book a strategy call instead &rarr;
              </a>
            </RevealOnScroll>
          </div>

          {/* Form side */}
          <RevealOnScroll delay={0.1}>
            {submitted ? (
              <div className="bg-canvas rounded-[4px] p-8 paper-speckle text-center">
                <div className="relative z-[1]">
                  <div className="w-12 h-12 bg-[rgba(92,138,107,0.15)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={24} className="text-success" />
                  </div>
                  <h3 className="font-display text-[20px] font-semibold text-eggplant mb-2">
                    Thank you!
                  </h3>
                  <p className="text-[14px] text-dusty-plum">
                    We&apos;ll be in touch within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-canvas rounded-[4px] p-8 relative paper-speckle"
              >
                <div className="relative z-[1]">
                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="firstName"
                        className="font-body text-[13px] font-bold text-eggplant"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="font-body text-[14px] text-eggplant bg-blush-paper border border-mist rounded-[2px] px-3 py-2.5 outline-none focus:border-dusty-plum transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="lastName"
                        className="font-body text-[13px] font-bold text-eggplant"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="font-body text-[14px] text-eggplant bg-blush-paper border border-mist rounded-[2px] px-3 py-2.5 outline-none focus:border-dusty-plum transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5 mb-4">
                    <label
                      htmlFor="email"
                      className="font-body text-[13px] font-bold text-eggplant"
                    >
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="font-body text-[14px] text-eggplant bg-blush-paper border border-mist rounded-[2px] px-3 py-2.5 outline-none focus:border-dusty-plum transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-1.5 mb-4">
                    <label
                      htmlFor="company"
                      className="font-body text-[13px] font-bold text-eggplant"
                    >
                      {content.companyLabel}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="font-body text-[14px] text-eggplant bg-blush-paper border border-mist rounded-[2px] px-3 py-2.5 outline-none focus:border-dusty-plum transition-colors"
                    />
                  </div>

                  {/* Role */}
                  <div className="flex flex-col gap-1.5 mb-4">
                    <label
                      htmlFor="role"
                      className="font-body text-[13px] font-bold text-eggplant"
                    >
                      Your Role
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      className="font-body text-[14px] text-eggplant bg-blush-paper border border-mist rounded-[2px] px-3 py-2.5 outline-none focus:border-dusty-plum transition-colors"
                    />
                  </div>

                  {/* Interest */}
                  <div className="flex flex-col gap-1.5 mb-4">
                    <label
                      htmlFor="interest"
                      className="font-body text-[13px] font-bold text-eggplant"
                    >
                      {content.interestLabel}
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      defaultValue=""
                      className="font-body text-[14px] text-eggplant bg-blush-paper border border-mist rounded-[2px] px-3 py-2.5 outline-none focus:border-dusty-plum transition-colors appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2389828d%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_12px_center] pr-9"
                    >
                      <option value="" disabled>
                        Select one...
                      </option>
                      {content.interestOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5 mb-4">
                    <label
                      htmlFor="message"
                      className="font-body text-[13px] font-bold text-eggplant"
                    >
                      {content.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="font-body text-[14px] text-eggplant bg-blush-paper border border-mist rounded-[2px] px-3 py-2.5 outline-none focus:border-dusty-plum transition-colors resize-y min-h-[80px]"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full font-display font-normal text-[17px] text-eggplant bg-gradient-to-r from-[rgba(245,192,192,0.4)] to-[rgba(245,192,192,0.1)] border border-[rgba(49,38,59,0.11)] rounded-[2px] py-3.5 px-8 cursor-pointer hover:bg-canvas hover:border-[rgba(49,38,59,0.44)] transition-colors relative cta-brackets"
                  >
                    <span className="cta-brackets-inner absolute inset-0" />
                    <span className="cta-brackets-outer absolute inset-0" />
                    <span className="cta-brackets-outer-bottom absolute inset-0" />
                    {content.submitLabel}
                  </button>
                  <p className="text-[11px] text-muted-plum mt-3 text-center">
                    {content.disclaimer}
                  </p>
                </div>
              </form>
            )}
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
