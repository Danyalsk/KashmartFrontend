import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: number | string;
  name: string;
  price: number;
  originalPrice?: number;
  weight?: string;
  origin?: string;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number | string) => void;
  increaseQuantity: (id: number | string) => void;
  decreaseQuantity: (id: number | string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getItemCount: () => number;
  lastOrder: { items: CartItem[]; total: number; date: string } | null;
  placeOrder: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (item) => {
        const { items } = get();
        const existingItem = items.find((i) => i.id === item.id);

        if (existingItem) {
          set({
            items: items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
            ),
          });
        } else {
          set({ items: [...items, item] });
        }
      },
      removeFromCart: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) });
      },
      increaseQuantity: (id) => {
        set({
          items: get().items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        });
      },
      decreaseQuantity: (id) => {
        const { items } = get();
        const item = items.find((i) => i.id === id);
        
        if (item && item.quantity > 1) {
          set({
            items: items.map((i) =>
              i.id === id ? { ...i, quantity: i.quantity - 1 } : i
            ),
          });
        } else {
          set({ items: items.filter((i) => i.id !== id) });
        }
      },
      clearCart: () => set({ items: [] }),
      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0);
      },
      lastOrder: null,
      placeOrder: () => {
        const { items, getTotalPrice } = get();
        const total = getTotalPrice();
        set({
          lastOrder: {
            items: [...items],
            total,
            date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
          },
          items: [], // Clear cart after placing order
        });
      },
    }),
    {
      name: 'kashmart-cart-storage',
    }
  )
);
