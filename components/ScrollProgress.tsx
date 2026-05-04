"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      const progress = (scrolled / total) * 100;
      if (barRef.current) {
        barRef.current.style.width = `${progress}%`;
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[9999] h-[2px] w-full bg-transparent pointer-events-none">
      <div
        ref={barRef}
        className="h-full w-0 bg-[#ff0055]"
      />
    </div>
  );
}