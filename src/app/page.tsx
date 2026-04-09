import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          type="video/mp4"
        />
      </video>

      {/* Navigation Bar */}
      <nav className="relative z-10 flex flex-row items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        <div className="text-3xl tracking-tight text-foreground font-display" style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>
          Velorah<sup className="text-xs">®</sup>
        </div>
        
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#" className="text-sm text-foreground transition-colors">Home</Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Studio</Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Journal</Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Reach Us</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm text-foreground hover:opacity-70 transition-opacity">
            Sign In
          </Link>
          <Link 
            href="/login" 
            className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform cursor-pointer"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-6 pt-32 pb-40">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-sky-400 mb-8 animate-fade-rise">
          <Sparkles className="h-3 w-3" />
          The Developer UI System
        </div>
        
        <h1 
          className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal animate-fade-rise"
          style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}
        >
          Crafting <em className="not-italic text-muted-foreground">interfaces</em> at the speed <em className="not-italic text-muted-foreground">of thought.</em>
        </h1>
        
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay">
          Painless mobile-first components for modern developers. Clean, copy-paste React code inspired by Apple-level aesthetics. Built for high-performance teams.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-12 animate-fade-rise-delay-2">
          <Link 
            href="/library"
            className="liquid-glass rounded-full px-14 py-5 text-base text-foreground font-medium hover:scale-[1.03] transition-transform cursor-pointer"
          >
            Explore Library
          </Link>
          <button className="px-8 py-5 text-zinc-500 hover:text-white transition-colors text-sm font-medium">
            View Documentation
          </button>
        </div>
      </main>
    </div>
  )
}
