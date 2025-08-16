import './styles.scss'
import photography from '@/assets/images/services/photography.png'
import webdesign from '@/assets/images/services/webdesign.png'
import creativity from '@/assets/images/services/creativity.png'
import seo from '@/assets/images/services/seo.png'
import cssHtml from '@/assets/images/services/css-html.png'
import digital from '@/assets/images/services/digital.png'

export default function ServicesSection() {
  const services = [
    {
      icon: photography,
      title: "Photography",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
      icon: webdesign,
      title: "Web Design",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
      icon: creativity,
      title: "Creativity",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
      icon: seo,
      title: "SEO",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
      icon: cssHtml,
      title: "CSS/HTML",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
      icon: digital,
      title: "Digital",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    }
  ];

  return (
    <section className='section'>
      <div className='container'>
        <div className='section__header'>
          <h3 className='section__suptitle'>We work with</h3>
          <h2 className='section__title'>amazing services</h2>
        </div>

        <div className='services'>
          {services.slice(0, 3).map((service, index) => (
            <div
              className='services__item'
              key={index}
            >
              <img
                className='services__icon'
                src={service.icon}
                alt=''
              />
              <div className='services__title'>{service.title}</div>
              <div className='services__text'>{service.text}</div>
            </div>
          ))}
        </div>

        <hr />

        <div className='services'>
          {services.slice(3, 6).map((service, index) => (
            <div
              className='services__item'
              key={index + 3}
            >
              <img
                className='services__icon'
                src={service.icon}
                alt=''
              />
              <div className='services__title'>{service.title}</div>
              <div className='services__text'>{service.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}