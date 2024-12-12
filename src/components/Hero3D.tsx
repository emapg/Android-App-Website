import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Phone3D } from './Phone3D';
import { useState } from 'react';

export function Hero3D() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-screen w-full bg-gradient-to-b from-gray-900 to-indigo-900">
      <div className="absolute inset-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center">
          <h1 className="text-5xl font-extrabold text-white sm:text-6xl">
            Experience the Future
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Discover a revolutionary Android app that transforms the way you interact with your device.
            Immerse yourself in a seamless experience designed for the modern user.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#download"
              className="px-8 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Download Now
            </a>
            <a
              href="#learn-more"
              className="px-8 py-3 text-base font-medium rounded-md text-gray-300 bg-gray-800 hover:bg-gray-700"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Phone3D isHovered={isHovered} />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
}