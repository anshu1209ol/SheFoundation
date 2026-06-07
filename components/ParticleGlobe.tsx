'use client';

import { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Helper to generate points inside a sphere using the rejection method
const generateSpherePoints = (count: number, radius: number): Float32Array => {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    let x = 0, y = 0, z = 0;
    let distanceSq = 0;
    do {
      x = (Math.random() * 2 - 1) * radius;
      y = (Math.random() * 2 - 1) * radius;
      z = (Math.random() * 2 - 1) * radius;
      distanceSq = x * x + y * y + z * z;
    } while (distanceSq > radius * radius || distanceSq === 0);
    
    points[i * 3] = x;
    points[i * 3 + 1] = y;
    points[i * 3 + 2] = z;
  }
  return points;
};

// Helper to generate points in a ring/torus shell
const generateRingPoints = (count: number, radius: number): Float32Array => {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    // Add thickness/radial width to the ring
    const r = radius + (Math.random() * 2 - 1) * 0.25;
    
    points[i * 3] = Math.cos(angle) * r;
    // Vertical dispersion to give it a 3D feel
    points[i * 3 + 1] = (Math.random() * 2 - 1) * 0.15;
    points[i * 3 + 2] = Math.sin(angle) * r;
  }
  return points;
};

function ParticleSphere() {
  const ref = useRef<THREE.Points>(null!);
  
  // Use 1667 points, which equals 5001 values (divisible by 3)
  const sphere = useMemo(() => generateSpherePoints(1667, 1.5), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.06;
      ref.current.rotation.y -= delta * 0.09;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#FF4F9A"
          size={0.018}
          sizeAttenuation
          depthWrite={false}
          opacity={0.85}
        />
      </Points>
    </group>
  );
}

function ParticleRing() {
  const ref = useRef<THREE.Points>(null!);
  
  // Use 667 points, which equals 2001 values (divisible by 3)
  const ring = useMemo(() => generateRingPoints(667, 2.5), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.04;
      ref.current.rotation.z -= delta * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={ring} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#A855F7"
        size={0.009}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

export default function ParticleGlobe() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} color="#A855F7" intensity={0.5} />
          <ParticleSphere />
          <ParticleRing />
        </Suspense>
      </Canvas>
    </div>
  );
}
