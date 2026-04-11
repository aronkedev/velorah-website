'use client';

import { useState, useEffect } from 'react';
import { componentRegistry } from "@/data/components";
import { Heart, Box, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem('naevox_favorites') || '[]');
    const favoriteComponents = componentRegistry.filter(c => favoriteIds.includes(c.id));
    setFavorites(favoriteComponents);
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="p-8 md:p-12 space-y-12 max-w-7xl mx-auto">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-red-500/10 rounded-xl flex items-center justify-center border border-red-500/20">
            <Heart className="h-5 w-5 text-red-500 fill-current" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight">My Favorites</h1>
        </div>
        <p className="text-zinc-400 max-w-2xl text-lg">
          Your curated collection of premium components. Ready for your next project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {favorites.length === 0 ? (
          <div className="col-span-full py-20 text-center space-y-4 liquid-glass rounded-[40px] border border-white/5">
            <div className="h-16 w-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto border border-white/5">
              <Box className="h-8 w-8 text-zinc-500" />
            </div>
            <div className="space-y-1">
              <p className="text-white font-medium">No favorites yet</p>
              <p className="text-zinc-500 text-sm">Start exploring the library and heart the ones you love.</p>
            </div>
            <Link 
              href="/library"
              className="inline-flex items-center gap-2 text-sky-400 font-medium hover:text-sky-300 transition-colors pt-4"
            >
              Explore Components
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          favorites.map((component) => (
            <Link 
              key={component.id}
              href={`/library/${component.category}/${component.id}`}
              className="group relative flex flex-col bg-white/[0.02] border border-white/5 rounded-[32px] overflow-hidden hover:bg-white/[0.04] transition-all"
            >
              <div className="aspect-[16/10] bg-zinc-900 flex items-center justify-center border-b border-white/5 p-8">
                 <div className="h-2 w-1/2 bg-white/10 rounded mb-2" />
                 <div className="h-2 w-3/4 bg-white/10 rounded mb-2" />
                 <div className="h-2 w-1/4 bg-white/10 rounded" />
              </div>
              
              <div className="p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-medium text-lg">{component.name}</h3>
                  <Heart className="h-4 w-4 text-red-500 fill-current" />
                </div>
                <p className="text-sm text-zinc-500 line-clamp-2 italic">
                  Saved from {component.category} category
                </p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
