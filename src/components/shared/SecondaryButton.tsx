import Link from "next/link";
import type { ReactNode } from "react";

interface SecondaryButtonProps {
  href: string;
  children: ReactNode;
}

export function SecondaryButton({ href, children }: SecondaryButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center justify-center rounded-full border border-roasted-earth/20 px-8 py-3 font-medium text-roasted-earth transition-colors duration-300 hover:border-roasted-earth"
    >
      {children}
    </Link>
  );
}
