import './VehicleDetailsPage.scss'

import ProfileCard from '@/components/card/owner-profile-card/ProfileCard'
import WhyOpt from '@/components/common/why-opt/WhyOpt'
import Description from '@/components/root/vehicle details/description/Description'
import Features from '@/components/root/main/features/Features'
import Specification from '@/components/root/vehicle details/specifications/Specification'
// import Images from '@/components/root/vehicle details/vehicle-images/Images'
import Social from '@/components/general/footer/social/Social'
import { IoLocationOutline } from 'react-icons/io5'
import DetailsSectionClient from '@/components/root/vehicle details/DetailsSectionClient'

export default function page() {
  return (
    <section className="vehicle-details-section wrapper">
      {/* Details heading */}
      <div className="heading-container">
        <h1 className="custom-heading">{`Chevrolet Camaro`}</h1>
        <p>
          Dubai Car Rental Convertible, 4 Seater, Premium Comfort, Heater and
          Ventilated Seats, Advanced OLED Display Technology.
        </p>

        <div className="location-container">
          <div className="location">
            <IoLocationOutline />
          </div>
          <span>Location : </span> Miami St, Destin, FL 32550, USA
        </div>
      </div>

      {/* Vehicle Details */}
      <DetailsSectionClient>
        <section className="details-section">
          <div className="details-container">
            {/* container left */}
            <div className="details">
              {/* Images */}
              {/* <Images /> */}
              {/* Specification */}k
              <Specification />
              {/* Features */}
              <Features />
            </div>

            {/* container right */}
            <div className="right">
              {/* Profile */}
              <ProfileCard />

              {/* Social Media Links */}
              <Social />
            </div>
          </div>
        </section>
      </DetailsSectionClient>

      {/* Description */}
      <Description />

      {/* Why Opt Ride.Rent and Available Locations */}
      <WhyOpt />
    </section>
  )
}
