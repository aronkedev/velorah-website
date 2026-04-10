import Link from 'next/link';
import { Sparkles, ArrowRight, Check, HelpCircle, ArrowUpRight } from 'lucide-react';
import { VelorahNavbar } from '@/components/layout/VelorahNavbar';
import { Footer } from '@/components/layout/Footer';

import { pricingTiers, studioFAQs } from '@/data/site-content';

export default function Studio() {

  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden bg-[#050B14] text-white">
      {/* Background Visual: Shared Cinematic Fog Video */}
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
        {/* Page Hero */}
        <section className="flex flex-col items-center justify-center text-center px-6 pt-32 pb-24">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-sky-400 mb-8 animate-fade-rise">
             <Sparkles className="h-3.5 w-3.5" />
             Services & Selection
          </div>
          
          <h1 
            className="text-6xl sm:text-8xl md:text-9xl tracking-[-0.04em] font-normal animate-fade-rise"
            style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}
          >
            What We <em className="not-italic text-zinc-500">Build.</em>
          </h1>
          
          <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay">
            Curated service tiers for startups, businesses, and visions. Select the foundation for your next digital breakthrough.
          </p>
        </section>

        {/* Pricing Tiers Grid */}
        <section className="max-w-7xl mx-auto px-8 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col p-10 rounded-[32px] border transition-all duration-500 hover:translate-y-[-4px] group backdrop-blur-md ${
                  tier.highlight 
                  ? "bg-white/[0.04] border-sky-500/30 shadow-[0_0_40px_-5px_rgba(56,189,248,0.1)]" 
                  : "bg-white/[0.02] border-white/10 hover:border-white/20"
                }`}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-medium mb-3">{tier.name}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed min-h-[60px]">
                    {tier.description}
                  </p>
                </div>

                <div className="mb-10 text-4xl font-display" style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>
                  {tier.price}
                  {tier.price !== "Let's Talk" && <span className="text-base text-zinc-500 font-sans font-normal ml-2">from</span>}
                </div>

                <div className="flex-1 space-y-4 mb-12">
                   {tier.features.map((feature, fIdx) => (
                     <div key={fIdx} className="flex items-center gap-3 text-sm text-zinc-300">
                        <Check className="h-4 w-4 text-sky-400" />
                        {feature}
                     </div>
                   ))}
                </div>

                <Link 
                  href="/contact"
                  className={`flex items-center justify-center gap-2 rounded-2xl py-5 text-base font-semibold transition-all ${
                    tier.highlight 
                    ? "bg-sky-400 text-black hover:bg-sky-300" 
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {tier.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-8 py-32 border-t border-white/5">
           <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-display mb-6" style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>
                Studio FAQ
              </h2>
           </div>

           <div className="space-y-6">
              {studioFAQs.map((faq, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group">
                   <div className="flex items-start gap-4">
                      <HelpCircle className="h-6 w-6 text-sky-400 shrink-0 mt-1" />
                      <div>
                        <h4 className="text-xl font-medium mb-3 group-hover:text-sky-400 transition-colors">{faq.q}</h4>
                        <p className="text-zinc-400 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
