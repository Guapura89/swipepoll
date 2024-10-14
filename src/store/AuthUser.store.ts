import { create } from "zustand/index";

interface AuthState {
  accessToken: string | null;
  user: any | null;
  setAccessToken: (token: string) => void;
  setUser: (user: any) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  user: null,
  setAccessToken: (token) => set({ accessToken: token }),
  setUser: (user) => set({ user })
}));
