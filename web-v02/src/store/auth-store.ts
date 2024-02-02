import { create } from "zustand";

type Store = {
  isAuthenticate: boolean;
  setIsAuthenticate: (value: boolean) => void;
};

const useAuthStore = create<Store>((set) => ({
  isAuthenticate: false,
  setIsAuthenticate: (value) => set(() => ({ isAuthenticate: value })),
}));

export default useAuthStore;
