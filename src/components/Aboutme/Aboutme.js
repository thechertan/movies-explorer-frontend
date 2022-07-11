import './Aboutme.css'
import { Link } from 'react-router-dom';
import photo from '../../images/__photo.png'
import linkPortfolio from '../../images/__link-portfolio.svg'

function Aboutme() {
  return (
    <section className='aboutme'>
      <div className='aboutme__container'>
        <h2 className='aboutme__title' name='aboutme'>Студент</h2>
        <div className='aboutme__description'>
          <div className='aboutme__specification'>
            <h3 className='aboutme__subtitle'>Виталий</h3>
            <h3 className='aboutme__profession'>Фронтенд-разработчик, 30 лет</h3>
            <p className='aboutme__paragraph'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
              С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <ul className='aboutme__links'>
              <li className='aboutme__list'><Link to="https://www.facebook.com/" className="aboutme__link">Facebook</Link></li>
              <li className='aboutme__list'><Link to="https://github.com/thechertan" className="aboutme__link">Github</Link></li>
            </ul>
          </div>
          <img
            src={photo}
            alt="Фото"
            className="aboutme__photo"
          />
        </div>
        <h3 className='aboutme__portfolio'>Портфолио</h3>
        <ul className='aboutme__links-portfolio'>
          <li className='aboutme__list-portfolio'>
            <Link to="https://github.com/thechertan" className="aboutme__link-portfolio">Статичный сайт</Link>
            <Link to="https://github.com/thechertan" className="aboutme__link-portfolio"><img src={linkPortfolio} alt="Ссылка" className="aboutme__photo-link" /></Link>
          </li>
          <li className='aboutme__list-portfolio'>
            <Link to="https://github.com/thechertan" className="aboutme__link-portfolio">Адаптивный сайт</Link>
            <Link to="https://github.com/thechertan" className="aboutme__link-portfolio"><img src={linkPortfolio} alt="Ссылка" className="aboutme__photo-link" /></Link>
          </li>
          <li className='aboutme__list-portfolio'>
            <Link to="https://github.com/thechertan" className="aboutme__link-portfolio">Одностраничное приложение</Link>
            <Link to="https://github.com/thechertan" className="aboutme__link-portfolio"><img src={linkPortfolio} alt="Ссылка" className="aboutme__photo-link" /></Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Aboutme;