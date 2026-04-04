import {
  Rocket,
  Mail,
  Share2,
  Search,
  PieChart,
  Users,
  Layers,
  Palette,
  FileText,
  Target,
  TrendingUp,
  Globe,
} from "lucide-react";
import type {
  NavLink,
  FooterColumn,
  SlackMessage,
  SlackSidebarPerson,
  SkillItem,
} from "./types";

export const audienceLinks: NavLink[] = [
  { label: "For Agencies", href: "/" },
  { label: "For Marketing Leaders", href: "/for-marketing-leaders" },
  { label: "Cursor CMO", href: "/cursor-cmo" },
];

export const utilityLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#process" },
  { label: "Results", href: "#proof" },
  { label: "Newsletter", href: "https://marketingintheloop.substack.com/", external: true },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Solutions",
    links: [
      { label: "AI Agents for Teams", href: "#about" },
      { label: "CoS Agents", href: "#about" },
      { label: "Managed Services", href: "#about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Newsletter", href: "https://marketingintheloop.substack.com/", external: true },
      { label: "AI Playbook", href: "#" },
      { label: "Case Studies", href: "#" },
    ],
  },
];

export const integrationNames = [
  "HubSpot",
  "ChatGPT",
  "Claude",
  "Zapier",
  "Semrush",
];

export const slackChannels = ["general", "client-projects", "campaign-updates"];

export const slackTeammates: SlackSidebarPerson[] = [
  { name: "Jake", role: "Account Manager", online: true },
  { name: "Lisa", role: "Creative Director", online: true },
  { name: "Marcus", role: "Strategist", online: false },
];

export const slackAiTeammates: SlackSidebarPerson[] = [
  { name: "Amy", role: "Social Media", online: true, isAi: true },
  { name: "Tommy", role: "Graphic Design", online: true, isAi: true },
  { name: "Sam", role: "SEO Strategy", online: true, isAi: true },
  { name: "Maya", role: "Email Campaigns", online: true, isAi: true },
  { name: "Riley", role: "Content Writer", online: true, isAi: true },
];

export const slackMessages: SlackMessage[] = [
  {
    avatar: { letter: "J", color: "#4A6FA5" },
    name: "Jake",
    time: "9:02 AM",
    text: "Hey Amy \u2014 can you pull together a performance summary for the Meridian Health social accounts this week? Need engagement stats and top posts for the client call at 2.",
  },
  {
    avatar: { letter: "A", color: "#2BAC76" },
    name: "Amy",
    isAi: true,
    aiRole: "Social Media",
    time: "9:03 AM",
    text: "On it! Meridian Health this week: 2,847 engagements (+18% WoW), top post hit 412 likes. Want me to format this into a slide deck for your 2pm call?",
  },
  {
    avatar: { letter: "J", color: "#4A6FA5" },
    name: "Jake",
    time: "9:05 AM",
    text: "Yes, a slide deck would be perfect. Can you also include a comparison to last month\u2019s numbers? The client loves seeing the trend.",
  },
  {
    avatar: { letter: "A", color: "#2BAC76" },
    name: "Amy",
    isAi: true,
    aiRole: "Social Media",
    time: "9:06 AM",
    text: "Done \u2014 deck is ready with month-over-month trends included. Shared it to #client-projects. Let me know if you want any edits before the call!",
  },
];

export const skills: SkillItem[] = [
  { icon: Rocket, label: "Content Strategy" },
  { icon: Mail, label: "Email Marketing" },
  { icon: Share2, label: "Social Media" },
  { icon: Search, label: "SEO & SEM" },
  { icon: PieChart, label: "Analytics & Reporting" },
  { icon: Users, label: "Lead Generation" },
  { icon: Layers, label: "Paid Advertising" },
  { icon: Palette, label: "Brand & Creative" },
  { icon: FileText, label: "Copywriting" },
  { icon: Target, label: "Campaign Management" },
  { icon: TrendingUp, label: "CRO & A/B Testing" },
  { icon: Globe, label: "PR & Outreach" },
];
