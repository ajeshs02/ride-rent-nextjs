'use client'

import styles from './Navbar.module.scss'
import { IoLanguage } from 'react-icons/io5'
import { FaLink } from 'react-icons/fa6'
import { MdManageSearch } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Link from 'next/link'
import Image from 'next/image'

import { useAppContext } from '@/context/AppContext'
import LocationDropdown from '../navbar-dropdown/LocationDropdown'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <header className={`${styles.header} padding main-wrapper`}>
      <nav className={styles['nav-container']}>
        <div className={styles['nav-left']}>
          <button
            aria-label="Hamburger"
            className={styles['hamburger-btn']}
            onClick={toggleSidebar}
          >
            <GiHamburgerMenu className={`${styles['hamburger-icon']}`} />
          </button>
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
            <li>
              <LocationDropdown />
            </li>

            <li>
              <div
                className={`${styles['nav-item']} ${styles['nav-items-icon']}`}
              >
                <FaLink className={`${styles['nav-items-icon']} `} />
                <span>Quick Links</span>
              </div>
            </li>
            <li className={styles.links}>
              <div className={`${styles['nav-item']} `}>
                <MdManageSearch
                  className={`${styles['nav-items-icon']} ${styles.custom}`}
                />
                <span>Cars</span>
              </div>
            </li>
            <li className={styles['list-btn']}>
              <button className={`yellow-gradient default-btn`}>
                List your vehicle for FREE
              </button>
            </li>
          </ul>
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
