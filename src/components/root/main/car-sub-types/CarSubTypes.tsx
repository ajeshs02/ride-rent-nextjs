import './CarSubTypes.scss'
import { carSubTypesData } from '.'
import CarouselWrapper from '@/components/common/carousel-wrapper/CarouselWrapper'
import ViewAllButton from '@/components/general/button/ViewAllButton'
import MotionSection from '@/components/general/framer-motion/MotionSection'
import Image from 'next/image'

export default function CarSubTypes() {
  return (
    <MotionSection className="subtypes_section wrapper">
      <h2>Most Popular Car types</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        molestias modi dolorem, possimus accusantium{' '}
      </p>

      <CarouselWrapper isButtonVisible={false}>
        {carSubTypesData.map((data) => (
          <div key={data.id} className={'subtype-card'}>
            <div className="image-box">
              <Image width={90} height={90} src={data.icon} alt={data.label} />
            </div>
            <div className="subtype-info">
              <p className="label">{data.label}</p>
              <p className="count">{data.count} Cars</p>
            </div>
          </div>
        ))}
      </CarouselWrapper>

      <ViewAllButton value={'Cars'} />
    </MotionSection>
  )
}
