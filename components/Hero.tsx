"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { soundFx } from "./SoundFX";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const kickerRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const microDetailsRef = useRef<HTMLDivElement>(null);
  const scrollLineRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotionRef = useRef(false);

  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    shouldReduceMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const handleSoundToggle = () => {
    const muted = soundFx.toggleMute();
    setIsMuted(muted);
  };

  useEffect(() => {
    const handleMouseEnter = () => {
      soundFx.playHover();
    };

    const handleMouseClick = () => {
      soundFx.playClick();
    };

    const magneticEls = document.querySelectorAll("[data-magnetic]");
    magneticEls.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("click", handleMouseClick);
    });

    return () => {
      magneticEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("click", handleMouseClick);
      });
    };
  }, []);

  // --- ENTRANCE ANIMATION ---
  useEffect(() => {
    if (shouldReduceMotionRef.current) return;

    const name = nameRef.current;
    if (!name) return;
    const text = name.innerText;
    if (!text.includes("char-inner")) {
      name.innerHTML = text
        .split("")
        .map(
          (char) =>
            `<span class="char" style="display:inline-block; overflow:hidden"><span class="char-inner" style="display:inline-block">${char}</span></span>`
        )
        .join("");
    }

    const chars = name.querySelectorAll(".char-inner");
    const tl = gsap.timeline({ delay: 0.8 });

    tl.from(chars, {
      yPercent: 110,
      skewY: 8,
      duration: 1.4,
      ease: "power4.out",
      stagger: 0.04,
    })
      .from(
        kickerRef.current,
        { yPercent: 120, opacity: 0, duration: 1, ease: "power3.out" },
        "-=1"
      )
      .from(
        titleRef.current,
        { yPercent: 120, opacity: 0, duration: 1, ease: "power3.out" },
        "-=0.9"
      )
      .from(
        microDetailsRef.current,
        { opacity: 0, duration: 1, ease: "power2.out" },
        "-=0.6"
      )
      .from(
        scrollLineRef.current,
        { scaleY: 0, transformOrigin: "top center", duration: 1.2, ease: "power3.inOut" },
        "-=0.8"
      );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-10 flex min-h-screen flex-col justify-between bg-transparent px-6 md:px-12 pt-8 pb-10 overflow-hidden"
    >
      {/* Subtle grid overlay */}
      <div className="hero-grid-overlay pointer-events-none absolute inset-0 opacity-[0.03]" />

      {/* Accent drop-line */}
      <div
        ref={scrollLineRef}
        className="absolute top-0 left-6 md:left-12 w-px h-32 md:h-48 bg-gradient-to-b from-[#06b6d4] to-transparent origin-top opacity-70"
      />

      {/* ── HEADER ── */}
      <header
        ref={microDetailsRef}
        className="relative z-10 flex w-full items-start justify-between text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-medium"
      >
        <div className="flex flex-col gap-1 pt-12 pl-4 md:pl-6 ml-0 md:ml-1 relative">
          <div className="absolute top-[3.3rem] left-0 w-3 h-px bg-[#06b6d4] opacity-50" />
          <span className="text-neutral-400 font-sans tracking-[0.3em]">Folio</span>
          <span className="text-white font-bold tracking-widest">©2026</span>
        </div>

        <div className="flex items-center gap-6 pt-10">
          {/* Audio Toggle Button */}
          <button
            onClick={handleSoundToggle}
            data-magnetic
            data-cursor-text="AUDIO"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-800 hover:border-[#06b6d4] bg-neutral-950 text-[9px] uppercase tracking-widest text-neutral-300 transition-colors duration-300 cursor-pointer"
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isMuted ? "bg-neutral-600" : "bg-[#06b6d4] animate-ping"
              }`}
            />
            <span>{isMuted ? "Sound Off" : "Sound On"}</span>
          </button>

          <div className="text-right flex flex-col gap-1 items-end">
            <span>India / Mangaluru</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
              Available for work
            </span>
          </div>
        </div>
      </header>

      {/* ── MAIN ── */}
      <main className="relative z-10 flex w-full flex-col items-start justify-center -mt-8">
        <div className="overflow-hidden mb-6 ml-1">
          <span
            ref={kickerRef}
            className="block text-[10px] tracking-[0.4em] text-[#06b6d4] uppercase font-medium"
          >
            ( 001 ) — Hello, I&apos;m
          </span>
        </div>

        <h1
          ref={nameRef}
          className="text-[22vw] md:text-[18vw] leading-[0.82] font-black uppercase tracking-[-0.02em] text-[#f0f0f0] select-none cursor-default"
          data-magnetic
          data-cursor-text="DEV"
        >
          Kashif
        </h1>

        <div className="overflow-hidden mt-6 ml-1">
          <h2
            ref={titleRef}
            className="text-2xl md:text-5xl lg:text-6xl font-light tracking-tight text-white max-w-4xl leading-tight"
          >
            A{" "}
            <span className="italic font-serif text-white tracking-normal font-bold">
              GenAI
            </span>{" "}
            &{" "}
            <span className="italic font-serif text-white tracking-normal font-bold">
              Backend
            </span>{" "}
            Architect
          </h2>
        </div>

        <div className="mt-12 flex items-center gap-8">
          <div className="h-px w-24 bg-neutral-700" />
          <a
            href="#projects"
            data-magnetic
            data-cursor-text="EXPLORE"
            className="group relative text-[11px] uppercase tracking-[0.3em] text-neutral-400 hover:text-white transition-colors duration-300"
          >
            <span>View My Work</span>
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#06b6d4] group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
          </a>
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="relative z-10 flex w-full items-end justify-between text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-medium">
        <div className="flex gap-3 items-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] animate-pulse" />
          <span>Scroll to explore</span>
        </div>

        <div className="absolute right-0 bottom-0 flex flex-col items-center gap-2">
          <div
            ref={scrollLineRef}
            className="w-px h-20 bg-gradient-to-b from-transparent to-[#06b6d4]"
          />
        </div>

        <div className="flex gap-6">
          {[
            { label: "GH", href: "https://github.com/Kashif4164" },
            { label: "LI", href: "https://linkedin.com/in/sheikmohammedkashif" },
            { label: "TW", href: "https://twitter.com" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              data-magnetic
              data-cursor-text="LINK"
              className="hover:text-white transition-colors duration-200"
            >
              {s.label}
            </a>
          ))}
        </div>
      </footer>
    </section>
  );
}
