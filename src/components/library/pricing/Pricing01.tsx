'use client';

import { Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for side projects and learning.',
    features: ['5 Components', 'Community Support', 'Standard License'],
    cta: 'Get Started',
    featured: false
  },
  {
    name: 'Pro',
    price: '$49',
    description: 'For professional developers and teams.',
    features: ['Unlimited Components', 'Priority Support', 'Commercial License', 'Source Files'],
    cta: 'Go Pro',
    featured: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Custom solutions for large organizations.',
    features: ['SLA Guarantee', 'Dedicated Manager', 'Custom Components', 'Multi-user access'],
    cta: 'Contact Us',
    featured: false
  }
];

export default function Pricing01() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-medium">Simple, honest pricing</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">Choose the plan that fits your needs. No hidden fees or surprises.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={cn(
                "liquid-glass p-8 rounded-[40px] border flex flex-col space-y-6 transition-all hover:scale-[1.02]",
                tier.featured ? "border-sky-500/50 bg-sky-500/5 shadow-2xl" : "border-white/5"
              )}
            >
              <div className="space-y-2">
                <h3 className="text-lg font-display font-medium">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-bold">{tier.price}</span>
                  {tier.price !== 'Custom' && <span className="text-zinc-500 text-sm">/month</span>}
                </div>
                <p className="text-sm text-zinc-500">{tier.description}</p>
              </div>

              <div className="space-y-3 flex-1">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm text-zinc-400">
                    <Check className="h-4 w-4 text-sky-400" />
                    {feature}
                  </div>
                ))}
              </div>

              <button className={cn(
                "w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all",
                tier.featured 
                  ? "bg-white text-black hover:opacity-90" 
                  : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
              )}>
                {tier.cta}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
