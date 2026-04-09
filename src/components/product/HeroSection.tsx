"use client"

import { motion } from "framer-motion"
import { fadeInUpVariant, staggerContainer } from "@/lib/utils"
import { useCartStore, ProductVariant } from "@/store/useCartStore"
import { useState } from "react"
import { WowViewer } from "./WowViewer"

const variants: ProductVariant[] = [
  { id: "v1", name: "Chrono Standard", price: 299, material: "Chronos-Quartz" },
  { id: "v2", name: "Chrono Obsidian", price: 349, material: "Obsidian" },
  { id: "v3", name: "Chrono Sapphire", price: 499, material: "Sapphire-Glass" },
]

export function HeroSection() {
  const { addItem } = useCartStore()
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(variants[0])

  return (
    <section className="relative min-h-screen pt-32 pb-16 px-6 overflow-hidden flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
      {/* Left side: Copy & Configurator */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex-1 w-full relative z-10"
      >
        <motion.div variants={fadeInUpVariant}>
          <p className="text-sm font-medium tracking-widest text-[var(--color-accent)] uppercase mb-6">
            The Next Generation of Time
          </p>
          <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tighter leading-tight mb-8">
            Time.<br />
            <span className="text-[var(--color-foreground)]/60 text-5xl md:text-7xl">Perfected in Glass.</span>
          </h1>
          <p className="max-w-md text-lg text-[var(--color-foreground)]/70 mb-12">
            A revolutionary timepiece carved from solid architectural glass. Absolute precision meets brutalist aesthetic.
          </p>
        </motion.div>

        {/* Configurator Box */}
        <motion.div variants={fadeInUpVariant} className="glass-panel p-6 sm:p-8 rounded-3xl w-full max-w-md bg-[var(--color-surface)]">
          <div className="flex justify-between items-end mb-6 border-b border-[var(--color-border)] pb-6">
            <div>
              <h3 className="font-display text-2xl font-medium">{selectedVariant.name}</h3>
              <p className="text-sm text-[var(--color-foreground)]/60 mt-1">Material: {selectedVariant.material}</p>
            </div>
            <div className="text-3xl font-medium tracking-tight">
              ${selectedVariant.price}
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <p className="text-sm font-medium">Select Material</p>
            <div className="flex gap-3">
              {variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVariant(v)}
                  className={`w-12 h-12 rounded-full border-2 transition-all ${
                    selectedVariant.id === v.id 
                      ? "border-[var(--color-foreground)] scale-110" 
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                  style={{
                    background: v.id === "v1" ? "linear-gradient(135deg, #e2e8f0, #94a3b8)" :
                                v.id === "v2" ? "linear-gradient(135deg, #1e293b, #0f172a)" :
                                "linear-gradient(135deg, #bae6fd, #38bdf8)"
                  }}
                  aria-label={`Select ${v.material}`}
                />
              ))}
            </div>
          </div>

          <button 
            onClick={() => addItem(selectedVariant)}
            className="w-full bg-[var(--color-foreground)] text-[var(--color-background)] rounded-full py-4 font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            Add to Pre-order
          </button>
        </motion.div>
      </motion.div>

      {/* Right side: 3D Viewer */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 w-full mt-10 md:mt-0 relative"
      >
        <WowViewer />
      </motion.div>
    </section>
  )
}
