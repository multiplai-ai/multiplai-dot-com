"use client";

import { useState, type FormEvent } from "react";
import { Check, ArrowRight } from "lucide-react";
import { cursorCmoContent } from "@/data/cursor-cmo";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const stepColors = [
  "#A477B2", // Amethyst
  "#5C8A6B", // Sage
  "#B89B5E", // Gold
  "#5C7A8A", // Steel
];

export default function CursorCmoPage() {
  const c = cursorCmoContent;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  return (
    <div className="dark-product-page">
      <Nav />

      {/* ── Hero ── */}
      <section className="min-h-[85vh] flex items-center justify-center pt-28 pb-16 relative z-[1] dark-glow-hero dark-dot-grid-center">
        <div className="max-w-[var(--max-width-content)] mx-auto px-[clamp(24px,4vw,120px)] text-center">
          <RevealOnScroll>
            <span className="inline-block font-mono text-[11px] font-semibold tracking-[0.08em] uppercase text-amethyst border border-[rgba(164,119,178,0.3)] rounded-[2px] px-3 py-1.5 mb-10">
              {c.hero.badge}
            </span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h1 className="font-display text-blush-paper font-bold text-[clamp(36px,5vw,56px)] leading-[1.15] tracking-[-0.02em] max-w-[800px] mx-auto mb-6 whitespace-pre-line">
              {c.hero.headline}
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="text-[20px] text-faded-mauve leading-[1.6] max-w-[700px] mx-auto mb-4">
              {c.hero.subhead}
            </p>
            <p className="font-mono text-[12px] text-muted-plum tracking-[0.04em] mb-10">
              {c.hero.exclusiveNote}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={c.hero.primaryCta.href}
                className="inline-flex items-center justify-center font-display font-normal text-[17px] text-obsidian bg-gradient-to-r from-[rgba(245,192,192,0.9)] to-[rgba(245,192,192,0.6)] border border-[rgba(245,192,192,0.3)] rounded-[2px] px-8 py-3.5 transition-all hover:from-[rgba(245,192,192,1)] hover:to-[rgba(245,192,192,0.8)] hover:shadow-[0_0_24px_rgba(245,192,192,0.2)] relative cta-brackets-dark"
              >
                {c.hero.primaryCta.label}
              </a>
              <a
                href={c.hero.secondaryCta.href}
                className="inline-flex items-center justify-center font-display font-normal text-[17px] text-faded-mauve border border-[rgba(247,242,240,0.12)] rounded-[2px] px-8 py-3.5 transition-colors hover:text-blush-paper hover:border-[rgba(247,242,240,0.25)]"
              >
                {c.hero.secondaryCta.label}
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Features ── */}
      <section
        id="features"
        className="py-[clamp(64px,8vw,120px)] bg-[#0C0B10] relative z-[1] dark-dot-grid-top-fade"
      >
        <div className="max-w-[var(--max-width-content)] mx-auto px-[clamp(24px,4vw,120px)]">
          <RevealOnScroll>
            <p className="font-mono text-[11px] font-semibold tracking-[0.08em] uppercase text-amethyst mb-4 text-center">
              {c.features.label}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h2 className="font-display text-blush-paper font-bold text-[clamp(26px,3.5vw,32px)] leading-[1.15] tracking-[-0.02em] max-w-[700px] mx-auto mb-12 text-center">
              {c.features.headline}
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[480px] lg:max-w-none mx-auto">
            {c.features.items.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 0.1} className="h-full">
                <div className="dark-card h-full">
                  <div className="relative z-[1]">
                    <div className="w-10 h-10 flex items-center justify-center mb-4">
                      <item.icon
                        size={24}
                        className="text-amethyst"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="font-display text-[18px] font-semibold tracking-[-0.01em] text-blush-paper mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[15px] text-muted-plum leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section
        id="how-it-works"
        className="py-[clamp(64px,8vw,120px)] bg-obsidian relative z-[1] dark-dot-grid-edges"
      >
        <div className="max-w-[var(--max-width-content)] mx-auto px-[clamp(24px,4vw,120px)] text-center">
          <RevealOnScroll>
            <p className="font-mono text-[11px] font-semibold tracking-[0.08em] uppercase text-amethyst mb-4">
              {c.howItWorks.label}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h2 className="font-display text-blush-paper font-bold text-[clamp(26px,3.5vw,32px)] leading-[1.15] tracking-[-0.02em] max-w-[700px] mx-auto mb-12">
              {c.howItWorks.headline}
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-[400px] sm:max-w-none mx-auto">
            {c.howItWorks.steps.map((step, i) => (
              <RevealOnScroll key={step.number} delay={i * 0.1} className="h-full">
                <div className="dark-card h-full flex flex-col">
                  <div className="relative z-[1] flex-1 flex flex-col">
                    <div
                      className="hatched-label inline-block font-mono text-[10.5px] font-medium not-italic tracking-[0.14em] lowercase rounded-[3px] px-3 py-1.5 mb-4 self-start"
                      style={{
                        color: stepColors[i % stepColors.length],
                        borderWidth: 1,
                        borderStyle: "dotted",
                        borderColor: stepColors[i % stepColors.length] + "40",
                        backgroundColor: stepColors[i % stepColors.length] + "10",
                      }}
                    >
                      Step {step.number}
                    </div>
                    <h3 className="font-display text-[16px] font-semibold text-blush-paper mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-muted-plum leading-[1.5]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Audience ── */}
      <section className="py-[clamp(64px,8vw,120px)] bg-[#0C0B10] relative z-[1] dark-dot-grid-corner">
        <div className="max-w-[var(--max-width-content)] mx-auto px-[clamp(24px,4vw,120px)]">
          <RevealOnScroll>
            <p className="font-mono text-[11px] font-semibold tracking-[0.08em] uppercase text-amethyst mb-4 text-center">
              {c.audience.label}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h2 className="font-display text-blush-paper font-bold text-[clamp(26px,3.5vw,32px)] leading-[1.15] tracking-[-0.02em] max-w-[700px] mx-auto mb-12 text-center">
              {c.audience.headline}
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[480px] lg:max-w-none mx-auto">
            {c.audience.items.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 0.1} className="h-full">
                <div className="dark-card h-full">
                  <div className="relative z-[1]">
                    <div className="w-10 h-10 flex items-center justify-center mb-4">
                      <item.icon
                        size={24}
                        className="text-warm-stone"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="font-display text-[18px] font-semibold tracking-[-0.01em] text-blush-paper mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[15px] text-muted-plum leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Differentiators ── */}
      <section className="py-[clamp(64px,8vw,120px)] bg-obsidian relative z-[1]">
        <div className="max-w-[var(--max-width-content)] mx-auto px-[clamp(24px,4vw,120px)]">
          <RevealOnScroll>
            <p className="font-mono text-[11px] font-semibold tracking-[0.08em] uppercase text-amethyst mb-4 text-center">
              {c.differentiators.label}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h2 className="font-display text-blush-paper font-bold text-[clamp(26px,3.5vw,32px)] leading-[1.15] tracking-[-0.02em] max-w-[600px] mx-auto mb-12 text-center">
              {c.differentiators.headline}
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <ul className="max-w-[600px] mx-auto flex flex-col gap-5">
              {c.differentiators.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[16px] text-faded-mauve leading-relaxed"
                >
                  <ArrowRight
                    size={18}
                    className="text-amethyst flex-shrink-0 mt-1"
                    strokeWidth={1.5}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Waitlist CTA ── */}
      <section
        id="waitlist"
        className="py-[clamp(64px,8vw,120px)] bg-eggplant relative overflow-hidden dark-glow-waitlist"
      >
        <div className="max-w-[var(--max-width-content)] mx-auto px-[clamp(24px,4vw,120px)] relative z-[1]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Copy side */}
            <div>
              <RevealOnScroll>
                <h2 className="font-display text-blush-paper font-bold text-[clamp(28px,3.5vw,36px)] leading-[1.15] tracking-[-0.02em] mb-5">
                  {c.waitlist.headline}
                </h2>
              </RevealOnScroll>

              <RevealOnScroll delay={0.1}>
                <p className="text-[16px] text-faded-mauve leading-relaxed mb-7 max-w-[480px]">
                  {c.waitlist.subhead}
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={0.2}>
                <ul className="list-none flex flex-col gap-3 mb-7">
                  {c.waitlist.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-[14px] text-faded-mauve flex items-center gap-2.5"
                    >
                      <Check
                        size={18}
                        className="text-amethyst flex-shrink-0"
                        strokeWidth={1.5}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            </div>

            {/* Form side */}
            <RevealOnScroll delay={0.1}>
              {submitted ? (
                <div className="dark-card p-8 text-center">
                  <div className="relative z-[1]">
                    <div className="w-12 h-12 bg-[rgba(92,138,107,0.2)] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check size={24} className="text-success" />
                    </div>
                    <h3 className="font-display text-[20px] font-semibold text-blush-paper mb-2">
                      {c.waitlist.successHeadline}
                    </h3>
                    <p className="text-[14px] text-muted-plum">
                      {c.waitlist.successMessage}
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="dark-card p-8">
                  <div className="relative z-[1]">
                    {/* Name row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="firstName"
                          className="font-body text-[13px] font-bold text-blush-paper"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="font-body text-[14px] text-blush-paper bg-[rgba(247,242,240,0.05)] border border-[rgba(247,242,240,0.12)] rounded-[2px] px-3 py-2.5 outline-none focus:border-amethyst transition-colors placeholder:text-muted-plum"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="lastName"
                          className="font-body text-[13px] font-bold text-blush-paper"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="font-body text-[14px] text-blush-paper bg-[rgba(247,242,240,0.05)] border border-[rgba(247,242,240,0.12)] rounded-[2px] px-3 py-2.5 outline-none focus:border-amethyst transition-colors placeholder:text-muted-plum"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5 mb-4">
                      <label
                        htmlFor="email"
                        className="font-body text-[13px] font-bold text-blush-paper"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="font-body text-[14px] text-blush-paper bg-[rgba(247,242,240,0.05)] border border-[rgba(247,242,240,0.12)] rounded-[2px] px-3 py-2.5 outline-none focus:border-amethyst transition-colors placeholder:text-muted-plum"
                      />
                    </div>

                    {/* What are you building */}
                    <div className="flex flex-col gap-1.5 mb-4">
                      <label
                        htmlFor="building"
                        className="font-body text-[13px] font-bold text-blush-paper"
                      >
                        What are you building?
                      </label>
                      <textarea
                        id="building"
                        name="building"
                        rows={3}
                        placeholder="Tell us about your product or company..."
                        className="font-body text-[14px] text-blush-paper bg-[rgba(247,242,240,0.05)] border border-[rgba(247,242,240,0.12)] rounded-[2px] px-3 py-2.5 outline-none focus:border-amethyst transition-colors resize-y min-h-[80px] placeholder:text-muted-plum"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full font-display font-normal text-[17px] text-obsidian bg-gradient-to-r from-[rgba(245,192,192,0.9)] to-[rgba(245,192,192,0.6)] border border-[rgba(245,192,192,0.3)] rounded-[2px] py-3.5 px-8 cursor-pointer transition-all hover:from-[rgba(245,192,192,1)] hover:to-[rgba(245,192,192,0.8)] hover:shadow-[0_0_24px_rgba(245,192,192,0.2)] relative cta-brackets-dark"
                    >
                      {c.waitlist.submitLabel}
                    </button>
                    <p className="text-[11px] text-muted-plum mt-3 text-center">
                      {c.waitlist.disclaimer}
                    </p>
                  </div>
                </form>
              )}
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <Footer tagline={c.footer.tagline} />
    </div>
  );
}
