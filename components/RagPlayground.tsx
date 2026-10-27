"use client";

import { useState } from "react";
import { Bot, Sparkles, CheckCircle2, Send, Cpu, Database, ShieldAlert, ArrowRight } from "lucide-react";

interface TestQuery {
  id: string;
  name: string;
  badge: string;
  question: string;
  pipelineStages: string[];
  retrievedChunks: { id: string; source: string; text: string; score: number }[];
  groundingScore: number;
  answer: string;
  latencyMs: number;
}

const PRESET_QUERIES: Record<string, TestQuery> = {
  "petroleum-rag": {
    id: "petroleum-rag",
    name: "Petroleum RAG Reconciliation",
    badge: "FAISS + Cross-Encoder",
    question: "Cross-verify contractor invoices against statement deposits for Q1 batch #409",
    pipelineStages: ["Document Ingestion", "FAISS Vector Search", "Cross-Encoder Re-Ranking", "Grounding Guardrail"],
    retrievedChunks: [
      {
        id: "CHUNK-01",
        source: "bank_stmt_q1.json",
        text: "Deposit ID 409-A matched contractor invoice INV-9812 for amount $42,500.00.",
        score: 0.984,
      },
      {
        id: "CHUNK-02",
        source: "payroll_ledger.json",
        text: "Withholding tax 10% ($4,250.00) auto-deducted, net disbursed to escrow account.",
        score: 0.962,
      },
      {
        id: "CHUNK-03",
        source: "audit_rules.json",
        text: "Cross-verification threshold variance: ±0.00% exact match required for payroll clearance.",
        score: 0.948,
      },
    ],
    groundingScore: 99.4,
    answer:
      "All 3 line-items in Batch #409 match contractor invoices with 0.00% variance. Tax withholding of $4,250.00 reconciled into escrow. Status: VERIFIED & APPROVED (50% manual audit effort saved).",
    latencyMs: 312,
  },
  "hallucination-guard": {
    id: "hallucination-guard",
    name: "Hallucination Guardrail Check",
    badge: "Zero-Risk Grounding",
    question: "Evaluate factual grounding score for contract clause 14.b termination liabilities",
    pipelineStages: ["Clause Ingestion", "Semantic Normalization", "Cosine Distance Filter", "Truth Verification"],
    retrievedChunks: [
      {
        id: "CHUNK-14",
        source: "master_agreement.pdf",
        text: "Clause 14.b specifies 30-day notice with zero penalty upon mutual written consent.",
        score: 0.991,
      },
      {
        id: "CHUNK-19",
        source: "indemnity_appendix.pdf",
        text: "Third-party liability capped at trailing 6-month billing aggregates ($180,000 ceiling).",
        score: 0.957,
      },
    ],
    groundingScore: 98.9,
    answer:
      "Clause 14.b permits 30-day written notice termination with 0% penalty. Liability ceiling adheres strictly to Appendix B caps ($180k max). Grounding verification: Zero hallucination detected.",
    latencyMs: 245,
  },
  "lms-quiz-agent": {
    id: "lms-quiz-agent",
    name: "LMS GenAI V4 Quiz Agent",
    badge: "Agentic Loop + WaveNet",
    question: "Synthesize adaptive 3-question evaluation module on Vector Embeddings and HNSW vs IVF",
    pipelineStages: ["Curriculum Extraction", "Concept Chunking", "Question Generation", "WaveNet Voice Queue"],
    retrievedChunks: [
      {
        id: "CHUNK-33",
        source: "vector_embeddings.md",
        text: "Hierarchical Navigable Small World (HNSW) graphs offer logarithmic search latency over IVF.",
        score: 0.978,
      },
      {
        id: "CHUNK-37",
        source: "distance_metrics.md",
        text: "Cosine similarity vs Euclidean L2 distance for normalized 1536-dim OpenAI embeddings.",
        score: 0.952,
      },
    ],
    groundingScore: 98.2,
    answer:
      "Generated 3-tier adaptive quiz with automated WaveNet speech synthesis cues and instant validation keys. Content authoring turnaround accelerated by 30%.",
    latencyMs: 380,
  },
};

