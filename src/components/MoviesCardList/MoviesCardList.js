
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ cards }) {

  return (
    <section className="moviescardlist">
      {cards.map((card) => (
        <MoviesCard card={card} key={card.id} />
      ))}
    </section>
  )
}

export default MoviesCardList;