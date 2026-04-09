import { createClient } from "@/lib/supabase/server"
import { motion } from "framer-motion"
import { 
  Users, 
  Target, 
  TrendingUp, 
  ArrowUpRight 
} from "lucide-react"

export default async function DashboardPage() {
  const supabase = await createClient()
  
  // Real data fetching would happen here
  // For the V1 prototype, we'll fetch from the leads table to get a count
  const { count: leadsCount } = await supabase
    .from('leads')
    .select('*', { count: 'exact', head: true })

  const stats = [
    {
      label: "Total Leads",
      value: leadsCount || 0,
      icon: Users,
      trend: "+12.5%",
      description: "Last 30 days"
    },
    {
      label: "Active Funnels",
      value: "4",
      icon: Target,
      trend: "+2",
      description: "Currently live"
    },
    {
      label: "Est. Revenue",
      value: "$12,450",
      icon: TrendingUp,
      trend: "+8.2%",
      description: "From active campaigns"
    }
  ]

  return (
    <div className="space-y-8 max-w-6xl">
      <div>
        <h1 className="text-4xl font-display font-medium tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-2">See how your campaigns are performing today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div 
            key={i}
            className="liquid-glass p-6 rounded-[32px] border border-white/5 space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 bg-white/5 rounded-2xl">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="flex items-center gap-1 text-emerald-400 text-sm font-medium">
                {stat.trend}
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
            <div>
              <p className="text-zinc-400 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              <h3 className="text-3xl font-display font-medium mt-1">{stat.value}</h3>
              <p className="text-zinc-500 text-xs mt-2">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Secondary Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="liquid-glass p-8 rounded-[40px] border border-white/5">
          <h3 className="text-xl font-display font-medium mb-6">Recent Activity</h3>
          <div className="space-y-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                  <div className="h-2 w-2 rounded-full bg-sky-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium group-hover:text-sky-400 transition-colors">New lead acquired via "Velorah Glass" funnel</p>
                  <p className="text-xs text-zinc-500 mt-0.5">2 hours ago • lead: sarah@example.com</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="liquid-glass p-8 rounded-[40px] border border-white/5 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-display font-medium mb-2">Grow your business</h3>
            <p className="text-sm text-zinc-400 mb-8">Ready to launch a new campaign? Use our builder to go live in minutes.</p>
          </div>
          <div className="space-y-3">
            <button className="w-full bg-white text-black font-medium py-4 rounded-2xl hover:opacity-90 transition-all flex items-center justify-center gap-2">
              Create New Funnel
            </button>
            <button className="w-full bg-white/5 border border-white/10 font-medium py-4 rounded-2xl hover:bg-white/10 transition-all">
              Invite Team
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
