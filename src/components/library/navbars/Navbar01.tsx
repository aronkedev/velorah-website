'use client';

import { useState } from 'react';
import { Menu, X, Command } from 'lucide-react';

export default function Navbar01() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-display text-xl tracking-tight">
          <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center">
            <Command className="h-5 w-5 text-black" />
          </div>
          <span className="text-white">Naevox UI</span>
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
}
