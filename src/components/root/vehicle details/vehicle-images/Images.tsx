import './Images.scss'

import imageOne from '../../../assets/img/bg/car.webp'
import imageTwo from '../../../assets/img/bg/charter.webp'

import { swiffyslider } from 'swiffy-slider'
import 'swiffy-slider/css'
import { useEffect } from 'react'
import useIsSmallScreen from '../../../hooks/useIsSmallScreen'

const Images = () => {
  window.swiffyslider = swiffyslider

  const isSmallScreen = useIsSmallScreen(1200)

  useEffect(() => {
    if (window.swiffyslider) {
      window.swiffyslider.init()
    }
  }, [])

  const thumbHover = (imageNumber) => {
    const sliderElement = document.getElementById('image-gallery')
    swiffyslider.slideTo(sliderElement, imageNumber)
  }

  return (
    <div className="images-container">
      <div
        className={`carousel-container swiffy-slider slider-nav-round slider-nav-autoplay slider-nav-autopause ${
          isSmallScreen &&
          'slider-indicators-dark slider-indicators-outside slider-indicators-sm'
        } `}
        id="image-gallery"
        data-slider-nav-autoplay-interval="2500"
      >
        <div className="slider-container ">
          <div className="slide-visible">
            <img id="slide1" src={imageOne} loading="lazy" alt="..." />
          </div>
          <div className="">
            <img id="slide2" src={imageTwo} loading="lazy" alt="..." />
          </div>
        </div>

        <button
          type="button"
          aria-label="carousel navigation button"
          className="slider-nav"
        ></button>
        <button
          type="button"
          aria-label="carousel navigation button"
          className="slider-nav slider-nav-next"
        ></button>

        {isSmallScreen && (
          <ul className="slider-indicators">
            <li className="active"></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        )}
      </div>

      <div
        className="mini-card-grid swiffy-slider slider-nav-outside slider-nav-dark  slider-nav-sm slider-nav-chevron slider-item-show4 slider-item-snapstart slider-item-ratio slider-item-ratio-1x1 slider-nav-visible slider-nav-page slider-nav-outside"
        id="mini-card"
      >
        <ul className="slider-container">
          <li>
            <img
              src={imageOne}
              loading="lazy"
              alt="..."
              onClick={() => thumbHover(0)}
            />
          </li>
          <li>
            <img
              src={imageTwo}
              loading="lazy"
              alt="..."
              onClick={() => thumbHover(1)}
            />
          </li>
          <li>
            <img
              src={imageOne}
              loading="lazy"
              alt="..."
              onClick={() => thumbHover(0)}
            />
          </li>
          <li>
            <img
              src={imageTwo}
              loading="lazy"
              alt="..."
              onClick={() => thumbHover(1)}
            />
          </li>
          <li>
            <img
              src={imageOne}
              loading="lazy"
              alt="..."
              onClick={() => thumbHover(0)}
            />
          </li>
          <li>
            <img
              src={imageTwo}
              loading="lazy"
              alt="..."
              onClick={() => thumbHover(1)}
            />
          </li>
          <li>
            <img
              src={imageOne}
              loading="lazy"
              alt="..."
              onClick={() => thumbHover(0)}
            />
          </li>
          <li>
            <img
              src={imageTwo}
              loading="lazy"
              alt="..."
              onClick={() => thumbHover(1)}
            />
          </li>
          <li>
            <img
              src={imageOne}
              loading="lazy"
              alt="..."
              onClick={() => thumbHover(0)}
            />
          </li>
          <li>
            <img
              src={imageTwo}
              loading="lazy"
              alt="..."
              onClick={() => thumbHover(1)}
            />
          </li>
        </ul>

        <button
          type="button"
          className="slider-nav"
          aria-label="Go previous"
        ></button>
        <button
          type="button"
          className="slider-nav slider-nav-next"
          aria-label="Go next"
        ></button>
      </div>
    </div>
  )
}

export default Images
