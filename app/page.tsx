import Hero from "@/components/Hero";
import FluidBackground from "@/components/FluidBackground";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ScrollProgress from "@/components/ScrollProgress";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <main className="relative bg-transparent">
      <Preloader />
      <CustomCursor />
      
      {/* Animated grain overlay — critical for premium dark feel */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Thin red scroll progress bar at top */}
      <ScrollProgress />

      {/* Three.js / WebGL Fluid Background */}
      <FluidBackground />

      <Hero />
      <About />
      <Experience />
      <Projects />

      <Contact />
    </main>
  );
}