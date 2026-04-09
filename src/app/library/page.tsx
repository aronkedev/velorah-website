import { componentRegistry } from "@/data/components"
import Link from "next/link"
import { ArrowRight, Box } from "lucide-react"

export default async function LibraryCategoryPage({
  params
}: {
  params: { category: string }
}) {
  const { category } = await params
  
  const components = category 
    ? componentRegistry.filter(c => c.category === category)
    : componentRegistry

  return (
    <div className="p-8 md:p-12 space-y-12 max-w-7xl mx-auto">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight capitalize">
          {category ? `${category}s` : 'All Components'}
        </h1>
        <p className="text-zinc-400 max-w-2xl text-lg">
          Explore our collection of premium, mobile-first components designed for modern web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {components.length === 0 ? (
          <div className="col-span-full py-20 text-center space-y-4">
            <div className="h-16 w-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto border border-white/5">
              <Box className="h-8 w-8 text-zinc-500" />
            </div>
            <p className="text-zinc-500 font-medium">Coming soon. We are building more components.</p>
          </div>
        ) : (
          components.map((component) => (
            <Link 
              key={component.id}
              href={`/library/${component.category}/${component.id}`}
              className="group relative flex flex-col bg-white/[0.02] border border-white/5 rounded-[32px] overflow-hidden hover:bg-white/[0.04] transition-all"
            >
              {/* Preview Area (Simplified for now) */}
              <div className="aspect-[16/10] bg-zinc-900 flex items-center justify-center border-b border-white/5 p-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                 <div className="scale-75 origin-center w-full transform">
                    {/* Tiny preview of the actual component if applicable */}
                    <div className="h-2 w-1/2 bg-white/10 rounded mb-2" />
                    <div className="h-2 w-3/4 bg-white/10 rounded mb-2" />
                    <div className="h-2 w-1/4 bg-white/10 rounded" />
                 </div>
              </div>
              
              <div className="p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-medium text-lg">{component.name}</h3>
                  <ArrowRight className="h-4 w-4 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed">
                  {component.description}
                </p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}
