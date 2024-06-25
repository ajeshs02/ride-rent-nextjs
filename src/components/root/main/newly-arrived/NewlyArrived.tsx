import SubCard from '@/components/card/vehicle-card/sub-card/SubCard'
import CarouselHeading from '@/components/common/carousel-heading/CarouselHeading'
import CarouselWrapper from '@/components/common/carousel-wrapper/CarouselWrapper'

export default function NewlyArrived() {
  return (
    <section className="wrapper">
      <CarouselHeading heading="Newly arrived" />
      <CarouselWrapper>
        {Array.from({ length: 6 }).map((_, index) => (
          <SubCard key={index} />
        ))}
      </CarouselWrapper>
    </section>
  )
}
