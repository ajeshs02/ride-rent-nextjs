import { GoArrowRight } from 'react-icons/go'
import './ViewAllButton.scss'
import Link from 'next/link'

const ViewAllButton = ({
  value,
  link = '/',
}: {
  value: string
  link?: string
}) => {
  return (
    <Link href={link} className="common_view_all_btn">
      View All {value} <GoArrowRight />
    </Link>
  )
}
export default ViewAllButton
