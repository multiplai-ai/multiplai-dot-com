import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SlackMockup from "@/components/SlackMockup";
import { integrationNames, skills } from "@/data/shared";

const accentColors = [
  { text: "#A477B2", border: "rgba(164, 119, 178, 0.25)" },
  { text: "#8B6E5A", border: "rgba(196, 185, 168, 0.35)" },
  { text: "#6B5A78", border: "rgba(107, 90, 120, 0.2)" },
  { text: "#A89B8C", border: "rgba(168, 155, 140, 0.3)" },
  { text: "#9468A2", border: "rgba(184, 163, 192, 0.3)" },
  { text: "#7A8B6E", border: "rgba(122, 139, 110, 0.25)" },
  { text: "#B07A7A", border: "rgba(176, 122, 122, 0.25)" },
  { text: "#5C7A8A", border: "rgba(92, 122, 138, 0.25)" },
  { text: "#8A7A5C", border: "rgba(138, 122, 92, 0.3)" },
  { text: "#7A5C8A", border: "rgba(122, 92, 138, 0.25)" },
  { text: "#5C8A6B", border: "rgba(92, 138, 107, 0.25)" },
  { text: "#8A5C6B", border: "rgba(138, 92, 107, 0.25)" },
];

interface PlatformDemoProps {
  integrationsLabel: string;
  skillsLabel: string;
}

export default function PlatformDemo({ integrationsLabel, skillsLabel }: PlatformDemoProps) {
  return (
    <section id="platform" className="py-[clamp(64px,8vw,120px)] bg-blush-cream relative z-[1] dot-grid-corner">
      <div className="max-w-[var(--max-width-content)] mx-auto px-[clamp(24px,4vw,120px)]">
        <RevealOnScroll>
          <div className="text-center mb-10">
            <SectionLabel className="mb-4">{integrationsLabel}</SectionLabel>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              {integrationNames.map((name, i) => {
                const color = accentColors[i % accentColors.length];
                return (
                  <span key={name} className="font-mono text-[13px] font-medium bg-canvas rounded-[4px] px-4 py-2" style={{ color: color.text, borderWidth: 1, borderStyle: "solid", borderColor: color.border }}>{name}</span>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <div className="mb-12"><SlackMockup /></div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="text-center">
            <SectionLabel className="mb-4">{skillsLabel}</SectionLabel>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, i) => {
                const color = accentColors[(i + 2) % accentColors.length];
                return (
                  <div key={skill.label} className="inline-flex items-center gap-2 bg-canvas rounded-[4px] px-4 py-2.5" style={{ borderWidth: 1, borderStyle: "solid", borderColor: color.border }}>
                    <skill.icon size={18} style={{ color: color.text }} strokeWidth={1.5} />
                    <span className="font-body text-[14px]" style={{ color: color.text }}>{skill.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
