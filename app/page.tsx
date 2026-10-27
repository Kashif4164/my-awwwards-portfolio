import Hero from "@/components/Hero";
import About from "@/components/About";
import RagPlayground from "@/components/RagPlayground";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ScrollProgress from "@/components/ScrollProgress";
import Contact from "@/components/Contact";
import AntiGravityCanvas from "@/components/AntiGravityCanvas";

export default function Home() {
  return (
    <main className="relative bg-[#090b11] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 min-h-screen overflow-x-hidden">
      {/* Interactive Anti-Gravity Canvas Starfield & Shooting Stars */}
      <AntiGravityCanvas />

      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* High-Performance Ambient Cosmic Glows */}
      <div
        className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(circle 750px at 95% 10%, rgba(6, 182, 212, 0.14), transparent 70%),
            radial-gradient(circle 800px at 5% 35%, rgba(99, 102, 241, 0.11), transparent 70%),
            radial-gradient(circle 750px at 90% 65%, rgba(20, 184, 166, 0.12), transparent 70%),
            radial-gradient(circle 700px at 40% 95%, rgba(6, 182, 212, 0.10), transparent 70%)
          `,
        }}
      />

      {/* Main Content Sections */}
      <div className="relative z-10">
        <Hero />
        <About />
        <RagPlayground />
        <Projects />
        <Experience />
        <Contact />
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.08] py-12 px-6 md:px-12 text-center text-xs font-mono text-neutral-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Sheik Mohammed Kashif. Built with Next.js & Tailwind CSS.</span>
          <div className="flex items-center gap-6">
            <a href="https://github.com/Kashif4164" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/sheikmohammedkashif" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
              LinkedIn
            </a>
            <a href="mailto:sheikmohammedkashif@karanji.com" className="hover:text-cyan-400 transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
