import ViewAllButton from '@/components/general/button/ViewAllButton'
import { sampleBrands } from '.'
import './TopBrands.scss'
import BrandHeading from './BrandHeading'
import CarouselWrapper from '@/components/common/carousel-wrapper/CarouselWrapper'
import Image from 'next/image'

const TopBrands = () => {
  return (
    <section className="brands_section wrapper">
      <BrandHeading />

      <CarouselWrapper>
        {sampleBrands.map((brand) => (
          <div key={brand.id} className={`brand-card slide-visible `}>
            <div className="image_box">
              <Image
                width={90}
                height={90}
                src={brand.icon}
                alt={brand.brandName}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className="brand-info">
              <p>{brand.brandName}</p>
              <p>{brand.count} Cars</p>
            </div>
          </div>
        ))}
      </CarouselWrapper>

      <ViewAllButton value={'Brands'} />
    </section>
  )
}
export default TopBrands
