"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in milliseconds
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getDirectionStyles = () => {
    if (isVisible) return "opacity-100 translate-x-0 translate-y-0 scale-100";

    switch (direction) {
      case "up":
        return "opacity-0 translate-y-8 scale-[0.98]";
      case "down":
        return "opacity-0 -translate-y-8 scale-[0.98]";
      case "left":
        return "opacity-0 translate-x-8 scale-[0.98]";
      case "right":
        return "opacity-0 -translate-x-8 scale-[0.98]";
      case "none":
        return "opacity-0 scale-[0.96]";
      default:
        return "opacity-0 translate-y-8";
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform ${getDirectionStyles()} ${className}`}
    >
      {children}
    </div>
  );
}
