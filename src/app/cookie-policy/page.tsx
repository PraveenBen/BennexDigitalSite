import type { Metadata } from "next";

import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cookie Policy",
};

export default function CookiePolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
      <h1 className="text-section-title text-roasted-earth">Cookie Policy</h1>
      <p className="mt-6 text-roasted-earth/70">
        This is a placeholder cookie policy for {SITE_NAME}. It has not yet been reviewed by
        counsel and should be replaced with a complete, jurisdiction-appropriate policy before
        this site sets any non-essential cookies in production.
      </p>
    </article>
  );
}
