import React from 'react';
import { Smartphone, Shield, Zap } from 'lucide-react';

export function Download() {
  return (
    <section id="download" className="py-24 bg-gradient-to-b from-gray-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Download Now
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Join millions of users and experience the future of mobile apps
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-8"
              />
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <Smartphone className="h-12 w-12 text-indigo-400" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">Easy to Use</h3>
              <p className="mt-2 text-gray-400">
                Intuitive interface designed for everyone
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Shield className="h-12 w-12 text-indigo-400" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">Secure</h3>
              <p className="mt-2 text-gray-400">
                Your data is protected with enterprise-grade security
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Zap className="h-12 w-12 text-indigo-400" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">Fast</h3>
              <p className="mt-2 text-gray-400">
                Lightning-fast performance on any device
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}