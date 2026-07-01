const services = [
  {
    title: "Windows & Doors",
    desc: "Installation and replacement of windows and doors, fitted and sealed properly.",
  },
  {
    title: "Drywall Repair",
    desc: "Patching, texture matching, and finishing for holes, cracks, and water damage.",
  },
  {
    title: "Trim Molding",
    desc: "Baseboards, crown molding, and casing — clean lines, tight joints.",
  },
  {
    title: "Electrical",
    desc: "Fixture installs, outlet and switch repair, and general electrical work.",
  },
  {
    title: "Plumbing",
    desc: "Fixture installs, leak repair, and general plumbing fixes.",
  },
  {
    title: "Masonry",
    desc: "Brick, block, and concrete repair and construction work.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-brass/20 bg-charcoal">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-light">
            What we do
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-bone sm:text-4xl">
            Services
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-brass/20 bg-brass/20 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-ink p-6 transition-colors hover:bg-charcoal"
            >
              <div className="mb-4 h-px w-10 bg-brass transition-all group-hover:w-16" />
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-bone">
                {service.title}
              </h3>
              <p className="mt-2 font-body text-sm text-steel">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
