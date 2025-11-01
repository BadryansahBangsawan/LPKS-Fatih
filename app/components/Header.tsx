import Link from "next/link";

const links = [
  { href: "#home", label: "Home", active: true },
  { href: "#about", label: "About us" },
  { href: "#projects", label: "Operations" },
  { href: "#stats", label: "Investors" },
  { href: "#career", label: "Career" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 transform scale-110 origin-center">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12 py-6">
        <div className="flex items-center gap-5">
          <Link
            href="#home"
            className="flex items-center gap-5 transition-opacity hover:opacity-80"
            aria-label="LPKS Home"
          >
            <img src="/Logo.png" alt="LPKS emblem" className="h-12 w-auto" />
            <span className="text-2xl font-bold tracking-wide text-[#8b5a2b]">
              LPKS
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-10">
          <nav className="hidden items-center gap-2 text-base md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-2 text-neutral-500 transition-all hover:text-[#8b5a2b] hover:border-b-2 hover:border-[#8b5a2b] hover:-translate-y-px smooth-scroll ${
                  l.active ? " font-semibold text-[#8b5a2b]" : ""
                }`}
                aria-current={l.active ? "page" : undefined}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#contact"
            className="rounded-lg bg-[#8b5a2b] px-8 py-4 text-base font-semibold text-white shadow-sm transition-all hover:bg-[#744b23] hover:shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
