import './Locations.scss'
import { LOCATION_TYPES } from '.'
import ViewAllButton from '@/components/general/button/ViewAllButton'
import Image from 'next/image'
import MotionSection from '@/components/general/framer-motion/MotionSection'

const Location = () => {
  return (
    <MotionSection className="location_section wrapper">
      <h2>
        Find Car Rental Offers In Other
        <span> Locations</span>
      </h2>
      <div className="location_container">
        {LOCATION_TYPES.map((type) => (
          <aside key={type.key} className="location_card">
            <Image
              width={160}
              height={160}
              src={type.icon}
              alt={`${type.name} logo`}
            />
            <figcaption>{type.name}</figcaption>
          </aside>
        ))}
      </div>
      <ViewAllButton value={'Location'} />
    </MotionSection>
  )
}
export default Location
