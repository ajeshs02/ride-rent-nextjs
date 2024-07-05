import { useAppContext } from '@/context/AppContext'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { useRouter } from 'next/navigation'
import { VEHICLE_CATEGORIES } from '@/components/root/main/vehicle-categories'
import { MdManageSearch } from 'react-icons/md'

export default function CategoryDropdown() {
  const { selectedType, setSelectedType } = useAppContext()
  const router = useRouter()

  const handleSelection = (category: {
    id: number
    icon: string
    name: string
    value: string
  }) => {
    setSelectedType(category)
    router.push('/')
  }

  return (
    <NavigationMenu className="-ml-5">
      <NavigationMenuList>
        <NavigationMenuItem className="!rounded-xl ">
          <NavigationMenuTrigger className={''}>
            <MdManageSearch className={`text-orange mr-1 text-lg `} />
            <span>{selectedType.name}</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="!w-32 flex flex-col p-1  shadow-md  !bg-white gap-1">
            {VEHICLE_CATEGORIES.map((category) => (
              <div
                key={category.id}
                className={`cursor-pointer p-1 px-2 !rounded-xl `}
                onClick={() => handleSelection(category)}
              >
                <span
                  className={`!text-sm whitespace-nowrap hover:text-orange ${
                    selectedType.value === category.value && 'text-orange'
                  }`}
                >
                  {category.name}
                </span>
              </div>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
