export function HeroOrb() {
  return (
    <div className="relative flex justify-center lg:w-1/2">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 scale-150 rounded-full bg-gradient-to-tr from-radiant-amber/20 to-clear-sky/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="group relative flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-2xl border border-white/50 bg-gradient-to-br from-white/40 to-white/10 shadow-2xl backdrop-blur-md"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-solar-flare/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-4 border-radiant-amber/30">
          <div className="absolute h-full w-full motion-safe:animate-[spin_4s_linear_infinite] rounded-full border-4 border-solar-flare/50" />
          <div className="h-16 w-16 rounded-full bg-radiant-amber shadow-[0_0_40px_rgba(245,158,11,0.8)] motion-safe:animate-pulse" />
        </div>
      </div>
    </div>
  );
}
