'use server'

import { createClient } from '@/lib/supabase/server'
import { Lead } from '@/types'
import { revalidatePath } from 'next/cache'

export async function getLeads() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) throw new Error(error.message)
  return data as Lead[]
}

export async function createLead(formData: FormData) {
  const supabase = await createClient()
  
  const leadData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    status: 'New'
  }

  const { error } = await supabase
    .from('leads')
    .insert([leadData])

  if (error) throw new Error(error.message)

  revalidatePath('/dashboard/leads')
}

export async function deleteLead(id: string) {
  const supabase = await createClient()
  
  const { error } = await supabase
    .from('leads')
    .delete()
    .eq('id', id)

  if (error) throw new Error(error.message)

  revalidatePath('/dashboard/leads')
}
