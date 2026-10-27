"use client";

import { useState } from "react";
import { Brain, Cpu, Server, ShieldCheck, RotateCw, CheckCircle2, Zap, ArrowRight } from "lucide-react";

interface CompetencyCard {
  icon: typeof Brain;
  title: string;
  metric: string;
  desc: string;
  skills: string[];
  backSpecs: {
    architecture: string;
    guardrail: string;
    impact: string;
    stack: string[];
  };
}

const FOCUS_AREAS: CompetencyCard[] = [
  {
    icon: Brain,
    title: "Production RAG & Grounding",
    metric: ">90% Retrieval Precision",
    desc: "Domain-specific chunking strategies, FAISS vector indexing, and cross-encoder re-ranking pipelines with grounding harnesses to eliminate hallucination risk.",
    skills: ["LangChain", "FAISS", "HuggingFace", "Grounding Evaluation", "OpenAI"],
    backSpecs: {
      architecture: "Two-stage retrieval pipeline: preliminary nearest-neighbor search via FAISS IndexFlatIP cosine similarity, followed by cross-encoder re-ranking.",
      guardrail: "Strict threshold cutoff for context citations, paired with synthetic hallucination checks on domain datasets.",
      impact: "Cut auditing reconciliation variance to 0% and accelerated retrieval recall above 90%.",
      stack: ["Python", "FAISS", "HuggingFace", "LangChain", "OpenAI Embeddings"],
    },
  },
  {
    icon: Cpu,
    title: "Agentic Systems & Automation",
    metric: "70% Support Latency Cut",
    desc: "Autonomous task-automation agents, multi-turn context memory buffers, and AI-driven content generation pipelines that cut manual operational effort.",
    skills: ["Agentic Workflows", "Prompt Optimization", "Context Memory", "WaveNet AI"],
    backSpecs: {
      architecture: "Multi-turn context memory buffer preserving conversational states within strict token budgets; dynamic tool invocation loops.",
      guardrail: "Pre-execution prompt compression and function-call validation schemas to eliminate circular invocation traps.",
      impact: "Reduced customer support inquiry turnaround time by 70% with high accuracy.",
      stack: ["OpenAI GPT-4", "LangChain", "Context Buffer", "Flask Microservices"],
    },
  },
  {
    icon: Server,
    title: "Backend & Cloud Infrastructure",
    metric: "Containerized GCP CI/CD",
    desc: "Scalable backend architectures with Python, FastAPI, and Flask. Containerizing microservices with Docker and automated deployment to Google Cloud Platform.",
    skills: ["Python", "FastAPI", "Docker", "GCP App Engine", "CI/CD", "REST APIs"],
    backSpecs: {
      architecture: "Multi-stage Docker builds (<120MB image) with high-concurrency async endpoints on FastAPI and automated GitHub Actions delivery.",
      guardrail: "Automated container health checks, graceful worker shutdown, and cloud observability logs.",
      impact: "Zero-downtime microservice deployments with predictable sub-second cloud inference latency.",
      stack: ["FastAPI", "Docker", "Google Cloud Platform", "App Engine", "GitHub Actions"],
    },
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Reliability & Security",
    metric: "Zero Production Regressions",
    desc: "Production enterprise solutions for banking and petroleum clients featuring JWT local-expiry guardrails, Firebase Auth, and full Vitest / RTL test coverage.",
    skills: ["Firebase Auth", "JWT Guardrails", "React 19", "TypeScript", "Vitest"],
    backSpecs: {
      architecture: "Firebase Authentication integrated with proactive JWT local-expiry timers and enforced automatic session revocation.",
      guardrail: "Strict client-side token guardrails preventing stale requests, paired with complete Vitest coverage across critical user paths.",
      impact: "Maintained zero production regressions across multi-client banking LMS releases.",
      stack: ["Firebase Auth", "JWT Guardrails", "TypeScript", "Vitest", "React Testing Library"],
    },
  },
];

