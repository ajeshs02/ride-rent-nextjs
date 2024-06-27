import DocumentsRequired from '../documents-required/DocumentsRequired'
import './Documents.scss'
import DocumentsHeading from './DocumentsHeading'

const Documents = () => {
  return (
    <section className="documents_section wrapper">
      <DocumentsHeading />
      <div className="description">
        <p>
          As the fastest-growing vehicle rental portal, we pride ourselves on
          offering an extensive range of vehicles available for rent in the UAE,
          from luxurious cars and sports cars to thrilling motorbikes and sport
          bikes. But that&apos;s not all - we also cater to those seeking
          adventure on the water with our selection of speed boats and yachts
          for rent. For those looking to soar high, we provide charter planes
          for rent at affordable rates for your convenience.
          <br />
          <br /> At Ride.Rent, we understand the importance of convenience and
          choice, which is why our services span across prominent areas in the
          UAE, including Abu Dhabi, Dubai, Sharjah, Ajman, Umm Quwain, Ras AL
          Khaimah, and Fujairah, Whether you&apos;re cruising along the stunning
          coastline or exploring the vibrant cityscape, we&apos;ve got the
          perfect ride for every occasion. <br />
          <br /> With a commitment to providing exceptional service and an
          unbeatable selection, Ride.Rent is your go-to destination for all your
          vehicle rental needs in the UAE. <br />
          <br /> Book your dream ride today and elevate your journey with
          Ride.Rent!
        </p>
      </div>

      {/* Documents Required */}
      <DocumentsRequired />
    </section>
  )
}
export default Documents
