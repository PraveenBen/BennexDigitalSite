import Link from "next/link";

import {
  BUSINESS_CONTACT_EMAIL,
  CAPABILITY_CATEGORIES,
  SITE_DESCRIPTION,
  SITE_NAME,
} from "@/lib/constants";

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Approach", href: "/approach" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-roasted-earth/10 bg-white/40">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight text-roasted-earth">
              {SITE_NAME}
              <span className="text-solar-flare">.</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-roasted-earth/70">{SITE_DESCRIPTION}</p>
            <a
              href={`mailto:${BUSINESS_CONTACT_EMAIL}`}
              className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-solar-flare"
            >
              {BUSINESS_CONTACT_EMAIL}
            </a>
          </div>

          {CAPABILITY_CATEGORIES.map((capabilityCategory) => (
            <div key={capabilityCategory.slug}>
              <Link
                href={capabilityCategory.route}
                className="flex min-h-11 items-center font-semibold text-roasted-earth"
              >
                {capabilityCategory.title}
              </Link>
              <ul className="mt-1 flex flex-col">
                {capabilityCategory.services.map((subService) => (
                  <li key={subService.anchorId}>
                    <Link
                      href={`${capabilityCategory.route}#${subService.anchorId}`}
                      className="flex min-h-11 items-center text-sm text-roasted-earth/70 transition-colors duration-300 hover:text-solar-flare"
                    >
                      {subService.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <span className="flex min-h-11 items-center font-semibold text-roasted-earth">Company</span>
            <ul className="mt-1 flex flex-col">
              {COMPANY_LINKS.map((companyLink) => (
                <li key={companyLink.href}>
                  <Link
                    href={companyLink.href}
                    className="flex min-h-11 items-center text-sm text-roasted-earth/70 transition-colors duration-300 hover:text-solar-flare"
                  >
                    {companyLink.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-roasted-earth/10 pt-8 text-sm text-roasted-earth/60 sm:flex-row">
          <p>
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="flex min-h-11 items-center hover:text-solar-flare">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="flex min-h-11 items-center hover:text-solar-flare">
              Cookie Policy
            </Link>
            <Link href="/sitemap.xml" className="flex min-h-11 items-center hover:text-solar-flare">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
