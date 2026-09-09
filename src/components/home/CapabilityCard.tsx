import type { CapabilityCategory } from "@/types";

interface CapabilityCardProps {
  capabilityCategory: CapabilityCategory;
}

export function CapabilityCard({ capabilityCategory }: CapabilityCardProps) {
  const { anchorId, title, description, icon: Icon, services } = capabilityCategory;

  return (
    <article
      id={anchorId}
      className="group relative flex h-full scroll-mt-24 flex-col gap-4 rounded-2xl border border-roasted-earth/10 bg-white/60 p-8 transition-shadow duration-300 hover:shadow-xl hover:shadow-radiant-amber/10"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-8 bottom-0 h-0.5 origin-left scale-x-0 bg-radiant-amber transition-transform duration-300 ease-out group-hover:scale-x-100"
      />

      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-radiant-amber/10 text-solar-flare">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>

      <h3 className="text-xl font-semibold text-roasted-earth">{title}</h3>
      <p className="text-roasted-earth/70">{description}</p>

      <ul className="mt-2 flex flex-wrap gap-2">
        {services.map((subService) => (
          <li
            key={subService.title}
            className="rounded-full bg-radiant-amber/10 px-3 py-1 text-xs font-medium text-solar-flare"
          >
            {subService.title}
          </li>
        ))}
      </ul>
    </article>
  );
}
