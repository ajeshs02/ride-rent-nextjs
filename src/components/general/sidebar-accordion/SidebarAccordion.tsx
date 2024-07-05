'use client'
import { VEHICLE_CATEGORIES } from '@/components/root/main/vehicle-categories'
import './SidebarAccordion.scss'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useAppContext } from '@/context/AppContext'
import { useRouter } from 'next/navigation'
import { FaLink } from 'react-icons/fa6'
import { GiSteeringWheel } from 'react-icons/gi'
import { IoLanguage } from 'react-icons/io5'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

const linksData = [
  { id: 1, name: 'Privacy Policy', link: '/privacy-policy' },
  { id: 2, name: 'Terms & Conditions', link: '/terms-condition' },
  { id: 3, name: 'FAQ', link: '/faq' },
  { id: 4, name: 'About Us', link: '/about-us' },
]

const languagesData = [
  { id: 1, name: 'English', value: 'english' },
  { id: 2, name: 'Arab', value: 'arabic' },
]

type SidebarAccordionType = {
  toggleSidebar: () => void
}

export function SidebarAccordion({ toggleSidebar }: SidebarAccordionType) {
  const router = useRouter()
  const { selectedType, setSelectedType } = useAppContext()

  // quick links handler
  const linkHandler = (link: { id: number; name: string; link: string }) => {
    router.push(link.link)
    toggleSidebar()
  }

  // language handler
  const languageHandler = (language: {
    id: number
    name: string
    value: string
  }) => {}

  return (
    <Accordion
      defaultValue="item-1"
      type="single"
      collapsible
      className="w-[95%] mx-auto mt-5"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="no-underline hover:no-underline ">
          <div className="flex items-center">
            <FaLink className={`text-orange mr-3 text-lg `} />
            Quick Links
          </div>
        </AccordionTrigger>
        <AccordionContent className="pl-2 flex flex-col gap-y-1 bg-slate-50 p-1 rounded-xl">
          {linksData.map((link) => (
            <div
              onClick={() => {
                router.push(link.link)
                toggleSidebar()
              }}
              key={link.id}
              className="accordion-item text-base cursor-pointer hover:text-yellow hover:underline flex items-center gap-2"
            >
              <MdKeyboardDoubleArrowRight />
              {link.name}
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>

      {/* vehicle categories */}
      <AccordionItem value="item-2">
        <AccordionTrigger className="no-underline hover:no-underline ">
          <div className="flex items-center">
            <GiSteeringWheel className={'text-orange mr-3 text-lg '} />
            Vehicle Category
          </div>
        </AccordionTrigger>
        <AccordionContent className="pl-2 flex flex-col gap-y-1 bg-slate-50 p-1 rounded-xl">
          {VEHICLE_CATEGORIES.map((category) => (
            <div
              onClick={() => {
                setSelectedType({ name: category.name, value: category.value })
                toggleSidebar()
              }}
              key={category.id}
              className="accordion-item text-base cursor-pointer hover:text-yellow hover:underline flex items-center gap-2"
            >
              <MdKeyboardDoubleArrowRight />
              {category.name}
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>

      {/* language */}
      <AccordionItem value="item-3">
        <AccordionTrigger className="no-underline hover:no-underline ">
          <div className="flex items-center">
            <IoLanguage className={'text-orange mr-3 text-lg '} />
            Language
          </div>
        </AccordionTrigger>
        <AccordionContent className="pl-2 flex flex-col gap-y-1 bg-slate-50 p-1 rounded-xl">
          {languagesData.map((lang) => (
            <div
              onClick={() => languageHandler(lang)}
              key={lang.id}
              className="accordion-item text-base cursor-pointer hover:text-yellow hover:underline flex items-center gap-2"
            >
              <MdKeyboardDoubleArrowRight />
              {lang.name}
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
