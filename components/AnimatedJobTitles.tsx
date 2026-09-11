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
    <span className="inline-block relative min-w-[260px] sm:min-w-[340px] text-transparent bg-clip-text bg-gradient-to-r from-whitesmoke via-zinc-200 to-zinc-400 font-semibold">
      <span
        className={`inline-block transition-all duration-350 transform ${
          fadeState === "in"
            ? "opacity-100 translate-y-0 filter blur-0 scale-100"
            : "opacity-0 -translate-y-3 filter blur-sm scale-95"
        }`}
      >
        {titles[index]}
      </span>
    </span>
  );
}
