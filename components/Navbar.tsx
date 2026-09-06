"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, ArrowUpRight } from "lucide-react";
import CommandMenu from "./CommandMenu";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-black/70 backdrop-blur-xl transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/"
            className="flex items-center gap-2.5 group transition-opacity"
          >
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-white via-zinc-200 to-zinc-400 text-black flex items-center justify-center font-mono font-bold text-xs shadow-sm group-hover:scale-105 transition-transform">
              Δ
            </div>
            <span className="font-mono text-xs tracking-wider text-zinc-100 group-hover:text-white transition-colors">
              D<span className="text-zinc-500">.Khasanov</span>
            </span>
          </Link>

          {/* Status Badge - Resend style */}
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-[11px] font-mono text-emerald-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span>Available for hire</span>
          </div>
        </div>

        {/* Desktop Navigation links - Vercel / Linear inspired minimalist tabs */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-150 relative ${
                  isActive
                    ? "text-white bg-zinc-800/90 shadow-sm font-semibold"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/80"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-emerald-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          <CommandMenu />

          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-zinc-950 bg-zinc-100 hover:bg-white rounded-md transition-all duration-150 font-mono shadow-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:-translate-y-0.5"
          >
            <span>Hire me</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-950" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            type="button"
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-2xl px-4 py-4 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between px-2 pb-2 border-b border-zinc-900">
            <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Navigation Menu</span>
            </span>
            <div className="flex items-center gap-2 px-2 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-[10px] font-mono text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available</span>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-1.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-xs font-mono rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-semibold"
                      : "bg-zinc-900/60 border border-zinc-800/80 text-zinc-300 hover:bg-zinc-800/80 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
                </Link>
              );
            })}
          </nav>

          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-mono text-xs font-semibold text-center block shadow-sm"
            >
              Hire Me / Contact Direct
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
