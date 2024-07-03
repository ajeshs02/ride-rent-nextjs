'use client'

import './AdminSidebar.scss'
import { IoClose } from 'react-icons/io5'
import { sidebarContent } from '.'
import { useAdminContext } from '@/context/AdminContext'
import { usePathname, useRouter } from 'next/navigation'

const AdminSidebar = () => {
  const { isSidebarOpen, toggleSidebar, isSmallScreen } = useAdminContext()

  const pathname = usePathname()
  const router = useRouter()

  const handleClick = (link: string) => {
    router.push(link)
    toggleSidebar()
  }

  return (
    <aside
      className={`admin-sidebar ${!isSmallScreen && 'default'}  ${
        isSidebarOpen ? 'open' : 'closed'
      }`}
    >
      {isSmallScreen && (
        <button
          aria-label="Sidebar Toggle"
          className="hamburger-close-btn "
          onClick={toggleSidebar}
        >
          <IoClose className={`hamburger-icon `} />
        </button>
      )}
      <div className="sidebar-container">
        {sidebarContent.map((item) => {
          const Icon = item.icon

          return (
            <div
              key={item.link}
              onClick={() => handleClick(item.link)}
              className={`sidebar-link ${
                pathname === item.link ? 'active' : ''
              }`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleClick(item.link)}
            >
              <Icon className="icon" />
              <span className="label">{item.label}</span>
            </div>
          )
        })}
      </div>
    </aside>
  )
}
export default AdminSidebar
