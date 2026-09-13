"use client";

import { useState } from "react";
import {
  Mail,
  Calendar,
  Send,
  Copy,
  Check,
  ArrowUpRight,
  Building2,
  Globe,
  Sparkles,
  BookOpen,
  Clock,
  CheckCircle2,
} from "lucide-react";
import BentoCard from "@/components/ui/BentoCard";

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = "bdiyorxasanov@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const socials = [
    {
      name: "Telegram Direct",
      handle: "@Diyor_Khasanov_dev",
      description: "Fastest way to reach me for immediate inquiries, quick tech syncs, or urgent updates.",
      href: "https://t.me/Diyor_Khasanov_dev",
      icon: Send,
      accent: "from-teal-500/80 via-sky-400/50 to-transparent",
      badge: "Instant Chat",
      span: "col-span-12 md:col-span-6 lg:col-span-4",
    },
    {
      name: "Calendly Meeting",
      handle: "15-min Discovery Call",
      description: "Schedule a 1-on-1 video call directly on Calendly for strategy, hiring, or project scope.",
      href: "https://calendly.com/bdiyorxasanov",
      icon: Calendar,
      accent: "from-amber-500/80 via-yellow-400/50 to-transparent",
      badge: "Schedule",
      span: "col-span-12 md:col-span-6 lg:col-span-4",
    },
    {
      name: "GitHub",
      handle: "@Diyor-Khasanov-dev",
      description: "Explore open-source repositories, system architectures, and recent code activity.",
      href: "https://github.com/Diyor-Khasanov-dev",
      icon: ({ className }: { className?: string }) => (
        <svg
          className={className}
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
      accent: "from-zinc-400 via-zinc-600 to-transparent",
      badge: "Code Repos",
      span: "col-span-12 md:col-span-6 lg:col-span-4",
    },
    {
      name: "LinkedIn",
      handle: "diyor-khasanov",
      description: "Connect professionally, view endorsements, recommendations, and formal experience history.",
      href: "https://linkedin.com/in/diyor-khasanov",
      icon: ({ className }: { className?: string }) => (
        <svg
          className={className}
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.64a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
        </svg>
      ),
      accent: "from-sky-500/80 via-blue-600/50 to-transparent",
      badge: "Professional",
      span: "col-span-12 md:col-span-6 lg:col-span-6",
    },
    {
      name: "Telegram Tech Channel",
      handle: "@bdiyorxasanov",
      description: "Personal channel & blog sharing thoughts on web engineering, Vue/React, NestJS, and technology.",
      href: "https://t.me/bdiyorxasanov",
      icon: BookOpen,
      accent: "from-indigo-500/80 via-purple-500/50 to-transparent",
      badge: "Blog & Channel",
      span: "col-span-12 md:col-span-12 lg:col-span-6",
    },
  ];

  return (
    <main className="max-w-5xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-20 space-y-10 overflow-hidden">
      {/* Header Banner */}
      <div data-aos="fade-down" data-aos-delay="100" className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 text-zinc-200 text-xs font-mono">
          <Mail className="w-3.5 h-3.5 text-whitesmoke" />
          <span>Contact & Connection Methods</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Let’s Connect & Work Together
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-2xl">
          Whether you are looking to hire a senior frontend/fullstack engineer, discuss mobile app development, or request technical consultation — here are all the direct ways to reach me.
        </p>
      </div>

      {/* Main Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Direct Email Featured Bento Card (Primary Method) */}
        <BentoCard
          colSpan="col-span-12 md:col-span-8"
          accentGradient="from-whitesmoke via-zinc-400 to-transparent"
          aosDelay={150}
          glow
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Mail className="w-4 h-4 text-whitesmoke" />
                <span>Primary Email Address</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Primary Contact
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-zinc-900/80 border border-zinc-800/90 rounded-xl p-4">
                <span className="text-base sm:text-xl font-mono font-bold text-white break-all">
                  {emailAddress}
                </span>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-xs font-mono text-zinc-200 hover:text-white transition-all cursor-pointer shadow-sm active:scale-95"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-300 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${emailAddress}`}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-white hover:bg-zinc-100 text-zinc-950 text-xs font-mono font-bold transition-all shadow-sm hover:scale-[1.02] active:scale-95"
                  >
                    <span>Send Mail</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                Best channel for detailed project proposals, official job offers, contract opportunities, and architectural consulting requests. I check inbox daily and guarantee a response within 24 hours.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Status & Availability Info Bento Card */}
        <BentoCard
          colSpan="col-span-12 md:col-span-4"
          accentGradient="from-indigo-500/80 via-blue-500/50 to-transparent"
          aosDelay={200}
        >
          <div className="space-y-4 h-full flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-indigo-400" />
                  <span>Status & Location</span>
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
              </div>

              <div className="space-y-2.5 text-xs font-mono text-zinc-300">
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                  <span>Samarkand, Uzbekistan (GMT+5)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                  <span>Co-Founder @ A.L.I.A</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                  <span>Response Time: &lt; 24 hours</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-900/80">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Available for Fullstack & Mobile</span>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Social & Connection Channels Bento Cards */}
        {socials.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <BentoCard
              key={social.name}
              colSpan={social.span}
              accentGradient={social.accent}
              aosDelay={250 + index * 80}
            >
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col justify-between h-full space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-whitesmoke group-hover:border-zinc-700 transition-all">
                      <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-white group-hover:text-whitesmoke block">
                        {social.name}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500">
                        {social.handle}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-400 bg-zinc-900/90 border border-zinc-800 px-2 py-0.5 rounded">
                      {social.badge}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>

                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  {social.description}
                </p>
              </a>
            </BentoCard>
          );
        })}
      </div>
    </main>
  );
}
