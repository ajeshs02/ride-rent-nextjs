import styles from '../navbar/Navbar.module.scss'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { useAppContext } from '@/context/AppContext'
import { FaLocationDot } from 'react-icons/fa6'
import { locations } from '../footer/footer-grid'

export default function LocationDropdown() {
  const { selectedLocation, setSelectedLocation } = useAppContext()

  const onLocationChange = (loc: {
    id: number
    location: string
    value: string
  }) => {
    setSelectedLocation({ name: loc.location, value: loc.value })
  }

  return (
    <NavigationMenu className="-mr-3">
      <NavigationMenuList>
        <NavigationMenuItem className="!rounded-xl">
          <NavigationMenuTrigger
            className={`${styles['nav-item']} ${styles['nav-items-icon']} border-none outline-none`}
          >
            <FaLocationDot className={`${styles['nav-items-icon']} `} />
            <span>{selectedLocation.name}</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="!w-52 flex flex-col p-1 bg-white shadow-md !rounded-xl gap-1">
            {locations.map((loc) => (
              <NavigationMenuLink
                key={loc.id}
                className={`${
                  selectedLocation.value === loc.value && 'text-orange'
                } cursor-pointer p-1 px-2 !rounded-xl hover:text-orange`}
                onClick={() => onLocationChange(loc)}
              >
                <span className="text-base">{loc.location}</span>
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
