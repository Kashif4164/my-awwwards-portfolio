"use client";

export default function Scene() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {/* Primary purple blob */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(107,33,168,0.5) 0%, rgba(88,28,135,0.3) 40%, transparent 70%)",
          filter: "blur(60px)",
          animation: "blob1 8s ease-in-out infinite",
        }}
      />
      {/* Red/pink accent */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "20%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,0,85,0.25) 0%, transparent 70%)",
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
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,7,100,0.4) 0%, transparent 70%)",
          filter: "blur(50px)",
          animation: "blob3 12s ease-in-out infinite",
        }}
      />

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