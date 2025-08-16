import './styles.scss'

export default function Slider() {
  return (
    <div className='slider'>
      <div className='container'>
        <div className='slider__inner'>
          <div className='slider__item active'>
            <span className='slider__num'>01</span> Intro
          </div>
          <div className='slider__item'>
            <span className='slider__num'>02</span> Work
          </div>
          <div className='slider__item'>
            <span className='slider__num'>03</span> About
          </div>
          <div className='slider__item'>
            <span className='slider__num'>04</span> Contacts
          </div>
        </div>
      </div>
    </div>
  )
}