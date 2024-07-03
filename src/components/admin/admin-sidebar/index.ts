import { FaRectangleList } from 'react-icons/fa6'
import { IoIosNotifications } from 'react-icons/io'
import { BiSolidCategory } from 'react-icons/bi'
import { PiListStarFill } from 'react-icons/pi'
import { FaLocationDot } from 'react-icons/fa6'
import { RiLinksFill } from 'react-icons/ri'
import { RiAdvertisementFill } from 'react-icons/ri'

export const sidebarContent = [
  { label: 'Live Listings', icon: FaRectangleList, link: '/admin' },
  {
    label: 'New Updates',
    icon: IoIosNotifications,
    link: '/admin/new-updates',
  },
  {
    label: 'Categories',
    icon: BiSolidCategory,
    link: '/admin/manage-categories',
  },
  { label: 'Brands', icon: PiListStarFill, link: '/admin/manage-brands' },
  { label: 'Locations', icon: FaLocationDot, link: '/admin/manage-locations' },
  {
    label: 'Links ',
    icon: RiLinksFill,
    link: '/admin/manage-links',
  },
  { label: 'Ads', icon: RiAdvertisementFill, link: '/admin/manage-ads' },
]
