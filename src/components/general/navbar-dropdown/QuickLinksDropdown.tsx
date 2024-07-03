import styles from '../navbar/Navbar.module.scss'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaLink } from 'react-icons/fa6'

const linksData = [
  { id: 1, name: 'Privacy Policy', link: '/privacy-policy' },
  { id: 2, name: 'Terms & Conditions', link: '/terms-condition' },
  { id: 3, name: 'FAQ', link: '/faq' },
  { id: 4, name: 'About Us', link: '/about-us' },
]

export default function QuickLinksDropdown() {
  const [currentPage, setCurrentPage] = useState('')

  const pathname = usePathname()

  useEffect(() => {
    const currentPageName =
      linksData.find((item) => item.link === pathname)?.name || ''
    setCurrentPage(currentPageName)
  }, [pathname])
  return (
    <NavigationMenu className="-ml-2">
      <NavigationMenuList>
        <NavigationMenuItem className="!rounded-xl ">
          <NavigationMenuTrigger className={''}>
            <FaLink className={`text-orange mr-1 text-lg `} />
            <span>Quick Links</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="!w-40 flex flex-col p-1  shadow-md  !bg-white gap-1">
            {linksData.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className={`cursor-pointer p-1 px-2 !rounded-xl `}
              >
                <span
                  className={`!text-sm whitespace-nowrap hover:text-orange ${
                    currentPage === item.name && 'text-orange'
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
