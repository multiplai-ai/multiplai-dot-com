import Card from "@/components/ui/Card";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import type { StatItem, TestimonialItem } from "@/data/types";

interface ProofProps {
  label: string;
  headline: string;
  stats: StatItem[];
  testimonials: TestimonialItem[];
}

export default function Proof({
  label,
  headline,
  stats,
  testimonials,
}: ProofProps) {
  return (
    <section
      id="proof"
      className="py-[clamp(64px,8vw,120px)] bg-canvas relative paper-speckle-proof dot-grid-center"
    >
      <div className="max-w-[var(--max-width-content)] mx-auto px-[clamp(24px,4vw,120px)] relative z-[1] text-center">
        <RevealOnScroll>
          <SectionLabel className="mb-4">{label}</SectionLabel>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="font-display text-eggplant font-bold text-[clamp(26px,3.5vw,32px)] leading-[1.15] tracking-[-0.02em] max-w-[700px] mx-auto mb-14">
            {headline}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-bold text-[clamp(28px,3.5vw,36px)] text-eggplant tracking-[-0.02em] leading-[1.1] mb-1.5">
                  {stat.value}
                </div>
                <div className="text-[14px] text-dusty-plum">{stat.label}</div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left max-w-[480px] lg:max-w-none mx-auto lg:mx-0">
          {testimonials.map((t, i) => (
            <RevealOnScroll key={t.author} delay={i * 0.1} className="h-full">
              <Card className="h-full">
                <p className="text-[15px] text-dusty-plum leading-relaxed italic">
                  {t.quote}
                </p>
                <span className="block text-[13px] font-bold text-eggplant mt-4">
                  {t.author}
                </span>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
