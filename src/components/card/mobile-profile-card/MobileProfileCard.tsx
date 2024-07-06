import './MobileProfileCard.scss'

import { MdOutlineExpandCircleDown, MdVerifiedUser } from 'react-icons/md'
import { FaWhatsappSquare } from 'react-icons/fa'
import { ImMail } from 'react-icons/im'
import { FaSquarePhoneFlip } from 'react-icons/fa6'
import { SiTicktick } from 'react-icons/si'
import { useState } from 'react'
import ProfileSpecification from '@/components/root/vehicle details/profile-specifications/ProfileSpecification'
import Phone from '@/components/common/phone/Phone'

const MobileProfileCard = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  // Toggle function
  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  // Mouse leave toggle function
  const handleMouseLeave = () => {
    if (!isExpanded) return
    setIsExpanded(false)
  }

  const phoneNumber = '919895765329'
  const message =
    'https://youtu.be/Fqpdu55dFxU?si=Ls-4_XFw4VHf0h6L\n\nHello Adithyan, I would like to connect with you.'
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className={`mobile-profile-card ${isExpanded ? 'expanded-view' : ''}`}
    >
      <div className="heading top-heading">
        <h2 className="custom-heading">Listing Owner Details</h2>
        <button className="expand" onClick={handleToggle}>
          {isExpanded ? 'show less' : 'show more'}{' '}
          <MdOutlineExpandCircleDown className="icon" />
        </button>
      </div>
      {/* profile */}
      <div className="top">
        {/* left */}
        <div className="profile-details">
          <div className="profile">
            <img src="/profile sample.jpg" alt="profile image" loading="lazy" />
          </div>
          <div className="info">
            <p>Brooklyn Cars</p>
            <div className="verified">
              <MdVerifiedUser className="icon" />
              <span>Verified Vendor</span>
            </div>
          </div>
        </div>

        {/* rent now button */}
        <div className="profile-right">
          <div className="contact-container">
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

              {/* phone icon */}
              <Phone />
            </div>
          </div>
        </div>

        {/* price */}
        <div className="price">
          <span>$400</span> / Day
        </div>
      </div>

      {/* Specifications */}
      <ProfileSpecification />

      {/* price and rent now button */}

      {/* Availability */}
      <div className="availability">
        <SiTicktick className="icon" />
        <p>
          Availability <span>Verified</span>
        </p>
      </div>
    </div>
  )
}

export default MobileProfileCard
