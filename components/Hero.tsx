"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const kickerRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const microDetailsRef = useRef<HTMLDivElement>(null);
  const scrollLineRef = useRef<HTMLDivElement>(null);

  // --- MAGNETIC CURSOR ---
  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0, mouseY = 0;
    let curX = 0, curY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot follows instantly
      gsap.set(dot, { x: mouseX - 4, y: mouseY - 4 });
    };

    const animate = () => {
      curX += (mouseX - curX) * 0.08;
      curY += (mouseY - curY) * 0.08;
      gsap.set(cursor, { x: curX - 20, y: curY - 20 });
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);
    animate();

    // Magnetic hover on links/buttons
    const magneticEls = document.querySelectorAll("[data-magnetic]");
    magneticEls.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursor, { scale: 3, duration: 0.3, ease: "power2.out" });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // --- GSAP ENTRANCE ANIMATION ---
  useGSAP(
    () => {
      // Split name into characters
      const name = nameRef.current;
      if (!name) return;
      const text = name.innerText;
      name.innerHTML = text
        .split("")
        .map((char) => `<span class="char" style="display:inline-block; overflow:hidden"><span class="char-inner" style="display:inline-block">${char}</span></span>`)
        .join("");

      const chars = name.querySelectorAll(".char-inner");

      const tl = gsap.timeline({ delay: 0.3 });

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
    },
    { scope: containerRef }
  );

  return (
    <>
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-10 h-10 rounded-full border border-white/40 mix-blend-difference transition-[width,height] duration-300"
        style={{ willChange: "transform" }}
      />
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-white mix-blend-difference"
        style={{ willChange: "transform" }}
      />

      <section
        ref={containerRef}
        className="relative z-10 flex min-h-screen flex-col justify-between bg-[#080808]/80 px-6 md:px-12 pt-8 pb-10 overflow-hidden selection:bg-[#ff0055] selection:text-white"
      >
        {/* Subtle grid overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
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
          <div className="text-right flex flex-col gap-1 items-end">
            <span>India / Mumbai</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
              Available for work
            </span>
          </div>
        </header>

        {/* ── MAIN ── */}
        <main className="relative z-10 flex w-full flex-col items-start justify-center -mt-8">
          {/* Section number */}
          <div className="overflow-hidden mb-6 ml-1">
            <span ref={kickerRef} className="block text-[10px] tracking-[0.4em] text-[#ff0055] uppercase font-medium">
              ( 001 ) — Hello, I'm
            </span>
          </div>

          {/* Massive name */}
          <h1
            ref={nameRef}
            className="text-[22vw] leading-[0.82] font-black uppercase tracking-[-0.02em] text-[#f0f0f0] select-none"
            data-magnetic
          >
            Kashif
          </h1>

          {/* Subtitle row */}
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

          {/* Horizontal line + CTA */}
          <div className="mt-12 flex items-center gap-8">
            <div className="h-px w-24 bg-neutral-700" />
            <button
              data-magnetic
              className="group relative text-[11px] uppercase tracking-[0.3em] text-neutral-400 hover:text-white transition-colors duration-300"
            >
              <span>View My Work</span>
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#ff0055] group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
            </button>
          </div>
        </main>

        {/* ── FOOTER ── */}
        <footer className="relative z-10 flex w-full items-end justify-between text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-medium">
          <div className="flex gap-3 items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#ff0055] animate-pulse" />
            <span>Scroll to explore</span>
          </div>

          {/* Vertical scroll line */}
          <div className="absolute right-0 bottom-0 flex flex-col items-center gap-2 pr-0 md:pr-0">
            <div
              ref={scrollLineRef}
              className="w-px h-20 bg-gradient-to-b from-transparent to-[#ff0055]"
            />
          </div>

          <div className="flex gap-6">
            {["GH", "LI", "TW"].map((s) => (
              <button
                key={s}
                data-magnetic
                className="hover:text-white transition-colors duration-200"
              >
                {s}
              </button>
            ))}
          </div>
        </footer>
      </section>
    </>
  );
}