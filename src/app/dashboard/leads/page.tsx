import { getLeads, deleteLead, createLead } from "@/app/actions/leads"
import { 
  Trash2, 
  Mail, 
  User, 
  Calendar,
  MoreVertical
} from "lucide-react"
import { DashboardPage } from "@/components/dashboard/DashboardPage"

export default async function LeadsPage() {
  const leads = await getLeads()

  return (
    <DashboardPage 
      title="Leads Management" 
      description="Manage and track your potential customers."
      buttonText="Add Lead"
    >

      <div className="liquid-glass rounded-[40px] border border-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.02]">
                <th className="px-8 py-5 text-zinc-400 text-xs font-medium uppercase tracking-wider">Name</th>
                <th className="px-8 py-5 text-zinc-400 text-xs font-medium uppercase tracking-wider">Email</th>
                <th className="px-8 py-5 text-zinc-400 text-xs font-medium uppercase tracking-wider">Status</th>
                <th className="px-8 py-5 text-zinc-400 text-xs font-medium uppercase tracking-wider">Created</th>
                <th className="px-8 py-5 text-zinc-400 text-xs font-medium uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {leads.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-8 py-20 text-center text-zinc-500">
                    No leads found. Start by acquiring them through your funnels.
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead.id} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                          <User className="h-5 w-5 text-zinc-400" />
                        </div>
                        <span className="font-medium text-sm">{lead.name}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2 text-zinc-400 text-sm">
                        <Mail className="h-4 w-4" />
                        {lead.email}
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                        lead.status === 'Hot' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' :
                        lead.status === 'New' ? 'bg-sky-500/10 text-sky-400 border-sky-500/20' :
                        'bg-zinc-500/10 text-zinc-400 border-zinc-500/20'
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2 text-zinc-500 text-xs">
                        <Calendar className="h-4 w-4" />
                        {new Date(lead.created_at).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-white/10 rounded-xl transition-colors text-zinc-400 hover:text-white">
                          <MoreVertical className="h-5 w-5" />
                        </button>
                        <form action={deleteLead.bind(null, lead.id)}>
                          <button className="p-2 hover:bg-red-500/10 rounded-xl transition-colors text-zinc-400 hover:text-red-400">
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardPage>
  )
}
