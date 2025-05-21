// store.ts
import { create } from "zustand";

interface GlobalState {
  isActiveNav: boolean;
  setIsActiveNav: (value: boolean) => void;
}

export const useGlobalState = create<GlobalState>((set) => ({
  isActiveNav: false,
  setIsActiveNav: (value: boolean) => set({ isActiveNav: value }),
}));
