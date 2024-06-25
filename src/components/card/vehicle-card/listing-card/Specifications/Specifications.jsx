import { profileFeatures } from '..'
import './Specifications.scss'

const Specifications = ({ isGridView = true }) => {
  return (
    <div className={`specifications ${isGridView && 'flex-view'}`}>
      {profileFeatures.map((feature) => (
        <div key={feature.key} className="specification">
          <div className="icon-box">
            <img src={feature.icon} alt={''} />
          </div>
          <span className="label">{feature.label}</span>
        </div>
      ))}
    </div>
  )
}

export default Specifications
