import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

interface HeroProps {
  badge: string;
  headline: string;
  subhead: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export default function Hero({
  badge,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="min-h-[80vh] flex items-center justify-center pt-28 pb-11 relative z-[1] glow-hero dot-grid-center">
      <div className="max-w-[var(--max-width-content)] mx-auto px-[clamp(24px,4vw,120px)] text-center">
        <RevealOnScroll>
          <span className="inline-block font-mono text-[11px] font-semibold tracking-[0.08em] uppercase text-dusty-plum border border-mist rounded-[2px] px-3 py-1.5 mb-10">
            {badge}
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h1 className="font-display text-eggplant font-bold text-[clamp(36px,5vw,56px)] leading-[1.15] tracking-[-0.02em] max-w-[800px] mx-auto mb-6">
            {headline}
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="text-[20px] text-dusty-plum leading-[1.6] max-w-[800px] mx-auto mb-10">
            {subhead}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={primaryCta.href} variant="primary">
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
