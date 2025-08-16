import './styles.scss'
import wedo from '@/assets/images/wedo.jpg'
import {useState} from "react";

export default function WedoSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionItems = [
    {
      title: "Photography",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni consequatur unde ad non quas tenetur atque numquam sint consectetur, hic nostrum fugiat id dolor tempore reprehenderit sapiente alias odio ullam."
    },
    {
      title: "Creativity",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni consequatur unde ad non quas tenetur atque numquam sint consectetur, hic nostrum fugiat id dolor tempore reprehenderit sapiente alias odio ullam."
    },
    {
      title: "Web design",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni consequatur unde ad non quas tenetur atque numquam sint consectetur, hic nostrum fugiat id dolor tempore reprehenderit sapiente alias odio ullam."
    }
  ];

  const handleAccordionClick = (index) => setActiveIndex(activeIndex === index ? null : index);


  return (
    <section className='section'>
      <div className='container'>
        <div className='section__header'>
          <h3 className='section__suptitle'>Service</h3>
          <h2 className='section__title'>What we do</h2>
          <div className='section__text'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              quod cum eum impedit obcaecati adipisci quibusdam. Hic cumque
              neque
              explicabo.
            </p>
          </div>
        </div>

        <div className='wedo'>
          <div className='wedo__item'>
            <img
              src={wedo}
              alt=''
            />
          </div>
          <div className='wedo__item'>
            <div className='acardion'>
              {accordionItems.map((item, index) => (
                <div
                  className={`acardion__item ${activeIndex === index ? 'active' : ''}`}
                  key={index}
                >
                  <div
                    className='acardion__header'
                    onClick={() => handleAccordionClick(index)}
                  >
                    <div className='acardion__title'>{item.title}</div>
                  </div>
                  <div className='acardion__content'>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}