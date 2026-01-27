import { create } from 'zustand';

interface AppState {
  theme: 'dark' | 'light';
  user: { name: string; email: string } | null;
  toggleTheme: () => void;
  setUser: (user: { name: string; email: string } | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  theme: 'dark',
  user: null,
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  setUser: (user) => set({ user }),
}));
