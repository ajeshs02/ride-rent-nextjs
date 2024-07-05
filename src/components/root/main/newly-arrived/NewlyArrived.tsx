import SubCard from '@/components/card/vehicle-card/sub-card/SubCard'
import CarouselHeading from '@/components/common/carousel-heading/CarouselHeading'
import CarouselWrapper from '@/components/common/carousel-wrapper/CarouselWrapper'
import ViewAllButton from '@/components/general/button/ViewAllButton'
import MotionSection from '@/components/general/framer-motion/MotionSection'

export default function NewlyArrived() {
  return (
    <MotionSection className="wrapper">
      <CarouselHeading heading="Newly arrived" />
      <CarouselWrapper>
        {Array.from({ length: 6 }).map((_, index) => (
          <SubCard key={index} />
        ))}
      </CarouselWrapper>
      <ViewAllButton value={'Cars'} />
    </MotionSection>
  )
}
