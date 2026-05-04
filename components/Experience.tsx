"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const [reduceMotion, setReduceMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  
  const container = useRef(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event: MediaQueryListEvent) => setReduceMotion(event.matches);

    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  useGSAP(
    () => {
      if (reduceMotion) return;

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

      if (itemsRef.current) {
        gsap.from(itemsRef.current.children, {
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: itemsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }
    },
    { scope: container, dependencies: [reduceMotion] }
  );

  return (
    <section ref={container} className="relative w-full bg-[#080808] text-white py-24 border-t border-neutral-800 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Label row */}
        <div ref={labelRef} className="flex items-center gap-6 mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#ff0055] font-medium">
            ( 003 ) — Experience
          </span>
          <div ref={lineRef} className="flex-1 h-px bg-neutral-800 origin-left" />
        </div>

        <div ref={itemsRef} className="flex flex-col gap-0 group">
          {/* Experience Item 1 */}
          <div className="group/item relative flex flex-col md:flex-row gap-6 md:gap-12 py-12 border-b border-neutral-800 transition-all duration-500 hover:bg-neutral-900 border-t first:border-t-neutral-800">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#ff0055]/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="w-full md:w-1/3 flex md:justify-between items-start text-neutral-400 p-4 pt-1">
              <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-neutral-600 block">01 /</span>
              <div className="font-serif italic text-2xl md:text-3xl text-neutral-300 group-hover/item:text-[#ff0055] transition-colors duration-500">
                2025 — Present
              </div>
            </div>
            
            <div className="w-full md:w-2/3 flex flex-col gap-4 p-4 pr-12">
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white group-hover/item:translate-x-2 transition-transform duration-500">GenAI Developer</h3>
              <p className="text-[#ff0055] text-sm uppercase tracking-[0.2em] font-bold group-hover/item:translate-x-2 transition-transform duration-500 delay-75">Karanji Infotech, Mangalore</p>
              
              <ul className="list-none text-neutral-400 space-y-4 text-sm md:text-base mt-4 group-hover/item:translate-x-2 transition-transform duration-500 delay-100">
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-[#ff0055] before:rounded-full">Built LMS GenAI V4 — an enterprise AI-powered Learning Management System using React 19, TypeScript, Vite, and Tailwind CSS.</li>
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-[#ff0055] before:rounded-full">Configured AI voice-over per slide and implemented live preview rendering via REST API integrations.</li>
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-[#ff0055] before:rounded-full">Built a Wage Reconciliation RAG System for a petroleum company using LangChain and NLP for payment data extraction.</li>
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-[#ff0055] before:rounded-full">Applied vector database search and transformer-based document understanding for compliance checks.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
