import { DashboardSidebar } from "@/components/dashboard/Sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full relative bg-[var(--background)] overflow-hidden">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80]">
        <DashboardSidebar />
      </div>
      <main className="md:pl-72 h-full">
        <div className="h-full overflow-y-auto px-8 py-10">
          {children}
        </div>
      </main>
    </div>
  )
}
