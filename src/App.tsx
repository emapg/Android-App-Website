import React from 'react';
import { Hero3D } from './components/Hero3D';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Hero3D />
      <Features />
      <Testimonials />
    </div>
  );
}

export default App;