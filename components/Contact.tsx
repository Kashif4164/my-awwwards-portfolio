"use client";

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
    </section>
  );
}
