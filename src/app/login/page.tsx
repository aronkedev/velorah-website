'use client'

import { login, signup } from '@/app/actions/auth'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.currentTarget)
    if (isLogin) {
      await login(formData)
    } else {
      await signup(formData)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-[var(--background)]">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="liquid-glass p-8 rounded-[32px] border border-white/10 shadow-2xl backdrop-blur-xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-display font-medium tracking-tight mb-2">
              {isLogin ? 'Welcome back' : 'Create account'}
            </h1>
            <p className="text-muted-foreground text-sm">
              {isLogin
                ? 'Enter your credentials to access your dashboard'
                : 'Start building your next big idea with Velorah'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground ml-1">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="name@company.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder:text-white/20"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground ml-1">
                Password
              </label>
              <input
                name="password"
                type="password"
                required
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder:text-white/20"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={cn(
                "w-full bg-white text-black font-medium py-4 rounded-2xl hover:opacity-90 transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2",
                loading && "cursor-not-allowed"
              )}
            >
              {loading ? (
                <div className="h-5 w-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
              ) : (
                isLogin ? 'Sign In' : 'Get Started'
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-muted-foreground hover:text-white transition-colors"
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : 'Already have an account? Sign in'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
