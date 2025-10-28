import Link from "next/link";

const links = [
  { href: "#home", label: "Home", active: true },
  { href: "#about", label: "About us" },
  { href: "#what", label: "What we do" },
  { href: "#investors", label: "Investors" },
  { href: "#career", label: "Career" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <div className="flex items-center gap-6">
          <Link
            href="#home"
            className="flex items-center gap-3"
            aria-label="LPKS Home"
          >
            <img src="/Logo.png" alt="LPKS emblem" className="h-7 w-auto" />
            <span className="text-lg font-bold tracking-wide primary-text">
              LPKS
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={
                  "px-1 py-1 text-neutral-500 transition-colors hover:text-[var(--primary)]" +
                  (l.active
                    ? " font-semibold text-[var(--primary)] underline decoration-2 underline-offset-4"
                    : "")
                }
                aria-current={l.active ? "page" : undefined}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <Link
            href="#contact"
            className="btn-primary rounded-lg px-5 py-2 text-sm font-semibold shadow-sm"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
