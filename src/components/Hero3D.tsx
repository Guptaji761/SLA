import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function OrbitRings() {
  const ringsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ringsRef.current) {
      ringsRef.current.rotation.x = Math.sin(t * 0.3) * 0.5;
      ringsRef.current.rotation.y = t * 0.2;
      ringsRef.current.rotation.z = t * 0.1;
    }
  });

  return (
    <group ref={ringsRef}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3, 0.02, 16, 100]} />
        <meshStandardMaterial color="#D4A15E" metalness={1} roughness={0} emissive="#D4A15E" emissiveIntensity={0.2} />
      </mesh>
      <mesh rotation={[Math.PI / 2, Math.PI / 4, 0]}>
        <torusGeometry args={[4, 0.01, 16, 100]} />
        <meshStandardMaterial color="#97144D" emissive="#97144D" emissiveIntensity={0.5} />
      </mesh>
      <mesh rotation={[0, Math.PI / 3, 0]}>
        <torusGeometry args={[3.5, 0.015, 16, 100]} />
        <meshStandardMaterial color="#D4A15E" metalness={1} roughness={0.2} />
      </mesh>
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <OrbitRings />
    </Canvas>
  );
}
