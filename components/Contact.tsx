"use client";

<<<<<<< HEAD
import { useState } from "react";
import { soundFx } from "./SoundFX";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "kashif.dev@example.com";

  const copyEmail = () => {
    soundFx.playClick();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative min-h-screen bg-[#080808] px-6 md:px-12 pt-24 pb-12 border-t border-neutral-900 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#ff0055] font-medium block mb-4">
            ( 004 ) — Contact & Connect
          </span>
          <h2 className="text-5xl md:text-8xl font-black uppercase text-white tracking-tight leading-[0.9]">
            Let's build <br />
            <span className="italic font-serif font-light text-neutral-400">something</span> epic.
          </h2>
        </div>

        {/* Copy Email CTA Pill */}
        <div className="my-16 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <button
            onClick={copyEmail}
            data-magnetic
            data-cursor-text="COPY"
            className="group relative inline-flex items-center gap-4 px-8 py-5 rounded-full border border-neutral-800 bg-neutral-950/80 hover:border-[#ff0055] transition-all duration-300 shadow-lg"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff0055] animate-pulse" />
            <span className="text-sm md:text-base font-mono tracking-widest text-neutral-200 font-medium">
              {email}
            </span>
            <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-neutral-900 text-neutral-400 group-hover:bg-[#ff0055] group-hover:text-white transition-colors duration-300">
              {copied ? "Copied! ✓" : "Copy Email"}
            </span>
          </button>
          <span className="text-xs uppercase tracking-widest text-neutral-500">
            Or drop a message for collaborations
          </span>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-neutral-900">
          {[
            { label: "GitHub", handle: "@kashif-dev", href: "https://github.com" },
            { label: "LinkedIn", handle: "in/kashif-dev", href: "https://linkedin.com" },
            { label: "Twitter / X", handle: "@kashif_builds", href: "https://twitter.com" },
            { label: "Instagram", handle: "@kashif.design", href: "https://instagram.com" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              data-magnetic
              data-cursor-text="OPEN"
              className="group p-6 rounded-xl border border-neutral-900 bg-neutral-950/40 hover:border-neutral-700 hover:bg-neutral-900/60 transition-all duration-300"
            >
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-2">
                {item.label}
              </span>
              <span className="text-sm font-semibold text-white group-hover:text-[#ff0055] transition-colors duration-200">
                {item.handle} ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto w-full pt-16 mt-16 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-neutral-600">
        <div>
          Designed & Developed by <span className="text-neutral-300">Kashif</span> © 2026
        </div>
        <div>
          Built with Next.js 16 • Three.js • GSAP
        </div>
      </footer>
=======
import { FormEvent, useMemo, useState } from "react";

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

  const fallbackMailto = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "Website visitor"}`);
    const body = encodeURIComponent(form.message || "Hi Kashif, I would like to discuss a project.");
    return `mailto:sheikmohammedkashif@gmail.com?subject=${subject}&body=${body}`;
  }, [form.message, form.name]);

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return "Please complete all fields before sending.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      return "Please use a valid email address.";
    }

    if (form.message.trim().length < 20) {
      return "Message should be at least 20 characters so I can respond effectively.";
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
      const message = error instanceof Error ? error.message : "Unable to send right now.";
      setStatus("error");
      setFeedback(`${message} You can also email me directly.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-t border-neutral-800 bg-[#080808] px-6 py-20 md:px-12">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#ff0055]">( 004 ) - Contact</span>
          <h2 className="text-4xl font-black uppercase tracking-tight text-white md:text-6xl">Let us build something bold.</h2>
          <p className="max-w-md text-sm leading-relaxed text-neutral-400">
            Share your project goals, timeline, and technical context. I usually reply within one business day.
          </p>
          <a
            href={fallbackMailto}
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-neutral-400 transition-colors hover:text-white"
          >
            <span className="h-px w-8 bg-neutral-700" />
            Email Directly
          </a>

          <div className="pt-8 flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">Connect</span>
            <div className="flex gap-6">
              <a href="https://github.com/sheikmohammedkashif" target="_blank" rel="noreferrer" className="text-sm text-neutral-300 hover:text-[#ff0055] transition-colors underline decoration-neutral-800 underline-offset-4">GitHub</a>
              <a href="https://linkedin.com/in/sheikmohammedkashif" target="_blank" rel="noreferrer" className="text-sm text-neutral-300 hover:text-[#ff0055] transition-colors underline decoration-neutral-800 underline-offset-4">LinkedIn</a>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-5" noValidate>
          <label className="block">
            <span className="mb-2 block text-[11px] uppercase tracking-[0.3em] text-neutral-500">Name</span>
            <input
              type="text"
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
              className="w-full border border-neutral-700 bg-transparent px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#ff0055]"
              autoComplete="name"
              required
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-[11px] uppercase tracking-[0.3em] text-neutral-500">Email</span>
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              className="w-full border border-neutral-700 bg-transparent px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#ff0055]"
              autoComplete="email"
              required
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-[11px] uppercase tracking-[0.3em] text-neutral-500">Message</span>
            <textarea
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
              className="min-h-36 w-full resize-y border border-neutral-700 bg-transparent px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#ff0055]"
              required
            />
          </label>

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
            className="inline-flex items-center gap-4 border border-neutral-700 px-6 py-3 text-[11px] uppercase tracking-[0.25em] text-neutral-200 transition-colors hover:border-[#ff0055] hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span className="h-px w-8 bg-[#ff0055]" />
            {isSubmitting ? "Sending" : "Send Message"}
          </button>

          {feedback ? (
            <p
              role="status"
              className={`text-sm ${status === "success" ? "text-emerald-400" : "text-rose-400"}`}
            >
              {feedback}
            </p>
          ) : null}
        </form>
      </div>
>>>>>>> 7f1e02d0cf5471a8a2782536ada9491d33b2b3a8
    </section>
  );
}
