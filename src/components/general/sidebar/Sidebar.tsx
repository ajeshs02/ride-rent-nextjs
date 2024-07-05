import Link from 'next/link'
import styles from './Sidebar.module.scss'

import { IoClose } from 'react-icons/io5'
import Image from 'next/image'
import { useAppContext } from '@/context/AppContext'
import { FaLocationDot } from 'react-icons/fa6'
import { SidebarAccordion } from '../sidebar-accordion/SidebarAccordion'

type SidebarProps = {
  isOpen: boolean
  toggleSidebar: () => void
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const { selectedLocation, setSelectedLocation } = useAppContext()

  // const handleQuickL
  return (
    <aside
      className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
    >
      <div className={styles['logo-container']}>
        <Link href="/" className={styles['header-logo']}>
          <figure>
            <Image
              src="/assets/logo/header_logo.webp"
              alt="ride.rent logo"
              width={130}
              height={25}
            />
            <figcaption>
              Quick way to get a <span>Ride On Rent</span>
            </figcaption>
          </figure>
        </Link>

        <button
          aria-label="Sidebar Toggle"
          className={styles['hamburger-close-btn']}
          onClick={toggleSidebar}
        >
          <IoClose className={styles['hamburger-icon']} />
        </button>
      </div>

      {/* sidebar items */}
      <SidebarAccordion toggleSidebar={toggleSidebar} />
    </aside>
  )
}

export default Sidebar
