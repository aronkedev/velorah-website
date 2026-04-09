-- Velorah SaaS Database Schema

-- 1. Create Tables

-- Leads Table
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    status TEXT DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Hot', 'Closed')),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE DEFAULT auth.uid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Funnels Table
CREATE TABLE IF NOT EXISTS public.funnels (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    headline TEXT NOT NULL,
    subheadline TEXT NOT NULL,
    cta_text TEXT DEFAULT 'Submit' NOT NULL,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE DEFAULT auth.uid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Enable Row Level Security (RLS)

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.funnels ENABLE ROW LEVEL SECURITY;

-- 3. Create RLS Policies

-- Leads: Users can only view/manage their own leads
CREATE POLICY "Users can only access their own leads" 
ON public.leads 
FOR ALL 
USING (auth.uid() = user_id);

-- Funnels: Users can only view/manage their own funnels
CREATE POLICY "Users can only access their own funnels" 
ON public.funnels 
FOR ALL 
USING (auth.uid() = user_id);

-- Funnels Public View: Allow public to view any funnel for the public page
CREATE POLICY "Allow public read access to funnels" 
ON public.funnels 
FOR SELECT 
USING (true);

-- Leads Public Insert: Allow public to insert leads (from public funnels)
CREATE POLICY "Allow public to insert leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- 4. Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_leads_user_id ON public.leads(user_id);
CREATE INDEX IF NOT EXISTS idx_funnels_user_id ON public.funnels(user_id);
