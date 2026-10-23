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
  },
];

export default function Projects() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
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

        cards.forEach((card) => {
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
    <section
      ref={container}
      id="projects"
      className="relative w-full bg-[#080808] text-white py-24 border-t border-neutral-800 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Label row */}
        <div ref={labelRef} className="flex items-center gap-6 mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#06b6d4] font-medium">
            ( 003 ) — Selected Work
          </span>
          <div ref={lineRef} className="flex-1 h-px bg-neutral-800 origin-left" />
        </div>

        {/* Project grid */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((p) => (
            <div
              key={p.id}
              className="project-card group relative flex flex-col justify-between p-8 bg-neutral-900/20 border border-neutral-800 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-neutral-900/40 hover:border-neutral-700"
            >
              {/* Glowing gradient background on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-cyan-400 font-mono text-sm">{p.id}</span>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 border border-neutral-800 px-3 py-1 rounded-full backdrop-blur-sm">
                    {p.category}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight uppercase leading-snug text-white group-hover:text-cyan-300 transition-colors">
                  {p.title}
                </h3>
                <p className="mt-4 text-neutral-400 text-xs md:text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-8 pt-6 border-t border-neutral-800/60">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-[0.1em] text-neutral-300 bg-white/5 px-2.5 py-1 rounded border border-white/5 font-mono"
                  >
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
