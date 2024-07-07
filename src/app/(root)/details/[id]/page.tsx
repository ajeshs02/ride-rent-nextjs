import './VehicleDetailsPage.scss'

import ProfileCard from '@/components/card/owner-profile-card/ProfileCard'
import WhyOpt from '@/components/common/why-opt/WhyOpt'
import Description from '@/components/root/vehicle details/description/Description'

import Specification from '@/components/root/vehicle details/specifications/Specification'
import { IoLocationOutline } from 'react-icons/io5'
import DetailsSectionClient from '@/components/root/vehicle details/DetailsSectionClient'
import Images from '@/components/root/vehicle details/vehicle-images/Images'
import VehicleFeatures from '@/components/root/vehicle details/features/Features'
import MotionDiv from '@/components/general/framer-motion/MotionDiv'

export default function page() {
  return (
    <section className="vehicle-details-section wrapper">
      {/* Details heading */}
      <MotionDiv className="heading-container">
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
      </MotionDiv>

      {/* Vehicle Details */}
      <DetailsSectionClient>
        <section className="details-section">
          <div className="details-container">
            {/* container left */}
            <div className="details">
              {/* Images */}
              <Images />
              {/* Specification */}
              <Specification />
              {/* Features */}
              <VehicleFeatures />
            </div>

            {/* container right */}
            <div className="right">
              {/* Profile */}
              <ProfileCard />
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
