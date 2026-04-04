import Card from "@/components/ui/Card";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import type { ProcessStep } from "@/data/types";

interface ProcessProps {
  label: string;
  headline: string;
  steps: ProcessStep[];
}

const cardColors = [
  "#A477B2",
  "#5C8A6B",
  "#B07A7A",
  "#5C7A8A",
];

export default function Process({ label, headline, steps }: ProcessProps) {
  return (
    <section
      id="process"
      className="py-[clamp(64px,8vw,120px)] bg-blush-paper relative z-[1] dot-grid-edges"
    >
      <div className="max-w-[var(--max-width-content)] mx-auto px-[clamp(24px,4vw,120px)] text-center">
        <RevealOnScroll>
          <SectionLabel className="mb-4">{label}</SectionLabel>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="font-display text-eggplant font-bold text-[clamp(26px,3.5vw,32px)] leading-[1.15] tracking-[-0.02em] max-w-[700px] mx-auto mb-12">
            {headline}
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-[400px] sm:max-w-none mx-auto">
          {steps.map((step, i) => (
            <RevealOnScroll key={step.number} delay={i * 0.1} className="h-full">
              <Card className="h-full flex flex-col">
                <div className="flex-1">
                  <div
                    className="hatched-label inline-block font-mono text-[10.5px] font-medium not-italic tracking-[0.14em] lowercase rounded-[3px] px-3 py-1.5 mb-4"
                    style={{
                      color: cardColors[i % cardColors.length],
                      borderWidth: 1,
                      borderStyle: "dotted",
                      borderColor: cardColors[i % cardColors.length] + "40",
                      backgroundColor: cardColors[i % cardColors.length] + "08",
                    }}
                  >
                    Step {step.number}
                  </div>
                  <h3 className="font-display text-[16px] font-semibold text-eggplant mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-dusty-plum leading-[1.5]">
                    {step.description}
                  </p>
                </div>
                <div
                  className="font-mono text-[11px] font-semibold uppercase tracking-[0.04em] mt-4 pt-3 border-t border-mist"
                  style={{ color: cardColors[i % cardColors.length] }}
                >
                  {step.duration}
                </div>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
