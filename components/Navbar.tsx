import Link from "next/link";
import CommandMenu from "./CommandMenu";

export default function Navbar() {
  const navItems = [
    { label: "Overview", href: "/" },
    { label: "Tech Stack", href: "/tech-stack" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Certificates", href: "/certificates" },
    { label: "Education", href: "/education" },
    { label: "Achievements", href: "/achievments" },
    { label: "Languages", href: "/languages" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-black/60 backdrop-blur-md transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium tracking-tight hover:opacity-80 transition-opacity"
          >
            <div className="w-5 h-5 rounded-md bg-zinc-100 text-black flex items-center justify-center font-mono font-bold text-xs">
              Δ
            </div>
            <span className="font-mono text-xs tracking-wider text-zinc-200">
              D<span className="text-zinc-500">.Khasanov</span>
            </span>
          </Link>

          {/* Status Badge - Resend style */}
          <div className="hidden md:flex items-center gap-2 px-2.5 py-0.5 rounded-full border border-zinc-800/80 bg-zinc-900/50 text-[11px] font-mono text-zinc-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span>Available for projects</span>
          </div>
        </div>

        {/* Navigation links - Vercel / Linear inspired minimalist tabs */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/80 rounded-md transition-all duration-150"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Action Trigger */}
        <div className="flex items-center gap-3">
          <CommandMenu />

          <Link
            href="/contact"
            className="px-3 py-1.5 text-xs font-medium text-zinc-900 bg-zinc-100 hover:bg-white rounded-md transition-all duration-150 font-mono shadow-sm"
          >
            Hire me
          </Link>
        </div>
      </div>
    </header>
  );
}
