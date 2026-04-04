import {
  Compass,
  Palette,
  Rocket,
  Terminal,
  Users,
  BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface CursorCmoFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface CursorCmoAudience {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface CursorCmoStep {
  number: string;
  title: string;
  description: string;
}

export interface CursorCmoContent {
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
    exclusiveNote: string;
  };
  features: {
    label: string;
    headline: string;
    items: CursorCmoFeature[];
  };
  howItWorks: {
    label: string;
    headline: string;
    steps: CursorCmoStep[];
  };
  audience: {
    label: string;
    headline: string;
    items: CursorCmoAudience[];
  };
  differentiators: {
    label: string;
    headline: string;
    items: string[];
  };
  waitlist: {
    headline: string;
    subhead: string;
    bullets: string[];
    submitLabel: string;
    disclaimer: string;
    successHeadline: string;
    successMessage: string;
  };
  footer: {
    tagline: string;
  };
}

export const cursorCmoContent: CursorCmoContent = {
  meta: {
    title: "Cursor CMO \u2014 AI-Powered Marketing Strategy for Technical Founders",
    description:
      "Get world-class marketing foundations \u2014 positioning, ICPs, brand strategy, design systems \u2014 from an AI that thinks like a $400K/year marketing leader.",
  },
  hero: {
    badge: "Private Beta \u2014 Coming Soon",
    headline: "Your AI\u2011Powered\u00a0CMO.\nBuilt for\u00a0Builders.",
    subhead:
      "Cursor CMO gives technical founders world-class marketing strategy \u2014 positioning, ICPs, brand, design systems \u2014 through an AI that thinks like a $400K/year marketing\u00a0leader.",
    primaryCta: { label: "Request Private Beta Access", href: "#waitlist" },
    secondaryCta: { label: "See What It Does", href: "#features" },
    exclusiveNote: "Limited spots \u2014 we\u2019re onboarding founders one at a time.",
  },
  features: {
    label: "Three Skill Suites",
    headline:
      "Everything a world-class CMO delivers in their first six\u00a0months \u2014 in\u00a0weeks.",
    items: [
      {
        icon: Compass,
        title: "Discovery & Strategic Foundation",
        description:
          "Competitive landscape, positioning, ICPs & personas, brand strategy, key messages, and channel strategy. Frameworks from Fletch PMM, Bullseye, and the operator\u2019s playbook.",
      },
      {
        icon: Palette,
        title: "Design System Builder",
        description:
          "From mood board to full design system \u2014 color palettes, typography, component libraries, and platform templates. Code-ready tokens, not just\u00a0PDFs.",
      },
      {
        icon: Rocket,
        title: "Activate & Execute",
        description:
          "Campaign production, ad copy, asset creation, email sequences, and KPI forecasting. Strategy that actually ships \u2014 not slides that collect\u00a0dust.",
      },
    ],
  },
  howItWorks: {
    label: "How It Works",
    headline: "From zero to strategic foundation in\u00a0four\u00a0steps.",
    steps: [
      {
        number: "01",
        title: "Discovery Intake",
        description:
          "Tell Cursor CMO about your business, customers, and goals. It asks the right questions \u2014 the ones a $400K CMO would ask in their first\u00a0week.",
      },
      {
        number: "02",
        title: "Strategy Generation",
        description:
          "Get expert-level positioning, ICPs, brand strategy, and channel recommendations. Opinionated, not generic. Every output includes the reasoning behind the\u00a0recommendation.",
      },
      {
        number: "03",
        title: "Design System Build",
        description:
          "Generate mood boards, select palettes, build component libraries, and export production-ready tokens \u2014 Tailwind, CSS variables, Figma\u00a0tokens.",
      },
      {
        number: "04",
        title: "Campaign Launch",
        description:
          "Produce ad copy, email sequences, landing page content, and social assets. Everything built on your strategy \u2014 consistent, on-brand, ready to\u00a0ship.",
      },
    ],
  },
  audience: {
    label: "Built For",
    headline: "If you\u2019re building something real, this is your marketing\u00a0co\u2011pilot.",
    items: [
      {
        icon: Terminal,
        title: "Technical Founders",
        description:
          "Solo builders and early-stage teams who know their product is good but can\u2019t articulate why it matters to the market. Pre-revenue to early\u00a0revenue.",
      },
      {
        icon: Users,
        title: "Scaling CEOs",
        description:
          "Founders with $1M+ ARR who need marketing leadership but aren\u2019t ready for a full-time CMO. Reduce headcount, increase strategic\u00a0depth.",
      },
      {
        icon: BarChart3,
        title: "Marketing Operators",
        description:
          "Marketing professionals who want AI tools that think like operators \u2014 measurement, experimentation, and strategy, not just content\u00a0generation.",
      },
    ],
  },
  differentiators: {
    label: "Why Cursor CMO",
    headline: "Not another AI writing tool. A strategic marketing\u00a0system.",
    items: [
      "Operator mindset \u2014 measurement + experimentation, not fluffy frameworks",
      "Strategic layer \u2014 makes your tactical tools (SEMrush, HubSpot) actually work",
      "Opinionated \u2014 makes recommendations instead of asking endless questions",
      "Expert judgment built in \u2014 embodies the right questions to ask",
      "Demo-ready artifacts \u2014 outputs you\u2019d proudly show a board or investor",
    ],
  },
  waitlist: {
    headline: "Join the Private\u00a0Beta",
    subhead:
      "We\u2019re opening access to a small group of builders first. Request your spot \u2014 we\u2019ll notify you when it\u2019s your\u00a0turn.",
    bullets: [
      "Early access before public launch",
      "Direct line to the founding team",
      "Shape the product with your feedback",
      "Lock in founding-member pricing",
    ],
    submitLabel: "Request Access",
    disclaimer:
      "No spam. We\u2019ll only email you about your beta access. Unsubscribe anytime.",
    successHeadline: "You\u2019re on the list.",
    successMessage:
      "We\u2019ll reach out when it\u2019s your turn. In the meantime, keep building \u2014 we\u2019ll make sure the world knows why it\u00a0matters.",
  },
  footer: {
    tagline: "AI-powered marketing strategy for technical founders",
  },
};
