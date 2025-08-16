import './styles.scss'

import works1 from '@/assets/images/works/1.jpg'
import works2 from '@/assets/images/works/2.jpg'
import works3 from '@/assets/images/works/3.jpg'
import works4 from '@/assets/images/works/4.jpg'
import works5 from '@/assets/images/works/5.jpg'
import works6 from '@/assets/images/works/6.jpg'
import works7 from '@/assets/images/works/7.jpg'

export default function WorksSection() {
  const works = [
    {img: works1, title: 'Creatively designed', text: 'Lorem ipsum dolor sit.'},
    {img: works2, title: 'Creatively designed', text: 'Lorem ipsum dolor sit.'},
    {img: works3, title: 'Creatively designed', text: 'Lorem ipsum dolor sit.'},
    {img: works4, title: 'Creatively designed', text: 'Lorem ipsum dolor sit.'},
    {img: works5, title: 'Creatively designed', text: 'Lorem ipsum dolor sit.'},
    {img: works6, title: 'Creatively designed', text: 'Lorem ipsum dolor sit.'},
    {img: works7, title: 'Creatively designed', text: 'Lorem ipsum dolor sit.'}
  ];

  const columns = [
    [0, 1],
    [2, 3],
    [4],
    [5, 6]
  ];

  return (
    <section className='section'>
      <div className='container'>
        <div className='section__header'>
          <h3 className='section__suptitle'>What we do</h3>
          <h2 className='section__title'>Some of our work</h2>
          <div className='section__text'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              quod cum eum impedit obcaecati adipisci quibusdam. Hic cumque
              neque explicabo.
            </p>
          </div>
        </div>
      </div>

      <div className='works'>
        {columns.map((col, colIndex) => (
          <div
            className='works__col'
            key={colIndex}
          >
            {col.map(index => (
              <div
                className='works__item'
                key={index}
              >
                <img
                  className='works__img'
                  src={works[index].img}
                  alt={works[index].title}
                />
                <div className='works__info'>
                  <div className='works__title'>{works[index].title}</div>
                  <div className='works__text'>{works[index].text}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}