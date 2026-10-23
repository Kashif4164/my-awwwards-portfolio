"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLSpanElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    }
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const cursor = cursorRef.current;
    const text = cursorTextRef.current;
    if (!cursor || !text) return;

    let targetX = 0;
    let targetY = 0;

    // Quick set mouse position for instant update logic
    window.addEventListener("mousemove", (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    });

    // Use GSAP ticker for ultra-smooth follow physics
    gsap.ticker.add(() => {
      gsap.to(cursor, {
        x: targetX,
        y: targetY,
        duration: 0.15, // The ease factor
        ease: "power2.out"
      });
    });

    // Magnetic and Interaction logic
    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      
      // if dataset exists for magnetic or actionable items
      if (target.closest("[data-magnetic]")) {
        gsap.to(cursor, { scale: 3.5, backgroundColor: "transparent", border: "1px solid rgba(255, 255, 255, 0.4)", duration: 0.3 });
      } else if (target.closest("a, button")) {
        gsap.to(cursor, { scale: 1.5, backgroundColor: "#ff0055", border: "none", duration: 0.3 });
      }
      
      // View text overlay logic (often used in Awwwards sites for projects)
      if (target.closest("[data-cursor-text]")) {
        const customText = target.closest("[data-cursor-text]")?.getAttribute("data-cursor-text") || "";
        text.innerText = customText;
        gsap.to(cursor, { scale: 4, backgroundColor: "#ff0055", border: "none", duration: 0.3 });
        gsap.to(text, { opacity: 1, scale: 0.25, duration: 0.3 }); // Math to reverse the scale
      }
    };

    const handleMouseLeave = () => {
      text.innerText = "";
      gsap.to(cursor, { scale: 1, backgroundColor: "#fff", border: "none", duration: 0.3 });
      gsap.to(text, { opacity: 0, duration: 0.3 });
    };

    const handleMouseDown = () => {
      gsap.to(cursor, { scale: 0.8, duration: 0.1 });
    };

    const handleMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2, ease: "back.out(1.7)" });
    };

    // Apply listeners
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      gsap.ticker.remove(() => {});
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference flex items-center justify-center -translate-x-1/2 -translate-y-1/2 will-change-transform"
      style={{ backfaceVisibility: "hidden" }}
    >
      <span 
        ref={cursorTextRef} 
        className="opacity-0 text-[#000] font-black uppercase text-[10px] tracking-widest whitespace-nowrap" 
      />
    </div>
  );
}