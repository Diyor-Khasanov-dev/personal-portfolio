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
    { label: "Education", href: "/education" },
    { label: "Achievements", href: "/achievments" },
    { label: "Languages", href: "/languages" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/70 bg-black/80 backdrop-blur-2xl transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2">
        {/* Brand / Logo + Status */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <Link
            href="/"
            className="flex items-center gap-2.5 group transition-all duration-200"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-b from-white via-zinc-200 to-zinc-400 text-black flex items-center justify-center font-mono font-bold text-xs shadow-[0_0_12px_rgba(255,255,255,0.25)] group-hover:scale-105 group-hover:shadow-[0_0_18px_rgba(255,255,255,0.4)] transition-all">
              Δ
            </div>
            <span className="font-mono text-xs font-medium tracking-wide text-zinc-100 group-hover:text-white transition-colors">
              D<span className="text-zinc-500 group-hover:text-zinc-400 transition-colors">.Khasanov</span>
            </span>
          </Link>

          {/* Status Badge - Resend style */}
          <Link
            href="/contact"
            className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 hover:bg-white/15 hover:border-white/40 text-[11px] font-mono text-zinc-200 transition-all cursor-pointer group shadow-[0_0_12px_rgba(255,255,255,0.1)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-200 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-100"></span>
            </span>
            <span className="leading-none text-[11px]">Available for hire</span>
          </Link>
        </div>

        {/* Desktop Navigation links - Refined sleek active tabs */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 overflow-x-auto no-scrollbar py-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all duration-200 relative whitespace-nowrap flex items-center justify-center ${
                  isActive
                    ? "text-white bg-zinc-800/90 border border-zinc-700/60 shadow-md font-semibold"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/80 border border-transparent"
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2.5px] bg-whitesmoke rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Trigger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <CommandMenu />

          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold font-mono text-zinc-950 bg-white hover:bg-zinc-100 rounded-lg transition-all duration-200 shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_22px_rgba(255,255,255,0.35)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Hire me</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-950 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            type="button"
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-zinc-800/80 bg-zinc-950/95 backdrop-blur-2xl px-4 py-4 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
          <div className="flex items-center justify-between px-1 pb-2 border-b border-zinc-900">
            <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-zinc-200" />
              <span>Navigation</span>
            </span>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-white/20 bg-white/10 text-[10px] font-mono text-zinc-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-100 animate-pulse" />
              <span>Available for hire</span>
            </Link>
          </div>

          <nav className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 text-xs font-mono rounded-xl transition-all flex items-center justify-between ${
                    isActive
                      ? "bg-white/15 border border-white/30 text-white font-semibold shadow-sm"
                      : "bg-zinc-900/80 border border-zinc-800/80 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-whitesmoke shadow-[0_0_6px_rgba(255,255,255,1)]" />}
                </Link>
              );
            })}
          </nav>

          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-950 font-mono text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-[0.99]"
            >
              <span>Hire Me / Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-950" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
