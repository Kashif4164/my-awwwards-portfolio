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
  const shouldReduceMotionRef = useRef(false);

  useEffect(() => {
    shouldReduceMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // --- MAGNETIC CURSOR ---
  useEffect(() => {
    if (shouldReduceMotionRef.current) return;

    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0, mouseY = 0;
    let curX = 0, curY = 0;
    let rafId = 0;

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
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);
    animate();

    // Magnetic hover on links/buttons
    const magneticEls = document.querySelectorAll("[data-magnetic]");
    const onEnter = () => {
        gsap.to(cursor, { scale: 3, duration: 0.3, ease: "power2.out" });
      };
    const onLeave = () => {
        gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power2.out" });
      };

    magneticEls.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(rafId);
      magneticEls.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  // --- GSAP ENTRANCE ANIMATION ---
  useGSAP(
    () => {
      if (shouldReduceMotionRef.current) return;

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
      <section
        ref={containerRef}
        className="relative z-10 flex min-h-screen flex-col justify-between bg-transparent px-6 md:px-12 pt-8 pb-10 overflow-hidden"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        {/* Subtle grid overlay */}
        <div className="hero-grid-overlay pointer-events-none absolute inset-0 opacity-[0.03]" />

        {/* Red accent drop-line — top left (Fixed overlap and added gradient fade) */}
        <div 
          ref={scrollLineRef}
          className="absolute top-0 left-6 md:left-12 w-px h-32 md:h-48 bg-gradient-to-b from-[#ff0055] to-transparent origin-top opacity-70" 
        />

        {/* ── HEADER ── */}
        <header
          ref={microDetailsRef}
          className="relative z-10 flex w-full items-start justify-between text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-medium"
        >
          <div className="flex flex-col gap-1 pt-12 pl-4 md:pl-6 ml-0 md:ml-1 relative">
            {/* Small horizontal architectural tick */}
            <div className="absolute top-[3.3rem] left-0 w-3 h-px bg-[#ff0055] opacity-50" />
            <span className="text-neutral-400 font-sans tracking-[0.3em]">Folio</span>
            <span className="text-white font-bold tracking-widest">©2026</span>
          </div>
          <div className="text-right flex flex-col gap-2 items-end pt-8">
            <span className="text-neutral-400">India / Mangalore</span>
            <span className="flex items-center gap-3 backdrop-blur-md bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse shadow-[0_0_10px_#00ff88]" />
              <span className="text-white">Available for work</span>
            </span>
          </div>
        </header>

        {/* ── MAIN ── */}
        <main className="relative z-10 flex w-full flex-col items-start justify-center -mt-8">
          {/* Section number */}
          <div className="overflow-hidden mb-6 ml-1">
            <span ref={kickerRef} className="block text-[10px] tracking-[0.4em] text-[#ff0055] uppercase font-medium">
              ( 001 ) - Hello, I&apos;m
            </span>
          </div>

          {/* Massive name */}
          <div className="relative w-full z-10 flex mix-blend-difference pointer-events-none">
            <h1
              ref={nameRef}
              className="text-[22vw] md:text-[18vw] leading-[0.8] font-black uppercase tracking-tighter text-white select-none whitespace-nowrap"
            >
              Kashif
            </h1>
          </div>

          {/* Subtitle row */}
          <div className="overflow-hidden mt-8 ml-2 pointer-events-none mix-blend-difference z-10 text-white">
            <h2
              ref={titleRef}
              className="text-2xl md:text-5xl lg:text-6xl font-light tracking-tight text-white max-w-4xl leading-tight"
            >
              A{" "}
              <span className="italic font-serif text-white tracking-normal font-bold">GenAI</span>{" "}
              &{" "}
              <span className="italic font-serif text-white tracking-normal font-bold">Full-Stack</span>{" "}
              Engineer
            </h2>
          </div>

          {/* Horizontal line + CTA */}
          <div className="mt-12 flex items-center gap-8">
            <div className="h-px w-24 bg-neutral-700" />
            <button
              data-magnetic
              className="group relative text-[11px] uppercase tracking-[0.3em] text-neutral-400 hover:text-white transition-colors duration-300"
              onClick={() => {
                const target = document.getElementById("work");
                target?.scrollIntoView({ behavior: "smooth" });
              }}
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
              <a
                key={s}
                data-magnetic
                href="#contact"
                className="hover:text-white transition-colors duration-200"
              >
                {s}
              </a>
            ))}
          </div>
        </footer>
      </section>
    </>
  );
}