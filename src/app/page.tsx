import Link from 'next/link';

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
        <h1 
          className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal animate-fade-rise"
          style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}
        >
          Where <em className="not-italic text-muted-foreground">dreams</em> rise <em className="not-italic text-muted-foreground">through the silence.</em>
        </h1>
        
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay">
          We're designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos, we build digital spaces for sharp focus and inspired work.
        </p>

        <Link 
          href="/login"
          className="liquid-glass rounded-full px-14 py-5 text-base text-foreground mt-12 hover:scale-[1.03] transition-transform cursor-pointer animate-fade-rise-delay-2"
        >
          Launch Your First Funnel
        </Link>
      </main>
    </div>
  )
}
