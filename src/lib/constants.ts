import {
  Cloud,
  Mic,
  Rocket,
  TrendingUp,
} from "lucide-react";

import type {
  CapabilityCategory,
  ClientLogo,
  FaqEntry,
  InsightArticle,
  NavLink,
  StatEntry,
  ValuePillar,
} from "@/types";

// TODO: replace with the verified production domain and real business contact details before launch.
export const SITE_NAME = "Bennex Digital";
export const SITE_URL = "https://www.bennexdigital.com";
export const SITE_TAGLINE = "We Turn Bold Ideas Into Digital Products That Create Impact.";
export const SITE_META_TITLE = "Product Strategy, Technology & Growth Partner";
export const SITE_DESCRIPTION =
  "Bennex Digital partners with ambitious founders to shape tech strategy, build scalable cloud architecture, and drive measurable growth.";
export const BUSINESS_CONTACT_EMAIL = "hello@bennexdigital.com";

export const MAX_CONTACT_MESSAGE_LENGTH = 2000;

export const PRIMARY_NAV_LINKS: readonly NavLink[] = [
  { label: "Work", href: "#proof" },
  { label: "Approach", href: "#approach" },
  { label: "Insights", href: "#insights" },
  { label: "About", href: "#about" },
];

export const CAPABILITY_CATEGORIES: readonly CapabilityCategory[] = [
  {
    anchorId: "product-strategy",
    title: "Product Strategy & Management",
    description:
      "Validate ideas, define product strategy, and scale digital products with a roadmap built on evidence, not guesswork.",
    icon: Rocket,
    services: [
      { title: "Customer Acquisition Consulting", href: "#product-strategy" },
      { title: "MVP Development", href: "#product-strategy" },
      { title: "Software Prototyping", href: "#product-strategy" },
      { title: "Product Management", href: "#product-strategy" },
    ],
  },
  {
    anchorId: "tech-consulting",
    title: "Technology Consulting & Engineering",
    description:
      "Ship resilient software and cloud infrastructure engineered to scale, backed by senior engineering judgment from day one.",
    icon: Cloud,
    services: [
      { title: "Web & Mobile Development", href: "#tech-consulting" },
      { title: "Cloud Consulting", href: "#tech-consulting" },
      { title: "DevOps Services", href: "#tech-consulting" },
      { title: "Agentic AI Services", href: "#tech-consulting" },
      { title: "UI/UX Design", href: "#tech-consulting" },
    ],
  },
  {
    anchorId: "digital-growth",
    title: "Digital & Performance Growth",
    description:
      "Data-driven growth strategies that connect acquisition, retention, and revenue, measured against real business outcomes.",
    icon: TrendingUp,
    services: [
      { title: "SEO Services", href: "#digital-growth" },
      { title: "Digital Marketing", href: "#digital-growth" },
      { title: "Performance Ads", href: "#digital-growth" },
      { title: "Content Marketing", href: "#digital-growth" },
    ],
  },
  {
    anchorId: "founder-branding",
    title: "Founder Branding & Storytelling",
    description:
      "Build authority and articulate your vision with a personal brand that earns trust and influence in your market.",
    icon: Mic,
    services: [
      { title: "Founder Branding", href: "#founder-branding" },
      { title: "Founder Podcast Building", href: "#founder-branding" },
    ],
  },
] as const;

export const VALUE_PILLARS: readonly ValuePillar[] = [
  {
    title: "Strategy before development",
    description:
      "Every build starts with a validated problem and a clear success metric, not a backlog of assumptions.",
  },
  {
    title: "Connected execution",
    description:
      "Strategy, engineering, and growth run on the same roadmap, so nothing you ship gets stranded without a distribution plan.",
  },
  {
    title: "Multidisciplinary ownership",
    description:
      "One team carries an initiative from product decision through to launch, instead of handing it across disconnected vendors.",
  },
  {
    title: "Business context with technical depth",
    description:
      "Every recommendation is weighed against your unit economics first, then engineered with the rigor a production system demands.",
  },
] as const;

export const STAT_ENTRIES: readonly StatEntry[] = [
  { value: "10+", label: "Years Tech Experience" },
  { value: "50+", label: "Products Scaled" },
  { value: "100+", label: "Cloud Deployments" },
  { value: "15+", label: "Industries Served" },
] as const;

export const INSIGHT_ARTICLES: readonly InsightArticle[] = [
  {
    title: "What Makes a Minimum Viable Product Actually Viable",
    excerpt:
      "Shipping less isn't the goal. Shipping the smallest thing that proves your customer has the problem you think they have, is.",
    href: "#insights",
    imageSrc: "/insights/mvp-scope.svg",
    imageAlt: "",
  },
  {
    title: "Founder Branding: Why Personal Trust Sells Before Product Trust",
    excerpt:
      "Buyers follow people before they follow companies. A founder who shows their reasoning in public builds a sales channel a logo never will.",
    href: "#insights",
    imageSrc: "/insights/founder-branding.svg",
    imageAlt: "",
  },
] as const;

export const CLIENT_LOGOS: readonly ClientLogo[] = [
  { name: "Northwind", imageSrc: "/logos/northwind.svg" },
  { name: "Vertex Labs", imageSrc: "/logos/vertexlabs.svg" },
  { name: "Cobalt & Co", imageSrc: "/logos/cobalt.svg" },
  { name: "Lumen Group", imageSrc: "/logos/lumengroup.svg" },
  { name: "Anchorpoint", imageSrc: "/logos/anchorpoint.svg" },
  { name: "Solstice", imageSrc: "/logos/solstice.svg" },
] as const;

export const FAQ_ENTRIES: readonly FaqEntry[] = [
  {
    question: "Do I need a fully-formed idea before I talk to Bennex Digital?",
    answer:
      "No. Most engagements start with a strategy phase that validates the idea, defines the MVP scope, and sets success metrics, before any code is written.",
  },
  {
    question: "Can Bennex Digital take an existing product and scale it?",
    answer:
      "Yes. Technology Consulting & Engineering covers cloud architecture, DevOps, and re-platforming work for products that already have users and now need to scale reliably.",
  },
  {
    question: "How is AEO different from traditional SEO?",
    answer:
      "Traditional SEO optimizes for ranking positions in search results. AEO (Answer Engine Optimization) optimizes for being the source an AI system like ChatGPT or Perplexity cites directly in its answer, which requires clearer structure and direct, verifiable statements.",
  },
  {
    question: "Do you work with a single service, or only full engagements?",
    answer:
      "Either. You can engage a single capability, such as Performance Marketing or Founder Branding, or combine multiple capabilities under one connected roadmap.",
  },
] as const;
