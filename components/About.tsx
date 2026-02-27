"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Marquee words
const MARQUEE_WORDS = ["Design", "•", "Code", "•", "Motion", "•", "Three.js", "•", "GSAP", "•", "React", "•"];

export default function About() {
  const container = useRef(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const paragraph =
    "I am a creative developer who bridges the gap between design and technology. I don't just build websites — I craft immersive digital experiences that leave a lasting impression.";

  useGSAP(
    () => {
      // Word reveal on scroll
      const words = textRef.current?.querySelectorAll(".word");
      if (words) {
        gsap.fromTo(
          words,
          { opacity: 0.1, filter: "blur(4px)" },
          {
            opacity: 1,
            filter: "blur(0px)",
            stagger: 0.08,
            scrollTrigger: {
              trigger: container.current,
              start: "top 65%",
              end: "center 40%",
              scrub: 1.2,
            },
          }
        );
      }

      // Expand horizontal line
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "left center",
            scrollTrigger: {
              trigger: container.current,
              start: "top 80%",
              end: "top 50%",
              scrub: true,
            },
          }
        );
      }

      // Slide in label
      if (labelRef.current) {
        gsap.from(labelRef.current, {
          x: -30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        });
      }

      // Stats fade
      if (statsRef.current) {
        gsap.from(statsRef.current.querySelectorAll(".stat-item"), {
          y: 20,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      // Marquee loop
      if (marqueeRef.current) {
        const marqueeInner = marqueeRef.current.querySelector(".marquee-inner");
        if (marqueeInner) {
          gsap.to(marqueeInner, {
            xPercent: -50,
            repeat: -1,
            duration: 20,
            ease: "none",
          });
        }
      }
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative min-h-screen w-full bg-[#080808] overflow-hidden"
    >
      {/* ── MARQUEE BAND ── */}
      <div
        ref={marqueeRef}
        className="w-full overflow-hidden border-y border-neutral-800 py-4"
      >
        <div className="marquee-inner flex whitespace-nowrap will-change-transform">
          {/* Duplicate for seamless loop */}
          {[...Array(4)].map((_, di) => (
            <div key={di} className="flex shrink-0">
              {MARQUEE_WORDS.map((word, i) => (
                <span
                  key={i}
                  className={`mx-6 text-xs uppercase tracking-[0.3em] font-medium ${
                    word === "•" ? "text-[#ff0055]" : "text-neutral-500"
                  }`}
                >
                  {word}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="px-6 md:px-12 pt-20 pb-24 max-w-7xl mx-auto">
        {/* Label row */}
        <div ref={labelRef} className="flex items-center gap-6 mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#ff0055] font-medium">
            ( 002 ) — About
          </span>
          <div
            ref={lineRef}
            className="flex-1 h-px bg-neutral-800 origin-left"
          />
        </div>

        {/* Main paragraph */}
        <p
          ref={textRef}
          className="flex flex-wrap gap-x-[0.35em] gap-y-2 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
        >
          {paragraph.split(" ").map((word, i) => (
            <span key={i} className="word text-white">
              {word}
            </span>
          ))}
        </p>

        {/* ── STATS ROW ── */}
        <div
          ref={statsRef}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-neutral-800 pt-12"
        >
          {[
            { num: "3+", label: "Years Experience" },
            { num: "40+", label: "Projects Shipped" },
            { num: "12+", label: "Happy Clients" },
            { num: "∞", label: "Ideas Brewing" },
          ].map((s) => (
            <div key={s.label} className="stat-item flex flex-col gap-2">
              <span className="text-5xl md:text-6xl font-black text-white tracking-tight leading-none">
                {s.num}
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* ── BOTTOM ROW ── */}
        <div className="mt-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <p className="text-neutral-500 text-sm max-w-sm leading-relaxed">
            Currently open to full-time roles and select freelance projects. Let's build something remarkable together.
          </p>
          <button className="group relative inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-neutral-400 hover:text-white transition-colors duration-300">
            <span className="w-8 h-px bg-neutral-700 group-hover:w-16 group-hover:bg-[#ff0055] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
} 