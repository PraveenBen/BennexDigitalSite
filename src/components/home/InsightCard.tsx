import Image from "next/image";
import Link from "next/link";

import type { InsightArticle } from "@/types";

interface InsightCardProps {
  insightArticle: InsightArticle;
}

export function InsightCard({ insightArticle }: InsightCardProps) {
  const { title, excerpt, href, imageSrc, imageAlt } = insightArticle;

  return (
    <article className="overflow-hidden rounded-2xl border border-roasted-earth/10 bg-white/60">
      {/* unoptimized: local placeholder SVG cover art needs no resizing or format conversion. */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={800}
        height={450}
        unoptimized
        className="h-auto w-full"
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-roasted-earth">
          <Link href={href} className="hover:text-solar-flare">
            {title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-roasted-earth/70">{excerpt}</p>
      </div>
    </article>
  );
}
