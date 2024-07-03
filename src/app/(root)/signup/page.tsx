import './SignUp.scss'
import FAQ from '@/components/common/FAQ/FAQ'
import WhyJoin from '@/components/common/why-join/WhyJoin'
import WhyOpt from '@/components/common/why-opt/WhyOpt'
import Form from '@/components/root/signup/signup-form/Form'
import SignUpFeatures from '@/components/root/signup/signup-features/SignUpFeatures'
import { features } from '.'
import { FAQ_Data } from '@/components/common/FAQ'

// title component
const title = (
  <h2>
    Why join <span>Ride.Rent</span> Today?
  </h2>
)

export default function page() {
  return (
    <section className="wrapper sign-up-section">
      {/* top heading */}
      <div className="heading-container">
        <h1>A SINGLE PLATFORM TO RENT YOUR VEHICLES</h1>
        <h2>Showcase your fleet to the world, get faster bookings</h2>
      </div>

      {/* form section */}
      <div className="sign-up-container">
        {/* sign up features */}
        <SignUpFeatures />

        {/* form */}
        <Form />
      </div>

      {/* Why Join Us */}
      <WhyJoin title={title} data={features} />

      {/* FAQ */}
      <FAQ data={FAQ_Data} />

      {/* why opt */}
      <WhyOpt />
    </section>
  )
}
