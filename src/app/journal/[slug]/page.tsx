import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, User, Share2, Sparkles } from 'lucide-react';
import { VelorahNavbar } from '@/components/layout/VelorahNavbar';
import { Footer } from '@/components/layout/Footer';
import { journalEntries } from '@/data/journal';

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const entry = journalEntries.find((e) => e.slug === params.slug);

  if (!entry) {
    return notFound();
  }

  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden bg-[#050B14] text-white">
      {/* Background Visual */}
      <video
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-20"
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

      <main className="relative z-10 flex-1 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Back Button */}
          <Link 
            href="/journal"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Journal
          </Link>

          {/* Article Header */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-[10px] font-bold uppercase tracking-widest text-sky-400">
                <Sparkles className="h-3 w-3" />
                {entry.category}
              </div>
              <h1 
                className="text-5xl md:text-7xl tracking-[-0.04em] font-normal leading-[1.1]"
                style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}
              >
                {entry.title}
              </h1>
              <p className="text-xl text-zinc-400 italic font-display leading-relaxed">
                "{entry.excerpt}"
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-8 border-y border-white/5">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Author</p>
                    <p className="text-sm font-medium">{entry.author}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Published</p>
                    <p className="text-sm font-medium">{entry.date}</p>
                  </div>
                </div>
              </div>

              <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-xs font-bold uppercase tracking-widest">
                <Share2 className="h-4 w-4" />
                Share
              </button>
            </div>
          </div>

          {/* Featured Image */}
          {entry.image && (
            <div className="aspect-video w-full rounded-[40px] overflow-hidden border border-white/5 shadow-2xl">
              <img 
                src={entry.image} 
                alt={entry.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Article Content */}
          <article 
            className="prose prose-invert prose-sky max-w-none 
              prose-headings:font-display prose-headings:font-normal prose-headings:tracking-tight
              prose-h2:text-4xl prose-h2:mt-12 prose-h2:mb-6
              prose-p:text-lg prose-p:text-zinc-400 prose-p:leading-relaxed
              prose-li:text-zinc-400
              prose-blockquote:border-sky-500/50 prose-blockquote:bg-white/[0.02] prose-blockquote:p-8 prose-blockquote:rounded-3xl prose-blockquote:not-italic prose-blockquote:text-white prose-blockquote:text-2xl prose-blockquote:font-display
            "
            dangerouslySetInnerHTML={{ __html: entry.content }}
          />

          {/* CTA Section */}
          <div className="mt-20 p-12 rounded-[48px] liquid-glass border border-white/10 text-center space-y-6">
             <h3 className="text-3xl font-display" style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>Want insights like these for your business?</h3>
             <p className="text-zinc-400 max-w-lg mx-auto">We don't just write about design, we live it. Let's build something extraordinary together.</p>
             <Link 
              href="/contact"
              className="inline-flex bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-[1.05] transition-transform"
             >
                Work with Velorah
             </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
