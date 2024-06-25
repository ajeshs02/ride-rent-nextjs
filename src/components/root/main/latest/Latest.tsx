import SubCard from '@/components/card/vehicle-card/sub-card/SubCard'
import CarouselHeading from '@/components/common/carousel-heading/CarouselHeading'
import CarouselWrapper from '@/components/common/carousel-wrapper/CarouselWrapper'

export default function Latest() {
  return (
    <section className="wrapper">
      <CarouselHeading heading="Explore the latest" />
      <CarouselWrapper isButtonVisible>
        {Array.from({ length: 6 }).map((_, index) => (
          <SubCard key={index} />
        ))}
      </CarouselWrapper>
    </section>
  )
}
