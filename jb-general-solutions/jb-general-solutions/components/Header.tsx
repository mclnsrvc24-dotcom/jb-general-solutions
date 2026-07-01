import Image from "next/image";
import MobileNav from "./MobileNav";

const links = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brass/20 bg-ink/90 backdrop-blur relative">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="JB General Solutions Service logo"
            width={44}
            height={44}
            className="rounded-full"
            priority
          />
          <span className="font-display text-lg font-bold uppercase tracking-wide text-bone">
            JB General Solutions
          </span>
        </a>
        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-steel transition-colors hover:text-brass-light"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="tel:+17868514038"
            className="whitespace-nowrap rounded-sm border border-brass px-2.5 py-2 font-mono text-[10px] font-medium text-brass-light transition-colors hover:bg-brass hover:text-ink sm:px-4 sm:text-sm"
          >
            (786) 851-4038
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
