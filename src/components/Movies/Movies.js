import { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Forther from '../Further/Further';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

function Movies() {




  return (
    <div className='movies'>
      <SearchForm />
      <MoviesCardList />
      <Forther />
    </div>
  )
}

export default Movies;