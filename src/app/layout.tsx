import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLdScript } from "@/components/shared/JsonLdScript";
import {
  SITE_DESCRIPTION,
  SITE_META_TITLE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_META_TITLE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "product strategy consulting",
    "technology consulting",
    "cloud architecture",
    "SEO agency",
    "AEO",
    "answer engine optimization",
    "performance marketing",
    "founder branding",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${SITE_META_TITLE}`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_META_TITLE}`,
    description: SITE_DESCRIPTION,
  },
};

const PROFESSIONAL_SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  areaServed: "Worldwide",
  priceRange: "$$",
  serviceType: [
    "Product Strategy & Management",
    "Technology Consulting & Engineering",
    "Digital & Performance Growth",
    "Founder Branding & Storytelling",
  ],
} as const;

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth`}>
      <body className="flex min-h-screen flex-col bg-morning-sand font-sans text-roasted-earth antialiased selection:bg-radiant-amber selection:text-morning-sand">
        <JsonLdScript schema={PROFESSIONAL_SERVICE_SCHEMA} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
