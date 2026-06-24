// store/cartStore.ts
import { create } from 'zustand';

interface CartItem {
  id: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (id: string) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  getTotalItems: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addItem: (id) => {
    const existing = get().items.find(item => item.id === id);
    if (existing) {
      set({ items: get().items.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item) });
    } else {
      set({ items: [...get().items, { id, quantity: 1 }] });
    }
  },
  increment: (id) => {
    set({ items: get().items.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item) });
  },
  decrement: (id) => {
    set({ items: get().items.map(item => item.id === id ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item) });
  },
  getTotalItems: () => get().items.reduce((acc, item) => acc + item.quantity, 0),
}));