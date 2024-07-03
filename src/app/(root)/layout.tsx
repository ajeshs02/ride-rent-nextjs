import Footer from '@/components/general/footer/Footer'
import Navbar from '@/components/general/navbar/Navbar'
import { AppProvider } from '@/context/AppContext'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AppProvider>
      <Navbar />
      <main className="mt-[4.85rem]">{children}</main>
      <Footer />
    </AppProvider>
  )
}
