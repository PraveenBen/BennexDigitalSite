import Image from "next/image";

import { buildAssetPath } from "@/lib/buildAssetPath";
import { CLIENT_LOGOS } from "@/lib/constants";

export function ClientMarquee() {
  return (
    <section aria-label="Trusted by businesses across industries" className="border-y border-roasted-earth/10 bg-white/40 py-12">
      <p className="mx-auto max-w-7xl px-6 text-center text-sm font-medium text-roasted-earth/60 lg:px-8">
        Trusted by businesses across industries
      </p>

      <div className="relative mt-8 overflow-hidden">
        <div className="flex w-max gap-16 motion-safe:animate-[marquee-scroll_30s_linear_infinite] motion-reduce:animate-none">
          {/* unoptimized: these are already-tiny local SVGs, and routing them through the
              image optimizer's raster-format negotiation broke rendering for at least one of them. */}
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((clientLogo, clientLogoIndex) => (
            <Image
              key={`${clientLogo.name}-${clientLogoIndex}`}
              src={buildAssetPath(clientLogo.imageSrc)}
              alt={clientLogo.name}
              width={160}
              height={48}
              unoptimized
              aria-hidden={clientLogoIndex >= CLIENT_LOGOS.length}
              className="h-12 w-auto shrink-0 opacity-70 grayscale"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
