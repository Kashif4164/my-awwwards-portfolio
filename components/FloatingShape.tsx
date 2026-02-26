"use client";

import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";

export default function FloatingShape() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-60">
      <Canvas>
        {/* Lights to make the material look 3D */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, 5, 2]} intensity={2} />

        {/* Float makes the object gently bob up and down */}
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <Sphere args={[1, 100, 200]} scale={2.4}>
            {/* MeshDistortMaterial creates that liquid/wobble effect */}
            <MeshDistortMaterial
              color="#3d1c59"  // Deep purple (change this to match your vibe)
              attach="material"
              distort={0.5}   // How much it wobbles (0 to 1)
              speed={2}       // How fast it wobbles
              roughness={0.2}
              metalness={0.9} // Makes it look metallic
            />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
}