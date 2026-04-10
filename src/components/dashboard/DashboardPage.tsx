import { ReactNode } from "react"
import { Plus } from "lucide-react"

interface DashboardPageProps {
  title: string
  description?: string
  buttonText?: string
  children: ReactNode
}

export function DashboardPage({ title, description, buttonText, children }: DashboardPageProps) {
  return (
    <div className="space-y-8 max-w-6xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-medium tracking-tight">{title}</h1>
          {description && <p className="text-muted-foreground mt-2">{description}</p>}
        </div>
        {buttonText && (
          <button className="bg-white text-black font-medium px-6 py-3 rounded-2xl hover:opacity-90 transition-all flex items-center gap-2">
            <Plus className="h-5 w-5" />
            {buttonText}
          </button>
        )}
      </div>

      <div className="w-full">
        {children}
      </div>
    </div>
  )
}