export default function About() {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  const paragraph =
    "I am a Generative AI & Backend Engineer specialized in production RAG pipelines, LLM agent architectures, and resilient cloud deployments on Google Cloud Platform. I focus on high-precision retrieval, hallucination mitigation, and enterprise-grade software delivery.";

  return (
    <section
      id="about"
      className="relative w-full bg-transparent border-t border-white/[0.08] px-6 md:px-12 py-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] font-semibold block mb-2">
            Engineering Overview
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Architecture-First AI Development
          </h2>
        </div>

        {/* Main Statement */}
        <p className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-[1.2] tracking-tight text-slate-100 max-w-5xl">
          {paragraph}
        </p>

        {/* ── QUANTIFIABLE PRODUCTION METRICS ── */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 py-10 apple-glass-subcard rounded-3xl px-8 border border-white/10 shadow-2xl">
          {[
            { num: "50%", label: "Manual Effort Cut", context: "Petroleum RAG Reconciliation" },
            { num: ">90%", label: "Retrieval Precision", context: "FAISS + Cross-Encoder RAG" },
            { num: "70%", label: "Support Latency Cut", context: "Docker & GCP App Engine" },
            { num: "30%", label: "Faster Content Authoring", context: "AI Agent Module Editor" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1.5 p-2">
              <span className="text-4xl md:text-5xl font-black text-[#06b6d4] tracking-tight font-mono">
                {s.num}
              </span>
              <span className="text-xs uppercase tracking-wider text-neutral-200 font-semibold">
                {s.label}
              </span>
              <span className="text-[11px] text-neutral-400 font-mono">
                {s.context}
              </span>
            </div>
          ))}
        </div>

        {/* ── INTERACTIVE 3D COMPETENCY FLASHCARDS ── */}
        <div className="mt-20">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                  Interactive Architectural Flashcards
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Core Technical Competencies
              </h3>
              <p className="text-sm text-neutral-400 mt-1">
                Click any flashcard to flip and inspect deep production blueprints, guardrails, and stack details.
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-neutral-400 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
              <RotateCw className="w-3.5 h-3.5 text-cyan-400" />
              <span>Click card or button to flip in 3D</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FOCUS_AREAS.map((area, idx) => {
              const Icon = area.icon;
              const isFlipped = !!flippedCards[idx];

              return (
                <div
                  key={idx}
                  className="perspective-1000 min-h-[380px] cursor-pointer"
                  onClick={() => toggleFlip(idx)}
                >
                  <div
                    onMouseMove={handleMouseMove}
                    className={`spotlight-card relative w-full h-full rounded-3xl transition-transform duration-700 transform-style-3d ${
                      isFlipped ? "rotate-y-180" : ""
                    }`}
                  >
                    {/* FRONT OF FLASHCARD */}
                    <div className="apple-glass-card rounded-3xl p-7 md:p-8 flex flex-col justify-between absolute inset-0 backface-hidden border border-white/15 shadow-2xl">
                      <div>
                        {/* Header: Icon & Flip indicator */}
                        <div className="flex items-start justify-between gap-4 mb-5">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-[#06b6d4] shadow-lg shadow-cyan-500/10">
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-white tracking-tight">
                                {area.title}
                              </h4>
                              <span className="text-xs font-mono text-emerald-400 font-semibold">
                                {area.metric}
                              </span>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFlip(idx);
                            }}
                            className="p-2 rounded-xl apple-glass-pill text-neutral-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 text-[11px] font-mono shrink-0"
                            title="Flip to see architecture"
                          >
                            <RotateCw className="w-3.5 h-3.5 text-cyan-400" />
                            <span className="hidden sm:inline">Flip</span>
                          </button>
                        </div>

                        {/* Summary description */}
                        <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                          {area.desc}
                        </p>
                      </div>

                      {/* Bottom Skills & Interactive Hint */}
                      <div>
                        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.08] mb-4">
                          {area.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-[11px] font-mono text-slate-200 apple-glass-pill px-2.5 py-1 rounded-lg border border-white/10"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 pt-2 border-t border-white/[0.04]">
                          <span className="text-cyan-400/90 flex items-center gap-1">
                            <Zap className="w-3 h-3" /> Tap anywhere to flip
                          </span>
                          <span className="text-neutral-500">ID: 0{idx + 1}</span>
                        </div>
                      </div>
                    </div>

                    {/* BACK OF FLASHCARD (DEEP ARCHITECTURAL SPECS) */}
                    <div className="apple-glass-card rounded-3xl p-7 md:p-8 flex flex-col justify-between absolute inset-0 backface-hidden rotate-y-180 border border-cyan-400/30 bg-[#0d121d] shadow-2xl">
                      <div>
                        {/* Back Header */}
                        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold uppercase text-cyan-400 tracking-wider">
                              Architectural Blueprint
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                              Deep Dive
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFlip(idx);
                            }}
                            className="p-1.5 rounded-lg apple-glass-pill text-cyan-400 hover:text-white transition-colors text-xs font-mono flex items-center gap-1"
                          >
                            <RotateCw className="w-3.5 h-3.5" />
                            <span>Return</span>
                          </button>
                        </div>

                        {/* Specs List */}
                        <div className="space-y-3.5 text-xs">
                          <div>
                            <span className="font-mono text-cyan-400 font-semibold block mb-0.5">
                              Core Architecture:
                            </span>
                            <p className="text-neutral-300 leading-relaxed font-sans">
                              {area.backSpecs.architecture}
                            </p>
                          </div>

                          <div>
                            <span className="font-mono text-rose-400 font-semibold block mb-0.5">
                              Guardrails & Reliability:
                            </span>
                            <p className="text-neutral-300 leading-relaxed font-sans">
                              {area.backSpecs.guardrail}
                            </p>
                          </div>

                          <div>
                            <span className="font-mono text-emerald-400 font-semibold block mb-0.5">
                              Measured Production Impact:
                            </span>
                            <p className="text-neutral-200 leading-relaxed font-sans">
                              {area.backSpecs.impact}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Stack footer */}
                      <div className="pt-4 border-t border-white/[0.08] mt-3">
                        <div className="flex flex-wrap gap-1.5">
                          {area.backSpecs.stack.map((item) => (
                            <span
                              key={item}
                              className="text-[10px] font-mono text-cyan-200 bg-cyan-950/40 border border-cyan-500/30 px-2 py-0.5 rounded"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
