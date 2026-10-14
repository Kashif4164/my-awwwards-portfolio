"use client";

import { useState } from "react";
import { Copy, Check, ExternalLink, Mail, Send, Loader2, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "../resumeData";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function BentoContact() {
  const [copied, setCopied] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#06b6d4", "#6366f1", "#10b981"],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to dispatch message.");
      }

      setMessageSent(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#06b6d4", "#a855f7", "#3b82f6"],
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
      {/* Left Column: Direct Action & Status */}
      <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
        <div className="glass-panel rounded-2xl p-6 lg:p-8 space-y-4 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Open for Opportunities</span>
          </div>

          <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
            Let&apos;s build intelligent GenAI systems together.
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed">
            I am actively seeking <span className="text-cyan-400 font-semibold">Generative AI & Backend Engineer</span> roles starting from mid-2026. Whether you need production RAG architecture, autonomous LLM agents, or scalable microservices, I&apos;d love to connect.
          </p>

          <div className="pt-2">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
              <div className="truncate mr-2">
                <span className="text-[10px] text-slate-400 font-mono block">Direct Email</span>
                <span className="text-xs sm:text-sm text-slate-200 font-mono truncate">{PERSONAL_INFO.email}</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md shrink-0 cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 rounded-xl flex items-center justify-center gap-2 text-xs font-medium text-slate-200 transition-all group"
            >
              <LinkedinIcon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              LinkedIn
              <ExternalLink className="w-3 h-3 text-slate-500 ml-auto" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 rounded-xl flex items-center justify-center gap-2 text-xs font-medium text-slate-200 transition-all group"
            >
              <GithubIcon className="w-4 h-4 text-slate-200 group-hover:scale-110 transition-transform" />
              GitHub
              <ExternalLink className="w-3 h-3 text-slate-500 ml-auto" />
            </a>
          </div>
        </div>

        {/* Location & Quick Contact card */}
        <div className="glass-panel rounded-2xl p-5 border border-white/10 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400">Based in</span>
            <div className="text-sm font-semibold text-white">{PERSONAL_INFO.location}</div>
          </div>
          <div className="text-right">
            <span className="text-xs text-slate-400">Direct Phone</span>
            <div className="text-sm font-mono text-cyan-300">{PERSONAL_INFO.phone}</div>
          </div>
        </div>
      </div>

      {/* Right Column: Interactive Quick Reach Form */}
      <div className="lg:col-span-7 glass-panel rounded-2xl p-6 lg:p-8 relative">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-base font-semibold text-white">Send a Direct Dispatch</h4>
            <p className="text-xs text-slate-400">Feel free to ask questions about my RAG systems or schedule a chat</p>
          </div>
        </div>

        {messageSent ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
              <Check className="w-7 h-7" />
            </div>
            <h5 className="text-xl font-bold text-white">Message Dispatched!</h5>
            <p className="text-xs text-slate-300 max-w-sm mx-auto">
              Thank you for reaching out! Kashif will get back to you shortly. You can also reach him immediately at{" "}
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-400 underline">
                {PERSONAL_INFO.email}
              </a>
            </p>
            <button
              onClick={() => setMessageSent(false)}
              className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-xs text-white rounded-lg transition-colors cursor-pointer"
            >
              Send Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Hiring Manager"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-sans"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. hr@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Message / Inquiry</label>
              <textarea
                rows={4}
                required
                placeholder="Hi Kashif, I saw your work on production RAG and contractor reconciliation. We'd love to chat about..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-sans resize-none"
              />
            </div>

            {errorMessage && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-2.5 text-xs text-red-300">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <span className="font-medium">{errorMessage}</span>
                  <div className="mt-1 text-[11px] text-slate-400">
                    Direct email fallback:{" "}
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-400 underline hover:text-cyan-300">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-xs rounded-xl shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Saving & Dispatching...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5 text-cyan-200 group-hover:translate-x-0.5 transition-transform" />
                  <span>Send Message to Kashif</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
