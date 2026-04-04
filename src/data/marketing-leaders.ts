import { Bot, Crown, GraduationCap } from "lucide-react";
import type { PageContent } from "./types";

export const marketingLeadersContent: PageContent = {
  meta: {
    title: "MultiplAI Growth Systems — AI Agents for Fractional CMOs & Marketing Leaders",
    description: "Stop relying on freelancers for every deliverable. Our custom AI agents give fractional CMOs the execution power to serve more clients, in less time, without growing headcount.",
  },
  hero: {
    badge: "AI Agents for Fractional CMOs",
    headline: "Run Your Entire Practice with AI at Your Side.",
    subhead: "Stop relying on freelancers for every deliverable. Our custom AI agents give fractional CMOs the execution power to serve more clients, in less time, without growing headcount.",
    primaryCta: { label: "See a Demo", href: "#contact" },
    secondaryCta: { label: "How It Works", href: "#process" },
  },
  services: {
    label: "Three Ways AI Runs Your Practice",
    headline: "Choose the level of AI integration that fits your fractional role",
    items: [
      { icon: Bot, title: "Execution Agents for Client Work", description: "AI agents that draft content, build campaigns, pull reports, and manage deliverables — so you can serve more clients without hiring freelancers." },
      { icon: Crown, title: "Practice Management Agents", description: "Your personal operating system. AI handles client comms, project tracking, invoicing reminders, and prioritization so you stay on top of every engagement." },
      { icon: GraduationCap, title: "AI Strategy & Skill Building", description: "Hands-on workshops to sharpen your AI toolkit — from prompt engineering to building custom workflows. The expertise compounds with every client." },
    ],
  },
  platform: {
    integrationsLabel: "Connects to the Tools You Already Use With Clients",
    skillsLabel: "Capabilities Your AI Agents Handle for You",
  },
  proof: {
    label: "Real Results",
    headline: "Fractional CMOs using our AI agents take on more clients, deliver faster, and eliminate freelancer dependency.",
    stats: [
      { value: "3x output", label: "Client deliverables per week on average" },
      { value: "Zero", label: "Freelancers needed for day-to-day execution" },
      { value: "60%", label: "Reduction in time spent on routine tasks" },
    ],
    testimonials: [
      { quote: "“I went from managing three clients to seven — without hiring a single contractor. The AI handles first drafts, reporting, and scheduling so I focus on strategy and client relationships.”", author: "— Rachel T., Fractional CMO" },
      { quote: "“I used to spend half my week coordinating freelancers. Now my AI agents handle content, social, and campaign builds while I do the high-level thinking my clients actually pay me for.”", author: "— Marcus L., Fractional VP Marketing" },
      { quote: "“My practice runs like a full marketing department. Clients can’t believe it’s just me and my AI team. The quality is better than what I got from most freelancers, and it’s instant.”", author: "— Priya S., Fractional CMO" },
    ],
  },
  process: {
    label: "Our Process",
    headline: "How It Works: Your First AI Agent Goes Live in Two Weeks — Then Scale at Your Own Pace.",
    steps: [
      { number: "01", duration: "1 Week", title: "Practice Audit", description: "We map your client workflows, tools, and recurring deliverables to pinpoint where an AI agent will save you the most time immediately." },
      { number: "02", duration: "2 Weeks", title: "Agent Design & Build", description: "We build your custom AI agent — integrated with your project management tools, CRM, and content platforms. You shape its behavior to match how you work." },
      { number: "03", duration: " ", title: "Deploy & Go Live", description: "Your agent starts executing alongside you immediately. We train you on working with it, monitor output quality, and fine-tune in real time." },
      { number: "04", duration: "Up to You", title: "Scale Your Practice", description: "As you take on more clients, we add new agents to cover more workflows — content, campaigns, reporting, and beyond. All under your monthly plan." },
    ],
  },
  contact: {
    headline: "See What AI Agents Can Do for Your Practice",
    subhead: "Tell us about your fractional role and client workflows, and we’ll show you exactly which AI agents would multiply your capacity — with a custom recommendation, free.",
    bullets: ["Free, personalized capacity plan emailed to you", "Custom AI readiness assessment included", "Response within 24 hours"],
    calendlyUrl: "https://calendly.com/hanna-huffman/multiplai-consult",
    submitLabel: "Get My Capacity Plan",
    disclaimer: "By submitting, you agree to our Privacy Policy. We’ll email your custom plan within 24 hours.",
    companyLabel: "Your Practice / Consultancy",
    interestLabel: "What would you like AI to handle?",
    interestOptions: [
      { value: "execution", label: "Execution Agents for Client Work" },
      { value: "practice", label: "Practice Management Agents" },
      { value: "training", label: "AI Strategy & Skill Building" },
      { value: "other", label: "Something Else" },
    ],
    messageLabel: "Tell us about your client load and workflows",
  },
  footer: { tagline: "AI agents for fractional marketing leaders" },
};
