import Link from 'next/link';
import { Sparkles, ArrowRight, MousePointer2, Globe, Layers, Zap, ShieldCheck, User } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden">
      {/* Video Background (Restored from Original UI) */}
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

      {/* Navigation (Restored Layout with Agency Links) */}
      <nav className="relative z-10 flex flex-row items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        <div className="text-3xl tracking-tight text-foreground font-display" style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>
          Velorah<sup className="text-xs">®</sup>
        </div>
        
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/studio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Studio</Link>
          <Link href="/work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Work</Link>
          <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Reach Us</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm text-foreground hover:opacity-70 transition-opacity">
            Sign In
          </Link>
          <Link 
            href="/contact" 
            className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform cursor-pointer"
          >
            Start Project
          </Link>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section (Original Minimal Visual Layout with Agency Copy) */}
        <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6 pt-20">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-sky-400 mb-8 animate-fade-rise">
            <Sparkles className="h-3 w-3" />
            Premier Boutique Web Studio
          </div>
          
          <h1 
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal animate-fade-rise"
            style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}
          >
            Building <em className="not-italic text-muted-foreground">digital homes</em> for the world's <em className="not-italic text-muted-foreground">ambitious brands.</em>
          </h1>
          
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay">
            Bespoke, high-performance websites for startups, creators, and local businesses. Transform your vision into a world-class digital experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-12 animate-fade-rise-delay-2">
            <Link 
              href="/contact"
              className="liquid-glass rounded-full px-14 py-5 text-base text-foreground font-medium hover:scale-[1.03] transition-transform cursor-pointer"
            >
              Get a Free Quote
            </Link>
            <button className="px-8 py-5 text-zinc-500 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group">
              View Our Work
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>


        {/* Why Velorah (Simple Trust Points) */}
        <section id="why" className="max-w-7xl mx-auto px-8 py-32 border-t border-white/5">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="flex gap-4">
                <Zap className="h-5 w-5 text-zinc-400 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">High Performance</h4>
                  <p className="text-xs text-muted-foreground text-zinc-500">Built for speed and SEO optimization.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <ShieldCheck className="h-5 w-5 text-zinc-400 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Premium Design</h4>
                  <p className="text-xs text-muted-foreground text-zinc-500">No templates. Only bespoke architecture.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <User className="h-5 w-5 text-zinc-400 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Direct Service</h4>
                  <p className="text-xs text-muted-foreground text-zinc-500">Work directly with the artisans.</p>
                </div>
              </div>
           </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/5 py-20 px-8 bg-black/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="text-3xl tracking-tight text-foreground font-display" style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>
            Velorah<sup className="text-xs">®</sup>
          </div>
          <div className="flex gap-20 text-sm">
            <div className="space-y-4">
              <p className="font-medium">Studio</p>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/studio" className="hover:text-foreground transition-colors">Studio</Link></li>
                <li><Link href="/work" className="hover:text-foreground transition-colors">Work</Link></li>
                <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="font-medium">Connect</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 text-[10px] text-zinc-600 uppercase tracking-widest">
          © 2024 Velorah Studio — All Rights Reserved
        </div>
      </footer>
    </div>
  );
}
