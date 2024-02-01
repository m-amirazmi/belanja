import { create } from "zustand";

type Store = {
  name: string;
  setPageName: (string: string) => void;
};

const usePageStore = create<Store>((set) => ({
  name: "",
  setPageName: (str) => set(() => ({ name: str })),
}));

export default usePageStore;
