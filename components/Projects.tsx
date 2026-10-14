"use client";

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
                    {t}
                  </span>
                ))}
              </div>
            </div>

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
