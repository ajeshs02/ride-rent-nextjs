import AdminNavbar from '@/components/admin/admin-navbar/AdminNavbar'
import AdminSidebar from '@/components/admin/admin-sidebar/AdminSidebar'
import { AdminProvider } from '@/context/AdminContext'
import MainWrapper from './MainWrapper'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AdminProvider>
      <AdminNavbar />
      <AdminSidebar />
      <MainWrapper>{children}</MainWrapper>
    </AdminProvider>
  )
}
