"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: "01",
    title: "AI Customer Support Chatbot",
    category: "Generative AI & Agentic Automation",
    tech: ["Python", "Flask", "OpenAI GPT-4", "LangChain", "Docker", "GCP"],
    desc: "Built a GPT-4 powered chatbot using LangChain and NLP techniques for automated customer support. Containerized with Docker and deployed on Google Cloud App Engine. Reduced manual support response time by 70%.",
  },
  {
    id: "02",
    title: "Document Q&A Agent",
    category: "RAG Pipeline & Agentic Workflow",
    tech: ["Python", "LangChain", "FAISS", "HuggingFace", "Streamlit"],
    desc: "Implemented a document Q&A agent using RAG pipeline with FAISS vector database and HuggingFace embeddings for semantic NLP search. Achieved over 90% retrieval precision in internal evaluations.",
  },
  {
    id: "03",
    title: "Malware Detection using ML",
    category: "Classification Modeling & Security AI",
    tech: ["Python", "Scikit-learn", "Random Forest", "SVM"],
    desc: "Designed ML models to detect and classify malware using behavioral features and NLP-based log parsing. Improved accuracy through feature engineering and exposed predictions via REST API.",
  }
];

export default function Projects() {
  const [reduceMotion, setReduceMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const container = useRef(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".project-card");
        
        cards.forEach((card, i) => {
          gsap.from(card, {
            y: 50,
            opacity: 0,
            scale: 0.95,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });
      }
    },
    { scope: container, dependencies: [reduceMotion] }
  );

  return (
    <section ref={container} id="work" className="relative w-full bg-[#080808] text-white py-24 border-t border-neutral-800 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Label row */}
        <div ref={labelRef} className="flex items-center gap-6 mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#ff0055] font-medium">
            ( 004 ) — Selected Work
          </span>
          <div ref={lineRef} className="flex-1 h-px bg-neutral-800 origin-left" />
        </div>

        {/* Project grid */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((p) => (
            <div
              key={p.id}
              className="project-card group relative flex flex-col gap-8 p-10 bg-neutral-900/10 border border-neutral-800 rounded-[2rem] overflow-hidden transition-all duration-700 hover:bg-neutral-900/30 hover:border-neutral-600"
              data-cursor-text="VIEW"
            >
              {/* Glowing gradient background on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#ff0055]/10 blur-[100px] rounded-full" />
              </div>

              <div className="flex justify-between items-start">
                <span className="text-[#ff0055] font-serif italic text-3xl font-light">{p.id}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 border border-neutral-800 px-4 py-1.5 rounded-full backdrop-blur-sm group-hover:border-[#ff0055]/30 transition-colors duration-500">
                  {p.category}
                </span>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight uppercase leading-[0.9] text-white/90 group-hover:text-white transition-colors duration-500">{p.title}</h3>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-lg group-hover:text-neutral-300 transition-colors duration-500">{p.desc}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-8 border-t border-neutral-800/50 group-hover:border-neutral-700/50 transition-colors duration-500">
                {p.tech.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-[0.1em] text-neutral-400 bg-black px-3 py-1.5 rounded-sm border border-neutral-800/50">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}