"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from([text1Ref.current, text2Ref.current], {
        y: 150,           // Start 150px lower
        skewY: 10,        // Add a slight tilt
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.2,     // Second line animates 0.2s after the first
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="flex min-h-screen flex-col items-center justify-center bg-[#050505]">
      <div className="overflow-hidden">
        <h1 ref={text1Ref} className="text-[10vw] leading-[8vw] font-black uppercase tracking-tighter text-[#f5f5f5]">
          Creative
        </h1>
      </div>
      <div className="overflow-hidden">
        <h1 ref={text2Ref} className="text-[10vw] leading-[8vw] font-black uppercase tracking-tighter text-[#ff0055]">
          Developer
        </h1>
      </div>
    </section>
  );
}