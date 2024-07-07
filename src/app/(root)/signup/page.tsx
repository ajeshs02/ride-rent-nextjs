import './SignUp.scss'
import FAQ from '@/components/common/FAQ/FAQ'
import WhyJoin from '@/components/common/why-join/WhyJoin'
import WhyOpt from '@/components/common/why-opt/WhyOpt'
import Form from '@/components/root/signup/signup-form/Form'
import SignUpFeatures from '@/components/root/signup/signup-features/SignUpFeatures'
import { features } from '.'
import { FAQ_Data } from '@/components/common/FAQ'
import MotionDiv from '@/components/general/framer-motion/MotionDiv'
import { MotionH2 } from '@/components/general/framer-motion/MotionElm'

// title component
const title = (
  <MotionH2
    initial={{ opacity: 0.1, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ type: 'tween', duration: 0.5 }}
    viewport={{ once: true }}
  >
    Why join <span>Ride.Rent</span> Today?
  </MotionH2>
)

export default function page() {
  return (
    <section className="wrapper sign-up-section">
      {/* top heading */}
      <MotionDiv className="heading-container">
        <h1>A SINGLE PLATFORM TO RENT YOUR VEHICLES</h1>
        <h2>Showcase your fleet to the world, get faster bookings</h2>
      </MotionDiv>

      {/* form section */}
      <MotionDiv className="sign-up-container">
        {/* sign up features */}
        <SignUpFeatures />

        {/* form */}
        <Form />
      </MotionDiv>

      {/* Why Join Us */}
      <WhyJoin title={title} data={features} />

      {/* FAQ */}
      <FAQ data={FAQ_Data} />

      {/* why opt */}
      <WhyOpt />
    </section>
  )
}
