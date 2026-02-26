import Hero from "@/components/Hero";
import Scene from "@/components/Scene";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="relative">
      <Scene />
      <Hero />
      <About />

      {/* Spacer to allow scrolling past */}
      <div className="h-screen bg-zinc-900 flex items-center justify-center">
        <p className="text-zinc-500">More coming soon...</p>
      </div>
    </main>
  );
}