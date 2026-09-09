interface SectionHeadingProps {
  headingId: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ headingId, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center rounded-full border border-radiant-amber/30 bg-white/60 px-4 py-1.5 text-sm font-medium text-roasted-earth/80">
        {eyebrow}
      </span>
      <h2 id={headingId} className="mt-4 text-section-title text-roasted-earth">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lede text-roasted-earth/70">{description}</p>
      ) : null}
    </div>
  );
}
