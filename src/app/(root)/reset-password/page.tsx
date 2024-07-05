'use client'

import './ResetPassword.scss'
import FAQ from '@/components/common/FAQ/FAQ'
import WhyJoin from '@/components/common/why-join/WhyJoin'
import { FormEvent, useState } from 'react'
import { features } from '.'
import { FAQ_Data } from '@/components/common/FAQ'

// title component
const title = (
  <h2>
    What&apos;s new on <span>Ride.Rent?</span>
  </h2>
)

export default function ResetPassword() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <section className="wrapper reset-password-section">
      {/* form section */}
      <div className="reset-password-container">
        <h3>RESET PASSWORD</h3>
        <p>
          Enter your email and we will send you a link to reset your password
        </p>
        <form onSubmit={onSubmit} className="form">
          <input
            type="text"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Why Join Us */}
      <WhyJoin title={title} data={features} />

      {/* FAQ */}
      <FAQ data={FAQ_Data} />
    </section>
  )
}
