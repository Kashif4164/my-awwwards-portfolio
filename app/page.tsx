import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ScrollProgress from "@/components/ScrollProgress";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-[#090b11] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 min-h-screen overflow-x-hidden">
      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* High-Performance Ambient Glows (Native radial gradients, 0ms GPU blur filter cost) */}
      <div
        className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(circle 650px at 95% 10%, rgba(6, 182, 212, 0.12), transparent 70%),
            radial-gradient(circle 700px at 5% 35%, rgba(99, 102, 241, 0.09), transparent 70%),
            radial-gradient(circle 650px at 90% 65%, rgba(20, 184, 166, 0.10), transparent 70%),
            radial-gradient(circle 600px at 40% 95%, rgba(6, 182, 212, 0.08), transparent 70%)
          `,
        }}
      />

      {/* Main Content Sections */}
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
