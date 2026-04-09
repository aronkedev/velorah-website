"use client"

import { useCartStore } from "@/store/useCartStore"
import { motion, AnimatePresence } from "framer-motion"
import { X, Minus, Plus, Trash2 } from "lucide-react"

export function CartDrawer() {
  const { items, isDrawerOpen, toggleDrawer, addItem, removeItem, total } = useCartStore()

  // Handler for direct increment/decrement isn't explicitly in the store yet, 
  // but addItem handles +1 and we can use a basic implementation here
  const handleCheckout = () => {
    alert("This is a portfolio project. E-commerce checkout would trigger here.")
  }

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => toggleDrawer(false)}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[var(--color-background)] border-l border-[var(--color-border)] z-50 flex flex-col p-6 shadow-2xl overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-display tracking-tight text-[var(--color-foreground)]">Your Cart</h2>
              <button 
                onClick={() => toggleDrawer(false)}
                className="p-2 hover:bg-[var(--color-surface)] rounded-full transition-colors text-[var(--color-foreground)]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 flex flex-col gap-6">
              {items.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-[var(--color-foreground)]/50">
                  <p>Your bag is currently empty.</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.product.id} className="flex gap-4 items-center bg-[var(--color-surface)] p-4 rounded-xl border border-[var(--color-border)]">
                    <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-lg flex-shrink-0 border border-white/5" />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm text-[var(--color-foreground)]">{item.product.name}</h4>
                      <p className="text-xs text-[var(--color-foreground)]/60 mt-1">{item.product.material}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="text-sm font-medium text-[var(--color-foreground)]">${item.product.price}</div>
                        
                        <div className="flex items-center gap-3 glass-panel rounded-full px-2 py-1">
                          {/* Removing item completely on trash for simplicity in this demo */}
                          <div className="text-xs font-medium text-[var(--color-foreground)] px-2">Qty: {item.quantity}</div>
                          <button onClick={() => removeItem(item.product.id)} className="p-1 hover:text-red-400 text-[var(--color-foreground)]/70 transition-colors">
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="mt-8 pt-6 border-t border-[var(--color-border)] space-y-4 relative z-10 glass-panel p-4 rounded-xl">
                <div className="flex justify-between text-sm text-[var(--color-foreground)]">
                  <span>Subtotal</span>
                  <span className="font-medium">${total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-[var(--color-foreground)]">
                  <span>Shipping</span>
                  <span className="font-medium">Calculated at checkout</span>
                </div>
                
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-[var(--color-foreground)] text-[var(--color-background)] font-medium rounded-full py-4 mt-4 hover:opacity-90 transition-opacity"
                >
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
