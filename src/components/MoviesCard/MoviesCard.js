import './MoviesCard.css'
import imageSaved from '../../images/__saved.svg'
import imageSaved2 from '../../images/__saved2.svg'

function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours === 0 ? minutes + 'м' : hours + 'ч ' + minutes + 'м';
};

function handleSavedCard() {
    console.log('addActiveClass')
}

function MoviesCard({ card }) {

    return (
        <div className="moviescard" key={card.id}>
            <div className='moviescard__container'>
                <div className='moviescard__box-data'>
                    <h2 className='moviescard__name-film'>{card.nameRU}</h2>
                    <div className='moviescard__duration'>{getTimeFromMins(card.duration)}</div>
                </div>
                <button type='button' className='moviescard__img' onClick={handleSavedCard}></button>
            </div>
            <img src={`https://api.nomoreparties.co${card.image.formats.thumbnail.url}`} alt='Обложка' className='moviescard__cover' />
        </div>
    )
}

export default MoviesCard;