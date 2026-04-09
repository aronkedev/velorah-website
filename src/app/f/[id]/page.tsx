import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import { createLead } from "@/app/actions/leads"
import { Sparkles, ArrowRight } from "lucide-react"

export default async function PublicFunnelPage({
  params
}: {
  params: { id: string }
}) {
  const supabase = await createClient()
  const { id } = await params
  
  const { data: funnel } = await supabase
    .from('funnels')
    .select('*')
    .eq('id', id)
    .single()

  if (!funnel) {
    return notFound()
  }

  return (
    <div className="min-h-screen bg-[var(--background)] relative flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl w-full relative z-10 text-center space-y-12">
        <div className="space-y-6">
          <div className="h-14 w-14 bg-white/5 rounded-[20px] flex items-center justify-center mx-auto border border-white/5 shadow-2xl">
            <Sparkles className="h-7 w-7 text-sky-400" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight leading-[0.95]">
            {funnel.headline}
          </h1>
          
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {funnel.subheadline}
          </p>
        </div>

        <div className="liquid-glass p-8 md:p-12 rounded-[48px] border border-white/10 shadow-2xl max-w-2xl mx-auto backdrop-blur-3xl">
          <h3 className="text-xl font-display font-medium mb-8">Secure your access today</h3>
          
          <form action={createLead} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                name="name" 
                placeholder="Your name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-sky-500/50 transition-all placeholder:text-zinc-600"
              />
              <input 
                name="email" 
                type="email"
                placeholder="Email address"
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-sky-500/50 transition-all placeholder:text-zinc-600"
              />
            </div>
            
            <button className="w-full bg-white text-black font-semibold py-5 rounded-2xl hover:bg-sky-50 transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
              {funnel.cta_text}
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-center gap-6 text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
              <span>Verified Secure</span>
              <span>•</span>
              <span>No Spam Promise</span>
              <span>•</span>
              <span>Cancel Anytime</span>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="mt-20 opacity-30 flex items-center gap-2">
        <div className="h-4 w-4 bg-white rounded-full" />
        <span className="text-xs font-display tracking-tightest">Powered by Velorah</span>
      </div>
    </div>
  )
}
