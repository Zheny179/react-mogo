import './styles.scss'

import blog1 from '@/assets/images/blog/1.jpg'
import blog2 from '@/assets/images/blog/2.jpg'
import blog3 from '@/assets/images/blog/3.jpg'

export default function BlogSection() {
  const blogPosts = [
    {
      img: blog1,
      date: "15",
      month: "Jan",
      title: "Lorem ipsum dolor sit amet.",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum vitae doloribus ipsa repellat ullam ducimus!"
    },
    {
      img: blog2,
      date: "15",
      month: "Jan",
      title: "Lorem ipsum dolor sit amet.",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum vitae doloribus ipsa repellat ullam ducimus!"
    },
    {
      img: blog3,
      date: "15",
      month: "Jan",
      title: "Lorem ipsum dolor sit amet.",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum vitae doloribus ipsa repellat ullam ducimus!"
    }
  ];
  return (
    <section className='section'>
      <div className='container'>
        <div className='section__header'>
          <h3 className='section__suptitle'>Our stories</h3>
          <h2 className='section__title'>Last stories</h2>
        </div>

        <div className='blog'>
          {blogPosts.map((post, index) => (
            <div
              className='blog__item'
              key={index}
            >
              <div className='blog__header'>
                <a href='#'>
                  <img
                    className='blog__photo'
                    src={post.img}
                    alt=''
                  />
                </a>
                <div className='blog__date'>
                  <div className='blog__date-day'>{post.date}</div>
                  <div>{post.month}</div>
                </div>
              </div>
              <div className='blog__content'>
                <div className='blog__title'>
                  <a href='#'>{post.title}</a>
                </div>
                <div className='blog__text'>{post.text}</div>
              </div>
              <div className='blog__footer'>
                <div className='blog-stat'>
                  <span className='blog-stat__item'> <i className='far fa-eye'></i> 542 </span>
                  <span className='blog-stat__item'> <i className='far fa-comment-dots'></i> 17 </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}