export default function RagPlayground() {
  const [activeKey, setActiveKey] = useState<string>("petroleum-rag");
  const [isSimulating, setIsSimulating] = useState(false);
  const [customInput, setCustomInput] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const query = PRESET_QUERIES[activeKey] || PRESET_QUERIES["petroleum-rag"];

  const handleSimulate = (key: string) => {
    setIsSimulating(true);
    setActiveKey(key);
    setTimeout(() => {
      setIsSimulating(false);
    }, 450);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    setIsSimulating(true);
    setShowNotification(true);
    setTimeout(() => {
      setIsSimulating(false);
      setTimeout(() => setShowNotification(false), 3500);
    }, 600);
  };

  return (
    <section id="simulator" className="relative w-full border-t border-white/[0.08] px-6 md:px-12 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] font-semibold">
              Live Interactive Architecture Demo
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Interactive RAG Pipeline Simulator
          </h2>
          <p className="text-neutral-400 text-sm md:text-base mt-2 max-w-2xl">
            Test how my production pipelines ingest domain queries, extract FAISS vector chunks, filter through
            cross-encoders, and synthesize hallucination-free outputs.
          </p>
        </div>

        {/* Simulator Box */}
        <div className="apple-glass-card rounded-3xl p-6 md:p-8 relative overflow-hidden border border-white/15">
          {/* Preset Selector Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="flex flex-wrap items-center gap-2">
              {Object.values(PRESET_QUERIES).map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSimulate(item.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
                    activeKey === item.id
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.25)] font-semibold"
                      : "apple-glass-pill text-neutral-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Bot className="w-3.5 h-3.5" />
                  {item.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Grounding Harness: Active</span>
            </div>
          </div>

          {/* Visual Pipeline Flow */}
          <div className="py-6 border-b border-white/[0.08]">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-3">
              Live Pipeline Stages:
            </span>
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              {query.pipelineStages.map((stage, sIdx) => (
                <div key={sIdx} className="flex items-center gap-2">
                  <div
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-300 ${
                      isSimulating
                        ? "bg-cyan-500/30 text-cyan-200 border border-cyan-400/50 scale-105"
                        : "apple-glass-pill text-neutral-200"
                    }`}
                  >
                    <span className="text-cyan-400 font-bold mr-1.5">{sIdx + 1}.</span>
                    {stage}
                  </div>
                  {sIdx < query.pipelineStages.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400/60 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Main Simulation Viewport */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Query & Telemetry */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="apple-glass-subcard p-5 rounded-2xl border border-white/10">
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 block mb-2 font-semibold">
                  Executed Query:
                </span>
                <p className="text-sm font-mono text-slate-100 bg-black/40 p-3.5 rounded-xl border border-white/5 leading-relaxed">
                  &ldquo;{customInput.trim() ? customInput : query.question}&rdquo;
                </p>

                {/* Custom Query Input */}
                <form onSubmit={handleCustomSubmit} className="mt-4 pt-3 border-t border-white/[0.08]">
                  <label className="text-[11px] text-neutral-400 font-mono block mb-1.5">
                    Test your own custom inquiry:
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. Audit petroleum rate cards against Q2 statement..."
                      value={customInput}
                      onChange={(e) => setCustomInput(e.target.value)}
                      className="w-full bg-black/50 border border-white/15 rounded-xl px-3.5 py-2.5 pr-10 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-cyan-400 font-mono"
                    />
                    <button
                      type="submit"
                      aria-label="Run custom query"
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-cyan-400 hover:text-cyan-200 transition-colors"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>

              {/* Real-time Telemetry Metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="apple-glass-subcard p-4 rounded-2xl border border-white/10">
                  <span className="text-[11px] text-neutral-400 font-mono block">Grounding Confidence</span>
                  <div className="text-2xl font-bold font-mono text-emerald-400 flex items-center gap-1.5 mt-1">
                    {query.groundingScore}%
                    <span className="text-[10px] text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                      Verified
                    </span>
                  </div>
                </div>

                <div className="apple-glass-subcard p-4 rounded-2xl border border-white/10">
                  <span className="text-[11px] text-neutral-400 font-mono block">Inference Latency</span>
                  <div className="text-2xl font-bold font-mono text-cyan-400 flex items-center gap-1.5 mt-1">
                    {query.latencyMs}ms
                    <span className="text-[10px] text-cyan-500 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">
                      FAISS
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Retrieved Chunks & Output */}
            <div className="lg:col-span-7 space-y-4">
              {/* Retrieved Knowledge Chunks */}
              <div className="apple-glass-subcard p-5 rounded-2xl border border-white/10">
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-cyan-400 flex items-center gap-1.5 font-semibold">
                    <Database className="w-3.5 h-3.5" /> Retrieved Knowledge Chunks (Top-k: 3)
                  </span>
                  <span className="text-[11px] text-neutral-400">FAISS Vector Index (Cosine Metric)</span>
                </div>

                <div className="space-y-2.5">
                  {query.retrievedChunks.map((chunk, cIdx) => (
                    <div
                      key={cIdx}
                      className={`p-3 rounded-xl text-xs font-mono transition-all duration-300 ${
                        isSimulating
                          ? "opacity-40 blur-[1px]"
                          : "bg-black/40 text-slate-200 border border-white/5 hover:border-cyan-500/30"
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-1">
                        <span className="text-cyan-400 font-bold">[{chunk.id}]</span>
                        <span className="text-slate-400">{chunk.source}</span>
                        <span className="text-emerald-400 font-mono">Similarity: {chunk.score}</span>
                      </div>
                      <p className="leading-relaxed">{chunk.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grounded Synthesis Output */}
              <div className="apple-glass-subcard p-5 rounded-2xl border border-emerald-500/30 bg-emerald-950/10">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-emerald-400 flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="w-4 h-4" /> Grounded Synthesis Output
                  </span>
                  <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
                    0 Hallucinations Detected
                  </span>
                </div>

                <p
                  className={`text-sm text-slate-100 leading-relaxed font-sans pt-1 transition-all duration-300 ${
                    isSimulating ? "opacity-30" : "opacity-100"
                  }`}
                >
                  {query.answer}
                </p>
              </div>
            </div>
          </div>

          {showNotification && (
            <div className="mt-4 p-3 bg-cyan-500/15 border border-cyan-400/30 rounded-xl text-xs text-cyan-200 flex items-center gap-2 font-mono">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Simulated custom query through FAISS index. Retrieval and cross-encoder re-ranking complete!</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
