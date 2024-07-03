'use client'
import Accordion from './Accordion/Accordion'
import './FAQ.scss'
import { useState } from 'react'
import Image from 'next/image'

type FAQProps = {
  data: {
    question: string
    answer: string
  }[]
}

export default function FAQ({ data }: FAQProps) {
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
        {data.map((item, index) => (
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
