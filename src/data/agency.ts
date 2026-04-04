import { Bot, Crown, GraduationCap } from "lucide-react";
import type { PageContent } from "./types";

export const agencyContent: PageContent = {
  meta: {
    title: "MultiplAI Growth Systems — AI Agents for Marketing Agencies",
    description:
      "We build custom autonomous AI agents that join your team daily — executing campaigns with more accuracy, speed, and consistency than traditional methods.",
  },
  hero: {
    badge: "AI Agents for Marketing Teams",
    headline: "Your Agency’s AI Workforce Starts Here.",
    subhead:
      "We build custom autonomous AI agents that join your team daily — executing campaigns with more accuracy, speed, and consistency than traditional methods.",
    primaryCta: { label: "Get A Quote", href: "#contact" },
    secondaryCta: { label: "See How It Works", href: "#process" },
  },
  services: {
    label: "Three Ways to Work With Us",
    headline: "Choose the level of AI integration that fits your agency",
    items: [
      {
        icon: Bot,
        title: "Custom AI Agents for Your Team",
        description: "Autonomous AI agents tailored to your workflows — content, campaigns, reporting, and more. Faster, more accurate output every day.",
      },
      {
        icon: Crown,
        title: "CoS Agents for Agency Leaders",
        description: "A Chief of Staff in your pocket. Our CoS agents handle resource planning, client comms, financials, and prioritization so you can focus on growth.",
      },
      {
        icon: GraduationCap,
        title: "AI Strategy Workshops & Team Training",
        description: "Hands-on AI workshops for your agency — from prompt engineering to custom agent workflows. Your team learns to work smarter, and the expertise stays in-house.",
      },
    ],
  },
  platform: {
    integrationsLabel: "Integrates With the Best in Class Tools You Already Use",
    skillsLabel: "Marketing Skills Your AI Agents Can Master",
  },
  proof: {
    label: "Proven Results",
    headline: "Agencies using our AI agents see measurable gains in client satisfaction, employee retention, and work quality.",
    stats: [
      { value: "94% CSAT", label: "Average client satisfaction score" },
      { value: "2x retention", label: "Employee retention vs. industry average" },
      { value: "40%", label: "Improvement in deliverable quality scores" },
    ],
    testimonials: [
      {
        quote: "“Our client NPS jumped 35 points in three months. The AI handles the grunt work so our team focuses on strategy and creative — the stuff that actually makes clients happy.”",
        author: "— Sarah M., Agency Owner",
      },
      {
        quote: "“We used to lose a senior strategist every quarter to burnout. Since adopting AI agents, our team actually enjoys their work again — zero voluntary turnover in the past year.”",
        author: "— David K., Marketing Director",
      },
      {
        quote: "“The quality of our output went through the roof. Every deliverable gets more research, more polish, and more strategic depth than we could ever do manually.”",
        author: "— Lisa R., Creative Director",
      },
    ],
  },
  process: {
    label: "Our Process",
    headline: "Your First AI Agent Goes Live in Three Weeks — Then Scale at Your Own Pace.",
    steps: [
      { number: "01", duration: "1 Week", title: "Discovery & Scoping", description: "We map your agency’s workflows, tools, team structure, and pain points to identify where an AI agent will have the highest impact first." },
      { number: "02", duration: "2 Weeks", title: "Agent Design & Build", description: "We architect your custom AI agent — integrating with Slack, your project management tools, and your existing stack. Your team shapes the agent’s behavior from day one." },
      { number: "03", duration: "1 Week", title: "Deploy & Onboard", description: "Your agent goes live. Your team starts working with it immediately via Slack. We train everyone, monitor performance, and fine-tune in real time." },
      { number: "04", duration: "Up to You", title: "Optimize & Expand", description: "Continuous development and optimization as your team uses the agent. When you’re ready, we add new agents to cover more areas of your business — all under your monthly subscription." },
    ],
  },
  contact: {
    headline: "See What AI Agents Can Do for Your Agency",
    subhead: "Tell us about your agency and workflows, and we’ll show you exactly which AI agents would make the biggest impact — with a custom recommendation, free.",
    bullets: ["Free, no-obligation quote emailed to you", "Custom AI readiness assessment included", "Response within 24 hours"],
    calendlyUrl: "https://calendly.com/hanna-huffman/multiplai-consult",
    submitLabel: "Get Started",
    disclaimer: "By submitting, you agree to our Privacy Policy. We’ll email your quote within 24 hours.",
    companyLabel: "Company / Agency Name",
    interestLabel: "What are you interested in?",
    interestOptions: [
      { value: "agents", label: "Custom AI Agents for My Team" },
      { value: "cos", label: "CoS Agents for Agency Leaders" },
      { value: "training", label: "AI Strategy Workshops & Training" },
      { value: "other", label: "Something Else" },
    ],
    messageLabel: "Tell us a bit about what you need",
  },
  footer: { tagline: "Custom AI agents for marketing agencies" },
};
