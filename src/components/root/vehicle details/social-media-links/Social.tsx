import './Social.scss'
import { socialMediaData } from '.'
import Link from 'next/link'

const Social = () => {
  return (
    <div className="profile-social">
      <div className="custom-heading">
        <h3>Share This</h3>
      </div>
      <div className="social">
        {socialMediaData.map((data) => {
          const Icon = data.icon
          return (
            <Link
              href={data.link}
              key={data.id}
              target="_blank"
              className="icon-box"
            >
              <Icon className={`icon facebook ${data.customClass}`} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
export default Social
