import { getFunnels, deleteFunnel, createFunnel } from "@/app/actions/funnels"
import { 
  Plus, 
  Settings, 
  Trash2, 
  ExternalLink, 
  Layout, 
  Sparkles
} from "lucide-react"
import Link from "next/link"

export default async function FunnelsPage() {
  const funnels = await getFunnels()

  return (
    <div className="space-y-8 max-w-6xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-medium tracking-tight">Campaign Funnels</h1>
          <p className="text-muted-foreground mt-2">Deploy high-converting landing pages in seconds.</p>
        </div>
        <button className="bg-white text-black font-medium px-6 py-3 rounded-2xl hover:opacity-90 transition-all flex items-center gap-2">
          <Plus className="h-5 w-5" />
          New Funnel
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {funnels.length === 0 ? (
          <div className="col-span-full liquid-glass p-20 rounded-[40px] border border-white/5 text-center">
            <div className="h-20 w-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Layout className="h-10 w-10 text-zinc-500" />
            </div>
            <h3 className="text-xl font-display font-medium mb-2">No Funnels Yet</h3>
            <p className="text-zinc-500 max-w-xs mx-auto mb-8">
              Create your first campaign funnel to start capturing leads for your business.
            </p>
            <button className="bg-white text-black font-medium px-8 py-3 rounded-2xl hover:opacity-90 transition-all">
              Launch Campaign
            </button>
          </div>
        ) : (
          funnels.map((funnel) => (
            <div key={funnel.id} className="liquid-glass p-6 rounded-[32px] border border-white/5 flex flex-col group relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 h-32 w-32 bg-sky-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5">
                  <Sparkles className="h-6 w-6 text-sky-400" />
                </div>
                <div className="flex items-center gap-1">
                  <Link 
                    href={`/f/${funnel.id}`} 
                    target="_blank"
                    className="p-2 hover:bg-white/10 rounded-xl transition-colors text-zinc-400 hover:text-white"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                  <button className="p-2 hover:bg-white/10 rounded-xl transition-colors text-zinc-400 hover:text-white">
                    <Settings className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="flex-1 relative z-10">
                <h3 className="text-xl font-display font-medium mb-2">{funnel.title}</h3>
                <p className="text-sm text-zinc-400 line-clamp-2 mb-6">
                  {funnel.headline}
                </p>
                <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-zinc-500">
                  <div className="flex items-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live
                  </div>
                  <span>•</span>
                  <div>0 Leads</div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 relative z-10">
                <form action={async () => {
                  'use server'
                  await deleteFunnel(funnel.id)
                }}>
                  <button className="w-full text-zinc-500 hover:text-red-400 flex items-center justify-center gap-2 text-sm font-medium transition-colors">
                    <Trash2 className="h-4 w-4" />
                    Archive Campaign
                  </button>
                </form>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
