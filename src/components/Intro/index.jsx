import './styles.scss'
import Slider from "@/components/Slider";

export default function Intro() {
  return (
    <div className='intro'>
      <div className='container'>
        <div className='intro__inner'>
          <h2 className='intro__suptitle'>Creative Template</h2>
          <h1 className='intro__title'>Welcome to Mogo</h1>
          <a
            className='btn'
            href=''
          >
            Learn More
          </a>
        </div>
      </div>
      <Slider />
    </div>
  )
}