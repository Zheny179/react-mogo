import './styles.scss'

import client1 from '@/assets/images/clients/1.png'
import client2 from '@/assets/images/clients/2.png'
import client3 from '@/assets/images/clients/3.png'
import client4 from '@/assets/images/clients/4.png'

export default function ClientsSection() {
  const clients = [
    {
      img: client1,
      name: "Matthew Dix",
      profession: "Graphic Design",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, asperiores. At quisquam illo distinctio quas quidem aspernatur molestiae veniam dignissimos?"
    },
    {
      img: client2,
      name: "Matthew Dix",
      profession: "Graphic Design",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, asperiores. At quisquam illo distinctio quas quidem aspernatur molestiae veniam dignissimos"
    },
    {
      img: client3,
      name: "Matthew Dix",
      profession: "Graphic Design",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      img: client4,
      name: "Matthew Dix",
      profession: "Graphic Design",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, asperiores. At quisquam illo distinctio quas quidem aspernatur"
    }
  ];
  return (
    <section className='section section--clients'>
      <div className='container'>
        <div className='section__header'>
          <h3 className='section__suptitle'>Happy clients</h3>
          <h2 className='section__title'>What people say</h2>
        </div>

        <div className='clients'>
          {clients.map((client, index) => (
            <div
              className='clients__item'
              key={index}
            >
              <img
                className='clients__photo'
                src={client.img}
                alt=''
              />
              <div className='clients__content'>
                <div className='clients__name'>{client.name}</div>
                <div className='clients__prof'>{client.profession}</div>
                <div className='clients__text'>{client.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}