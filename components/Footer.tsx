import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Overview", href: "/" },
    { label: "Tech Stack", href: "/tech-stack" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Certificates", href: "/certificates" },
    { label: "Education", href: "/education" },
    { label: "Achievements", href: "/achievments" },
    { label: "Languages", href: "/languages" },
    { label: "Contact", href: "/contact" },
  ];

  const socials = [
    { name: "GitHub", href: "https://github.com/Diyor-Khasanov-dev" },
    { name: "LinkedIn", href: "https://linkedin.com/in/diyor-khasanov" },
    { name: "Telegram", href: "https://t.me/Diyor_Khasanov_dev" },
    { name: "Calendly", href: "https://calendly.com/bdiyorxasanov" },
  ];

  return (
    <footer className="w-full border-t border-zinc-800/80 bg-black/80 backdrop-blur-md mt-auto relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        {/* Top Ribbon */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-zinc-900">
          {/* Brand & Tagline */}
          <div className="md:col-span-2 space-y-3">
            <Link href="/" className="flex items-center gap-2.5 inline-block">
              <div className="w-6 h-6 rounded-lg bg-white text-black flex items-center justify-center font-mono font-bold text-xs">
                Δ
              </div>
              <span className="font-mono text-sm font-bold tracking-tight text-white">
                Diyor Khasanov
              </span>
            </Link>
            <p className="text-xs text-zinc-400 font-sans max-w-sm leading-relaxed">
              Software Engineer & Co-Founder @ A.L.I.A. Architecting high-impact web applications, resilient APIs, and mobile systems with sub-50ms performance targets.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 pt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for engineering roles & consultations</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              Sitemap
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials & Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              Connect
            </h4>
            <div className="space-y-2 text-xs font-mono">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between text-zinc-400 hover:text-white transition-colors group"
                >
                  <span>{social.name}</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-zinc-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© {currentYear} Diyor Khasanov. All rights reserved.</p>

          <div className="flex items-center gap-1.5 text-zinc-400">
            <span>Designed & Engineered with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/20 inline" />
            <span>using Next.js 16 & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
