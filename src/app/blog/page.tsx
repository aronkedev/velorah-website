import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import Link from "next/link"

const articles = [
  {
    title: "The Mobile-First Manifesto: Why Desktop-First is a UX Trap",
    excerpt: "Discover why designing for the smallest screen first leads to cleaner code, better performance, and a superior user experience.",
    date: "April 10, 2026",
    readTime: "6 min read",
    author: "Aron Ke",
    category: "Design Strategy"
  },
  {
    title: "Mastering Tailwind CSS 4: Performance Tips for Senior Devs",
    excerpt: "Unpacking the latest features in Tailwind 4 and how to optimize your bundle size for lightning-fast deployments.",
    date: "April 08, 2026",
    readTime: "8 min read",
    author: "Velorah Team",
    category: "Development"
  },
  {
    title: "The Art of the 'Apple-Level' UI: Spacing, Contrast, and Calm",
    excerpt: "What makes a design feel 'premium'? We break down the subtle details that elevate a simple interface into a high-end product.",
    date: "April 05, 2026",
    readTime: "5 min read",
    author: "Design Lead",
    category: "UI/UX"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <header className="space-y-4 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight">The Journal</h1>
          <p className="text-zinc-400 text-lg">Thoughts on building beautiful, high-performance interfaces for the modern web.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <article 
              key={i} 
              className="group liquid-glass p-8 rounded-[40px] border border-white/5 flex flex-col h-full hover:bg-white/[0.04] transition-all cursor-pointer"
            >
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-sky-400 mb-6">
                <span>{article.category}</span>
                <span className="text-zinc-700">•</span>
                <div className="flex items-center gap-1 text-zinc-500">
                  <Clock className="h-3 w-3" />
                  {article.readTime}
                </div>
              </div>

              <h2 className="text-2xl font-display font-medium leading-tight group-hover:text-white transition-colors mb-4">
                {article.title}
              </h2>

              <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-1">
                {article.excerpt}
              </p>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <User className="h-4 w-4 text-zinc-400" />
                  </div>
                  <span className="text-xs text-zinc-400 font-medium">{article.author}</span>
                </div>
                <div className="p-2 rounded-full bg-white/5 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
