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

// TODO: point SITE_URL at a custom domain (and update next.config.ts's basePath/assetPrefix
// accordingly) if this site ever moves off github.io/BennexDigitalSite. Also replace
// BUSINESS_CONTACT_EMAIL with a real, monitored inbox before launch.
export const SITE_NAME = "Bennex Digital";
// Origin only (no path) - used solely for Next's `metadataBase`, which Next combines with
// paths that already have basePath baked in. Combining it with SITE_URL (which also carries
// the "/BennexDigitalSite" path) would double that segment in resolved OG/Twitter image URLs.
export const SITE_ORIGIN = "https://praveenben.github.io";
export const SITE_URL = `${SITE_ORIGIN}/BennexDigitalSite`;
export const SITE_TAGLINE = "We Turn Bold Ideas Into Digital Products That Create Impact.";
export const SITE_META_TITLE = "Product Strategy, Technology & Growth Partner";
export const SITE_DESCRIPTION =
  "Bennex Digital partners with ambitious founders to shape tech strategy, build scalable cloud architecture, and drive measurable growth.";
export const BUSINESS_CONTACT_EMAIL = "hello@bennexdigital.com";

export const MAX_CONTACT_MESSAGE_LENGTH = 2000;

export const CAPABILITIES_ROUTE = "/capabilities";
export const CONTACT_ROUTE = "/contact";
export const INSIGHTS_ROUTE = "/insights";

export const PRIMARY_NAV_LINKS: readonly NavLink[] = [
  { label: "Work", href: "/work" },
  { label: "Approach", href: "/approach" },
  { label: "Insights", href: INSIGHTS_ROUTE },
  { label: "About", href: "/about" },
];

export const CAPABILITY_CATEGORIES: readonly CapabilityCategory[] = [
  {
    slug: "product-strategy",
    route: "/capabilities/product-strategy",
    title: "Product Strategy & Management",
    description:
      "Validate ideas, define product strategy, and scale digital products with a roadmap built on evidence, not guesswork.",
    icon: Rocket,
    services: [
      {
        anchorId: "customer-acquisition-consulting",
        title: "Customer Acquisition Consulting",
        description:
          "Find the channels that actually convert for your product, and build a repeatable acquisition motion around them instead of spreading budget thin across every platform.",
      },
      {
        anchorId: "mvp-development",
        title: "MVP Development",
        description:
          "Ship the smallest product that can prove or disprove your core assumption, with a scope defined by the decision you need to make next.",
      },
      {
        anchorId: "software-prototyping",
        title: "Software Prototyping",
        description:
          "Put a working prototype in front of real users early, so design and engineering decisions are settled by evidence rather than opinion.",
      },
      {
        anchorId: "product-management",
        title: "Product Management",
        description:
          "Embedded product leadership that turns a backlog into a prioritized roadmap tied to measurable business outcomes.",
      },
    ],
  },
  {
    slug: "technology-consulting",
    route: "/capabilities/technology-consulting",
    title: "Technology Consulting & Engineering",
    description:
      "Ship resilient software and cloud infrastructure engineered to scale, backed by senior engineering judgment from day one.",
    icon: Cloud,
    services: [
      {
        anchorId: "web-mobile-development",
        title: "Web & Mobile Development",
        description:
          "Production web and mobile applications built on modern, well-supported stacks, with performance and accessibility treated as requirements rather than afterthoughts.",
      },
      {
        anchorId: "cloud-consulting",
        title: "Cloud Consulting",
        description:
          "Cloud architecture and migration planning that weighs cost, reliability, and operational burden before committing you to a design.",
      },
      {
        anchorId: "devops-services",
        title: "DevOps Services",
        description:
          "CI/CD pipelines, infrastructure as code, and observability so releases become routine instead of risky events.",
      },
      {
        anchorId: "agentic-ai-services",
        title: "Agentic AI Services",
        description:
          "LLM-backed agents and automations scoped to workflows where they genuinely reduce manual effort, with evaluation built in from the start.",
      },
      {
        anchorId: "ui-ux-design",
        title: "UI/UX Design",
        description:
          "Interface and experience design grounded in real user flows, delivered as systems your engineers can build against directly.",
      },
    ],
  },
  {
    slug: "digital-growth",
    route: "/capabilities/digital-growth",
    title: "Digital & Performance Growth",
    description:
      "Data-driven growth strategies that connect acquisition, retention, and revenue, measured against real business outcomes.",
    icon: TrendingUp,
    services: [
      {
        anchorId: "seo-services",
        title: "SEO Services",
        description:
          "Technical SEO, content structure, and structured data that earn rankings on search engines and citations inside AI answer engines.",
      },
      {
        anchorId: "digital-marketing",
        title: "Digital Marketing",
        description:
          "Full-funnel campaign strategy across owned and earned channels, coordinated so each channel reinforces the others.",
      },
      {
        anchorId: "performance-ads",
        title: "Performance Ads",
        description:
          "Paid acquisition across search, social, and programmatic, optimized continuously against revenue rather than impressions.",
      },
      {
        anchorId: "content-marketing",
        title: "Content Marketing",
        description:
          "Editorial and product content engineered to answer real buyer questions directly, structured for both readers and AI answer engines.",
      },
    ],
  },
  {
    slug: "founder-branding",
    route: "/capabilities/founder-branding",
    title: "Founder Branding & Storytelling",
    description:
      "Build authority and articulate your vision with a personal brand that earns trust and influence in your market.",
    icon: Mic,
    services: [
      {
        anchorId: "founder-branding",
        title: "Founder Branding",
        description:
          "Position a founder's point of view clearly and consistently, so the person behind the company becomes a reason buyers trust it.",
      },
      {
        anchorId: "founder-podcast-building",
        title: "Founder Podcast Building",
        description:
          "Plan, produce, and distribute a founder-led podcast that compounds into an owned audience instead of a one-off content push.",
      },
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
    href: INSIGHTS_ROUTE,
    imageSrc: "/insights/mvp-scope.svg",
    imageAlt: "",
  },
  {
    title: "Founder Branding: Why Personal Trust Sells Before Product Trust",
    excerpt:
      "Buyers follow people before they follow companies. A founder who shows their reasoning in public builds a sales channel a logo never will.",
    href: INSIGHTS_ROUTE,
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
