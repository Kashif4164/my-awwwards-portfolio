
export default function GrainOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-20 mix-blend-overlay">
      <div 
        className="absolute inset-0 h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
      />
    </div>
  );
}