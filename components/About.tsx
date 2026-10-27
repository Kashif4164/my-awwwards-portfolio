"use client";

import { useRef } from "react";
import { Brain, Cpu, Server, ShieldCheck, CheckCircle2, ArrowDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CompetencyCard {
  id: string;
  icon: typeof Brain;
  title: string;
  metric: string;
  category: string;
  desc: string;
  skills: string[];
  specs: {
    architecture: string;
    guardrail: string;
    impact: string;
    stack: string[];
  };
}

const FOCUS_AREAS: CompetencyCard[] = [
  {
    id: "01",
    icon: Brain,
    title: "Production RAG & Grounding",
    metric: ">90% Retrieval Precision",
    category: "Retrieval Architecture & Verification",
    desc: "Domain-specific chunking strategies, FAISS vector indexing, and cross-encoder re-ranking pipelines with grounding harnesses to eliminate hallucination risk.",
    skills: ["LangChain", "FAISS", "HuggingFace", "Grounding Evaluation", "OpenAI"],
    specs: {
      architecture: "Two-stage retrieval pipeline: preliminary nearest-neighbor search via FAISS IndexFlatIP cosine similarity, followed by cross-encoder re-ranking.",
      guardrail: "Strict threshold cutoff for context citations, paired with synthetic hallucination checks on domain datasets.",
      impact: "Cut auditing reconciliation variance to 0% and accelerated retrieval recall above 90%.",
      stack: ["Python", "FAISS", "HuggingFace", "LangChain", "OpenAI Embeddings"],
    },
  },
  {
    id: "02",
    icon: Cpu,
    title: "Agentic Systems & Automation",
    metric: "70% Support Latency Cut",
    category: "Autonomous LLMs & Context Buffering",
    desc: "Autonomous task-automation agents, multi-turn context memory buffers, and AI-driven content generation pipelines that cut manual operational effort.",
    skills: ["Agentic Workflows", "Prompt Optimization", "Context Memory", "WaveNet AI"],
    specs: {
      architecture: "Multi-turn context memory buffer preserving conversational states within strict token budgets; dynamic tool invocation loops.",
      guardrail: "Pre-execution prompt compression and function-call validation schemas to eliminate circular invocation traps.",
      impact: "Reduced customer support inquiry turnaround time by 70% with high accuracy.",
      stack: ["OpenAI GPT-4", "LangChain", "Context Buffer", "Flask Microservices"],
    },
  },
  {
    id: "03",
    icon: Server,
    title: "Backend & Cloud Infrastructure",
    metric: "Containerized GCP CI/CD",
    category: "Microservices & Distributed Systems",
    desc: "Scalable backend architectures with Python, FastAPI, and Flask. Containerizing microservices with Docker and automated deployment to Google Cloud Platform.",
    skills: ["Python", "FastAPI", "Docker", "GCP App Engine", "CI/CD", "REST APIs"],
    specs: {
      architecture: "Multi-stage Docker builds (<120MB image) with high-concurrency async endpoints on FastAPI and automated GitHub Actions delivery.",
      guardrail: "Automated container health checks, graceful worker shutdown, and cloud observability logs.",
      impact: "Zero-downtime microservice deployments with predictable sub-second cloud inference latency.",
      stack: ["FastAPI", "Docker", "Google Cloud Platform", "App Engine", "GitHub Actions"],
    },
  },
  {
    id: "04",
    icon: ShieldCheck,
    title: "Enterprise Reliability & Security",
    metric: "Zero Production Regressions",
    category: "Auth Guardrails & Zero-Regression QA",
    desc: "Production enterprise solutions for banking and petroleum clients featuring JWT local-expiry guardrails, Firebase Auth, and full Vitest / RTL test coverage.",
    skills: ["Firebase Auth", "JWT Guardrails", "React 19", "TypeScript", "Vitest"],
    specs: {
      architecture: "Firebase Authentication integrated with proactive JWT local-expiry timers and enforced automatic session revocation.",
      guardrail: "Strict client-side token guardrails preventing stale requests, paired with complete Vitest coverage across critical user paths.",
      impact: "Maintained zero production regressions across multi-client banking LMS releases.",
      stack: ["Firebase Auth", "JWT Guardrails", "TypeScript", "Vitest", "React Testing Library"],
    },
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".sticky-competency-card");

      cards.forEach((card, i) => {
        // Initial entrance reveal when scrolled to
        gsap.fromTo(
          card,
          {
            y: 40,
            opacity: 0.4,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Apple Stacking Effect:
        // As the subsequent card scrolls up over this card, scale it down slightly
        // and softly dim it to establish depth in the stack
        if (i < cards.length - 1) {
          const nextCard = cards[i + 1];

          gsap.to(card, {
            scale: 0.94,
            opacity: 0.5,
            filter: "blur(2px)",
            transformOrigin: "center top",
            ease: "none",
            scrollTrigger: {
              trigger: nextCard,
              start: "top 75%",
              end: "top 25%",
              scrub: true,
            },
          });
        }
      });
    },
    { scope: containerRef }
  );

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

        {/* ── APPLE-STYLE STICKY STACKING BLUEPRINT CARDS ── */}
        <div className="mt-28" ref={containerRef}>
          {/* Section Subheader */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                  Architectural Blueprints
                </span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                Core Technical Competencies
              </h3>
              <p className="text-sm text-neutral-400 mt-1 max-w-xl">
                Scroll down to inspect production architectures, safety guardrails, and enterprise deployments one by one.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 bg-cyan-500/10 px-4 py-2 rounded-xl border border-cyan-500/20 self-start md:self-auto">
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              <span>Scroll to stack cards</span>
            </div>
          </div>

          {/* Sticky Stacking Deck Container */}
          <div className="relative pb-24 space-y-12">
            {FOCUS_AREAS.map((area, idx) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.id}
                  style={{
                    top: `calc(96px + ${idx * 28}px)`,
                    zIndex: 10 + idx,
                  }}
                  className="sticky-competency-card sticky transition-all duration-300 will-change-transform"
                >
                  <div
                    onMouseMove={handleMouseMove}
                    className="spotlight-card apple-glass-card rounded-3xl p-7 md:p-10 border border-white/15 shadow-2xl relative overflow-hidden backdrop-blur-2xl bg-[#0e121d]/90"
                  >
                    {/* Top Bar: Icon, Header, Metric & ID */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 pb-6 border-b border-white/[0.08]">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-[#06b6d4] shadow-lg shadow-cyan-500/10 shrink-0">
                          <Icon className="w-7 h-7" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                              {area.category}
                            </span>
                            <span className="text-neutral-500">•</span>
                            <span className="text-xs font-mono text-emerald-400 font-bold">
                              {area.metric}
                            </span>
                          </div>
                          <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                            {area.title}
                          </h4>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
                        <span className="text-xs font-mono text-neutral-400 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                          ID: <strong className="text-white font-bold">{area.id}</strong> / 04
                        </span>
                      </div>
                    </div>

                    {/* High-Level Overview */}
                    <p className="text-neutral-200 text-sm md:text-base leading-relaxed mb-8 max-w-4xl">
                      {area.desc}
                    </p>

                    {/* Unified Architectural Blueprint Specs (All on the Card Face — Zero Flipping) */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
                      {/* Architecture */}
                      <div className="apple-glass-subcard p-5 rounded-2xl border border-cyan-500/20 bg-cyan-950/15">
                        <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Core Architecture
                        </span>
                        <p className="text-neutral-300 text-xs leading-relaxed">
                          {area.specs.architecture}
                        </p>
                      </div>

                      {/* Guardrails */}
                      <div className="apple-glass-subcard p-5 rounded-2xl border border-rose-500/20 bg-rose-950/10">
                        <span className="text-[11px] font-mono text-rose-400 font-bold uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Guardrails & Verification
                        </span>
                        <p className="text-neutral-300 text-xs leading-relaxed">
                          {area.specs.guardrail}
                        </p>
                      </div>

                      {/* Measured Impact */}
                      <div className="apple-glass-subcard p-5 rounded-2xl border border-emerald-500/20 bg-emerald-950/10">
                        <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Measured Production Impact
                        </span>
                        <p className="text-neutral-200 text-xs leading-relaxed">
                          {area.specs.impact}
                        </p>
                      </div>
                    </div>

                    {/* Bottom: Skills & Production Stack Chips */}
                    <div className="pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-mono text-neutral-400 mr-1">Stack:</span>
                        {area.specs.stack.map((item) => (
                          <span
                            key={item}
                            className="text-xs font-mono text-cyan-200 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1 rounded-xl shadow-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>Production Verified</span>
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
