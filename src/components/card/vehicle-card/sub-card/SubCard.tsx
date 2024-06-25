import './SubCard.scss'
import { FaWhatsappSquare } from 'react-icons/fa'
import { ImMail } from 'react-icons/im'
import { GiCarSeat, GiGearStickPattern, GiSteeringWheel } from 'react-icons/gi'
import { IoLocationOutline, IoSpeedometerOutline } from 'react-icons/io5'
import { BsFuelPumpFill } from 'react-icons/bs'
import { FaRegCalendarDays } from 'react-icons/fa6'
import Image from 'next/image'

const SubCard = () => {
  const whatsappUrl = `https://wa.me/918089808277`

  return (
    <div className="sub_card_container slide-visible ">
      {/* card top */}
      <div className="card_top">
        <figure className="image_box">
          <Image
            width={170}
            height={120}
            src={'/assets/img/sample2.jpg'}
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
          <h3>Toyota Campy SE 350</h3>
        </div>
        {/* features */}
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
            <FaWhatsappSquare className="icon whatsapp" />
            <ImMail className="icon mail" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubCard
