import Hero from "@/components/Hero";
import Scene from "@/components/Scene";
import About from "@/components/About";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="relative">
      {/* Animated grain overlay — critical for premium dark feel */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Thin red scroll progress bar at top */}
      <ScrollProgress />

      {/* Three.js floating blob */}
      <Scene />

      <Hero />
      <About />

      {/* ── WORK SECTION PLACEHOLDER ── */}
      <section className="min-h-screen bg-[#080808] border-t border-neutral-800 flex flex-col items-center justify-center gap-6 px-12">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#ff0055]">( 003 ) — Selected Work</span>
        <p className="text-neutral-600 text-sm tracking-widest uppercase">Coming soon</p>
      </section>
    </main>
  );
}