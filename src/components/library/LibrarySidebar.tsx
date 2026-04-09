'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Layout, 
  Box, 
  Menu as NavIcon, 
  Square, 
  CreditCard, 
  List, 
  PenTool,
  Search,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  { name: 'All Components', icon: Layout, href: '/library' },
  { name: 'Navbars', icon: NavIcon, href: '/library/navbar' },
  { name: 'Hero Sections', icon: Sparkles, href: '/library/hero' },
  { name: 'Cards', icon: CreditCard, href: '/library/cards' },
  { name: 'Buttons', icon: Box, href: '/library/buttons' },
  { name: 'Forms', icon: List, href: '/library/forms' },
  { name: 'Pricing', icon: PenTool, href: '/library/pricing' },
];

export default function LibrarySidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen border-r border-white/5 bg-black/50 backdrop-blur-3xl sticky top-0 hidden lg:flex flex-col p-6">
      <div className="flex items-center gap-2 font-display text-2xl tracking-tighter mb-10">
        <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center">
          <Sparkles className="h-5 w-5 text-black" />
        </div>
        <span>Velorah<span className="text-zinc-500 font-normal">UI</span></span>
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
        <input 
          placeholder="Search components..."
          className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm outline-none focus:ring-1 focus:ring-sky-500/50 transition-all placeholder:text-zinc-600"
        />
      </div>

      <nav className="space-y-1 flex-1">
        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4 ml-2">Categories</p>
        {categories.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group",
              pathname === cat.href 
                ? "bg-white/10 text-white" 
                : "text-zinc-400 hover:bg-white/5 hover:text-white"
            )}
          >
            <cat.icon className={cn(
              "h-4 w-4 transition-colors",
              pathname === cat.href ? "text-sky-400" : "text-zinc-500 group-hover:text-sky-400"
            )} />
            {cat.name}
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-white/5">
        <div className="liquid-glass p-4 rounded-2xl border border-white/5 space-y-3">
          <p className="text-xs font-medium">Need custom UI?</p>
          <p className="text-[10px] text-zinc-500">Upgrade to Pro for AI-generated components.</p>
          <button className="w-full bg-white text-black text-[10px] font-bold uppercase tracking-tighter py-2 rounded-lg hover:opacity-90">
            Go Unlimited
          </button>
        </div>
      </div>
    </div>
  );
}
