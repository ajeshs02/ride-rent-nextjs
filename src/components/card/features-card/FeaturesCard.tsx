import { IconType } from 'react-icons'
import './FeaturesCard.scss'

type FeatureCardProps = {
  data: {
    key: number
    icon: IconType
    title: string
    description: string
    bgClass: string
  }
}

const FeaturesCard = ({ data }: FeatureCardProps) => {
  const { icon: Icon, title, description, bgClass } = data

  return (
    <div className="features_card">
      <div className={`feature_icon ${bgClass}`}>
        <Icon className="icon" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
export default FeaturesCard
