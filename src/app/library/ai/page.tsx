'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Terminal, Wand2, Copy, Check, Eye, Trash2 } from 'lucide-react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-jsx';

const MOCK_GENERATED_CODE = `
import { useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';

export default function GeneratedForm() {
  return (
    <div className="max-w-md w-full liquid-glass p-8 rounded-[40px] border border-white/10 space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-display font-medium">Welcome Back</h2>
        <p className="text-sm text-zinc-500">Sign in to your account to continue.</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Email</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
            <input 
              placeholder="name@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-sky-500/50 transition-all"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Password</label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
            <input 
              type="password"
              placeholder="••••••••"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-sky-500/50 transition-all"
            />
          </div>
        </div>
      </div>

      <button className="w-full bg-white text-black py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all">
        Sign In
        <ArrowRight className="h-5 w-5" />
      </button>

      <p className="text-center text-xs text-zinc-500">
        Don't have an account? <span className="text-white font-medium cursor-pointer">Sign Up</span>
      </p>
    </div>
  );
}`;

export default function AIGeneratorPage() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setGeneratedCode(null);
    
    // Simulate generation time
    setTimeout(() => {
      setGeneratedCode(MOCK_GENERATED_CODE);
      setIsGenerating(false);
      Prism.highlightAll();
    }, 2500);
  };

  return (
    <div className="p-8 md:p-12 space-y-10 max-w-6xl mx-auto h-[calc(100vh-2rem)] flex flex-col">
      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-[10px] font-bold uppercase tracking-widest text-sky-400 w-fit">
        <Sparkles className="h-3 w-3" />
        AI Component Generator
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight">
          What can I <span className="text-zinc-500">build</span> for you?
        </h1>
        <div className="relative group max-w-3xl">
          <div className="absolute inset-0 bg-sky-500/20 rounded-[32px] blur-2xl group-focused-within:bg-sky-500/30 transition-all pointer-events-none" />
          <div className="relative liquid-glass p-2 rounded-[32px] border border-white/10 flex items-center gap-4">
            <input 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. Create a minimalist login form with glassmorphism..."
              className="flex-1 bg-transparent border-none outline-none py-4 px-6 text-lg placeholder:text-zinc-600"
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
            />
            <button 
              onClick={handleGenerate}
              disabled={isGenerating || !prompt}
              className="bg-white text-black p-4 rounded-2xl hover:opacity-90 transition-all disabled:opacity-50"
            >
              <Wand2 className={`h-6 w-6 ${isGenerating ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 relative min-h-0">
        <AnimatePresence mode="wait">
          {isGenerating ? (
            <motion.div 
              key="generating"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center space-y-6"
            >
              <div className="flex gap-1">
                 <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="h-2 w-2 rounded-full bg-sky-500" />
                 <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="h-2 w-2 rounded-full bg-sky-400" />
                 <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="h-2 w-2 rounded-full bg-sky-300" />
              </div>
              <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.2em] animate-pulse">Architecting UI...</p>
            </motion.div>
          ) : generatedCode ? (
            <motion.div 
              key="result"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="h-full flex flex-col space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/5">
                  <button onClick={() => setViewMode('preview')} className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${viewMode === 'preview' ? 'bg-white text-black' : 'text-zinc-500 hov:text-white'}`}>Preview</button>
                  <button onClick={() => setViewMode('code')} className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${viewMode === 'code' ? 'bg-white text-black' : 'text-zinc-500 hov:text-white'}`}>Code</button>
                </div>
                <div className="flex items-center gap-2">
                   <button onClick={() => setGeneratedCode(null)} className="p-2.5 bg-white/5 hover:bg-red-500/10 hover:text-red-400 border border-white/5 rounded-xl transition-all"><Trash2 className="h-4 w-4"/></button>
                   <button className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl text-xs font-medium transition-all"><Copy className="h-4 w-4"/> Copy Code</button>
                </div>
              </div>

              <div className="flex-1 bg-zinc-950 rounded-[40px] border border-white/5 overflow-hidden relative">
                {viewMode === 'preview' ? (
                  <div className="absolute inset-0 flex items-center justify-center p-8 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px]">
                    <div className="w-full h-full flex items-center justify-center">
                       {/* This is a simplified preview - in a real app we'd inject the code safely */}
                       <div className="max-w-md w-full liquid-glass p-8 rounded-[40px] border border-white/10 space-y-6">
                        <div className="space-y-2">
                          <h2 className="text-2xl font-display font-medium">Welcome Back</h2>
                          <p className="text-sm text-zinc-500 text-left">Sign in to your account to continue.</p>
                        </div>
                        <div className="space-y-4 text-left">
                          <div className="h-12 w-full bg-white/5 rounded-2xl border border-white/10" />
                          <div className="h-12 w-full bg-white/5 rounded-2xl border border-white/10" />
                          <div className="h-14 w-full bg-white rounded-2xl" />
                        </div>
                       </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-full overflow-auto p-8">
                    <pre className="rounded-2xl !bg-[#0a0a0a] !m-0 !p-8 border border-white/5 h-full">
                      <code className="language-jsx">
                        {generatedCode}
                      </code>
                    </pre>
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-20 pointer-events-none">
                <Terminal className="h-16 w-16 mb-4" />
                <p className="font-mono text-sm uppercase tracking-widest">Awaiting interaction...</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
