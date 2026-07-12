function StarRow({ filled = 0 }: { filled?: number }) {
  return (
    <div className="flex gap-1" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          className={i < filled ? "text-brass" : "text-steel/30"}
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="border-b border-brass/20 bg-charcoal">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-light">
              Customer feedback
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-bone sm:text-4xl">
              Reviews
            </h2>
          </div>
          <p className="font-body text-sm text-steel md:max-w-xs">
            We&apos;re just getting our review section started — real
            customer reviews will appear here as jobs are completed.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 rounded-sm border border-dashed border-brass/30 bg-ink p-6"
            >
              <StarRow filled={0} />
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">
                Review coming soon
              </p>
              <div className="mt-auto h-px w-8 bg-brass/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
