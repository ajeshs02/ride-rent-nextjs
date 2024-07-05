'use client'

import { FormEvent, useState } from 'react'
import './ForgotPassword.scss'
import WhyJoin from '@/components/common/why-join/WhyJoin'
import FAQ from '@/components/common/FAQ/FAQ'
import { Forgot_Password_FAQ_Data, features } from '.'

//Faq Heading component
const title = (
  <h2>
    What&apos;s new on <span>Ride.Rent?</span>
  </h2>
)

export default function ForgotPassword() {
  const [email, setEmail] = useState('')

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <section className="wrapper reset-password-section">
      {/* form section */}
      <div className="reset-password-container">
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
      </div>

      {/* Why Join Us */}
      <WhyJoin title={title} data={features} />

      {/* FAQ */}
      <FAQ data={Forgot_Password_FAQ_Data} />
    </section>
  )
}
