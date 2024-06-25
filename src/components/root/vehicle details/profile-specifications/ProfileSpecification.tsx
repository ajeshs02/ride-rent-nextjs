import './ProfileSpecification.scss'
import { profileFeatures } from '.'
import { IoSpeedometer } from 'react-icons/io5'

const ProfileSpecification = () => {
  return (
    <div className="profile-specifications">
      <div className="specifications">
        {profileFeatures.map((feature) => (
          <div key={feature.key} className="specification">
            <div className="icon-box">
              <img src={feature.icon} alt={''} />
            </div>
            <span className="label">{feature.label}</span>
          </div>
        ))}
      </div>

      <div className="mileage">
        {/* included mileage */}
        <div className="mileage-box">
          <IoSpeedometer />
          <span className="label">{'Included mileage limit'}</span>
          <span className="value">{'250 KM'}</span>
        </div>
        {/* additional mileage */}
        <div className="mileage-box">
          <IoSpeedometer />
          <span className="label">{'Additional Mileage Charge / KM'}</span>
          <span className="value">{'AED 1'}</span>
        </div>
      </div>
    </div>
  )
}
export default ProfileSpecification
