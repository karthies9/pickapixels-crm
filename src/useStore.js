
import { create } from "zustand";

export const useStore = create((set) => ({
  leads: [],
  setLeads: (leads) => set({ leads }),
}));
