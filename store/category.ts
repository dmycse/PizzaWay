import { create } from 'zustand';

type  CategoryState = {
  activeCategoryId: number;
  setActiveCategory: (id: number) => void;
};


export const useCategoryStore = create<CategoryState>()((set) => ({
  activeCategoryId: 1,
  setActiveCategory: (id: number) => set({ activeCategoryId: id }),
}));