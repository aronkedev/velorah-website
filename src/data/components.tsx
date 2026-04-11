import React from 'react';

export interface ComponentItem {
  id: string;
  name: string;
  category: 'navbar' | 'hero' | 'cards' | 'buttons' | 'forms' | 'pricing';
  description: string;
  code: string;
  component: React.ReactNode;
}

import Navbar01 from '@/components/library/navbars/Navbar01';
import Hero01 from '@/components/library/heros/Hero01';
import Pricing01 from '@/components/library/pricing/Pricing01';
import Card01 from '@/components/library/cards/Card01';

/**
 * Feature Cards 01
 */
export const CARD_01_CODE = `
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Shield, Globe } from 'lucide-react';

export default function FeatureCards() {
  const cards = [
    { title: 'Fast Performance', desc: 'Optimized for speed.', icon: Zap, color: 'text-amber-400' },
    { title: 'Secure by Default', desc: 'Battle-tested security.', icon: Shield, color: 'text-emerald-400' },
    { title: 'Global Edge', desc: 'Deploy globally.', icon: Globe, color: 'text-sky-400' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto py-12">
      {cards.map((card, i) => (
        <div key={i} className="liquid-glass p-8 rounded-[40px] border border-white/5 hover:bg-white/[0.04] transition-all cursor-pointer">
          <div className="p-3 bg-white/5 rounded-2xl w-fit mb-6 card.color">
            <card.icon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-display font-medium mb-3">{card.title}</h3>
          <p className="text-sm text-zinc-500">{card.desc}</p>
        </div>
      ))}
    </div>
  );
}`;

/**
 * Example Responsive Navbar (Mobile-First)
 */
export const NAVBAR_01_CODE = `
import { useState } from 'react';
import { Menu, X, Command } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-display text-xl tracking-tight">
          <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center">
            <Command className="h-5 w-5 text-black" />
          </div>
          <span>Naevox UI</span>
        </div>

        {/* Global Nav - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Resources</a>
          <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Components</a>
          <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Blog</a>
          <button className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
            Sign In
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-zinc-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black border-b border-white/5 p-6 space-y-4 animate-in fade-in slide-in-from-top-2">
          <a href="#" className="block text-lg font-medium text-white">Resources</a>
          <a href="#" className="block text-lg font-medium text-white">Components</a>
          <a href="#" className="block text-lg font-medium text-white">Blog</a>
          <button className="w-full bg-white text-black py-3 rounded-xl font-medium mt-4">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
}`;

/**
 * Hero Section 01
 */
export const HERO_01_CODE = `
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-sky-400">
          <Sparkles className="h-3 w-3" />
          Next Generation UI
        </div>

        <h1 className="text-5xl md:text-8xl font-display font-medium tracking-tight leading-[0.95] max-w-4xl mx-auto">
          Build for the <span className="text-zinc-500">future</span> of the web.
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          The most advanced component system for modern developers. Clean, responsive, and ready for production.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all">
            Get Started
            <ArrowRight className="h-5 w-5" />
          </button>
          <button className="w-full sm:w-auto bg-white/5 border border-white/10 px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
            <Play className="h-4 w-4 fill-current" />
            Watch Demo
          </button>
        </div>
      </motion.div>
    </div>
  );
}`;

/**
 * Pricing Table 01
 */
export const PRICING_01_CODE = `
import { Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const tiers = [
  { name: 'Starter', price: '$0', features: ['5 Components', 'Community Support'], cta: 'Get Started' },
  { name: 'Pro', price: '$49', features: ['Unlimited', 'Priority Support', 'Commercial'], cta: 'Go Pro', featured: true },
  { name: 'Enterprise', price: 'Custom', features: ['SLA', 'Dedicated Manager'], cta: 'Contact Us' }
];

export default function PricingSection() {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier) => (
          <div key={tier.name} className={cn(
            "p-8 rounded-[40px] border flex flex-col space-y-6 bg-white/[0.02]",
            tier.featured ? "border-sky-500/50" : "border-white/5"
          )}>
            <div className="space-y-1">
              <h3 className="text-xl font-display font-medium">{tier.name}</h3>
              <div className="text-3xl font-bold">{tier.price}</div>
            </div>
            <div className="space-y-3 flex-1">
              {tier.features.map(f => (
                <div key={f} className="flex items-center gap-2 text-sm text-zinc-400">
                  <Check className="h-4 w-4 text-sky-400" /> {f}
                </div>
              ))}
            </div>
            <button className={cn(
              "w-full py-4 rounded-2xl font-bold",
              tier.featured ? "bg-white text-black" : "bg-white/5 border border-white/10"
            )}>{tier.cta}</button>
          </div>
        ))}
      </div>
    </div>
  );
}`;

export const componentRegistry: ComponentItem[] = [
  {
    id: 'navbar-01',
    name: 'Modern Responsive Navbar',
    category: 'navbar',
    description: 'A mobile-first navbar with a translucent background and smooth mobile transitions.',
    code: NAVBAR_01_CODE,
    component: <Navbar01 />
  },
  {
    id: 'hero-01',
    name: 'Premium Glass Hero',
    category: 'hero',
    description: 'A high-end animated hero section with background decorations and dual CTAs.',
    code: HERO_01_CODE,
    component: <Hero01 />
  },
  {
    id: 'pricing-01',
    name: 'Modern Tiered Pricing',
    category: 'pricing',
    description: 'A sleek pricing grid with tiered highlighting and feature checklists.',
    code: PRICING_01_CODE,
    component: <Pricing01 />
  },
  {
    id: 'cards-01',
    name: 'Animated Feature Cards',
    category: 'cards',
    description: 'A set of three modern cards with icon badges and hover orientations.',
    code: CARD_01_CODE,
    component: <Card01 />
  }
];
