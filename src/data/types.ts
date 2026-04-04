import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
}

export interface ProcessStep {
  number: string;
  duration: string;
  title: string;
  description: string;
}

export interface ContactFormContent {
  headline: string;
  subhead: string;
  bullets: string[];
  calendlyUrl: string;
  submitLabel: string;
  disclaimer: string;
  companyLabel: string;
  interestLabel: string;
  interestOptions: { value: string; label: string }[];
  messageLabel: string;
}

export interface PageContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    headline: string;
    subhead: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  services: {
    label: string;
    headline: string;
    items: ServiceItem[];
  };
  platform: {
    integrationsLabel: string;
    skillsLabel: string;
  };
  proof: {
    label: string;
    headline: string;
    stats: StatItem[];
    testimonials: TestimonialItem[];
  };
  process: {
    label: string;
    headline: string;
    steps: ProcessStep[];
  };
  contact: ContactFormContent;
  footer: {
    tagline: string;
  };
}

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface SlackMessage {
  avatar: { letter: string; color: string };
  name: string;
  isAi?: boolean;
  aiRole?: string;
  time: string;
  text: string;
}

export interface SlackSidebarPerson {
  name: string;
  role: string;
  online: boolean;
  isAi?: boolean;
}

export interface SkillItem {
  icon: LucideIcon;
  label: string;
}
