import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Basic',
    price: 'Free',
    features: [
      'Basic app features',
      'Limited storage',
      'Email support',
      'Community access'
    ]
  },
  {
    name: 'Pro',
    price: '$9.99',
    features: [
      'All Basic features',
      'Unlimited storage',
      'Priority support',
      'Advanced analytics',
      'Custom themes'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'All Pro features',
      'Dedicated support',
      'Custom integration',
      'SLA guarantee',
      'Advanced security'
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Choose the plan that's right for you
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105"
            >
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                <p className="mt-4 text-4xl font-extrabold text-white">
                  {tier.price}
                  {tier.price !== 'Custom' && <span className="text-xl font-normal">/month</span>}
                </p>
                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-400" />
                      <span className="ml-3 text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href="#"
                    className="block w-full bg-indigo-600 rounded-md py-3 text-center font-medium text-white hover:bg-indigo-700"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}