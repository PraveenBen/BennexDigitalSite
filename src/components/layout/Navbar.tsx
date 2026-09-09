import Link from "next/link";

import { CapabilitiesMegaMenu } from "@/components/layout/CapabilitiesMegaMenu";
import { MobileNavToggle } from "@/components/layout/MobileNavToggle";
import { PrimaryButton } from "@/components/shared/PrimaryButton";
import { PRIMARY_NAV_LINKS, SITE_NAME } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="relative z-50 border-b border-roasted-earth/5 bg-morning-sand">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight text-roasted-earth">
          {SITE_NAME}
          <span className="text-solar-flare">.</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 font-medium">
            <li>
              <CapabilitiesMegaMenu />
            </li>
            {PRIMARY_NAV_LINKS.map((navLink) => (
              <li key={navLink.href}>
                <a
                  href={navLink.href}
                  className="flex min-h-11 items-center transition-colors duration-300 hover:text-solar-flare"
                >
                  {navLink.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <PrimaryButton href="#contact">Start a Project</PrimaryButton>
        </div>

        <MobileNavToggle navLinks={PRIMARY_NAV_LINKS} />
      </div>
    </header>
  );
}
