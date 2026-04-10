'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export function VelorahNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Studio', href: '/studio' },
    { name: 'Work', href: '/work' },
    { name: 'About', href: '/about' },
    { name: 'Reach Us', href: '/contact' },
  ];

  // Logic to hide auth buttons on Reach Us page if desired, 
  // but user said "show all the buttons" and approved the plan to restore consistency.
  // I will keep them everywhere for now as requested.
  const showAuth = true; 

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-8 py-8 w-full",
          scrolled ? "py-4 bg-black/20 backdrop-blur-2xl border-b border-white/5" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-between w-full">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-3xl tracking-tight text-white font-display relative z-[110]" 
            style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}
          >
            Velorah<sup className="text-xs">®</sup>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-10 items-center absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:text-white",
                  isActive(link.href) 
                    ? "text-white underline underline-offset-8 decoration-sky-500/50" 
                    : "text-zinc-400"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Sign In
            </Link>
            <Link 
              href="/contact" 
              className="liquid-glass rounded-full px-7 py-2.5 text-sm font-medium text-white hover:scale-[1.02] transition-transform cursor-pointer border border-white/5 shadow-2xl"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-white relative z-[110]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-[#050B14] lg:hidden flex flex-col pt-32 px-8"
          >
            {/* Background elements for premium feel */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-sky-500/20 blur-[120px] rounded-full" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 space-y-8">
              <div className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-12">
                Navigation
              </div>
              
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-4xl font-display tracking-tight transition-colors",
                      isActive(link.href) ? "text-white" : "text-zinc-600 hover:text-zinc-400"
                    )}
                    style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}
                  >
                    {link.name}
                    {isActive(link.href) && (
                      <motion.span 
                        layoutId="active-mobile"
                        className="inline-block ml-4 h-2 w-2 rounded-full bg-sky-500"
                      />
                    )}
                  </Link>
                ))}
              </div>

              <div className="pt-12 border-t border-white/5 flex flex-col gap-6">
                <Link 
                  href="/login" 
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  Sign In
                </Link>
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="liquid-glass rounded-full py-5 text-center text-sm font-bold uppercase tracking-widest text-white shadow-2xl"
                >
                  Start Project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
