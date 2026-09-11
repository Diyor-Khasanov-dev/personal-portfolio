"use client";

import React, { useRef, useState } from "react";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: string; // e.g. "col-span-12 md:col-span-8", etc.
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
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...(aosDelay !== undefined ? { "data-aos": aosAnimation, "data-aos-delay": aosDelay } : {})}
      className={`relative group overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/80 p-5 sm:p-6 backdrop-blur-2xl transition-all duration-300 hover:border-zinc-700/90 hover:bg-zinc-900/40 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.65),0_0_20px_rgba(255,255,255,0.03)] ${colSpan} ${className}`}
      style={{
        boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Top Accent Gradient Line */}
      {accentGradient && (
        <div
          className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${accentGradient} opacity-70 group-hover:opacity-100 transition-opacity duration-300 z-20`}
        />
      )}

      {/* Dynamic Cursor Spotlight Effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`,
          }}
        />
      )}

      {/* Ambient static corner glow if enabled */}
      {glow && (
        <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-white/5 blur-3xl pointer-events-none group-hover:bg-white/10 transition-all duration-500 z-0" />
      )}

      {/* Card Content Container */}
      <div className="relative z-10 flex flex-col h-full justify-between">{children}</div>
    </div>
  );
}
