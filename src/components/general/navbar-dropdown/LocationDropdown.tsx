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
import { locations } from '../footer/footer-grid/index'

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
    <NavigationMenu className="-mr-10 max-lg:-mr-5">
      <NavigationMenuList>
        <NavigationMenuItem className="!rounded-xl  ">
          <NavigationMenuTrigger
            className={`${styles['nav-item']} ${styles['nav-items-icon']} border-none outline-none  !w-auto  truncate flex justify-end`}
          >
            <FaLocationDot className={`${styles['nav-items-icon']} `} />
            <span>{selectedLocation.name}</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="!w-44 flex flex-col p-1 bg-white shadow-md !rounded-xl gap-1">
            {locations.map((loc) => (
              <NavigationMenuLink
                key={loc.id}
                className={`${
                  selectedLocation.value === loc.value && 'text-orange'
                } cursor-pointer p-1 px-2 flex gap-x-1 items-center !rounded-xl hover:text-orange`}
                onClick={() => onLocationChange(loc)}
              >
                <FaLocationDot
                  className={`${styles['nav-items-icon']} scale-90`}
                />
                <span className="text-base">{loc.location}</span>
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
