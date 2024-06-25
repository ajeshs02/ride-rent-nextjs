import './MainCard.scss'
import { FaWhatsappSquare } from 'react-icons/fa'
import { ImMail } from 'react-icons/im'

import { GiCarSeat, GiGearStickPattern, GiSteeringWheel } from 'react-icons/gi'
import { IoLocationOutline, IoSpeedometerOutline } from 'react-icons/io5'
import { BsFuelPumpFill } from 'react-icons/bs'
import { FaRegCalendarDays } from 'react-icons/fa6'
import Link from 'next/link'
import Image from 'next/image'

const MainCard = () => {
  // 8089808277
  const phoneNumber = '919895765329'
  const message =
    'https://youtu.be/Fqpdu55dFxU?si=Ls-4_XFw4VHf0h6L\n\nHello Adithyan, I would like to connect with you.'
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  return (
    <Link
      href={`/details/${'12345'}`}
      className="car_card_container slide-visible"
    >
      {/* card top */}
      <div className="card_top">
        <figure className="image_box">
          <Image
            width={180}
            height={180}
            src={'/assets/img/sample1.jpg'}
            alt=""
            className="car_image"
          />
          <Image
            width={40}
            height={40}
            src={'/assets/img/sampleprofile.jpg'}
            alt="profile"
            className="profile_icon"
          />
          <span>{'Toyota'}</span>
        </figure>
      </div>

      {/* card bottom */}
      <div className="card_bottom">
        {/* title */}
        <div className="title_box">
          <h2>Toyota Campy SE 350</h2>
        </div>

        {/* vehicle features grid */}
        <div className="features_grid">
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
        <div className="location_box">
          <div className="location">
            <IoLocationOutline /> Germany
          </div>{' '}
          <div className="price">
            <span>$400</span> / Day
          </div>
        </div>
        <div className="bottom_box">
          <div className="rent_now_btn">
            RENT NOW
            <span>Available now for chat</span>
          </div>
          <div className="icons">
            <div
              // href={whatsappUrl}
              aria-label="whatsapp"
              // target="_blank"
              // rel="noopener noreferrer"
            >
              <FaWhatsappSquare className="icon whatsapp" />
            </div>
            <ImMail className="icon mail" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default MainCard
