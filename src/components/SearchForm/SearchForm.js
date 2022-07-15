import { useState } from 'react';
import imgButton from '../../images/__pushText.svg'
import searchImg from '../../images/__serchMovies.svg'
import './SearchForm.css';

function SearchForm() {
  const [inputText, setInputText] = useState('')

  function handleChange(e) {
    e.preventDefault();
    setInputText(e.target.value);
  }

  return (
    <section className='searchform'>
      <div className='searchform__box'>
        <form className='searchform__search-form' onSubmit={handleChange}>
          <img
            src={searchImg}
            alt='Поиск'
            className='searchform__search-img' />
          <input
            type="text"
            value={inputText || ''}
            onChange={handleChange}
            placeholder='Фильм'
            className='searchform__input'
          />
        </form>
        <div className='searchform__submit-container'>
          <button type="submit" className="searchform__form-submit">
            <img
              src={imgButton}
              alt='Кнопка'
              className='searchform__search-img-submit' />
          </button>
          <span className='searchform__border-right'></span>
        </div>
      </div>
      <div className='searchform__checkbox-contaioner'>
        <label className='searchform__group-checkbox'>
          <input id='searchShortMovies' type="checkbox" className='searchform__checkbox' />
          <span className='searchform__checkbox-span'></span>
        </label>
        <p className='searchform__paragraph'>Короткометражки</p>
      </div>
    </section>
  )
}

export default SearchForm;