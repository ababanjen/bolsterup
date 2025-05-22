// store.ts
import { create } from "zustand";
import { ProjectsTypes, CategoryTypes } from "../utils/types/types";
import { generateProjectsObj,generateCategories } from "../utils/helpers";

interface GlobalState {
  isActiveNav: boolean;
  setIsActiveNav: (value: boolean) => void;
  projects: ProjectsTypes[];
  categories: CategoryTypes[];
  // products: 
}

export const useGlobalState = create<GlobalState>((set) => ({
  isActiveNav: false,
  setIsActiveNav: (value: boolean) => set({ isActiveNav: value }),
  projects: generateProjectsObj(10),
  categories:generateCategories(5)
}));
