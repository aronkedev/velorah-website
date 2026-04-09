'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play } from 'lucide-react';

export default function Hero01() {
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

        <div className="pt-12 flex items-center justify-center gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all">
           <div className="h-6 w-24 bg-white/20 rounded" />
           <div className="h-6 w-24 bg-white/20 rounded" />
           <div className="h-6 w-24 bg-white/20 rounded" />
        </div>
      </motion.div>
    </div>
  );
}
