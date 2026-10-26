"use client";

import { Brain, Cpu, Server, ShieldCheck } from "lucide-react";

const FOCUS_AREAS = [
  {
    icon: Brain,
    title: "Production RAG & Grounding",
    desc: "Designing domain-specific chunking strategies, FAISS vector indexing, and cross-encoder re-ranking pipelines with grounding harnesses to eliminate hallucination risk.",
    skills: ["LangChain", "FAISS", "HuggingFace", "Grounding Evaluation", "OpenAI"],
  },
  {
    icon: Cpu,
    title: "Agentic Systems & Automation",
    desc: "Building autonomous task-automation agents, multi-turn context memory buffers, and AI-driven content generation pipelines that cut manual operational effort.",
    skills: ["Agentic Workflows", "Prompt Optimization", "Context Memory", "WaveNet AI"],
  },
  {
    icon: Server,
    title: "Backend & Cloud Infrastructure",
    desc: "Engineering scalable backend architectures with Python, FastAPI, and Flask. Containerizing microservices with Docker and deploying to Google Cloud Platform via CI/CD.",
    skills: ["Python", "FastAPI", "Docker", "GCP App Engine", "CI/CD", "REST APIs"],
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Reliability & Security",
    desc: "Shipping production solutions to banking and petroleum enterprise clients with JWT local-expiry guardrails, Firebase Auth, and full Vitest / RTL test coverage.",
    skills: ["Firebase Auth", "JWT Guardrails", "React 19", "TypeScript", "Vitest"],
  },
];

export default function About() {
  const paragraph =
    "I am a Generative AI & Backend Engineer specialized in production RAG pipelines, LLM agent architectures, and resilient cloud deployments on Google Cloud Platform. I focus on high-precision retrieval, hallucination mitigation, and enterprise-grade software delivery.";

  return (
    <section
      id="about"
      className="relative w-full bg-transparent border-t border-white/[0.08] px-6 md:px-12 py-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Clean Apple-style Section Header */}
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

        {/* ── QUANTIFIABLE PRODUCTION METRICS (Apple Glass) ── */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 py-10 apple-glass-subcard rounded-3xl px-8">
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

        {/* ── CORE ARCHITECTURAL PILLARS (Apple Glass Cards) ── */}
        <div className="mt-20">
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Core Technical Competencies
            </h3>
            <p className="text-sm text-neutral-400 mt-1">
              Architectural domains and production-tested patterns I work with daily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FOCUS_AREAS.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="p-8 apple-glass-card rounded-3xl hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-[#06b6d4]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      {area.title}
                    </h4>
                  </div>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                    {area.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.08]">
                    {area.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono text-neutral-300 apple-glass-pill px-3 py-1 rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
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
