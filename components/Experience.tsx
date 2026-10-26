"use client";

import { CheckCircle2, Layers, Zap } from "lucide-react";

interface SubSystem {
  title: string;
  category: string;
  metric?: string;
  description: string;
  achievements: string[];
  tech: string[];
}

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  systems: SubSystem[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "01",
    role: "GenAI Developer",
    company: "Karanji Infotech",
    location: "Mangalore, India",
    period: "Dec 2025 — May 2026",
    summary:
      "Led end-to-end architecture and deployment of enterprise Generative AI systems, delivering high-precision RAG pipelines for a petroleum client and production LMS solutions for banking clients.",
    highlights: ["50% Manual Effort Reduction", "Banking-Scale CI/CD", "30% Content Authoring Acceleration"],
    systems: [
      {
        title: "Enterprise Petroleum RAG Reconciliation Engine",
        category: "RAG Architecture & Hallucination Guardrails",
        metric: "50% Manual Effort Reduction",
        description:
          "Owned the end-to-end architecture of a production RAG system for a petroleum-sector client to cross-verify contractor payments across bank statements and payroll records.",
        achievements: [
          "Designed domain-specific document chunking and embedding strategy optimized for semi-structured bank statements and payroll JSON.",
          "Built a LangChain retrieval pipeline with FAISS vector search for high-precision semantic matching.",
          "Formulated a grounding-evaluation approach to eliminate hallucination risks in financial reconciliation outputs.",
          "Automated contractor payment verification, cutting manual auditing effort by an estimated 50%.",
        ],
        tech: ["Python", "LangChain", "FAISS", "OpenAI", "RAG Grounding", "JSON ETL"],
      },
      {
        title: "LMS GenAI V4 & Agentic Module Editor",
        category: "Full-Stack AI Application & Banking Scale",
        metric: "30% Faster Authoring",
        description:
          "Architected and shipped an enterprise AI-powered Learning Management System (LMS GenAI V4), deployed to a banking client at production scale with automated CI/CD pipelines.",
        achievements: [
          "Architected high-performance web interface using React 19, TypeScript, Vite, and Tailwind CSS v4.",
          "Built an AI agent-driven Module Editor combining WaveNet-compatible voice-over generation, live preview rendering, and a REST API-driven dynamic quiz engine.",
          "Accelerated manual content-authoring time by an estimated 30%.",
          "Configured continuous integration and deployment (CI/CD) pipelines ensuring low-downtime banking releases.",
        ],
        tech: ["React 19", "TypeScript", "Tailwind CSS v4", "Vite", "WaveNet AI", "CI/CD"],
      },
      {
        title: "Enterprise Security Guardrails & Reliability",
        category: "Auth Security & Quality Engineering",
        metric: "Zero Production Regressions",
        description:
          "Engineered platform security guardrails and end-to-end testing infrastructure to ensure strict enterprise compliance.",
        achievements: [
          "Implemented Firebase Authentication with JWT local-expiry validation and forced automatic logout on token invalidation.",
          "Engineered reactive light/dark theming via React Context for enterprise usability.",
          "Achieved comprehensive end-to-end test coverage with Vitest and React Testing Library, reducing production regression incidents.",
        ],
        tech: ["Firebase Auth", "JWT Guardrails", "Vitest", "React Testing Library"],
      },
    ],
  },
  {
    id: "02",
    role: "AI Engineer Intern",
    company: "Movidu Technologies",
    location: "Bengaluru, India (Remote)",
    period: "Sep 2024 — Dec 2024",
    summary:
      "Engineered full-stack LLM application features, production RAG integrations, and autonomous task agents deployed on Google Cloud Platform.",
    highlights: ["GCP Production Deployments", "High-Relevance RAG", "Automated Content Workflows"],
    systems: [
      {
        title: "Production LLM Application & Cloud Inference Architecture",
        category: "Full-Stack AI & Cloud Infrastructure",
        metric: "Cloud-Scale Inference",
        description:
          "Developed end-to-end LLM application features connecting frontend clients to a dedicated cloud inference engine.",
        achievements: [
          "Integrated LangChain and OpenAI APIs across a React/Next.js frontend and a high-performance FastAPI inference backend.",
          "Deployed containerized services to Google Cloud Platform (GCP) for scalable production inference.",
        ],
        tech: ["FastAPI", "Python", "Next.js", "LangChain", "OpenAI APIs", "GCP"],
      },
      {
        title: "Production RAG Pipelines & Task-Automation Agents",
        category: "RAG Integrations & Agentic Workflows",
        metric: "Streamlined Workflows",
        description:
          "Designed grounding-focused RAG components and agentic automation to eliminate repetitive content generation overhead.",
        achievements: [
          "Engineered RAG pipeline integrations (embeddings, retrieval, and prompt evaluation) that shipped to production.",
          "Significantly improved grounding and content-generation relevance while reducing manual review cycles.",
          "Developed LLM-based task-automation agents that streamlined internal workflows for faster turnaround.",
        ],
        tech: ["RAG Pipelines", "Embeddings", "Prompt Evaluation", "Autonomous Agents"],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full bg-transparent text-white py-24 border-t border-white/[0.08] px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Clean Apple-style Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] font-semibold block mb-2">
            Career & Work History
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Professional Experience
          </h2>
          <p className="text-sm md:text-base text-neutral-400 mt-2 max-w-2xl">
            Production engineering roles delivering enterprise RAG architectures, full-stack AI platforms, and cloud deployments.
          </p>
        </div>

        {/* Experience Cards with Apple Glassmorphism */}
        <div className="flex flex-col gap-14">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="p-8 md:p-12 apple-glass-card rounded-3xl relative overflow-hidden"
            >
              {/* Top Meta Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 pb-8 border-b border-white/[0.08]">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#06b6d4] font-semibold">
                      Role {exp.id}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                    <span className="text-xs text-neutral-400 font-mono">
                      {exp.location}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-lg md:text-xl font-medium text-slate-200">
                      {exp.company}
                    </span>
                    <span className="text-neutral-500">•</span>
                    <span className="text-sm font-mono text-cyan-400 font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-4 text-sm md:text-base text-neutral-300 max-w-4xl leading-relaxed">
                    {exp.summary}
                  </p>
                </div>

                {/* Highlight Badges (Frosted Glass Pills) */}
                <div className="flex flex-wrap lg:flex-col gap-2 shrink-0">
                  {exp.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full apple-glass-pill text-cyan-300 text-xs font-mono font-medium border-cyan-500/30"
                    >
                      <Zap className="w-3.5 h-3.5 text-[#06b6d4]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Systems Delivered Grid */}
              <div className="mt-8 space-y-6">
                <h4 className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono font-semibold flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#06b6d4]" />
                  <span>Key Systems Architected & Shipped:</span>
                </h4>

                <div className="grid grid-cols-1 gap-6">
                  {exp.systems.map((sys, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-6 md:p-8 apple-glass-subcard rounded-2xl hover:border-white/15 transition-all"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                        <div>
                          <span className="text-[11px] uppercase font-mono tracking-wider text-cyan-400 font-semibold block mb-1">
                            {sys.category}
                          </span>
                          <h5 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                            {sys.title}
                          </h5>
                        </div>
                        {sys.metric && (
                          <div className="shrink-0 px-3.5 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-400/25 text-[#06b6d4] text-xs font-mono font-bold shadow-[inset_0_1px_0_0_rgba(6,182,212,0.25)]">
                            {sys.metric}
                          </div>
                        )}
                      </div>

                      <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                        {sys.description}
                      </p>

                      <ul className="space-y-3 mb-6 text-sm text-neutral-300">
                        {sys.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-[#06b6d4] shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{ach}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/[0.08]">
                        <span className="text-[11px] uppercase font-mono text-neutral-400 mr-2">
                          Technologies:
                        </span>
                        {sys.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] uppercase font-mono tracking-wider text-neutral-300 apple-glass-pill px-2.5 py-1 rounded-md"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
