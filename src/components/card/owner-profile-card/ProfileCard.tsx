import './ProfileCard.scss'
import { MdVerifiedUser } from 'react-icons/md'
import { FaWhatsappSquare } from 'react-icons/fa'
import { ImMail } from 'react-icons/im'
import { FaSquarePhoneFlip } from 'react-icons/fa6'
import ProfileSpecification from '@/components/root/vehicle details/profile-specifications/ProfileSpecification'

const ProfileCard = () => {
  const phoneNumber = '919895765329'
  const message =
    'https://youtu.be/Fqpdu55dFxU?si=Ls-4_XFw4VHf0h6L\n\nHello Adithyan, I would like to connect with you.'
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  return (
    <div className="profile-card">
      <div className="heading">
        <h2 className="custom-heading">Listing Owner Details</h2>
      </div>

      {/* profile */}
      <div className="top">
        <div className="profile-details">
          <div className="profile">
            <img src="/profile sample.jpg" alt="profile image" loading="lazy" />
          </div>
          <div>
            <p>Brooklyn Cars</p>
            <div className="verified">
              <MdVerifiedUser className="icon" />
              <span>Verified Vendor</span>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <ProfileSpecification />

      {/* price and rent now button */}
      <div className="bottom">
        <div className="price">
          <span>$400</span> / Day
        </div>

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

            {/* phone icon */}
            <FaSquarePhoneFlip className="icon" />
          </div>
        </div>
      </div>

      {/* Availability */}
      {/* <div className="availability">
        <SiTicktick className="icon" />
        <p>
          Availability <span>Verified</span>
        </p>
      </div> */}
    </div>
  )
}
export default ProfileCard
