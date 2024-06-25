import Image from 'next/image'
import FooterGrid from './footer-grid/FooterGrid'
import './Footer.scss'
import Social from './social/Social'
import { FaRegCopyright } from 'react-icons/fa6'
const Footer = () => {
  return (
    <footer className="">
      <FooterGrid />
      <Social />

      {/* logo */}
      <div className="footer-logo-container">
        <div className="header-logo">
          <figure>
            <Image
              src={'/assets/img/logo/header_logo_white.webp'}
              width={100}
              height={40}
              className="header-img"
              alt="Ride Rent Logo"
            />
            <figcaption>
              Quick way to get a <span>Ride On Rent</span>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="bottom-container">
        <p>
          Get unbeatable deals on car rentals, chauffeur services, and car with
          driver, alongside bike, yacht, and private Charter/ helicopter
          rentals. Our offerings span a range of options, from budget-friendly
          to premium rentals, in cars, bicycles, motorbikes, speed boats,
          yachts, and charter planes. Operating from Dubai, our services extend
          to selected cities worldwide. Experience convenience and luxury with
          Ride.Rent.com
          <br />
          <br />
          All trademarks utilized within this portal for representation are the
          property fo their respective owners
          <br />
          <br />
          Ride.Rent is a product from the{' '}
          <span className="bold">Zomy Group</span>
          <br />
          <br />
          <span className="copyright">
            <FaRegCopyright />

            <span className="bold"> Ride.Rent LLC</span>
          </span>
        </p>
      </div>
    </footer>
  )
}
export default Footer
