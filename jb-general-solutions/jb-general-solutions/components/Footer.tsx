export default function Footer() {
  return (
    <footer className="border-t border-brass/20 bg-charcoal">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-center font-mono text-xs text-steel md:flex-row md:text-left">
        <p>
          &copy; {new Date().getFullYear()} JB General Solutions Service LLC.
          All rights reserved.
        </p>
        <p>Killeen &amp; Central Texas · Licensed &amp; Insured</p>
      </div>
    </footer>
  );
}
