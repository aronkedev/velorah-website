"use client"

import { useCartStore } from "@/store/useCartStore"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingBag, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { toggleDrawer, items } = useCartStore()

  const cartItemCount = items.reduce((acc, item) => acc + item.quantity, 0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled ? "py-4 glass-panel border-b border-[var(--color-border)]" : "py-6 bg-transparent border-transparent"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-8">
            <a href="#" className="text-xl tracking-tighter font-display font-medium text-[var(--color-foreground)]">
              Chrono Glass
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#materials" className="text-sm font-medium text-[var(--color-foreground)]/70 hover:text-[var(--color-foreground)] transition-colors">Materials</a>
              <a href="#features" className="text-sm font-medium text-[var(--color-foreground)]/70 hover:text-[var(--color-foreground)] transition-colors">The Engineering</a>
              <a href="#specs" className="text-sm font-medium text-[var(--color-foreground)]/70 hover:text-[var(--color-foreground)] transition-colors">Specifications</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => toggleDrawer(true)}
              className="relative p-2 text-[var(--color-foreground)] hover:bg-[var(--color-surface)] rounded-full transition-colors group"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-105 transition-transform" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[var(--color-foreground)] text-[var(--color-background)] text-[10px] font-bold flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2 text-[var(--color-foreground)]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 pt-24 px-6 glass-panel md:hidden"
          >
            <nav className="flex flex-col gap-6 text-2xl font-display mt-10">
              <a href="#materials" onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--color-foreground)]">Materials</a>
              <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--color-foreground)]">The Engineering</a>
              <a href="#specs" onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--color-foreground)]">Specifications</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
