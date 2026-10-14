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

  const [isMuted, setIsMuted] = useState(false);

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
    const name = nameRef.current;
    if (!name) return;
    const text = name.innerText;
    if (!text.includes("char-inner")) {
      name.innerHTML = text
        .split("")
        .map((char) => `<span class="char" style="display:inline-block; overflow:hidden"><span class="char-inner" style="display:inline-block">${char}</span></span>`)
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
        className="relative z-10 flex min-h-screen flex-col justify-between bg-[#080808]/80 px-6 md:px-12 pt-8 pb-10 overflow-hidden selection:bg-[#ff0055] selection:text-white"
      >
        {/* Subtle grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }}
        />

        {/* Red accent line — top left */}
        <div className="absolute top-0 left-12 w-px h-24 bg-[#ff0055]" />

        {/* ── HEADER ── */}
        <header
          ref={microDetailsRef}
          className="relative z-10 flex w-full items-start justify-between text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-medium"
        >
          <div className="flex flex-col gap-1 pt-10">
            <span className="text-neutral-600">Folio</span>
            <span className="text-white font-bold">©2026</span>
          </div>

          <div className="flex items-center gap-6 pt-10">
            {/* Audio Toggle Button */}
            <button
              onClick={handleSoundToggle}
              data-magnetic
              data-cursor-text="AUDIO"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-800 hover:border-[#ff0055] bg-neutral-950 text-[9px] uppercase tracking-widest text-neutral-300 transition-colors duration-300"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isMuted ? "bg-neutral-600" : "bg-[#ff0055] animate-ping"}`} />
              <span>{isMuted ? "Sound Off" : "Sound On"}</span>
            </button>

            <div className="text-right flex flex-col gap-1 items-end">
              <span>India / Mumbai</span>
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
            <span ref={kickerRef} className="block text-[10px] tracking-[0.4em] text-[#ff0055] uppercase font-medium">
              ( 001 ) — Hello, I'm
            </span>
          </div>

          <h1
            ref={nameRef}
            className="text-[22vw] leading-[0.82] font-black uppercase tracking-[-0.02em] text-[#f0f0f0] select-none cursor-default"
            data-magnetic
            data-cursor-text="DEV"
          >
            Kashif
          </h1>

          <div className="overflow-hidden mt-6 ml-1">
            <h2
              ref={titleRef}
              className="text-xl md:text-3xl font-light tracking-tight text-neutral-400"
            >
              A{" "}
              <span className="italic font-serif text-white">Creative</span>{" "}
              Developer &{" "}
              <span className="italic font-serif text-white">Experience</span>{" "}
              Builder
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
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#ff0055] group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
            </a>
          </div>
        </main>

        {/* ── FOOTER ── */}
        <footer className="relative z-10 flex w-full items-end justify-between text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-medium">
          <div className="flex gap-3 items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#ff0055] animate-pulse" />
            <span>Scroll to explore</span>
          </div>

          <div className="absolute right-0 bottom-0 flex flex-col items-center gap-2">
            <div
              ref={scrollLineRef}
              className="w-px h-20 bg-gradient-to-b from-transparent to-[#ff0055]"
            />
          </div>

          <div className="flex gap-6">
            {[
              { label: "GH", href: "https://github.com" },
              { label: "LI", href: "https://linkedin.com" },
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