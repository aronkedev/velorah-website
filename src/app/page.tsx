import Link from 'next/link';
import { Sparkles, ArrowRight, Zap, ShieldCheck, User } from 'lucide-react';
import { VelorahNavbar } from '@/components/layout/VelorahNavbar';
import { Footer } from '@/components/layout/Footer';

import { brandFeatures } from '@/data/site-content';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden">
      {/* Video Background (Restored from Original UI) */}
      <video
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-60 md:opacity-100"
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

      <VelorahNavbar />

      <main className="relative z-10 pt-28">
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
              {brandFeatures.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  {feature.icon}
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-2">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground text-zinc-500">{feature.description}</p>
                  </div>
                </div>
              ))}
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
