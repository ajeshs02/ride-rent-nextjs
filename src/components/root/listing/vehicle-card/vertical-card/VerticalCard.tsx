import './VerticalCard.scss'

import { FaWhatsappSquare } from 'react-icons/fa'
import { ImMail } from 'react-icons/im'

import { GiCarSeat, GiGearStickPattern, GiSteeringWheel } from 'react-icons/gi'
import { IoLocationOutline, IoSpeedometerOutline } from 'react-icons/io5'
import { BsFuelPumpFill } from 'react-icons/bs'
import { FaRegCalendarDays, FaSquarePhoneFlip } from 'react-icons/fa6'
import Specifications from '../../specifications/Specifications'
import { FC } from 'react'

const VerticalCard: FC = () => {
  // 8089808277
  const phoneNumber = '919895765329'
  const message =
    'https://youtu.be/Fqpdu55dFxU?si=Ls-4-XFw4VHf0h6L\n\nHello Adithyan, I would like to connect with you.'
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  return (
    <div
      // to={`/details/${'12345'}`}
      className="vertical-card-container slide-visible"
    >
      {/* card top */}
      <div className="card-top">
        <figure className="image-box">
          <img src={'/assets/img/sample1.jpg'} alt="" className="car-image" />
          <img
            src={'/assets/img/sampleprofile.jpg'}
            alt="profile"
            className="profile-icon"
          />
          <span>{'Toyota'}</span>
        </figure>
      </div>

      {/* card bottom */}
      <div className="card-bottom">
        {/* title */}
        <div className="title-box">
          <h2>Toyota Campy SE 350</h2>
        </div>

        {/* features */}
        <p className="features">
          {`Dubai Car Rental: Red Convertible, 4 Seater, Premium Comfort, Heated and Ventilated Seats, Advanced OLED Display Technology.`}
        </p>

        {/* vehicle features grid */}
        <div className="features-grid">
          <div>
            <GiGearStickPattern /> {'Auto'}
          </div>
          <div>
            <IoSpeedometerOutline /> {'10 KM'}
          </div>
          <div>
            <BsFuelPumpFill /> {'Petrol'}
          </div>
          <div>
            <GiSteeringWheel /> {'Power'}
          </div>
          <div>
            <FaRegCalendarDays /> {'2016'}
          </div>
          <div>
            <GiCarSeat /> {'5 Persons'}
          </div>
        </div>

        {/* location and price */}
        <div className="location-box">
          <div className="location">
            <IoLocationOutline /> Germany
          </div>{' '}
          <div className="price">
            <span>$400</span> / Day
          </div>
        </div>

        {/* Specifications */}
        <Specifications />

        <div className="bottom-box">
          <div className="rent-now-btn">
            RENT NOW
            <span>Available now for chat</span>
          </div>
          <div className="icons">
            <a
              href={whatsappUrl}
              aria-label="whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsappSquare className="icon whatsapp" />
            </a>
            <ImMail className="icon mail" />

            {/* phone */}
            <FaSquarePhoneFlip className="icon phone" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerticalCard
