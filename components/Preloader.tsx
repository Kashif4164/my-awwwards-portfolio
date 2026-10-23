"use client";

<<<<<<< HEAD
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Disable scroll during preloader
    document.body.style.overflow = "hidden";

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 12) + 4;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);

        // Animate preloader out
        const tl = gsap.timeline({
          onComplete: () => {
            setIsDone(true);
            document.body.style.overflow = "auto";
          },
        });

        tl.to(".preloader-text", {
          opacity: 0,
          y: -30,
          duration: 0.5,
          ease: "power2.in",
        })
          .to(".preloader-curtain-left", {
            xPercent: -100,
            duration: 1,
            ease: "power4.inOut",
          }, "-=0.2")
          .to(".preloader-curtain-right", {
            xPercent: 100,
            duration: 1,
            ease: "power4.inOut",
          }, "<");
      }
      setProgress(current);
    }, 40);
=======
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
>>>>>>> 7f1e02d0cf5471a8a2782536ada9491d33b2b3a8

    return () => clearInterval(interval);
  }, []);

<<<<<<< HEAD
  if (isDone) return null;

  return (
    <div className="fixed inset-0 z-[10000] pointer-events-none flex">
      {/* Left curtain */}
      <div className="preloader-curtain-left w-1/2 h-full bg-[#080808] border-r border-white/5 pointer-events-auto" />
      {/* Right curtain */}
      <div className="preloader-curtain-right w-1/2 h-full bg-[#080808] border-l border-white/5 pointer-events-auto" />

      {/* Content overlay */}
      <div className="preloader-text fixed inset-0 flex flex-col justify-between p-8 md:p-16 text-white pointer-events-auto z-10">
        <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.3em] text-neutral-500">
          <span>Awwwards Folio Edition</span>
          <span>©2026</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="text-[11px] uppercase tracking-[0.5em] text-[#ff0055] font-semibold animate-pulse">
            Loading Experience
          </span>
          <div className="text-7xl md:text-9xl font-black font-mono tracking-tighter">
            {progress.toString().padStart(3, "0")}%
          </div>
        </div>

        <div className="w-full flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-neutral-500">
          <span>Creative Engineering</span>
          <div className="w-32 h-1 bg-neutral-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#ff0055] transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span>Mumbai / IST</span>
        </div>
      </div>
    </div>
  );
}
=======
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
>>>>>>> 7f1e02d0cf5471a8a2782536ada9491d33b2b3a8
