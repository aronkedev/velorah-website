import Link from 'next/link';
import { Sparkles, ArrowRight, Globe, Code2, Cpu, ExternalLink } from 'lucide-react';

export default function Work() {
  const projects = [
    {
      name: "Velorah",
      description: "A premium freelance agency platform featuring cinematic visuals and glassmorphic UI.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "High Performance"],
      link: "https://velorah-website.vercel.app",
      icon: <Globe className="h-8 w-8 text-sky-400" />
    },
    {
      name: "Aron Ke Portfolio",
      description: "A personal showcase for high-end web development and immersive 3D experiences.",
      tech: ["React", "Three.js", "Full-Stack", "3D Visualization"],
      link: "https://aronke.vercel.app",
      icon: <Cpu className="h-8 w-8 text-indigo-400" />
    }
  ];

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

      {/* Navigation */}
      <nav className="relative z-50 flex flex-row items-center justify-between px-8 py-8 max-w-7xl mx-auto w-full">
        <Link href="/" className="text-3xl tracking-tight text-white font-display" style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>
          Velorah<sup className="text-xs">®</sup>
        </Link>
        <div className="hidden md:flex gap-10 items-center">
          <Link href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Home</Link>
          <Link href="/studio" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Studio</Link>
          <Link href="/work" className="text-sm font-medium text-white transition-colors underline underline-offset-8 decoration-sky-500/50">Work</Link>
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
             Case Studies & Proof
          </div>
          
          <h1 
            className="text-6xl sm:text-8xl md:text-9xl tracking-[-0.04em] font-normal animate-fade-rise"
            style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}
          >
            Projects We've <em className="not-italic text-zinc-500">Built.</em>
          </h1>
          
          <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay">
             A showcase of digital products where performance meets high-end aesthetics. From interactive 3D to scalable platforms.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="max-w-7xl mx-auto px-8 pb-48">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="group relative flex flex-col p-12 rounded-[40px] bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-md overflow-hidden"
              >
                {/* Minimal Icon Header */}
                <div className="flex justify-between items-start mb-10">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 ring-1 ring-white/5 group-hover:scale-110 transition-transform duration-500">
                    {project.icon}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-full bg-white/5 hover:bg-sky-400 hover:text-black transition-all border border-white/10"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>

                <div className="space-y-6">
                  <h3 className="text-4xl font-display" style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>
                    {project.name}
                  </h3>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 pt-4">
                    {project.tech.map((tech, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-500 group-hover:text-sky-400 group-hover:border-sky-500/30 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative background glow */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-sky-500/5 blur-[100px] group-hover:bg-sky-500/20 transition-all duration-1000" />
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
             <div className="flex flex-col items-center gap-6 p-12 rounded-[32px] bg-white/[0.01] border border-white/5 max-w-2xl mx-auto backdrop-blur-sm">
                <p className="text-zinc-500 italic text-sm">More projects coming soon...</p>
                <h4 className="text-3xl md:text-4xl font-display leading-tight" style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>
                  Want results <em className="not-italic text-zinc-500 underline underline-offset-8 decoration-sky-500/30">like these?</em>
                </h4>
                <Link 
                  href="/contact"
                  className="mt-4 liquid-glass rounded-full px-12 py-5 text-lg font-medium hover:scale-[1.03] transition-transform flex items-center gap-3 group"
                >
                  Get in touch
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
                <li><Link href="/studio" className="text-sm text-zinc-500 hover:text-white transition-colors">Studio</Link></li>
                <li><Link href="/work" className="text-white font-medium">Work</Link></li>
                <li><Link href="/about" className="text-sm text-zinc-500 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-sm text-zinc-500 hover:text-white transition-colors">Reach Us</Link></li>
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
