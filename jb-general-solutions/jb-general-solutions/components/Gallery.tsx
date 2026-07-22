import Image from "next/image";

type GalleryItem =
  | { type: "photo"; src: string; alt: string; label: string }
  | { type: "placeholder"; label: string };

const items: GalleryItem[] = [
  {
    type: "photo",
    src: "/gallery/outlet.png",
    alt: "Outlet replacement — before and after, old cracked outlet replaced with a new outlet",
    label: "Electrical — Outlet Replacement",
  },
  {
    type: "photo",
    src: "/gallery/switch.jpg",
    alt: "Light switch replacement — before and after, old switch plate replaced with a new switch plate",
    label: "Electrical — Switch Replacement",
  },
  {
    type: "photo",
    src: "/gallery/vent.png",
    alt: "Vent replacement — before and after, old metal vent replaced with a new vent cover",
    label: "Vent Replacement",
  },
  { type: "placeholder", label: "Carpentry" },
  { type: "placeholder", label: "Masonry" },
  { type: "placeholder", label: "Drywall" },
  { type: "placeholder", label: "Trim Molding" },
  { type: "placeholder", label: "Windows & Doors" },
];

function PlaceholderTile({ label }: { label: string }) {
  return (
    <div className="group relative flex aspect-[4/3] flex-col items-center justify-center gap-3 overflow-hidden rounded-sm border border-dashed border-brass/30 bg-charcoal transition-colors hover:border-brass/60">
      <div className="absolute inset-0 bg-blueprint-grid bg-grid opacity-40" />
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        className="relative text-brass/60"
        aria-hidden="true"
      >
        <path
          d="M4 16l4-4 3 3 5-6 4 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="3"
          y="4"
          width="18"
          height="16"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
      <span className="relative font-display text-sm font-bold uppercase tracking-wide text-bone">
        {label}
      </span>
      <span className="relative font-mono text-[10px] uppercase tracking-[0.2em] text-steel">
        Photos coming soon
      </span>
    </div>
  );
}

function PhotoTile({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <div className="overflow-hidden rounded-sm border border-brass/20 bg-charcoal">
      <div className="relative aspect-[3/4] w-full bg-charcoal">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain"
        />
      </div>
      <p className="border-t border-brass/20 px-4 py-3 font-display text-sm font-bold uppercase tracking-wide text-bone">
        {label}
      </p>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="border-b border-brass/20 bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-light">
              Recent work
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-bone sm:text-4xl">
              Project Gallery
            </h2>
          </div>
          <p className="font-body text-sm text-steel md:max-w-xs">
            More photos are being added as jobs are completed.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) =>
            item.type === "photo" ? (
              <PhotoTile
                key={item.src}
                src={item.src}
                alt={item.alt}
                label={item.label}
              />
            ) : (
              <PlaceholderTile key={item.label} label={item.label} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
