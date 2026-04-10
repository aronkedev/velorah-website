import Link from 'next/link';
import { Sparkles, ArrowRight, Check, HelpCircle, ArrowUpRight } from 'lucide-react';

export default function Studio() {
  const tiers = [
    {
      name: "Landing Page",
      description: "A single, high-converting page engineered for speed and precision. Perfect for personal brands or product launches.",
      price: "$200",
      features: ["1 Custom Page", "3-5 Day Delivery", "SEO Optimization", "Mobile Responsive", "Analytics Integration"],
      cta: "Start Promo",
      highlight: false
    },
    {
      name: "Business Website",
      description: "A complete digital hub for growing teams and brands. Multi-page architecture built for authority and results.",
      price: "$500",
      features: ["3-5 Custom Pages", "Contact Forms", "Advanced SEO", "CMS Integration", "2 Weeks Delivery"],
      cta: "Build My Brand",
      highlight: true
    },
    {
      name: "Custom Project",
      description: "Bespoke digital architecture for complex visions. Tailored functionality, discussed directly on a discovery call.",
      price: "Let's Talk",
      features: ["Unlimited Scope", "Dedicated Timeline", "Custom Functionality", "Priority Support", "Direct Strategy"],
      cta: "Schedule Call",
      highlight: false
    }
  ];

  const faqs = [
    {
      q: "How long does it take?",
      a: "Landing pages usually ship within 3-5 days. Larger business sites take 2-3 weeks depending on complexity. We prioritize speed without sacrificing aesthetic quality."
    },
    {
      q: "Do you do redesigns?",
      a: "Absolutely. We can take your existing site and bring it into the modern era with premium aesthetics, better performance, and glassmorphic designs."
    },
    {
      q: "What if I need specialized features?",
      a: "Our Custom Projects are built for exactly that. Whether you need an e-commerce setup, a booking system, or a custom dashboard, we've got you covered."
    },
    {
      q: "Is hosting setup included?",
      a: "Yes. We'll handle the technical heavy lifting, from domain mapping to setting up high-performance hosting on platforms like Vercel or Netlify."
    }
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden bg-[#050B14] text-white">
      {/* Background Visual: Shared Cinematic Fog Video */}
      <video
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-40 md:opacity-100"
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

      {/* Navigation */}
      <nav className="relative z-50 flex flex-row items-center justify-between px-8 py-8 max-w-7xl mx-auto w-full">
        <Link href="/" className="text-3xl tracking-tight text-white font-display" style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>
          Velorah<sup className="text-xs">®</sup>
        </Link>
        
        <div className="hidden md:flex gap-10 items-center">
          <Link href="/studio" className="text-sm font-medium text-white transition-colors underline underline-offset-8 decoration-sky-500/50">Studio</Link>
          <Link href="/work" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Work</Link>
          <Link href="/about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Reach Us</Link>
        </div>

        <div className="flex items-center gap-6">
          <Link 
            href="/contact" 
            className="liquid-glass rounded-full px-7 py-2.5 text-sm font-medium text-white hover:scale-[1.02] transition-transform cursor-pointer border border-white/5 shadow-2xl"
          >
            Start Project
          </Link>
        </div>
      </nav>

      <main className="relative z-10">
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
            {tiers.map((tier, idx) => (
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
              {faqs.map((faq, idx) => (
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
      <footer className="border-t border-white/5 py-20 px-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <div className="text-3xl tracking-tight text-white font-display" style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>
              Velorah<sup className="text-xs">®</sup>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
               Artistry meets architecture. We build premium digital homes for the ambitious.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-16">
            <div className="space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-widest text-white">Navigation</h5>
              <ul className="space-y-2">
                <li><Link href="/studio" className="text-sm text-white transition-colors font-medium">Studio</Link></li>
                <li><Link href="/work" className="text-sm text-zinc-500 hover:text-white transition-colors text-medium">Work</Link></li>
                <li><Link href="/about" className="text-sm text-zinc-500 hover:text-white transition-colors text-medium">About</Link></li>
                <li><Link href="/contact" className="text-sm text-zinc-500 hover:text-white transition-colors text-medium">Reach Us</Link></li>
              </ul>
            </div>
            <div className="space-y-4 text-sm text-zinc-500">
               <h5 className="text-xs font-bold uppercase tracking-widest text-white">Legal</h5>
               <ul className="space-y-2">
                 <li>Privacy Policy</li>
                 <li>Terms of Service</li>
               </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <p>© 2024 Velorah Studio. All rights reserved.</p>
          <div className="flex gap-6 uppercase tracking-wider">
             <span>London based</span>
             <span className="text-emerald-500 animate-pulse">Available for work</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
