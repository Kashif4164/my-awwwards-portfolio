"use client";

<<<<<<< HEAD
import { useState } from "react";
import { soundFx } from "./SoundFX";

interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  year: string;
  link: string;
  github: string;
  gradient: string;
}

const PROJECTS: Project[] = [
  {
    id: "aura-3d",
    number: "01",
    title: "Aura Spatial Design",
    category: "3D Experience / WebGL",
    description: "An immersive 3D product visualizer featuring custom GLSL shaders, real-time lighting physics, and interactive particle field physics.",
    tech: ["Three.js", "React Three Fiber", "GLSL", "GSAP"],
    year: "2026",
    link: "https://example.com",
    github: "https://github.com",
    gradient: "from-purple-900/40 via-pink-900/20 to-black",
  },
  {
    id: "nexus-os",
    number: "02",
    title: "Nexus Cyber OS",
    category: "Web Platform & Motion",
    description: "Futuristic web operating system interface with micro-interactions, responsive window manager, and audio-reactive dashboards.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Web Audio API"],
    year: "2025",
    link: "https://example.com",
    github: "https://github.com",
    gradient: "from-blue-900/40 via-indigo-900/20 to-black",
  },
  {
    id: "pulse-studio",
    number: "03",
    title: "Pulse Generative Art",
    category: "Creative Coding & Canvas",
    description: "Interactive generative canvas application rendering infinite mathematical fractals and procedural noise patterns at 60 FPS.",
    tech: ["Canvas API", "WebGL", "TypeScript", "Lenis"],
    year: "2025",
    link: "https://example.com",
    github: "https://github.com",
    gradient: "from-rose-900/40 via-red-900/20 to-black",
  },
  {
    id: "zenith-motion",
    number: "04",
    title: "Zenith Architecture",
    category: "Editorial & Animation",
    description: "High-end luxury architectural portfolio featuring horizontal scroll physics, image sequence reveals, and fluid typography scaling.",
    tech: ["React", "GSAP ScrollTrigger", "Framer Motion"],
    year: "2024",
    link: "https://example.com",
    github: "https://github.com",
    gradient: "from-[#ff0055]/30 via-neutral-900/40 to-black",
  },
];

export default function Projects() {
  const [activeModal, setActiveModal] = useState<Project | null>(null);

  const openProject = (project: Project) => {
    soundFx.playClick();
    setActiveModal(project);
  };

  const closeModal = () => {
    soundFx.playClick();
    setActiveModal(null);
  };

  return (
    <section id="projects" className="relative min-h-screen bg-[#080808] px-6 md:px-12 py-24 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#ff0055] font-medium block mb-3">
              ( 003 ) — Selected Work
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight">
              Featured <span className="italic font-serif font-light text-neutral-400">Projects</span>
            </h2>
          </div>
          <p className="text-neutral-500 text-xs md:text-sm max-w-md leading-relaxed">
            A curated showcase of interactive digital experiences, creative coding experiments, and high-performance WebGL applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => openProject(project)}
              data-magnetic
              data-cursor-text="VIEW"
              className={`group relative rounded-2xl border border-neutral-800/80 bg-neutral-950/60 p-8 md:p-10 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-500 hover:border-[#ff0055]/50 hover:shadow-[0_0_50px_rgba(255,0,85,0.15)] bg-gradient-to-br ${project.gradient}`}
            >
              {/* Top info */}
              <div className="flex justify-between items-start mb-12">
                <span className="text-3xl font-mono font-bold text-neutral-600 group-hover:text-[#ff0055] transition-colors duration-300">
                  {project.number}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 border border-neutral-800 px-3 py-1 rounded-full bg-black/40">
                  {project.year}
                </span>
              </div>

              {/* Title & Category */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#ff0055] font-semibold block mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:translate-x-2 transition-transform duration-300 ease-out mb-4">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-xs md:text-sm line-clamp-2 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/60">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] uppercase tracking-wider text-neutral-400 bg-neutral-900/80 border border-neutral-800 px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover indicator arrow */}
              <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 group-hover:border-[#ff0055] transition-all duration-300">
                <svg className="w-4 h-4 text-white group-hover:text-[#ff0055]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#0d0d0d] border border-neutral-800 rounded-2xl p-8 md:p-12 shadow-2xl text-white">
            <button
              onClick={closeModal}
              data-magnetic
              data-cursor-text="CLOSE"
              className="absolute top-6 right-6 text-neutral-400 hover:text-white p-2"
            >
              ✕
            </button>

            <span className="text-[10px] uppercase tracking-[0.4em] text-[#ff0055] font-semibold block mb-2">
              ( {activeModal.number} ) — {activeModal.category}
            </span>
            <h3 className="text-3xl font-black uppercase text-white mb-4">
              {activeModal.title}
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
              {activeModal.description}
            </p>

            <div className="mb-8">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-2">Technologies Used</span>
              <div className="flex flex-wrap gap-2">
                {activeModal.tech.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-wider bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full text-neutral-300">
=======
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
>>>>>>> 7f1e02d0cf5471a8a2782536ada9491d33b2b3a8
                    {t}
                  </span>
                ))}
              </div>
            </div>
<<<<<<< HEAD

            <div className="flex gap-4 border-t border-neutral-800 pt-6">
              <a
                href={activeModal.link}
                target="_blank"
                rel="noreferrer"
                data-magnetic
                data-cursor-text="LIVE"
                className="flex-1 py-3 bg-[#ff0055] hover:bg-[#e0004c] text-white text-center text-xs font-semibold uppercase tracking-widest rounded-xl transition-colors duration-200"
              >
                Launch Demo
              </a>
              <a
                href={activeModal.github}
                target="_blank"
                rel="noreferrer"
                data-magnetic
                data-cursor-text="CODE"
                className="px-6 py-3 border border-neutral-800 hover:border-white text-neutral-300 hover:text-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-colors duration-200"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
=======
          ))}
        </div>
      </div>
    </section>
  );
}
>>>>>>> 7f1e02d0cf5471a8a2782536ada9491d33b2b3a8
