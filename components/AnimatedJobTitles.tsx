"use client";

import { useEffect, useState } from "react";

const titles = [
  "Fullstack Developer",
  "Mobile Engineer",
  "Senior Frontend Engineer",
  "Software Architect",
];

export default function AnimatedJobTitles() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block relative min-w-[280px] sm:min-w-[360px] text-zinc-100">
      <span
        className={`inline-block transition-all duration-300 transform ${
          fade
            ? "opacity-100 translate-y-0 filter blur-0"
            : "opacity-0 -translate-y-2 filter blur-sm"
        }`}
      >
        {titles[index]}
      </span>
    </span>
  );
}
