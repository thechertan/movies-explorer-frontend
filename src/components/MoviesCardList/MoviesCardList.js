
import './MoviesCardList.css';
import { cards } from '../../constants/card.js'; //cards.map((card) => {})
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {

    return (
        <section className="moviescardlist">
            {cards.map((card) => (
                <MoviesCard card={card} key={card.id} />
            ))}
        </section>
    )
}

export default MoviesCardList;