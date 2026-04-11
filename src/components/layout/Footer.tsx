import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-20 px-8 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="space-y-6">
          <Link href="/" className="text-3xl tracking-tight text-white font-display" style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>
            Naevox<sup className="text-xs">®</sup>
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
              <li><Link href="/work" className="text-sm text-zinc-500 hover:text-white transition-colors">Work</Link></li>
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
        <p>© 2026 Naevox Studio. All rights reserved.</p>
        <div className="flex gap-6 uppercase tracking-wider">
           <span>London based</span>
           <span className="text-emerald-500 animate-pulse">Available for work</span>
        </div>
      </div>
    </footer>
  );
}
