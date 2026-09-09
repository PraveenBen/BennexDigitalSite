import Link from "next/link";

export function BottomCtaBanner() {
  return (
    <section aria-labelledby="bottom-cta-heading" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-solar-flare to-radiant-amber px-8 py-16 text-center shadow-xl shadow-solar-flare/20">
        <h2 id="bottom-cta-heading" className="text-section-title text-morning-sand">
          Let&apos;s Build. Start Your Journey.
        </h2>
        <div className="mt-8 flex justify-center">
          <Link
            href="#contact"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-roasted-earth px-8 py-3 font-medium text-morning-sand transition-colors duration-300 hover:bg-clear-sky"
          >
            Start a Strategic Conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
