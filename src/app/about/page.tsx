import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Zap, Code, Layout, Globe, Send } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: "Clean Code",
      description: "Architecture that's as beautiful behind the scenes as it is on the surface. Scalable, maintainable, and efficient.",
      icon: <Code className="h-6 w-6 text-sky-400" />
    },
    {
      title: "Honest Communication",
      description: "No corporate fluff. Direct collaboration, transparent timelines, and clear expectations every step of the way.",
      icon: <Heart className="h-6 w-6 text-indigo-400" />
    },
    {
      title: "Fast Delivery",
      description: "High-performance websites built at the speed of thought. We value your time as much as the end product.",
      icon: <Zap className="h-6 w-6 text-purple-400" />
    }
  ];

  const skills = [
    "HTML5 & Semantic Web",
    "CSS3 & Modern Styling",
    "JavaScript (ES6+)",
    "TypeScript",
    "React & Next.js",
    "Responsive Design",
    "Tailwind CSS",
    "Vercel Deployment",
    "Glassmorphic UI"
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
          <Link href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Home</Link>
          <Link href="/studio" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Studio</Link>
          <Link href="/work" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Work</Link>
          <Link href="/about" className="text-sm font-medium text-white transition-colors underline underline-offset-8 decoration-sky-500/50">About</Link>
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
        {/* About Hero & Bio */}
        <section className="max-w-4xl mx-auto px-6 pt-32 pb-24 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-sky-400 mb-8 animate-fade-rise w-fit mx-auto md:mx-0">
             <Sparkles className="h-3.5 w-3.5" />
             The human behind the studio
          </div>
          
          <h1 
            className="text-6xl sm:text-7xl md:text-8xl tracking-[-0.04em] font-normal animate-fade-rise mb-12"
            style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}
          >
            I’m Aron, making <em className="not-italic text-zinc-500 italic">the web</em> a little more <em className="not-italic text-zinc-500">beautiful.</em>
          </h1>
          
          <div className="space-y-6 text-zinc-400 text-lg sm:text-xl leading-relaxed animate-fade-rise-delay max-w-3xl">
            <p>
              I’m a self-taught developer driven by a singular obsession: building digital homes that reflect the quality of the brands they represent. 
            </p>
            <p>
              Parallel to my work at Velorah, I’m specializing in **cybersecurity**. This dual focus means I don’t just build for aesthetics—I build for resilience. I started Velorah to bridge the gap between high-end design and high-performance engineering, helping creators and local businesses get online without the corporate friction.
            </p>
          </div>
        </section>

        {/* Security Trust Pillar (New) */}
        <section className="max-w-7xl mx-auto px-8 py-12">
           <div className="p-12 rounded-[40px] bg-white/[0.03] border border-sky-500/20 backdrop-blur-md flex flex-col md:flex-row items-center gap-8 group">
              <div className="p-6 rounded-3xl bg-sky-500/10 border border-sky-500/20 group-hover:bg-sky-500/20 transition-colors">
                <ShieldCheck className="h-10 w-10 text-sky-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-display" style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>Security-Minded Engineering</h3>
                <p className="text-zinc-500 leading-relaxed max-w-2xl">
                  By blending UI/UX artistry with cybersecurity principles, I ensure your site isn't just a pretty facade. We prioritize data integrity, secure deployments, and modern web safety standards from day one.
                </p>
              </div>
           </div>
        </section>

        {/* Values Section */}
        <section className="max-w-7xl mx-auto px-8 py-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="p-10 rounded-[32px] bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all backdrop-blur-md">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-medium mb-4">{value.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="max-w-7xl mx-auto px-8 py-32 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display mb-6" style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>
                The Toolbox
              </h2>
              <p className="text-zinc-500 leading-relaxed max-w-md">
                We use modern, industry-leading technologies to ensure your project is built on a foundation that lasts.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-sm text-zinc-400">
                  <div className="h-1.5 w-1.5 rounded-full bg-sky-500/50" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="max-w-4xl mx-auto px-8 py-48 text-center">
          <div className="space-y-8 p-16 rounded-[48px] bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <h2 className="text-4xl md:text-6xl font-display" style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>
              Want to work <em className="not-italic text-zinc-600">together?</em>
            </h2>
            <p className="text-zinc-500 text-lg max-w-md mx-auto">
              Currently accepting new projects for Q2 2024. Let's discuss your vision.
            </p>
            <div className="flex justify-center pt-8">
              <Link 
                href="/contact" 
                className="liquid-glass rounded-full px-14 py-6 text-xl font-medium hover:scale-[1.03] transition-transform flex items-center gap-4 shadow-[0_0_50px_-10px_rgba(56,189,248,0.2)]"
              >
                Reach out
                <Send className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-20 px-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <Link href="/" className="text-3xl tracking-tight text-white font-display" style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>
              Velorah<sup className="text-xs">®</sup>
            </Link>
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
               Artistry meets architecture. We build premium digital homes for the ambitious.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-16">
            <div className="space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-widest text-white">Navigation</h5>
              <ul className="space-y-2">
                <li><Link href="/" className="text-sm text-zinc-500 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/studio" className="text-sm text-zinc-500 hover:text-white transition-colors">Studio</Link></li>
                <li><Link href="/work" className="text-sm text-zinc-500 hover:text-white transition-colors">Work</Link></li>
                <li><Link href="/about" className="text-sm text-white transition-colors font-medium">About</Link></li>
              </ul>
            </div>
            <div className="space-y-4 text-sm text-zinc-500">
               <h5 className="text-xs font-bold uppercase tracking-widest text-white">Connect</h5>
               <ul className="space-y-2">
                 <li>Twitter</li>
                 <li>Instagram</li>
               </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <p>© 2024 Velorah Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
