const trustPoints = [
  {
    label: "Insured",
    desc: "Work is covered — projects are done with insurance in place.",
  },
  {
    label: "Local",
    desc: "Based in and serving Killeen and the surrounding Central Texas area.",
  },
  {
    label: "General Solutions",
    desc: "One call for handyman, carpentry, and masonry work — no juggling separate contractors.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-b border-brass/20 bg-charcoal">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-light">
              About
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-bone sm:text-4xl">
              JB General Solutions Service
            </h2>
            <p className="mt-4 max-w-md font-body text-sm text-steel md:text-base">
              JB General Solutions Service LLC provides handyman, carpentry,
              and masonry work to homeowners in Killeen and the surrounding
              Central Texas area. Reach out for a straightforward quote on
              your next repair or project.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-brass/20 bg-brass/20 sm:grid-cols-1">
            {trustPoints.map((point) => (
              <div key={point.label} className="bg-ink p-6">
                <h3 className="font-display text-base font-bold uppercase tracking-wide text-brass-light">
                  {point.label}
                </h3>
                <p className="mt-1 font-body text-sm text-steel">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
