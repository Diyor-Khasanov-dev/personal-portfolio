"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowUpRight,
  Code2,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Trophy,
  Languages,
  Home,
  Sparkles,
} from "lucide-react";
import CommandMenu from "./CommandMenu";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for extra blur/border emphasis
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

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
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/75 backdrop-blur-xl border-b border-zinc-800/80 shadow-2xl shadow-black/50"
          : "bg-black/50 backdrop-blur-md border-b border-zinc-800/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Brand / Logo & Status */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="group flex items-center gap-2.5 text-sm font-medium tracking-tight hover:opacity-90 transition-all duration-200"
            aria-label="Home"
          >
            <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-700/80 text-zinc-100 font-mono font-bold text-xs shadow-inner group-hover:border-zinc-500 group-hover:bg-zinc-800 transition-all duration-200">
              <span className="text-zinc-200 group-hover:scale-110 transition-transform duration-200">
                Δ
              </span>
              <span className="absolute -inset-0.5 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs font-semibold tracking-wider text-zinc-100 flex items-center gap-1">
                D<span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">.Khasanov</span>
              </span>
              <span className="text-[10px] font-mono text-zinc-500 -mt-0.5 hidden sm:inline-block">
                Software Engineer
              </span>
            </div>
          </Link>

          <div className="h-4 w-px bg-zinc-800/80 hidden sm:block" />

          {/* Status Badge - Resend / Vercel style */}
          <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-[11px] font-mono text-emerald-400/90 shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-tight">Available for projects</span>
          </div>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-0.5 p-1 rounded-full border border-zinc-800/80 bg-zinc-950/50 backdrop-blur-md shadow-inner"
        >
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? "text-zinc-100 bg-zinc-800/90 shadow-sm border border-zinc-700/60 font-semibold"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60"
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          <CommandMenu />

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="relative inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-zinc-950 bg-zinc-100 hover:bg-white rounded-lg transition-all duration-200 font-mono shadow-md hover:shadow-zinc-200/10 active:scale-95 group"
          >
            <Sparkles className="w-3.5 h-3.5 text-zinc-700 group-hover:text-black group-hover:rotate-12 transition-transform duration-200" />
            <span>Hire me</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            type="button"
            className="lg:hidden p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/80 border border-transparent hover:border-zinc-800 transition-all duration-200"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-zinc-200" />
            ) : (
              <Menu className="w-5 h-5 text-zinc-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 z-50 bg-black/80 backdrop-blur-2xl border-t border-zinc-800/80 flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="space-y-6">
            {/* Mobile Status Badge */}
            <div className="flex items-center justify-between px-3.5 py-2 rounded-xl border border-emerald-500/20 bg-emerald-950/20 text-xs font-mono text-emerald-400">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for new projects</span>
              </div>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Status</span>
            </div>

            {/* Links Grid / List */}
            <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 ${
                      isActive
                        ? "bg-zinc-800/80 text-white border border-zinc-700/60 shadow-lg"
                        : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60 border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? "text-emerald-400" : "text-zinc-500"}`} />
                      <span>{item.label}</span>
                    </div>
                    {isActive ? (
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/50">
                        Active
                      </span>
                    ) : (
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Mobile Footer Actions */}
          <div className="pt-6 border-t border-zinc-800/80 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 px-4 rounded-xl text-center text-sm font-semibold font-mono text-zinc-950 bg-zinc-100 hover:bg-white transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-zinc-700" />
              <span>Get in Touch / Hire Me</span>
            </Link>
            <p className="text-center text-[11px] font-mono text-zinc-500">
              © {new Date().getFullYear()} Diyor Khasanov
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
