<<<<<<< HEAD
"use client";

import { useState } from "react";
import {
  Code2,
  Cpu,
  ArrowUpRight,
  Mail,
  FileDown,
  Server,
  Cloud,
  CheckCircle2,
  Calendar,
  GraduationCap,
  Award,
  ChevronRight,
} from "lucide-react";
import {
  PERSONAL_INFO,
  PROJECTS,
  EXPERIENCES,
  SKILL_CATEGORIES,
  EDUCATION,
  CERTIFICATIONS,
  TOOLBOX,
} from "./resumeData";
import { GithubIcon, LinkedinIcon } from "./components/SocialIcons";
import RagPlayground from "./components/RagPlayground";
import BentoContact from "./components/BentoContact";
import AntiGravityCanvas from "./components/AntiGravityCanvas";
=======
import Hero from "@/components/Hero";
import FluidBackground from "@/components/FluidBackground";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ScrollProgress from "@/components/ScrollProgress";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
>>>>>>> 7f1e02d0cf5471a8a2782536ada9491d33b2b3a8

export default function Home() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const filteredProjects = selectedTech
    ? PROJECTS.filter((p) => p.tags.includes(selectedTech))
    : PROJECTS;

  return (
<<<<<<< HEAD
    <main className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-hidden bg-grid-pattern pb-24">
      {/* Interactive Anti-Gravity Canvas */}
      <AntiGravityCanvas />
=======
    <main className="relative bg-transparent">
      <Preloader />
      <CustomCursor />
      
      {/* Animated grain overlay — critical for premium dark feel */}
      <div className="grain-overlay" aria-hidden="true" />
>>>>>>> 7f1e02d0cf5471a8a2782536ada9491d33b2b3a8

      {/* Ambient background glows */}
      <div className="fixed top-[-10%] left-[20%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-[10%] right-[10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

<<<<<<< HEAD
      {/* Floating Pill Navigation */}
      <header className="sticky top-6 z-50 flex justify-center px-4">
        <nav className="glass-pill px-4 sm:px-6 py-2.5 rounded-full flex items-center gap-1 sm:gap-2 shadow-2xl border border-white/10 text-xs sm:text-sm font-medium">
          <a
            href="#hero"
            className="px-3 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="px-3 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            About
          </a>
          <a
            href="#simulator"
            className="px-3 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            RAG Demo
          </a>
          <a
            href="#projects"
            className="px-3 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="px-3 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-colors hidden sm:inline-block"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="px-3 py-1.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all shadow-md shadow-cyan-500/20"
          >
            Get in touch
          </a>
        </nav>
      </header>

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16 lg:space-y-24">
        {/* HERO SECTION */}
        <section id="hero" className="pt-8 sm:pt-14 text-center space-y-6 max-w-3xl mx-auto">
          {/* Avatar with gradient pulse ring */}
          <div className="relative inline-block mx-auto mb-2">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 shadow-xl shadow-cyan-500/10">
              <div className="w-full h-full rounded-full bg-[#0d1117] flex items-center justify-center overflow-hidden border-2 border-[#090b10]">
                <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  MK
                </div>
              </div>
            </div>
            <div className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-[#090b10] flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Hey, I&apos;m Kashif!
              <span className="block text-3xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-indigo-300 to-slate-200 bg-clip-text text-transparent mt-2">
                Engineering Production LLMs & RAG Architectures.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed pt-2">
              End-to-end architect of grounded RAG systems, autonomous LLM agents, and high-performance inference microservices across GCP, LangChain, and FastAPI.
            </p>
          </div>

          {/* Socials & Call to actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              Contact Kashif
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs sm:text-sm font-medium flex items-center gap-2 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
              <ArrowUpRight className="w-3 h-3 text-slate-500" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs sm:text-sm font-medium flex items-center gap-2 transition-all"
            >
              <LinkedinIcon className="w-4 h-4 text-cyan-400" />
              LinkedIn
              <ArrowUpRight className="w-3 h-3 text-slate-500" />
            </a>
            <button
              onClick={() => window.print()}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs sm:text-sm font-medium flex items-center gap-2 transition-all cursor-pointer"
            >
              <FileDown className="w-4 h-4 text-emerald-400" />
              Print / Save Resume
            </button>
          </div>
        </section>

        {/* BENTO GRID: ABOUT & HIGHLIGHTS */}
        <section id="about" className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Overview</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Here&apos;s what sets my architecture apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Bento Card 1: Core Summary */}
            <div className="md:col-span-7 glass-panel rounded-2xl p-6 lg:p-7 flex flex-col justify-between border border-white/10">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white leading-snug">
                  Zero-Tolerance for Hallucinations in High-Stakes Domains
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {PERSONAL_INFO.bio}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10 mt-6">
                {PERSONAL_INFO.stats.map((stat, i) => (
                  <div key={i} className="space-y-0.5">
                    <div className="text-xl font-bold text-cyan-400">{stat.value}</div>
                    <div className="text-[11px] font-medium text-slate-200">{stat.label}</div>
                    <div className="text-[10px] text-slate-500 leading-tight">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bento Card 2: Interactive Toolbox */}
            <div className="md:col-span-5 glass-panel rounded-2xl p-6 lg:p-7 border border-white/10 flex flex-col justify-between">
              <div>
                <p className="text-xs text-slate-300 mb-4">
                  Frameworks and platforms powering my production services and generative pipelines.
                </p>

                <div className="grid grid-cols-2 gap-2.5">
                  {TOOLBOX.map((tool, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 flex items-center gap-2.5 transition-all group"
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform">{tool.icon}</span>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-slate-200 truncate">{tool.name}</div>
                        <div className="text-[10px] text-slate-500 truncate">{tool.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span>Location: {PERSONAL_INFO.location}</span>
                <span className="text-emerald-400 font-mono">Open for 2026 roles</span>
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE RAG SIMULATOR SECTION */}
        <section id="simulator" className="space-y-4">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Interactive Proof of Concept</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Test Kashif&apos;s RAG Architecture Live
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Simulate vector chunking, FAISS cosine retrieval, and grounded answer synthesis built for banking and petroleum client use cases.
            </p>
          </div>

          <RagPlayground />
        </section>

        {/* FEATURED PROJECTS SHOWCASE */}
        <section id="projects" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Engineering Work</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Featured Projects & Architectures
              </h2>
            </div>

            {/* Filter tags */}
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setSelectedTech(null)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  selectedTech === null
                    ? "bg-cyan-500 text-slate-950 font-semibold"
                    : "bg-white/5 text-slate-400 hover:text-white"
                }`}
              >
                All Projects
              </button>
              {["LangChain", "Docker", "FAISS", "LiDAR"].map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    selectedTech === tech
                      ? "bg-cyan-500 text-slate-950 font-semibold"
                      : "bg-white/5 text-slate-400 hover:text-white"
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between border border-white/10 group"
              >
                <div className="space-y-4">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors shrink-0 mt-0.5"
                          aria-label="View on GitHub"
                        >
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{project.subtitle}</p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">{project.description}</p>

                  {/* Bullet points */}
                  <div className="space-y-1.5 pt-2">
                    {project.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.metrics.map((m, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 rounded font-mono"
                      >
                        ✓ {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/5 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WORK EXPERIENCE & TRACK RECORD */}
        <section id="experience" className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Track Record</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Professional Production Experience
            </h2>
          </div>

          <div className="space-y-6">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 lg:p-8 border border-white/10 space-y-4 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <span className="px-2 py-0.5 text-[10px] font-mono bg-cyan-500/10 text-cyan-400 rounded-md border border-cyan-500/20">
                        {exp.company}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-sans mt-0.5 block">{exp.location} • {exp.type}</span>
                  </div>

                  <div className="text-xs font-mono text-cyan-300 flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </div>
                </div>

                <div className="space-y-2.5 pt-1">
                  {exp.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  <span className="text-xs text-slate-500 mr-2 self-center">Stack:</span>
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] px-2.5 py-0.5 bg-white/5 text-slate-300 rounded-md border border-white/10 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNICAL SKILLS BENTO MATRIX */}
        <section id="skills" className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Capabilities</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Technical Arsenal & Skill Matrix
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-5 border border-white/10 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      {idx === 0 && <Cpu className="w-4 h-4" />}
                      {idx === 1 && <Server className="w-4 h-4" />}
                      {idx === 2 && <Cloud className="w-4 h-4" />}
                      {idx === 3 && <Code2 className="w-4 h-4" />}
                    </div>
                    <h3 className="text-sm font-bold text-white">{cat.title}</h3>
                  </div>
                  <p className="text-[11px] text-slate-400">{cat.description}</p>

                  <div className="space-y-2 pt-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between text-xs py-1 border-b border-white/[0.03]"
                      >
                        <span className="text-slate-300">{skill.name}</span>
                        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Education */}
          <div className="md:col-span-6 glass-panel rounded-2xl p-6 lg:p-7 border border-white/10 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </div>
              <h3 className="text-lg font-bold text-white">{EDUCATION.degree}</h3>
              <p className="text-xs text-cyan-300 font-mono">{EDUCATION.institution}</p>
              <p className="text-xs text-slate-400 leading-relaxed">{EDUCATION.description}</p>
            </div>

            <div className="pt-4 border-t border-white/10 mt-6 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>{EDUCATION.location}</span>
              <span className="text-white font-semibold">{EDUCATION.period}</span>
            </div>
          </div>

          {/* Certifications */}
          <div className="md:col-span-6 glass-panel rounded-2xl p-6 lg:p-7 border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
              <Award className="w-4 h-4" />
              <span>Certifications & Badges</span>
            </div>

            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between"
                >
                  <div>
                    <h4 className="text-xs font-bold text-white">{cert.title}</h4>
                    <p className="text-[11px] text-slate-400">
                      {cert.issuer} • <span className="text-slate-500">{cert.topics}</span>
                    </p>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded">
                    {cert.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERACTIVE BENTO CONTACT & DISPATCH */}
        <section id="contact" className="space-y-4">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Connect</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Let&apos;s Build the Next Intelligent System
            </h2>
          </div>

          <BentoContact />
        </section>

        {/* FOOTER */}
        <footer className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with Next.js, React, Tailwind CSS.
          </div>
          <div className="flex items-center gap-4">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              GitHub
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              LinkedIn
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-cyan-400 transition-colors">
              Email
            </a>
          </div>
        </footer>
      </div>
=======
      {/* Three.js / WebGL Fluid Background */}
      <FluidBackground />

      <Hero />
      <About />
      <Experience />
      <Projects />

      <Contact />
>>>>>>> 7f1e02d0cf5471a8a2782536ada9491d33b2b3a8
    </main>
  );
}