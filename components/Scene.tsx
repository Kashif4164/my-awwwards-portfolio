"use client";

import dynamic from "next/dynamic";

// We move the dynamic import HERE, inside a client component
const FloatingShape = dynamic(() => import("./FloatingShape"), {
  ssr: false,
});

export default function Scene() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
      <FloatingShape />
    </div>
  );
}