import { useState } from 'react';
import imgButton from '../../images/__pushText.svg'
import searchImg from '../../images/__serchMovies.svg'
import './Movies.css';

function Movies() {
  const [inputText, setInputText] = useState('')

  function handleChange(e) {
    e.preventDefault();
    setInputText(e.target.value);
  }

  return (
    <div className='movies'>
      <section className='movies__container'>
      <div className='movies__box'>
        <form className='movies__search-form' onSubmit={handleChange}>
            <img
              src={searchImg}
              alt='Поиск'
              className='movies__search-img' />
            <input
              type="text"
              value={inputText || ''}
              onChange={handleChange}
              placeholder='Фильм'
              className='movies__input'
            />
          </form>
          <div className='movies__submit-container'>
            <button type="submit" className="movies__form-submit">
              <img
                src={imgButton}
                alt='Кнопка'
                className='movies__search-img-submit' />
            </button>
            <span className='movies__border-left'></span>
          </div>
        </div>
        <div className='movies__checkbox-contaioner'>
          <label className='movies__group-checkbox'>
            <input id='searchShortMovies' type="checkbox" className='movies__checkbox' />
            <span className='movies__checkbox-span'></span>
          </label>
          <p className='movies__paragraph'>Короткометражки</p>
        </div>
      </section>

    </div>
  )
}

export default Movies;