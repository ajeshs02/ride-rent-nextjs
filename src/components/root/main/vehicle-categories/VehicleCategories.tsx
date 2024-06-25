'use client'

import './VehicleCategories.scss'
import React, { useRef, useState } from 'react'
import { VEHICLE_CATEGORIES } from '.'
import { useAppContext } from '@/context/AppContext'
import Image from 'next/image'

import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent } from '@/components/ui/carousel'

const VehicleCategories = () => {
  const { selectedType, setSelectedType } = useAppContext()
  const [selectedCard, setSelectedCard] = useState(null)

  const plugin = useRef(Autoplay({ delay: 1600, stopOnInteraction: false }))

  return (
    <div className="landing-container">
      <Carousel
        plugins={[plugin.current]}
        className="w-full "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={() => plugin.current.play()}
      >
        <CarouselContent className="gap-2">
          {VEHICLE_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className={`vehicle_category_card ${
                selectedCard === category.id ? 'selected' : ''
              }`}
              onClick={() => {
                setSelectedType(category)
                // handleCardSelect(category.id)
              }}
            >
              <div
                className={`category_icon_container ${
                  selectedType.value === category.value ? 'yellow-gradient' : ''
                }`}
              >
                <Image
                  src={category.icon}
                  width={21}
                  height={10}
                  alt={`${category.name} Icon`}
                  className={`vehicle_category_logo ${
                    category.value === 'sports_car' && 'scale-125'
                  } `}
                />
              </div>
              <p>{category.name}</p>
            </div>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default VehicleCategories
