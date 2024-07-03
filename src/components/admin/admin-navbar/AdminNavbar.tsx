'use client'
import Link from 'next/link'
import './AdminNavbar.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useAdminContext } from '@/context/AdminContext'

const AdminNavbar = () => {
  const { isSidebarOpen, toggleSidebar, isSmallScreen } = useAdminContext()

  return (
    <header className="admin-header padding main-wrapper">
      <nav className="nav-container">
        <div className="nav-left">
          <button
            aria-label="Hamburger"
            className="hamburger-btn"
            onClick={toggleSidebar}
          >
            <GiHamburgerMenu className={` hamburger-icon `} />
          </button>
          <div className="logo-container">
            <Link href={'/admin'} className="header-logo">
              <figure>
                <img
                  src={'/assets/img/logo/header_logo.webp'}
                  className="header-img"
                  alt="Ride Rent Logo"
                />
                <figcaption>
                  Quick way to get a <span>Ride On Rent</span>
                </figcaption>
              </figure>
            </Link>
          </div>
        </div>
        <div className="nav-items-container"></div>

        {/* sidebar */}
        {isSidebarOpen && isSmallScreen && (
          <div className="black-overlay " onClick={toggleSidebar} />
        )}
      </nav>
    </header>
  )
}
export default AdminNavbar
