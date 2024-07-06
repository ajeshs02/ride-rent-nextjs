'use client'
import './Images.scss'

import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

type CarouselWrapperProps = {
  children: React.ReactNode
  isButtonVisible?: boolean
  customClass?: string
}

const imagedata = [
  { id: 1, alt: 'car image', src: '/assets/img/bg/car.webp' },
  { id: 2, alt: 'charter image', src: '/assets/img/bg/charter.webp' },
]

const Images = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }))
  const subPlugin = useRef(Autoplay({ delay: 1000, stopOnInteraction: false }))

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="images-container ">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className={`w-full max-w-full
      mx-auto md:px-9 `}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={() => plugin.current.play()}
        opts={{
          align: 'start',
        }}
      >
        <CarouselContent className="gap-2 max-w-full sub-container ">
          {imagedata.map((data) => (
            <CarouselItem
              key={data.id}
              className="w-full rounded-[1rem] p-0 max-w-full overflow-hidden"
            >
              <Image
                src={data.src}
                alt={data.alt}
                className="w-full h-full object-cover"
                width={900}
                height={780}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="max-md:hidden ml-[2.8rem] " />
        <CarouselNext className="max-md:hidden mr-[2.8rem]" />
      </Carousel>

      <div className="dots-container">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={`dot ${current - 1 === index ? 'active' : ''}`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Images
