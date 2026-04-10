'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, CheckCircle2, ChevronDown } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [projectType, setProjectType] = useState('Select type');
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [budgetRange, setBudgetRange] = useState('Select budget');
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);

  const projectTypes = ["Landing Page", "Business Website", "Custom"];
  const budgetRanges = ["Under $300", "$300–$700", "$700+"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend needed as per request, just showing success state
    setSubmitted(true);
  };

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

      {/* Simplified Navigation (No Auth Buttons) */}
      <nav className="relative z-50 flex flex-row items-center justify-between px-8 py-8 max-w-7xl mx-auto w-full">
        <Link href="/" className="text-3xl tracking-tight text-white font-display" style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>
          Velorah<sup className="text-xs">®</sup>
        </Link>
        <div className="hidden md:flex gap-10 items-center">
          <Link href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Home</Link>
          <Link href="/studio" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Studio</Link>
          <Link href="/work" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Work</Link>
          <Link href="/about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="text-sm font-medium text-white transition-colors underline underline-offset-8 decoration-sky-500/50">Reach Us</Link>
        </div>
        <div className="flex items-center gap-6">
           {/* Sign In / Get Started removed per request */}
        </div>
      </nav>

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-20">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div 
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-2xl w-full"
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-sky-400 mb-8">
                  <Sparkles className="h-3 w-3" />
                  Ready to elevate?
                </div>
                <h1 
                  className="text-5xl md:text-7xl tracking-[-0.04em] font-normal mb-4"
                  style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}
                >
                  Start Your <em className="not-italic text-zinc-500">Project.</em>
                </h1>
                <p className="text-zinc-400 text-lg">
                  Fill out the form and I'll get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest px-2">Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Your name"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500/40 transition-all text-sm placeholder:text-zinc-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest px-2">Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="email@example.com"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500/40 transition-all text-sm placeholder:text-zinc-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Custom Dropdown: Project Type */}
                  <div className="space-y-2 relative">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest px-2">Project Type</label>
                    <button 
                      type="button"
                      onClick={() => setIsTypeOpen(!isTypeOpen)}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-left text-sm flex justify-between items-center group transition-all hover:bg-white/[0.05]"
                    >
                      <span className={projectType === 'Select type' ? 'text-zinc-600' : 'text-white'}>{projectType}</span>
                      <ChevronDown className={`h-4 w-4 text-zinc-500 transition-transform ${isTypeOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isTypeOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute z-50 top-full left-0 w-full mt-2 p-2 rounded-2xl bg-[#0A101A] border border-white/10 backdrop-blur-xl shadow-2xl"
                        >
                          {projectTypes.map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => { setProjectType(type); setIsTypeOpen(false); }}
                              className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/5 transition-colors text-sm"
                            >
                              {type}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Custom Dropdown: Budget Range */}
                  <div className="space-y-2 relative">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest px-2">Budget Range</label>
                    <button 
                      type="button"
                      onClick={() => setIsBudgetOpen(!isBudgetOpen)}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-left text-sm flex justify-between items-center group transition-all hover:bg-white/[0.05]"
                    >
                      <span className={budgetRange === 'Select budget' ? 'text-zinc-600' : 'text-white'}>{budgetRange}</span>
                      <ChevronDown className={`h-4 w-4 text-zinc-500 transition-transform ${isBudgetOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isBudgetOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute z-50 top-full left-0 w-full mt-2 p-2 rounded-2xl bg-[#0A101A] border border-white/10 backdrop-blur-xl shadow-2xl"
                        >
                          {budgetRanges.map((range) => (
                            <button
                              key={range}
                              type="button"
                              onClick={() => { setBudgetRange(range); setIsBudgetOpen(false); }}
                              className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/5 transition-colors text-sm"
                            >
                              {range}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest px-2">Message</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell me about your vision..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500/40 transition-all text-sm placeholder:text-zinc-600 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full liquid-glass rounded-full py-5 text-sm font-bold uppercase tracking-widest hover:scale-[1.01] transition-transform flex items-center justify-center gap-3 group"
                >
                  Send Message
                  <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="pt-8 text-center">
                   <p className="text-zinc-500 text-sm">Prefer email? Reach out directly at</p>
                   <a href="mailto:aronemsy@gmail.com" className="text-white hover:text-sky-400 transition-colors font-medium border-b border-white/10 pb-0.5">
                     aronemsy@gmail.com
                   </a>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md w-full p-12 rounded-[48px] bg-white/[0.03] border border-white/10 backdrop-blur-3xl text-center flex flex-col items-center gap-8 shadow-2xl"
            >
              <div className="p-6 rounded-3xl bg-sky-500/10 border border-sky-500/20">
                <CheckCircle2 className="h-12 w-12 text-sky-400" />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-display" style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>Message Sent.</h2>
                <p className="text-zinc-400 leading-relaxed">
                  Thanks for reaching out! I've received your inquiry and will be in touch within 24 hours.
                </p>
              </div>
              <Link 
                href="/" 
                className="w-full bg-white/5 border border-white/10 py-4 rounded-2xl text-sm font-medium hover:bg-white/10 transition-colors"
                onClick={() => setSubmitted(false)}
              >
                Back to Home
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
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
                <li><Link href="/work" className="text-sm text-zinc-500 hover:text-white transition-colors">Work</Link></li>
                <li><Link href="/about" className="text-sm text-zinc-500 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-sm text-white transition-colors font-medium">Reach Us</Link></li>
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
