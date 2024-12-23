import {create} from "zustand";

type AppUiState = {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}

export const useAppUi = create<AppUiState>()(set => ({
  sidebarOpen: false,
  setSidebarOpen: (value: boolean) => set({sidebarOpen: value}),
}))
