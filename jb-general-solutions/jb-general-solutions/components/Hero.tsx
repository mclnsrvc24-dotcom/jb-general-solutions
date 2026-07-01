import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-brass/20 bg-blueprint-grid bg-grid"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink to-ink" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-20 text-center md:py-28">
        <Image
          src="/logo.png"
          alt="JB General Solutions Service — Handyman, Carpentry, Masonry"
          width={168}
          height={168}
          className="rounded-full shadow-[0_0_60px_rgba(201,162,39,0.25)]"
          priority
        />

        <div className="space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-light">
            Killeen &amp; Central Texas · Licensed &amp; Insured
          </p>
          <h1 className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-bone sm:text-5xl md:text-6xl">
            Built right, <span className="text-brass">the first time</span>.
          </h1>
          <p className="mx-auto max-w-xl font-body text-base text-steel md:text-lg">
            Handyman, carpentry, and masonry work for homeowners across
            Killeen and Central Texas — from drywall repair to full trim and
            masonry projects.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-sm bg-brass px-8 py-3 font-display text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-brass-light"
          >
            Request a Quote
          </a>
          <a
            href="tel:+17868514038"
            className="rounded-sm border border-brass/60 px-8 py-3 font-display text-sm font-bold uppercase tracking-wide text-bone transition-colors hover:border-brass hover:text-brass-light"
          >
            Call (786) 851-4038
          </a>
        </div>

        <div className="mt-4 w-full max-w-xs">
          <div className="bubble-track" aria-hidden="true">
            <span className="bubble" />
          </div>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
            Level. Plumb. Done right.
          </p>
        </div>
      </div>
    </section>
  );
}
