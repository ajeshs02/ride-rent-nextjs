'use client'

import { FormEvent, useState } from 'react'
import './ForgotPassword.scss'
import WhyJoin from '@/components/common/why-join/WhyJoin'
import FAQ from '@/components/common/FAQ/FAQ'
import { Forgot_Password_FAQ_Data, features } from '.'
import MotionDiv from '@/components/general/framer-motion/MotionDiv'
import { MotionH2 } from '@/components/general/framer-motion/MotionElm'

//Faq Heading component
const title = (
  <MotionH2
    initial={{ opacity: 0.1, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ type: 'tween', duration: 0.5 }}
    viewport={{ once: true }}
  >
    What&apos;s new on <span>Ride.Rent?</span>
  </MotionH2>
)

export default function ForgotPassword() {
  const [email, setEmail] = useState('')

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <section className="wrapper reset-password-section">
      {/* form section */}
      <MotionDiv className="reset-password-container">
        <h3>FORGOT PASSWORD ?</h3>
        <p>
          Enter your email and we will send you a link to reset your password
        </p>
        <form onSubmit={onSubmit} className="form">
          <input
            type="email"
            placeholder="Current Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Save Changes</button>
        </form>
      </MotionDiv>

      {/* Why Join Us */}
      <WhyJoin title={title} data={features} />

      {/* FAQ */}
      <FAQ data={Forgot_Password_FAQ_Data} />
    </section>
  )
}
