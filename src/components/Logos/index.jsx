import './styles.scss'

import logo1 from '@/assets/images/logos/1.png'
import logo2 from '@/assets/images/logos/2.png'
import logo3 from '@/assets/images/logos/3.png'
import logo4 from '@/assets/images/logos/4.png'
import logo5 from '@/assets/images/logos/5.png'
import logo6 from '@/assets/images/logos/6.png'

export default function Logos() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6]

  return (
    <div className='section section--gray'>
      <div className='container'>
        <div className='logos'>
          {logos.map((logo, index) => (
            <div
              className='logos__item'
              key={index}
            >
              <img
                src={logo}
                alt=''
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}