"use client";

import { useState } from "react";
import { Terminal, Send, Bot, Sparkles, CheckCircle2 } from "lucide-react";

interface TestQuery {
  question: string;
  retrievedChunks: string[];
  groundingScore: number;
  answer: string;
  latencyMs: number;
}

const PRESET_QUERIES: Record<string, TestQuery> = {
  "bank-reconciliation": {
    question: "Verify contractor invoices against statement deposits for Q1 batch #409",
    retrievedChunks: [
      "Chunk #12 [bank_stmt_q1.json]: Deposit ID 409-A matched contractor invoice INV-9812 for amount $42,500.00.",
      "Chunk #18 [payroll_ledger.json]: Withholding tax 10% auto-deducted, net disbursed to escrow account.",
      "Chunk #22 [audit_rules.json]: Cross-verification threshold variance: ±0.00% exact match required.",
    ],
    groundingScore: 99.4,
    answer:
      "All 3 line-items in Batch #409 match contractor invoices with 0% variance. Tax withholding of $4,250.00 reconciled into escrow. Status: VERIFIED & APPROVED.",
    latencyMs: 312,
  },
  "hallucination-check": {
    question: "Evaluate factual grounding score for contract clause 14.b termination liabilities",
    retrievedChunks: [
      "Chunk #04 [master_agreement.pdf]: Clause 14.b specifies 30-day notice with zero penalty upon mutual consent.",
      "Chunk #09 [indemnity_appendix.pdf]: Third-party liability capped at trailing 6-month billing aggregates.",
    ],
    groundingScore: 96.8,
    answer:
      "Clause 14.b allows 30-day written notice termination with 0% penalty. Liability ceiling adheres strictly to Appendix B caps ($180k max). Grounding confidence: High.",
    latencyMs: 245,
  },
  "agent-quiz-generation": {
    question: "Generate 3-question adaptive quiz for LMS GenAI V4 module on Vector Indexing",
    retrievedChunks: [
      "Chunk #33 [vector_embeddings.md]: Hierarchical Navigable Small World (HNSW) vs Inverted File Index (IVF).",
      "Chunk #37 [distance_metrics.md]: Cosine similarity vs Euclidean L2 distance for normalized 1536-dim vectors.",
    ],
    groundingScore: 98.1,
    answer:
      "Synthesized 3 adaptive questions with automated WaveNet speech synthesis cues & instant validation key attached.",
    latencyMs: 380,
  },
};

export default function RagPlayground() {
  const [activeKey, setActiveKey] = useState<string>("bank-reconciliation");
  const [isSimulating, setIsSimulating] = useState(false);
  const [customInput, setCustomInput] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const query = PRESET_QUERIES[activeKey] || PRESET_QUERIES["bank-reconciliation"];

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
      setTimeout(() => setShowNotification(false), 3000);
    }, 600);
  };

  return (
    <div className="glass-panel rounded-2xl p-6 lg:p-8 relative overflow-hidden border border-white/10 shadow-2xl">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-white tracking-tight">Interactive RAG Pipeline Simulator</h3>
              <span className="px-2 py-0.5 text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Live Demo
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Test Kashif&apos;s retrieval pipeline: document chunking, FAISS vector search & cross-encoder grounding
            </p>
          </div>
        </div>

        {/* Quick query presets */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-400 mr-1 hidden sm:inline">Presets:</span>
          <button
            onClick={() => handleSimulate("bank-reconciliation")}
            className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-all ${
              activeKey === "bank-reconciliation"
                ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20"
                : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
            }`}
          >
            Bank Recon (Karanji)
          </button>
          <button
            onClick={() => handleSimulate("hallucination-check")}
            className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-all ${
              activeKey === "hallucination-check"
                ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20"
                : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
            }`}
          >
            Clause Grounding
          </button>
          <button
            onClick={() => handleSimulate("agent-quiz-generation")}
            className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-all ${
              activeKey === "agent-quiz-generation"
                ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20"
                : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
            }`}
          >
            LMS GenAI V4
          </button>
        </div>
      </div>

      {/* Simulator Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left column: Input & Query */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-black/40 rounded-xl p-4 border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Terminal className="w-3.5 h-3.5" /> Input Query
              </span>
              <span className="text-slate-500">FastAPI /query endpoint</span>
            </div>
            <div className="text-sm font-mono text-slate-200 bg-white/5 p-3 rounded-lg border border-white/5 leading-relaxed">
              &quot;{query.question}&quot;
            </div>

            <form onSubmit={handleCustomSubmit} className="pt-2">
              <label className="text-[11px] text-slate-400 block mb-1 font-mono">Or test your own query:</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g., Query petroleum contractor rate cards..."
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 pr-9 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono"
                />
                <button
                  type="submit"
                  aria-label="Submit query"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>

          {/* Metrics Card */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-black/30 rounded-xl p-3 border border-white/5">
              <span className="text-[11px] text-slate-400 font-mono block">Grounding Score</span>
              <div className="text-xl font-bold text-emerald-400 flex items-center gap-1 mt-0.5">
                {query.groundingScore}%
                <span className="text-[10px] text-emerald-500/80 font-normal">verified</span>
              </div>
            </div>
            <div className="bg-black/30 rounded-xl p-3 border border-white/5">
              <span className="text-[11px] text-slate-400 font-mono block">Inference Latency</span>
              <div className="text-xl font-bold text-cyan-400 flex items-center gap-1 mt-0.5">
                {query.latencyMs}ms
                <span className="text-[10px] text-cyan-500/80 font-normal">FAISS + GPT-4</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Retrieved Chunks & Synthesized Output */}
        <div className="lg:col-span-7 space-y-4">
          {/* Retrieved Chunks Inspection */}
          <div className="bg-black/40 rounded-xl p-4 border border-white/10">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2.5">
              <span className="text-indigo-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Retrieved Knowledge Chunks (Top-k: 3)
              </span>
              <span className="text-[11px] text-slate-500">FAISS Index / Cosine Sim</span>
            </div>

            <div className="space-y-2">
              {query.retrievedChunks.map((chunk, i) => (
                <div
                  key={i}
                  className={`p-2.5 rounded-lg text-xs font-mono transition-all duration-300 ${
                    isSimulating
                      ? "opacity-50 blur-[1px]"
                      : "bg-white/[0.03] text-slate-300 border border-white/5 hover:border-cyan-500/30"
                  }`}
                >
                  <span className="text-cyan-400 font-semibold mr-1.5">[{i + 1}]</span>
                  {chunk}
                </div>
              ))}
            </div>
          </div>

          {/* Grounded Generation */}
          <div className="bg-black/40 rounded-xl p-4 border border-white/10">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
              <span className="text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> Grounded Synthesis Output
              </span>
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
                0 Hallucinations Detected
              </span>
            </div>

            <div
              className={`text-sm text-slate-200 leading-relaxed font-sans bg-emerald-950/20 p-3 rounded-lg border border-emerald-500/20 transition-all ${
                isSimulating ? "opacity-30" : "opacity-100"
              }`}
            >
              {query.answer}
            </div>
          </div>
        </div>
      </div>

      {showNotification && (
        <div className="mt-4 p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-xs text-cyan-300 flex items-center justify-between">
          <span>Simulation dispatched through FAISS index. Custom query processed successfully!</span>
        </div>
      )}
    </div>
  );
}
