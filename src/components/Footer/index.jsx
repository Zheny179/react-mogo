import './styles.scss'

import post1 from '@/assets/images/blog/1.jpg'
import post2 from '@/assets/images/blog/2.jpg'
import post3 from '@/assets/images/blog/3.jpg'


import instagram1 from '@/assets/images/instagram/1.jpg'
import instagram2 from '@/assets/images/instagram/2.jpg'
import instagram3 from '@/assets/images/instagram/3.jpg'
import instagram4 from '@/assets/images/instagram/4.jpg'
import instagram5 from '@/assets/images/instagram/5.jpg'
import instagram6 from '@/assets/images/instagram/6.jpg'
import instagram7 from '@/assets/images/instagram/7.jpg'
import instagram8 from '@/assets/images/instagram/8.jpg'
import instagram9 from '@/assets/images/instagram/9.jpg'

export default function Footer() {
  const blogPosts = [
    {img: post1, title: "Lorem ipsum dolor sit amet", date: "Jan 9, 2016"},
    {img: post2, title: "Lorem ipsum dolor sit amet", date: "Jan 9, 2016"},
    {img: post3, title: "Lorem ipsum dolor sit amet", date: "Jan 9, 2016"}
  ];

  const instagramImages = [instagram1, instagram2, instagram3, instagram4, instagram5, instagram6, instagram7, instagram8, instagram9];

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__inner'>
          <div className='footer__col footer__col--first'>
            <div className='footer__logo'>MoGo</div>
            <div className='footer__text'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              repudiandae doloremque, sunt tenetur commodi repellat vero dolorum
              doloribus necessitatibus corrupti quidem! Ea aliquid minus culpa
              nulla. Perspiciatis omnis laborum sint!
            </div>
            <div className='footer__social'>
              <div className='footer__social-header'><b>15k</b> followers</div>
              <div className='footer__social-content'>
                Follow Us:
                <a
                  href='#'
                  target='_blank'
                >
                  <i className='fab fa-facebook'></i>
                </a>
                <a
                  href='#'
                  target='_blank'
                >
                  <i className='fab fa-twitter'></i>
                </a>
                <a
                  href='#'
                  target='_blank'
                >
                  <i className='fab fa-instagram'></i>
                </a>
              </div>
            </div>

            <form
              className='subscribe'
              action='/'
              method='post'
            >
              <input
                className='subscribe__input'
                type='email'
                name='name'
                placeholder='Your Email...'
              />
              <button
                className='subscribe__btn'
                type='submit'
              >Subscribe
              </button>
            </form>
          </div>

          <div className='footer__col footer__col--second'>
            <div className='footer__title'>Blocks</div>
            <div className='blogs'>
              {blogPosts.map((post, index) => (
                <div
                  className='blogs__item'
                  key={index}
                >
                  <img
                    className='blogs__img'
                    src={post.img}
                    alt=''
                  />
                  <div className='blogs__content'>
                    <a
                      className='blogs__title'
                      href='#'
                    >{post.title}</a>
                    <div className='blogs__date'>{post.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='footer__col footer__col--third'>
            <div className='footer__title'>Instagram</div>
            <div className='instagram'>
              {instagramImages.map((img, index) => (
                <a
                  className='instagram__item'
                  href='#'
                  target='_blank'
                  key={index}
                >
                  <img
                    src={img}
                    alt=''
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className='copyright'>&copy; 2016 MoGo free PSD template
          by <span>Laaqiq</span></div>
      </div>
    </footer>
  );
};