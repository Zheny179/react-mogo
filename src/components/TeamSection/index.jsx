import './styles.scss'
import MatthewDix from '@/assets/images/team/1.jpg'
import Campbell from '@/assets/images/team/2.jpg'
import Michael from '@/assets/images/team/3.jpg'


export default function TeamSection() {
  const teamMembers = [
    {
      img: MatthewDix,
      name: "Matthew Dix",
      profession: "Graphic Design",
      social: ["facebook-f", "twitter", "pinterest-p", "instagram"]
    },
    {
      img: Campbell,
      name: "Christopher Campbell",
      profession: "Branding/UX design",
      social: ["facebook-f", "twitter", "pinterest-p", "instagram"]
    },
    {
      img: Michael,
      name: "Michael Fertig",
      profession: "Developer",
      social: ["facebook-f", "twitter", "pinterest-p", "instagram"]
    }
  ];

  return (
    <section className='section'>
      <div className='container'>
        <div className='section__header'>
          <h3 className='section__suptitle'>What we are</h3>
          <h2 className='section__title'>Meet our team</h2>
          <div className='section__text'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              quod cum eum impedit obcaecati adipisci quibusdam. Hic cumque
              neque
              explicabo.
            </p>
          </div>
        </div>

        <div className='card'>
          {teamMembers.map((member, index) => (
            <div
              className='card__item'
              key={index}
            >
              <div className='card__inner'>
                <div className='card__img'>
                  <img
                    src={`${member.img}`}
                    alt=''
                  />
                </div>
                <div className='card__text'>
                  <div className='social'>
                    {member.social.map((icon, iconIndex) => (
                      <a
                        className='social__item'
                        href='#'
                        target='_blank'
                        key={iconIndex}
                      >
                        <i className={`fab fa-${icon}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className='card__info'>
                <div className='card__name'>{member.name}</div>
                <div className='card__prof'>{member.profession}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}