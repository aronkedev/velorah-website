import Link from 'next/link';
import { Sparkles, ArrowRight, Calendar, User } from 'lucide-react';
import { VelorahNavbar } from '@/components/layout/VelorahNavbar';
import { Footer } from '@/components/layout/Footer';
import { journalEntries } from '@/data/journal';

export default function JournalPage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden bg-[#050B14] text-white">
      {/* Background Visual */}
      <video
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-40"
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

      <main className="relative z-10 flex-1 pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Hero Section */}
          <div className="text-center md:text-left space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-sky-400">
              <Sparkles className="h-3 w-3" />
              Editorial Journal
            </div>
            <h1 
              className="text-6xl md:text-8xl tracking-tight font-normal leading-[0.9]"
              style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}
            >
              The Velorah <em className="not-italic text-zinc-500 underline underline-offset-8 decoration-sky-500/20">Chronicle.</em>
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed">
              Insights on digital artistry, architecture, and the philosophy of premium design. Built for those who build the future.
            </p>
          </div>

          {/* Journal Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {journalEntries.map((entry) => (
              <Link 
                key={entry.slug}
                href={`/journal/${entry.slug}`}
                className="group relative flex flex-col liquid-glass rounded-[40px] border border-white/5 overflow-hidden hover:scale-[1.02] transition-transform shadow-2xl"
              >
                {/* Image Placeholder/Thumbnail */}
                <div className="aspect-[16/10] bg-zinc-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  {entry.image && (
                    <img 
                      src={entry.image} 
                      alt={entry.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute top-6 left-6 z-20">
                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white">
                      {entry.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-4 relative z-20">
                  <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3 w-3" />
                      {entry.date}
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <User className="h-3 w-3" />
                      {entry.author}
                    </div>
                  </div>

                  <h3 
                    className="text-2xl font-display leading-snug group-hover:text-sky-400 transition-colors"
                    style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}
                  >
                    {entry.title}
                  </h3>
                  
                  <p className="text-zinc-500 text-sm line-clamp-2 leading-relaxed">
                    {entry.excerpt}
                  </p>

                  <div className="pt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white group-hover:gap-4 transition-all">
                    Read Article
                    <ArrowRight className="h-4 w-4 text-sky-400" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
