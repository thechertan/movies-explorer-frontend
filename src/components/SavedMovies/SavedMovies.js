import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  return (
    <div className='savedmovies'>
      <SearchForm />
      <MoviesCardList />
      <div className='savedmovies__block'></div>
    </div>
  )
}

export default SavedMovies;