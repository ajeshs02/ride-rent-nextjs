import MotionDiv from '@/components/general/framer-motion/MotionDiv'
import './Accordion.scss'
import { useRef, useEffect, useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

type AccordionProps = {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

const Accordion: React.FC<AccordionProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  const contentHeight = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<string>('0px')

  useEffect(() => {
    if (contentHeight.current) {
      setHeight(isOpen ? `${contentHeight.current.scrollHeight}px` : '0px')
    }
  }, [isOpen])

  return (
    <MotionDiv className="accordion_wrapper">
      <button
        className={`question-container ${isOpen ? 'active' : ''}`}
        onClick={onClick}
      >
        <p className="question-content">{question}</p>
        <RiArrowDropDownLine className={`arrow ${isOpen ? 'active' : ''}`} />
      </button>

      <div ref={contentHeight} className="answer-container" style={{ height }}>
        <p className="answer-content">{answer}</p>
      </div>
    </MotionDiv>
  )
}

export default Accordion
