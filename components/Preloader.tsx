"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 15) + 5;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        // Finish Animation
        gsap.to(textRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.5,
          ease: "power3.in",
        });
        
        gsap.to(progressRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          delay: 0.2,
          ease: "power3.inOut"
        });

        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1.2,
          delay: 0.6,
          ease: "power4.inOut",
          onComplete: () => {
            setComplete(true);
            document.body.style.overflow = "auto";
            document.body.style.cursor = "none";
          },
        });
      }
      
      if (textRef.current) {
        textRef.current.innerText = `${progress}%`;
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (complete) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#080808] pointer-events-none"
    >
      <div 
        ref={textRef}
        className="text-[12vw] font-black font-sans uppercase tracking-tighter text-white mix-blend-difference"
      >
        0%
      </div>
      <div className="absolute bottom-12 w-48 h-px bg-neutral-800 overflow-hidden">
        <div 
          ref={progressRef}
          className="h-full bg-[#ff0055] origin-left"
          style={{ width: "100%", transform: "scaleX(0)" }}
        />
      </div>
    </div>
  );
}