import './Landing.scss'
import { FaRegThumbsUp } from 'react-icons/fa'
import VehicleCategories from '../vehicle-categories/VehicleCategories'
import CustomDiv from './CustomDiv'

const Landing = () => {
  return (
    <section className="landing-section  ">
      <div className="landing-top">
        {/* mobile visible button */}
        <button className="yellow-gradient default-btn list-btn">
          List your vehicle for FREE
        </button>
        {/* landing top */}
        {/* wrapping with custom child component div for context usage */}
        <CustomDiv>
          <div className={`landing-text-container`}>
            <p className="trust">
              <FaRegThumbsUp />
              Most Trusted Car Rental Services In Dubai!
            </p>
            <div>
              <p>Best Prices & No Commission</p>
              <p>More than 1000+ options to choose from...</p>
            </div>
            <button id="view-all-cars" className="default-btn yellow-gradient">
              View all cars
            </button>
          </div>
        </CustomDiv>
        {/* Vehicle categories component */}
        <VehicleCategories />
      </div>
      <div className="landing-bottom">
        <p>
          <span>Ride.Rent</span> ensures that you have access to the best and
          <span> most affordable car rental services in Dubai. </span>
          Take advantage of our exceptional offers on car rentals throughout
          Dubai, with Ride On Rent, each car is well maintained and pre-serviced
          for efficient performance. <br />
          For your peace of mind, all vehicles are insured and come with
          dedicated agent assistance.
        </p>

        <div>
          <p>Find cars near you</p>
          <span> Dubai</span>
        </div>
      </div>
    </section>
  )
}
export default Landing
