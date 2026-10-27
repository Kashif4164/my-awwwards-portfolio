"use client";

import { ArrowRight, Mail, Sparkles, Terminal, Bot } from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <div className="relative z-10 w-full">
      {/* ── TOP NAVIGATION BAR (Apple-style Glassmorphism) ── */}
      <nav className="w-full apple-glass-nav sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          {/* Logo / Name */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="font-mono font-bold text-lg tracking-tight text-white group-hover:text-[#06b6d4] transition-colors">
              kashif.dev
            </span>
            <span className="hidden sm:inline-block text-[11px] font-mono text-neutral-400 uppercase tracking-wider pl-3 border-l border-white/10">
              GenAI & Backend
            </span>
          </a>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-widest text-neutral-300">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a
              href="#simulator"
              className="text-cyan-400 hover:text-cyan-200 transition-colors flex items-center gap-1 font-semibold"
            >
              <Bot className="w-3.5 h-3.5" />
              RAG Demo
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Right: Socials & Status */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Hire</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Kashif4164"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-neutral-400 hover:text-white apple-glass-pill transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/sheikmohammedkashif"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-neutral-400 hover:text-white apple-glass-pill transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ── HERO HERO CONTENT ── */}
      <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          {/* Subtitle / Role Tag */}
          <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-2 rounded-xl apple-glass-pill text-sm md:text-base mb-6 shadow-[inset_0_1px_0_0_rgba(6,182,212,0.2)]">
            <span className="font-bold text-white tracking-tight">Sheik Mohammed Kashif</span>
            <span className="text-cyan-400/50 font-normal">•</span>
            <span className="font-semibold text-cyan-400">Generative AI & Backend Engineer</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-8">
            Architecting production{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-200 to-indigo-300">
              RAG architectures
            </span>
            , LLM agents, and scalable cloud systems.
          </h1>

          {/* High-Impact Executive Summary */}
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl mb-10 font-normal">
            Specialized in domain-specific document retrieval, cross-encoder re-ranking, and
            hallucination guardrails. Shipped production AI platforms for banking and petroleum
            clients, with backend microservices containerized on Google Cloud Platform.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#simulator"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#06b6d4] text-neutral-950 font-semibold text-sm hover:bg-[#22d3ee] transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105 active:scale-95"
            >
              <Bot className="w-4 h-4" />
              <span>Launch RAG Simulator</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl apple-glass-subcard border border-white/15 text-neutral-200 font-medium text-sm hover:bg-white/10 hover:text-white transition-all"
            >
              <span>View Selected Projects</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl apple-glass-pill text-neutral-300 hover:text-white text-sm font-mono transition-colors"
            >
              <Mail className="w-4 h-4 text-[#06b6d4]" />
              <span>Contact</span>
            </a>
          </div>

          {/* Core Tech Stack Ribbon */}
          <div className="mt-16 pt-8 border-t border-white/[0.08]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Production Core Stack:
              </span>
              <span className="text-[11px] font-mono text-cyan-400">
                Interactive Canvas Active (Move mouse to interact)
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {[
                "Python",
                "LangChain",
                "FAISS Vector DB",
                "Cross-Encoder Re-Ranking",
                "FastAPI",
                "Docker",
                "Google Cloud Platform",
                "OpenAI GPT-4",
                "React 19",
                "TypeScript",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg apple-glass-pill text-xs font-mono text-neutral-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
