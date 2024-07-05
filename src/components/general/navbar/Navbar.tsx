'use client'

import styles from './Navbar.module.scss'
import { IoLanguage } from 'react-icons/io5'
import { GiHamburgerMenu } from 'react-icons/gi'
import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Link from 'next/link'
import Image from 'next/image'

import LocationDropdown from '../navbar-dropdown/LocationDropdown'
import QuickLinksDropdown from '../navbar-dropdown/QuickLinksDropdown'
import CategoryDropdown from '../navbar-dropdown/CategoryDropdown'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <header className={`${styles.header} padding main-wrapper`}>
      <nav className={styles['nav-container']}>
        <div className={styles['nav-left']}>
          <div className={styles['logo-container']}>
            <Link href={'/'} className={styles['header-logo']}>
              <figure>
                <Image
                  src="/assets/logo/header_logo.webp"
                  alt="ride.rent logo"
                  width={130}
                  height={25}
                  className={styles['logo-img']}
                  quality={100}
                />
                <figcaption>
                  Quick way to get a <span>Ride On Rent</span>
                </figcaption>
              </figure>
            </Link>
          </div>
        </div>
        <div className={styles['nav-items-container']}>
          <ul>
            <li className={styles.language}>
              <div
                className={`${styles['nav-item']} ${styles['nav-items-icon']}`}
              >
                <IoLanguage className={`${styles['nav-items-icon']} `} />{' '}
                <span>English</span>
              </div>
            </li>

            {/* location */}
            <li className={styles.locations}>
              <LocationDropdown />
            </li>

            <li className={styles.links}>
              <QuickLinksDropdown />
            </li>
            <li className={styles.vehicles}>
              <CategoryDropdown />
            </li>
            <li className={styles['list-btn']}>
              <button className={`yellow-gradient default-btn`}>
                List your vehicle for FREE
              </button>
            </li>
          </ul>

          {/* hamburger */}
          <button
            aria-label="Hamburger"
            className={styles['hamburger-btn']}
            onClick={toggleSidebar}
          >
            <GiHamburgerMenu className={`${styles['hamburger-icon']}`} />
          </button>
        </div>

        {/* sidebar */}
        {isSidebarOpen && (
          <div className={styles['black-overlay']} onClick={toggleSidebar} />
        )}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </nav>
    </header>
  )
}

export default Navbar
