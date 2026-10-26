"use client";

import { FormEvent, useState } from "react";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  message: string;
  company: string;
};

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  message: "",
  company: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");


  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return "Please complete all fields before sending.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      return "Please use a valid email address.";
    }

    if (form.message.trim().length < 10) {
      return "Message should be at least 10 characters so I can respond effectively.";
    }

    return "";
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback("");
    setStatus("idle");

    const validationError = validate();
    if (validationError) {
      setStatus("error");
      setFeedback(validationError);
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Failed to send your message.");
      }

      setStatus("success");
      setFeedback("Thanks, your message has been sent. I will get back to you shortly.");
      setForm(INITIAL_FORM);
    } catch (error) {
      const rawMessage = error instanceof Error ? error.message : "";
      const isRawFetchError =
        rawMessage.includes("fetch failed") ||
        rawMessage.includes("TypeError") ||
        rawMessage.includes("Failed to fetch");

      const displayMessage =
        isRawFetchError || !rawMessage
          ? "Unable to send right now. Please email me directly."
          : rawMessage;

      setStatus("error");
      setFeedback(displayMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-t border-white/[0.08] bg-transparent px-6 py-24 md:px-12">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1fr_1.3fr] items-start">
        {/* Left Column: Context & Contact info */}
        <div className="space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] font-semibold block mb-2">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Let&apos;s build something exceptional.
            </h2>
          </div>

          <p className="text-base leading-relaxed text-neutral-300 max-w-md">
            Whether you are looking to architect an enterprise RAG system, deploy production LLM agents, or discuss backend engineering roles, I would love to connect.
          </p>

          <div className="space-y-4 pt-2">
            <a
              href="mailto:sheikmohammedkashif@gmail.com"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl apple-glass-subcard text-sm text-neutral-200 hover:text-white hover:border-white/20 transition-all group"
            >
              <div className="w-8 h-8 rounded-xl bg-cyan-500/10 flex items-center justify-center text-[#06b6d4]">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-mono text-xs">sheikmohammedkashif@gmail.com</span>
            </a>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Kashif4164"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl apple-glass-pill text-xs font-mono text-neutral-300 hover:text-white hover:border-white/20 transition-all"
              >
                <span>GitHub Profile</span>
              </a>
              <a
                href="https://linkedin.com/in/sheikmohammedkashif"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl apple-glass-pill text-xs font-mono text-neutral-300 hover:text-white hover:border-white/20 transition-all"
              >
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Apple-style Glassmorphism Form Card */}
        <div className="apple-glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden">
          <form onSubmit={onSubmit} className="space-y-5" noValidate>
            <div>
              <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-neutral-400">
                Your Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                placeholder="e.g. Jane Doe"
                className="w-full rounded-xl apple-glass-subcard px-4 py-3.5 text-sm text-white placeholder-neutral-500 outline-none transition-all focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4]"
                autoComplete="name"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-neutral-400">
                Email Address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                placeholder="name@company.com"
                className="w-full rounded-xl apple-glass-subcard px-4 py-3.5 text-sm text-white placeholder-neutral-500 outline-none transition-all focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4]"
                autoComplete="email"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-neutral-400">
                Project or Inquiry Details
              </label>
              <textarea
                value={form.message}
                onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                placeholder="Tell me about your project goals, technical context, or timeline..."
                className="min-h-32 w-full rounded-xl apple-glass-subcard px-4 py-3.5 text-sm text-white placeholder-neutral-500 outline-none transition-all focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4] resize-y"
                required
              />
            </div>

            <label className="sr-only" aria-hidden="true">
              Company
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.company}
                onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#06b6d4] text-neutral-950 font-semibold text-sm hover:bg-[#22d3ee] transition-all disabled:cursor-not-allowed disabled:opacity-60 shadow-[0_0_25px_rgba(6,182,212,0.25)]"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            </button>

            {feedback && (
              <div
                role="status"
                className={`flex items-center gap-2.5 p-3.5 rounded-xl text-xs font-mono ${
                  status === "success"
                    ? "bg-emerald-500/10 border border-emerald-500/25 text-emerald-300"
                    : "bg-rose-500/10 border border-rose-500/25 text-rose-300"
                }`}
              >
                {status === "success" ? (
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                ) : (
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                )}
                <span>{feedback}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
