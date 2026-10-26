"use client";

import { ArrowRight, CheckCircle2, Workflow } from "lucide-react";

interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  metric: string;
  summary: string;
  pipeline: string[];
  challenge: string;
  solution: string;
  keyOutcomes: string[];
  techCategories: {
    label: string;
    items: string[];
  }[];
}

const PROJECTS: ProjectDetail[] = [
  {
    id: "01",
    title: "Document Q&A Agent (RAG)",
    category: "High-Precision RAG & Retrieval Architecture",
    metric: ">90% Retrieval Precision",
    summary:
      "Enterprise multi-document Question-Answering system designed with custom chunking, HuggingFace embeddings, FAISS vector indexing, and cross-encoder re-ranking to minimize hallucination risk.",
    pipeline: [
      "Document Ingestion",
      "Semantic Chunking",
      "HuggingFace Embeddings",
      "FAISS Vector Store",
      "Cross-Encoder Re-Ranking",
      "Streamlit Audit UI",
    ],
    challenge:
      "Standard RAG implementations suffer from context fragmentation, low semantic recall on domain documents, and severe hallucination when querying multi-source enterprise materials.",
    solution:
      "Architected a two-stage retrieval pipeline: preliminary nearest-neighbor search via FAISS, followed by cross-encoder re-ranking to filter low-relevance candidates. Coupled with a grounding-evaluation harness and source-chunk inspection UI.",
    keyOutcomes: [
      "Exceeded 90% retrieval precision across internal benchmark evaluation suites.",
      "Integrated transparent source-chunk inspection in Streamlit, giving reviewers verified citations.",
      "Eliminated out-of-context hallucinations through strict cross-encoder re-ranking thresholds.",
    ],
    techCategories: [
      { label: "AI & RAG", items: ["Python", "LangChain", "HuggingFace Embeddings", "Cross-Encoder", "FAISS", "OpenAI"] },
      { label: "Interface & Eval", items: ["Streamlit", "Retrieval Evaluation Harness", "Semantic Search"] },
    ],
  },
  {
    id: "02",
    title: "AI Customer Support Chatbot",
    category: "Production Agentic LLM & Cloud Microservice",
    metric: "70% Response Time Cut",
    summary:
      "Containerized LLM customer support agent with multi-turn context memory management and calibrated prompt optimization, deployed to Google Cloud Platform via automated CI/CD.",
    pipeline: [
      "User Query",
      "Context Memory Buffer",
      "Prompt Optimization",
      "GPT-4 / LangChain",
      "Docker Microservice",
      "GCP App Engine (CI/CD)",
    ],
    challenge:
      "High volume of repetitive inquiries overwhelmed support personnel, while naive LLM implementations suffered from context drift, token bloat, and uncontrolled latency.",
    solution:
      "Engineered multi-turn context memory management to preserve conversational continuity within tight token budgets. Optimized prompts and few-shot formatting for fast inference, wrapped in Docker and deployed on GCP App Engine.",
    keyOutcomes: [
      "Reduced manual support ticket turnaround time by an estimated 70%.",
      "Maintained low latency and cost predictability through prompt compression and memory buffers.",
      "Achieved hands-off continuous deployment with Dockerized CI/CD on GCP.",
    ],
    techCategories: [
      { label: "LLM & Agent", items: ["OpenAI GPT-4", "LangChain", "Multi-turn Memory", "Prompt Optimization"] },
      { label: "Backend & Cloud", items: ["Python", "Flask", "Docker", "GCP App Engine", "CI/CD Pipelines"] },
    ],
  },
  {
    id: "03",
    title: "Automated Travel Trolley for Airport",
    category: "Autonomous IoT & Sensor Fusion (Published Research)",
    metric: "Co-Authored Research Paper",
    summary:
      "Autonomous AI/IoT smart airport trolley featuring RFID-authenticated user following, LiDAR and ultrasonic sensor fusion for dynamic collision avoidance, and integrated load-cell luggage verification.",
    pipeline: [
      "RFID User Auth",
      "Pedestrian Tracking",
      "LiDAR / Ultrasonic Fusion",
      "Obstacle Avoidance",
      "Load-Cell Baggage Scale",
      "Published Paper",
    ],
    challenge:
      "Airport passenger fatigue, manual baggage hauling across long terminals, and unexpected baggage weight limits at boarding gates causing avoidable bottlenecks.",
    solution:
      "Developed a custom hardware-software embedded system combining RFID authentication for hands-free following, multi-sensor fusion for real-time obstacle navigation in crowded public spaces, and load-cell weight calibration.",
    keyOutcomes: [
      "Co-authored and published peer-reviewed research paper detailing system architecture and empirical validation.",
      "Real-time sensor fusion ensured safe autonomous following without line-of-sight dropouts.",
      "Integrated weight sensor displayed baggage metrics immediately to prevent airport check-in penalties.",
    ],
    techCategories: [
      { label: "Hardware & Edge", items: ["Arduino Uno", "LiDAR", "Ultrasonic Sensors", "Load-Cell Strain Gauges"] },
      { label: "Sensors & Comms", items: ["RFID Authentication", "Bluetooth", "Sensor Fusion Algorithms", "Motor Control"] },
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full bg-transparent text-white py-24 border-t border-white/[0.08] px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Clean Apple-style Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] font-semibold block mb-2">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Projects
          </h2>
          <p className="text-sm md:text-base text-neutral-400 mt-2 max-w-2xl">
            Selected engineering case studies showcasing end-to-end RAG pipelines, agentic workflows, and cloud deployments.
          </p>
        </div>

        {/* Project Case Studies with Apple Glassmorphism */}
        <div className="flex flex-col gap-14">
          {PROJECTS.map((p) => (
            <div
              key={p.id}
              className="p-8 md:p-12 apple-glass-card rounded-3xl relative overflow-hidden"
            >
              {/* Top Banner: ID, Title & Metric */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 pb-8 border-b border-white/[0.08]">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#06b6d4] font-semibold">
                      Project {p.id}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                    <span className="text-xs text-neutral-400 font-mono">
                      {p.category}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-sm md:text-base text-neutral-300 max-w-4xl leading-relaxed">
                    {p.summary}
                  </p>
                </div>

                {/* Primary Metric Badge (Frosted Glass Pill) */}
                <div className="shrink-0">
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-400/25 text-[#06b6d4] font-mono text-sm font-bold shadow-[inset_0_1px_0_0_rgba(6,182,212,0.25)]">
                    <Workflow className="w-4 h-4 text-[#06b6d4]" />
                    <span>{p.metric}</span>
                  </div>
                </div>
              </div>

              {/* Architecture Dataflow Pipeline (Apple Glass Subcard) */}
              <div className="mt-8 pt-2">
                <span className="text-[11px] uppercase font-mono tracking-widest text-neutral-400 block mb-3 font-semibold">
                  System Architecture Pipeline:
                </span>
                <div className="flex flex-wrap items-center gap-2.5 p-4 md:p-5 apple-glass-subcard rounded-2xl">
                  {p.pipeline.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <span className="px-3.5 py-1.5 rounded-xl apple-glass-pill text-xs font-mono text-slate-200 font-medium">
                        {step}
                      </span>
                      {idx < p.pipeline.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-[#06b6d4]/80 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenge vs Solution & Outcomes (Apple Glass Grid) */}
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Challenge & Solution Box */}
                <div className="p-6 md:p-8 apple-glass-subcard rounded-2xl flex flex-col justify-between">
                  <div>
                    <div className="mb-5">
                      <span className="text-[11px] uppercase font-mono tracking-wider text-rose-400 font-bold block mb-1.5">
                        The Technical Challenge
                      </span>
                      <p className="text-neutral-300 text-sm leading-relaxed">
                        {p.challenge}
                      </p>
                    </div>

                    <div className="pt-5 border-t border-white/[0.08]">
                      <span className="text-[11px] uppercase font-mono tracking-wider text-cyan-400 font-bold block mb-1.5">
                        Architectural Solution
                      </span>
                      <p className="text-neutral-200 text-sm leading-relaxed">
                        {p.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Measured Outcomes */}
                <div className="p-6 md:p-8 apple-glass-subcard rounded-2xl flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] uppercase font-mono tracking-wider text-emerald-400 font-bold block mb-4">
                      Key Engineering Outcomes & Validation
                    </span>
                    <ul className="space-y-3.5 text-sm text-neutral-300">
                      {p.keyOutcomes.map((out, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Categorized Tech Stack */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col md:flex-row md:items-center gap-6">
                <span className="text-xs uppercase font-mono text-neutral-500 shrink-0">
                  Tech Stack by Layer:
                </span>
                <div className="flex flex-wrap gap-6">
                  {p.techCategories.map((cat, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2.5">
                      <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                        {cat.label}:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.items.map((item) => (
                          <span
                            key={item}
                            className="text-[10px] uppercase font-mono tracking-wider text-neutral-300 apple-glass-pill px-2.5 py-1 rounded-md"
                          >
                            {item}
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
