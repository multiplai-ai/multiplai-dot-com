import { marketingLeadersContent } from "@/data/marketing-leaders";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PlatformDemo from "@/components/PlatformDemo";
import Proof from "@/components/Proof";
import Process from "@/components/Process";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata = {
  title: marketingLeadersContent.meta.title,
  description: marketingLeadersContent.meta.description,
};

export default function MarketingLeadersPage() {
  const c = marketingLeadersContent;
  return (
    <>
      <Nav />
      <Hero
        badge={c.hero.badge}
        headline={c.hero.headline}
        subhead={c.hero.subhead}
        primaryCta={c.hero.primaryCta}
        secondaryCta={c.hero.secondaryCta}
      />
      <Services
        label={c.services.label}
        headline={c.services.headline}
        items={c.services.items}
      />
      <PlatformDemo
        integrationsLabel={c.platform.integrationsLabel}
        skillsLabel={c.platform.skillsLabel}
      />
      <Proof
        label={c.proof.label}
        headline={c.proof.headline}
        stats={c.proof.stats}
        testimonials={c.proof.testimonials}
      />
      <Process
        label={c.process.label}
        headline={c.process.headline}
        steps={c.process.steps}
      />
      <ContactForm content={c.contact} />
      <Footer tagline={c.footer.tagline} />
    </>
  );
}
