import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { FaBehance } from 'react-icons/fa'
import { FaPinterestP } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

export const socialMediaData = [
  {
    id: 1,
    name: 'Facebook',
    icon: FaFacebook,
    link: 'https://www.facebook.com/',
    field: 'Connect with friends and family',
    customClass: 'facebook',
  },
  {
    id: 2,
    name: 'Instagram',
    icon: FiInstagram,
    link: 'https://www.instagram.com/',
    field: 'Share photos and videos',
    customClass: 'instagram',
  },
  {
    id: 3,
    name: 'LinkedIn',
    icon: FaLinkedin,
    link: 'https://www.linkedin.com/',
    field: 'Professional networking',
    customClass: 'linkedin',
  },
  {
    id: 4,
    name: 'Twitter',
    icon: FaTwitter,
    link: 'https://twitter.com/',
    field: 'Microblogging and updates',
    customClass: 'twitter',
  },
  {
    id: 5,
    name: 'Pinterest',
    icon: FaPinterestP,
    link: 'https://www.pinterest.com/',
    field: 'Discover and save ideas',
    customClass: 'pinterest',
  },
  {
    id: 6,
    name: 'Behance',
    icon: FaBehance,
    link: 'https://www.behance.net/',
    field: 'Showcase your creative work',
    customClass: 'behance',
  },
]
