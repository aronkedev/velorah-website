'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Users, 
  Wind, 
  Settings, 
  LogOut, 
  ChevronRight,
  Sparkles
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { signOut } from '@/app/actions/auth'

const routes = [
  {
    label: 'Overview',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: "text-sky-500",
  },
  {
    label: 'Leads',
    icon: Users,
    href: '/dashboard/leads',
    color: "text-violet-500",
  },
  {
    label: 'Funnels',
    icon: Wind,
    href: '/dashboard/funnels',
    color: "text-pink-700",
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/dashboard/settings',
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-black/20 border-r border-white/5 backdrop-blur-xl">
      <div className="px-6 py-4 flex items-center gap-3">
        <div className="h-8 w-8 rounded-xl bg-white flex items-center justify-center">
          <Sparkles className="h-5 w-5 text-black" />
        </div>
        <h1 className="text-xl font-display font-medium tracking-tight">
          Naevox<span className="text-xs ml-1 opacity-50 font-normal">SaaS</span>
        </h1>
      </div>

      <div className="flex-1 px-3 space-y-1">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-white/5 rounded-2xl transition-all",
              pathname === route.href ? "bg-white/10 text-white" : "text-zinc-400"
            )}
          >
            <div className="flex items-center flex-1">
              <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
              {route.label}
            </div>
            {pathname === route.href && (
              <ChevronRight className="h-4 w-4 opacity-50" />
            )}
          </Link>
        ))}
      </div>

      <div className="px-3 pb-4">
        <button
          onClick={() => signOut()}
          className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-red-500/10 hover:text-red-500 rounded-2xl transition-all text-zinc-400"
        >
          <div className="flex items-center flex-1">
            <LogOut className="h-5 w-5 mr-3" />
            Sign Out
          </div>
        </button>
      </div>
    </div>
  )
}
