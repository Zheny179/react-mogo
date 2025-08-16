import './styles.scss'

import ipad from '@/assets/images/ipad.png'
import iphone from '@/assets/images/iphone.png'

export default function DevicesSection() {
  return (
    <section className='section section--devices'>
      <div className='container'>
        <div className='section__header'>
          <h3 className='section__suptitle'>For all devices</h3>
          <h2 className='section__title'>Unique design</h2>
        </div>
        <div className='devices'>
          <img
            className='devices__item'
            src={ipad}
            alt=''
          />
          <img
            className='devices__item devices__item--iphone'
            src={iphone}
            alt=''
          />
        </div>
      </div>
    </section>
  )
}