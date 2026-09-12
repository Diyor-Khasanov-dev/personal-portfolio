"use client";

import { useEffect, useState } from "react";

const titles = [
  "Software Engineer",
  "Co-Founder @ A.L.I.A",
  "Senior Frontend Engineer",
  "Fullstack & Mobile Specialist",
  "UI Architect",
];

export default function AnimatedJobTitles() {
  const [index, setIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("out");
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setFadeState("in");
      }, 350);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-flex items-center text-white font-bold tracking-tight">
      <span
        className={`inline-block transition-all duration-300 transform text-white bg-zinc-800/90 border border-zinc-700/80 px-3 py-1 rounded-lg shadow-sm ${
          fadeState === "in"
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-2 scale-95"
        }`}
      >
        {titles[index]}
      </span>
    </span>
  );
}
