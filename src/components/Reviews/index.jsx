import './styles.scss'

import avatar from '@/assets/images/avatar.png'

export default function Reviews() {
  return (
    <div className='section section--gray'>
      <div className='container'>
        <div className='reviews'>
          <a
            className='reviews__btn reviews__btn--prev'
            href='#'
          >Prev
          </a>
          <a
            className='reviews__btn reviews__btn--next'
            href='#'
          >Next
          </a>
          <div className='reviews__item'>
            <img
              className='reviews__photo'
              src={avatar}
              alt=''
            />
            <div className='reviews__text'>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              illo voluptatum doloribus pariatur praesentium ad aspernatur, odio
              sint delectus autem."
            </div>
            <div className='reviews__author'>Jon Doe</div>
          </div>
        </div>
      </div>
    </div>
  )
}