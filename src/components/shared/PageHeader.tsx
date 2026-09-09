interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="bg-morning-sand px-6 pt-16 pb-16 lg:px-8 lg:pt-20">
      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center rounded-full border border-radiant-amber/30 bg-white/60 px-4 py-1.5 text-sm font-medium text-roasted-earth/80">
          {eyebrow}
        </span>
        <h1 className="mt-4 text-hero text-roasted-earth">{title}</h1>
        {description ? (
          <p className="mx-auto mt-6 max-w-2xl text-lede text-roasted-earth/70">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
