import React from "react";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: string; // e.g. "col-span-1", "col-span-1 md:col-span-2", etc.
  glow?: boolean;
  accentGradient?: string;
  aosDelay?: number;
  aosAnimation?: string;
}

export default function BentoCard({
  children,
  className = "",
  colSpan = "",
  glow = false,
  accentGradient,
  aosDelay,
  aosAnimation = "fade-up",
}: BentoCardProps) {
  return (
    <div
      {...(aosDelay !== undefined ? { "data-aos": aosAnimation, "data-aos-delay": aosDelay } : {})}
      className={`relative group overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/50 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] ${colSpan} ${className}`}
    >
      {/* Top Accent Gradient Border */}
      {accentGradient && (
        <div
          className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${accentGradient} opacity-80 group-hover:opacity-100 transition-opacity`}
        />
      )}

      {/* Subtle background radial glow on hover */}
      {glow && (
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-white/5 blur-2xl pointer-events-none group-hover:bg-white/10 transition-all duration-500" />
      )}

      <div className="relative z-10 flex flex-col h-full justify-between">{children}</div>
    </div>
  );
}
