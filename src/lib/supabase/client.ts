import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.warn("Supabase credentials missing. Some features may not work.")
    return null as any // Or handle appropriately in components
  }

  return createBrowserClient(supabaseUrl, supabaseKey)
}
