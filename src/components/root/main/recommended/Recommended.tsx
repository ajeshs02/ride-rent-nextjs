import RecommendedCard from '@/components/card/vehicle-card/recommended-card/RecommendedCard'
import './Recommended.scss'

import CarouselWrapper from '@/components/common/carousel-wrapper/CarouselWrapper'
import ViewAllButton from '@/components/general/button/ViewAllButton'

const Recommended = () => {
  return (
    <section className="recommended-section wrapper">
      <h2>Recommended Car Rental deals</h2>

      <CarouselWrapper
        isButtonVisible={false}
        customClass="
         max-w-fit w-full !overflow-hidden"
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <RecommendedCard key={index} />
        ))}
      </CarouselWrapper>

      <ViewAllButton value={'Cars'} />
    </section>
  )
}
export default Recommended
