import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Mesh, Group } from "three";

function FloatingTorus({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * 0.2;
    ref.current.rotation.y = t * 0.3;
  });
  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.4}>
      <mesh ref={ref} position={position} scale={scale}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <MeshDistortMaterial color={color} distort={0.35} speed={2} roughness={0.2} metalness={0.7} />
      </mesh>
    </Float>
  );
}

function Sphere({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={2}>
      <mesh position={position}>
        <icosahedronGeometry args={[0.7, 1]} />
        <meshStandardMaterial color={color} wireframe />
      </mesh>
    </Float>
  );
}

function ScrollGroup() {
  const ref = useRef<Group>(null);
  useFrame(() => {
    if (!ref.current) return;
    const scrollY = window.scrollY;
    const max = document.body.scrollHeight - window.innerHeight;
    const progress = max > 0 ? scrollY / max : 0;
    ref.current.rotation.y = progress * Math.PI * 2;
    ref.current.position.y = -progress * 4;
  });
  return (
    <group ref={ref}>
      <FloatingTorus position={[-3.5, 1.5, -2]} color="#22d3ee" scale={1.1} />
      <FloatingTorus position={[3.8, -1, -3]} color="#a78bfa" scale={0.9} />
      <Sphere position={[2.5, 2.5, -1]} color="#22d3ee" />
      <Sphere position={[-3, -2, -2]} color="#a78bfa" />
      <Sphere position={[0, 0, -4]} color="#22d3ee" />
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.2} color="#22d3ee" />
          <pointLight position={[-10, -10, -5]} intensity={0.8} color="#a78bfa" />
          <Stars radius={50} depth={40} count={2500} factor={3} fade speed={0.6} />
          <ScrollGroup />
        </Suspense>
      </Canvas>
    </div>
  );
}
