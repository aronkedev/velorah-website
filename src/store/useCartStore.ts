import { create } from 'zustand'

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  material: 'Chronos-Quartz' | 'Obsidian' | 'Sapphire-Glass';
}

export interface CartItemType {
  product: ProductVariant;
  quantity: number;
}

interface CartState {
  items: CartItemType[];
  isDrawerOpen: boolean;
  total: number;
  addItem: (variant: ProductVariant) => void;
  removeItem: (id: string) => void;
  toggleDrawer: (state?: boolean) => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  isDrawerOpen: false,
  total: 0,
  
  addItem: (variant) => set((state) => {
    const existing = state.items.find(i => i.product.id === variant.id);
    const updatedItems = existing 
      ? state.items.map(i => i.product.id === variant.id ? { ...i, quantity: i.quantity + 1 } : i)
      : [...state.items, { product: variant, quantity: 1 }];
    
    return {
      items: updatedItems,
      total: state.total + variant.price,
      isDrawerOpen: true // Auto open cart when adding items
    };
  }),

  removeItem: (id) => set((state) => {
    const existing = state.items.find(i => i.product.id === id);
    if (!existing) return state;

    const updatedItems = state.items.filter(i => i.product.id !== id);
    
    return {
      items: updatedItems,
      total: Math.max(0, state.total - (existing.product.price * existing.quantity))
    };
  }),

  toggleDrawer: (isOpen) => set((state) => ({ 
    isDrawerOpen: isOpen ?? !state.isDrawerOpen 
  })),
}))
