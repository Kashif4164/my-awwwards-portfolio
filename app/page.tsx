import Hero from "@/components/Hero";
import FluidBackground from "@/components/FluidBackground";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ScrollProgress from "@/components/ScrollProgress";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import AntiGravityCanvas from "./components/AntiGravityCanvas";

export default function Home() {
  return (
    <main className="relative bg-[#080808] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 min-h-screen overflow-x-hidden">
      {/* Loading sequence and custom magnetic cursor */}
      <Preloader />
      <CustomCursor />

      {/* Thin scroll progress indicator */}
      <ScrollProgress />

      {/* Animated film grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Interactive Anti-Gravity Canvas Starfield */}
      <AntiGravityCanvas />

      {/* Three.js / WebGL Fluid Shader Background */}
      <FluidBackground />

      {/* Sections */}
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
