import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { FaSquarePhoneFlip } from 'react-icons/fa6'

export default function Phone() {
  return (
    <Popover>
      <PopoverTrigger>
        <FaSquarePhoneFlip className="icon" />
      </PopoverTrigger>
      <PopoverContent
        side="top"
        sideOffset={15}
        className="bg-yellow h-14 flex justify-center items-center w-fit rounded-3xl gap-x-2"
      >
        <a
          href="tel:+919895765329"
          className="md:text-lg font-bold tracking-wider text-white "
        >
          +919895765329
        </a>
        <FaSquarePhoneFlip className="text-white text-2xl md:text-3xl" />
      </PopoverContent>
    </Popover>
  )
}
