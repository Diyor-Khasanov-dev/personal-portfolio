"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(3)) * 100);
      }
    };

    window.addEventListener("scroll", updateScrollCompletion);
    updateScrollCompletion();

    return () => {
      window.removeEventListener("scroll", updateScrollCompletion);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-50 pointer-events-none bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-whitesmoke via-zinc-300 to-zinc-500 transition-all duration-150 ease-out shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        style={{ width: `${completion}%` }}
      />
    </div>
  );
}
