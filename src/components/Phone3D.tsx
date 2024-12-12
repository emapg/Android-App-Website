import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function Phone3D({ isHovered }: { isHovered: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const { scale } = useSpring({
    scale: isHovered ? 1.1 : 1,
    config: { tension: 300, friction: 10 }
  });

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <animated.mesh ref={meshRef} scale={scale}>
      <boxGeometry args={[1, 2, 0.1]} />
      <MeshDistortMaterial
        color="#4F46E5"
        speed={2}
        distort={0.3}
        radius={1}
      />
    </animated.mesh>
  );
}