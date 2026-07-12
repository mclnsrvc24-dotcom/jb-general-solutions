import Image from "next/image";

export default function OwnerIntro() {
  return (
    <section className="border-b border-brass/20 bg-ink">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-[1.1fr_1fr]">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-brass/30 shadow-[0_0_50px_rgba(201,162,39,0.12)]">
          <Image
            src="/jose.png"
            alt="Jose Gomez Borges, owner of JB General Solutions, standing in front of his work truck"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
        </div>

        <div className="text-center md:text-left">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-light">
            Meet the owner
          </p>
          <blockquote className="mt-3 font-display text-2xl font-bold leading-tight text-bone sm:text-3xl">
            &ldquo;Hi, I&apos;m Jose, owner of JB General Solutions. I believe
            in doing every project the right way{" "}
            <span className="text-brass">the first time</span>.&rdquo;
          </blockquote>
          <p className="mt-4 font-mono text-sm uppercase tracking-wide text-steel">
            Jose C. Gomez Borges — Owner, JB General Solutions Service LLC
          </p>
        </div>
      </div>
    </section>
  );
}
