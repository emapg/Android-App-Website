import React from 'react';
import { Shield, Zap, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'End-to-end encryption keeps your data safe and private.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance for instant responses and smooth interactions.'
  },
  {
    icon: Smartphone,
    title: 'Cross-Platform',
    description: 'Seamlessly sync across all your Android devices.'
  }
];

export function Features() {
  return (
    <div className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Powerful Features
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Everything you need to stay productive and connected
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative group bg-gray-800 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg transform transition-all hover:scale-105"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-indigo-500 text-white ring-4 ring-gray-800">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}