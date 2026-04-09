'use server'

import { createClient } from '@/lib/supabase/server'
import { Funnel } from '@/types'
import { revalidatePath } from 'next/cache'

export async function getFunnels() {
  const supabase = await createClient()
  if (!supabase) return []
  
  const { data, error } = await supabase
    .from('funnels')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) throw new Error(error.message)
  return data as Funnel[]
}

export async function createFunnel(formData: FormData) {
  const supabase = await createClient()
  
  const funnelData = {
    title: formData.get('title') as string,
    headline: formData.get('headline') as string,
    subheadline: formData.get('subheadline') as string,
    cta_text: formData.get('cta_text') as string,
  }

  const { error } = await supabase
    .from('funnels')
    .insert([funnelData])

  if (error) throw new Error(error.message)

  revalidatePath('/dashboard/funnels')
}

export async function deleteFunnel(id: string) {
  const supabase = await createClient()
  
  const { error } = await supabase
    .from('funnels')
    .delete()
    .eq('id', id)

  if (error) throw new Error(error.message)

  revalidatePath('/dashboard/funnels')
}
