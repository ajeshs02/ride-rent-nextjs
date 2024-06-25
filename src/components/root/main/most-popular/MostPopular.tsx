import './MostPopular.scss'

import ClientHeading from './MostPopularHeading'
import ViewAllButton from '@/components/general/button/ViewAllButton'
import MainCard from '@/components/card/vehicle-card/main-card/MainCard'

import CarouselWrapper from '@/components/common/carousel-wrapper/CarouselWrapper'

const MostPopular = () => {
  return (
    <section className="popular-section wrapper">
      <ClientHeading />
      <CarouselWrapper>
        {Array.from({ length: 6 }).map((_, index) => (
          <MainCard key={index} />
        ))}
      </CarouselWrapper>
      <ViewAllButton value={'Cars'} />
    </section>
  )
}
export default MostPopular
