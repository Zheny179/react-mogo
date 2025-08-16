import './styles.scss'
import Card from "@/components/Card";

export default function AboutSection() {

  return (
    <section className='section'>
      <div className='container'>
        <div className='section__header'>
          <h3 className='section__suptitle'>What we do</h3>
          <h2 className='section__title'>Story about us</h2>
          <div className='section__text'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              quod cum eum impedit obcaecati adipisci quibusdam. Hic cumque
              neque
              explicabo.
            </p>
          </div>
        </div>
        <Card />
      </div>
    </section>
  )
}