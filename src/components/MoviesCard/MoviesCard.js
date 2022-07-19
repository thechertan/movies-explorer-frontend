import './MoviesCard.css'
import { useLocation } from 'react-router-dom';

function getTimeFromMins(mins) {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  return hours === 0 ? minutes + 'м' : hours + 'ч ' + minutes + 'м';
};

function MoviesCard({ card }) {
  const location = useLocation();

  function handleSavedCard() {
    console.log('addActiveClass')
  }

  return (
    <div className="moviescard" key={card.id}>
      <div className='moviescard__container'>
        <div className='moviescard__box-data'>
          <h2 className='moviescard__name-film'>{card.nameRU}</h2>
          <div className='moviescard__duration'>{getTimeFromMins(card.duration)}</div>
        </div>
        {location.pathname === '/movies' && <button type='button' className='moviescard__img' onClick={handleSavedCard}></button>}
        {location.pathname === '/saved-movies' && <button type='button' className='moviescard__img-saved' onClick={handleSavedCard}></button>}
      </div>
      <img src={`https://api.nomoreparties.co${card.image.formats.thumbnail.url}`} alt='Обложка' className='moviescard__cover' />
    </div>
  )
}

export default MoviesCard;