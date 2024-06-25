'use client'
import { FAQ_Data } from '.'
import Accordion from './Accordion/Accordion'
import './FAQ.scss'
import { useState } from 'react'
import Image from 'next/image'

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <section className="faq-section wrapper">
      <div className="heading-container">
        <h1 className="frequently-asked">Frequently Asked Questions</h1>
        <Image
          width={50}
          height={50}
          src={'/assets/img/general/title-head.png'}
          alt="Custom Underline Image"
          className="custom-underline"
        />
      </div>

      <div className="faq">
        {FAQ_Data.map((item, index) => (
          <Accordion
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default FAQ
