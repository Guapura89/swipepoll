import { create } from "zustand/index";

interface AuthState {
  user: any | null;
}

interface AuthActions {
  setUser: (user: any) => void;
}

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
  user: null,
  setUser: (user) => set({ user })
}));
