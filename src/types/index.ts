export interface Lead {
  id: string
  name: string
  email: string
  status: 'New' | 'Contacted' | 'Hot' | 'Closed'
  created_at: string
}

export interface Funnel {
  id: string
  title: string
  headline: string
  subheadline: string
  cta_text: string
  user_id: string
  created_at: string
}
