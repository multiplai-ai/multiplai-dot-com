import Card from "@/components/ui/Card";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import type { ServiceItem } from "@/data/types";

interface ServicesProps {
  label: string;
  headline: string;
  items: ServiceItem[];
}

export default function Services({ label, headline, items }: ServicesProps) {
  return (
    <section
      id="about"
      className="py-[clamp(64px,8vw,120px)] bg-canvas relative z-[1] dot-grid-top-fade"
    >
      <div className="max-w-[var(--max-width-content)] mx-auto px-[clamp(24px,4vw,120px)]">
        <RevealOnScroll>
          <SectionLabel className="mb-4 text-center">{label}</SectionLabel>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="font-display text-eggplant font-bold text-[clamp(26px,3.5vw,32px)] leading-[1.15] tracking-[-0.02em] max-w-[700px] mx-auto mb-12 text-center">
            {headline}
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[480px] lg:max-w-none mx-auto">
          {items.map((item, i) => (
            <RevealOnScroll key={item.title} delay={i * 0.1} className="h-full">
              <Card className="h-full">
                <div className="w-10 h-10 flex items-center justify-center mb-4">
                  <item.icon
                    size={24}
                    className="text-dusty-plum"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-display text-[18px] font-semibold tracking-[-0.01em] text-eggplant mb-2">
                  {item.title}
                </h3>
                <p className="text-[15px] text-dusty-plum leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
