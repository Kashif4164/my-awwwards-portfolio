"use client";

import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";

export default function FloatingShape() {
  return (
   <div className="fixed top-0 right-0 w-[60vw] h-full pointer-events-none" style={{ zIndex: 0 }}>
      {/* gl={{ alpha: true }} is CRITICAL — without it Three.js renders a solid black background */}
      <Canvas gl={{ alpha: true }} style={{ background: "transparent" }}>
        <ambientLight intensity={3} />
        <directionalLight position={[2, 5, 2]} intensity={4} />
        <pointLight position={[0, 0, 3]} intensity={3} color="#9b30ff" />
        <pointLight position={[-3, -3, -2]} intensity={2} color="#ff0055" />

        <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
          <Sphere args={[1, 128, 256]} scale={2.2}>
            <MeshDistortMaterial
              color="#6b21a8"
              attach="material"
              distort={0.45}
              speed={1.5}
              roughness={0.1}
              metalness={0.8}
            />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
}