'use client';

import { use, useState, useEffect } from 'react';
import { componentRegistry } from "@/data/components";
import { notFound } from "next/navigation";
import { 
  Laptop, 
  Smartphone, 
  Tablet as TabletIcon, 
  Code2, 
  Eye, 
  Copy, 
  Check,
  ChevronLeft,
  Heart
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";

export default function ComponentDetailPage({
  params
}: {
  params: Promise<{ category: string; slug: string }>
}) {
  const { category, slug } = use(params);
  const [viewport, setViewport] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const component = componentRegistry.find(c => c.id === slug);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('naevox_favorites') || '[]');
    setIsFavorite(favorites.includes(slug));
  }, [slug]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('naevox_favorites') || '[]');
    let newFavorites;
    if (favorites.includes(slug)) {
      newFavorites = favorites.filter((id: string) => id !== slug);
    } else {
      newFavorites = [...favorites, slug];
    }
    localStorage.setItem('naevox_favorites', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    if (viewMode === 'code') {
      Prism.highlightAll();
    }
  }, [viewMode, component]);

  if (!component) return notFound();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(component.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Detail Header */}
      <header className="h-16 border-b border-white/5 bg-black px-8 flex items-center justify-between z-20">
        <div className="flex items-center gap-4">
          <Link 
            href="/library"
            className="p-2 hover:bg-white/5 rounded-xl transition-colors text-zinc-500 hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-sm font-medium">{component.name}</h1>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">{component.category}</p>
          </div>
        </div>

        {/* Viewport Toggles (Only for Preview) */}
        {viewMode === 'preview' && (
          <div className="hidden md:flex items-center bg-white/5 p-1 rounded-xl border border-white/5">
            <button 
              onClick={() => setViewport('mobile')}
              className={cn(
                "p-2 rounded-lg transition-all",
                viewport === 'mobile' ? "bg-white text-black" : "text-zinc-500 hover:text-white"
              )}
            >
              <Smartphone className="h-4 w-4" />
            </button>
            <button 
              onClick={() => setViewport('tablet')}
              className={cn(
                "p-2 rounded-lg transition-all",
                viewport === 'tablet' ? "bg-white text-black" : "text-zinc-500 hover:text-white"
              )}
            >
              <TabletIcon className="h-4 w-4" />
            </button>
            <button 
              onClick={() => setViewport('desktop')}
              className={cn(
                "p-2 rounded-lg transition-all",
                viewport === 'desktop' ? "bg-white text-black" : "text-zinc-500 hover:text-white"
              )}
            >
              <Laptop className="h-4 w-4" />
            </button>
          </div>
        )}

        <div className="flex items-center gap-2">
          <button 
            onClick={toggleFavorite}
            className={cn(
              "p-2 rounded-xl border transition-all",
              isFavorite 
                ? "bg-red-500/10 border-red-500/20 text-red-500" 
                : "bg-white/5 border-white/5 text-zinc-500 hover:text-white"
            )}
          >
            <Heart className={cn("h-5 w-5", isFavorite && "fill-current")} />
          </button>
          
          <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/5">
            <button 
              onClick={() => setViewMode('preview')}
            className={cn(
              "flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-medium transition-all",
              viewMode === 'preview' ? "bg-white text-black" : "text-zinc-500 hover:text-white"
            )}
          >
            <Eye className="h-3.5 w-3.5" />
            Preview
          </button>
          <button 
            onClick={() => setViewMode('code')}
            className={cn(
              "flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-medium transition-all",
              viewMode === 'code' ? "bg-white text-black" : "text-zinc-500 hover:text-white"
            )}
          >
            <Code2 className="h-3.5 w-3.5" />
            Code
          </button>
        </div>
      </div>
    </header>

      {/* Main Content */}
      <main className="flex-1 min-h-0 bg-zinc-950 relative overflow-hidden">
        {viewMode === 'preview' ? (
          <div className="absolute inset-0 flex items-center justify-center p-8 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px]">
            <div 
              className={cn(
                "h-full bg-black rounded-2xl border border-white/10 shadow-2xl transition-all duration-500 overflow-hidden relative",
                viewport === 'mobile' ? "w-[375px]" : 
                viewport === 'tablet' ? "w-[768px]" : 
                "w-full max-w-[1280px]"
              )}
            >
               {/* Component Mock Frame */}
               <div className="w-full h-full bg-black/50 overflow-auto">
                 <div className="min-h-full p-4">
                  {component.component}
                 </div>
               </div>
            </div>
          </div>
        ) : (
          <div className="h-full overflow-auto p-8 max-w-5xl mx-auto w-full">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-zinc-500 font-mono tracking-wider italic">component.tsx</span>
              <button 
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl text-xs font-medium transition-all"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? 'Copied' : 'Copy Code'}
              </button>
            </div>
            <pre className="rounded-2xl !bg-[#0a0a0a] !m-0 !p-8 border border-white/5">
              <code className="language-jsx">
                {component.code}
              </code>
            </pre>
          </div>
        )}
      </main>
    </div>
  );
}
