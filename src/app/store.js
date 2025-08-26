import { create } from "zustand";

export const useVars = create((set) => ({
    active: "dashboard",
    setActive: (tab) => set((state) => ({ active: tab })),
    open: false,
    setOpen: (boolean) => set((state) => ({ open: boolean })),
}));
