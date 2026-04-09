'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Shield, Globe } from 'lucide-react';

export default function Card01() {
  const cards = [
    { title: 'Fast Performance', desc: 'Optimized for speed and minimal bundle size.', icon: Zap, color: 'text-amber-400' },
    { title: 'Secure by Default', desc: 'Battle-tested security patterns for every app.', icon: Shield, color: 'text-emerald-400' },
    { title: 'Global Edge', desc: 'Deploy globally with zero-latency overhead.', icon: Globe, color: 'text-sky-400' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto py-12">
      {cards.map((card, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="group liquid-glass p-8 rounded-[40px] border border-white/5 hover:bg-white/[0.04] transition-all cursor-pointer relative"
        >
          <div className="absolute top-6 right-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
             <ArrowUpRight className="h-4 w-4 text-zinc-500" />
          </div>

          <div className={`p-3 bg-white/5 rounded-2xl w-fit mb-6 ${card.color}`}>
            <card.icon className="h-6 w-6" />
          </div>

          <h3 className="text-xl font-display font-medium mb-3">{card.title}</h3>
          <p className="text-sm text-zinc-500 leading-relaxed">
            {card.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
