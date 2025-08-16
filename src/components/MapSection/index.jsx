import './styles.scss'

export default function MapSection() {
  return (
    <section className='section section--map'>
      <div className='container'>
        <div className='map'>
          <h2 className='map__title'>
            <div><i className='fas fa-map-marker-alt'></i></div>
            <a
              href='#'
              target='_blank'
            >
              Open map
            </a>
          </h2>
        </div>
      </div>
    </section>
  )
}