export type AdminContextType = {
  isSidebarOpen: boolean
  setSidebarOpen?: (value: boolean) => void
  toggleSidebar: () => void
  isSmallScreen: boolean
}
