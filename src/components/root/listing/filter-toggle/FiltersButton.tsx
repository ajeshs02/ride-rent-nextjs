import { useEffect, useState } from 'react'
import './FiltersButton.scss'
import { RiListSettingsFill } from 'react-icons/ri'

type FiltersButtonProps = {
  setIsModal: (value: boolean) => void
}

const FiltersButton: React.FC<FiltersButtonProps> = ({ setIsModal }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true)
    }, 10)
    return () => {
      clearTimeout(timeoutId)
      setIsVisible(false)
    }
  }, [])

  return (
    <button
      onClick={() => setIsModal(true)}
      className={`filters-btn ${isVisible ? 'visible' : ''}`}
    >
      Filters <RiListSettingsFill />
    </button>
  )
}

export default FiltersButton
