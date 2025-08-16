import './styles.scss'
import about1 from '@/assets/images/about/1.jpg'
import about2 from '@/assets/images/about/2.jpg'
import about3 from '@/assets/images/about/3.jpg'

export default function Card() {
  const cardItem = [
    {
      id: 1,
      img: about1,
      name: 'super team'
    },
    {
      id: 2,
      img: about2,
      name: 'super team'
    },
    {
      id: 3,
      img: about3,
      name: 'super team'
    }
  ]

  return (
    <div className='card'>
      {
        cardItem.map((item) => (
          <div
            className='card__item'
            key={item.id}
          >
            <div className='card__inner'>
              <div className='card__img'>
                <img
                  src={item.img}
                  alt={item.name}
                />
              </div>
              <div className='card__text'>{item.name}</div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
