"use client";

import { useEffect, useRef } from "react";

export default function Scene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 40;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 40;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;

    const updateParallax = () => {
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      if (containerRef.current) {
        containerRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0px)`;
      }

      animationFrameId = requestAnimationFrame(updateParallax);
    };

    updateParallax();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <div ref={containerRef} className="w-full h-full relative transition-transform duration-75 ease-out">
        {/* Primary purple blob */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: "650px",
            height: "650px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(107,33,168,0.5) 0%, rgba(88,28,135,0.25) 40%, transparent 70%)",
            filter: "blur(65px)",
            animation: "blob1 8s ease-in-out infinite",
          }}
        />
        {/* Red/pink accent */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            right: "20%",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,0,85,0.3) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "blob2 10s ease-in-out infinite",
          }}
        />
        {/* Deep tertiary blob */}
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "10%",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,7,100,0.45) 0%, transparent 70%)",
            filter: "blur(55px)",
            animation: "blob3 12s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33%       { transform: translate(-30px, 20px) scale(1.05); }
          66%       { transform: translate(20px, -15px) scale(0.95); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33%       { transform: translate(20px, -30px) scale(1.08); }
          66%       { transform: translate(-15px, 20px) scale(0.92); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33%       { transform: translate(-20px, -20px) scale(1.1); }
          66%       { transform: translate(25px, 10px) scale(0.95); }
        }
      `}</style>
    </div>
  );
}