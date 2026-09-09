import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface CapabilitySubService {
  anchorId: string;
  title: string;
  description: string;
}

export interface CapabilityCategory {
  slug: string;
  route: string;
  title: string;
  description: string;
  icon: LucideIcon;
  services: readonly CapabilitySubService[];
}

export interface ValuePillar {
  title: string;
  description: string;
}

export interface StatEntry {
  value: string;
  label: string;
}

export interface InsightArticle {
  title: string;
  excerpt: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ClientLogo {
  name: string;
  imageSrc: string;
}

export interface FaqEntry {
  question: string;
  answer: string;
}
