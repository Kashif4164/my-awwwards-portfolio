"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const paragraph = 
    "I am a creative developer who bridges the gap between design and technology. I don't just build websites; I craft immersive digital experiences that leave a lasting impression.";

  useGSAP(
    () => {
      const words = textRef.current?.querySelectorAll(".word");
      if (!words) return;

      gsap.fromTo(
        words,
        { opacity: 0.2, color: "#555" }, 
        {
          opacity: 1,
          color: "#fff", 
          stagger: 0.1, 
          scrollTrigger: {
            trigger: container.current,
            start: "top 60%", 
            end: "bottom 40%", 
            scrub: true, 
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative flex min-h-screen w-full items-center justify-center bg-[#050505] px-12 md:px-32 py-20 overflow-hidden"
    >
      {/* BACKGROUND MARQUEE */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full pointer-events-none opacity-[0.02]">
        <div className="whitespace-nowrap animate-marquee">
          <h1 className="font-oswald text-[20vw] font-bold uppercase leading-none text-white tracking-tighter">
            DESIGN CODE CREATE DESIGN CODE CREATE
          </h1>
        </div>
      </div>

      {/* FOREGROUND TEXT */}
      <div className="relative z-10 max-w-5xl">
        <h3 className="text-zinc-500 text-sm font-bold uppercase tracking-[0.2em] mb-10">
          ( About Me )
        </h3>

        {/* Added 'gap-x-4' here so words ALWAYS have space between them */}
        <p
          ref={textRef}
          className="flex flex-wrap gap-x-3 gap-y-2 text-4xl md:text-6xl font-bold leading-[1.2] tracking-tight text-white"
        >
          {paragraph.split(" ").map((word, i) => (
            <span key={i} className="word opacity-30">
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}