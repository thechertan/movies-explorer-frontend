import SearchForm from '../SearchForm/SearchForm';
import Forther from '../Further/Further';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

function Movies({ cards }) {

  return (
    <div className='movies'>
      <SearchForm />
      <MoviesCardList cards={cards} />
      <Forther />
    </div>
  )
}

export default Movies;