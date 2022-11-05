import { useState, useEffect } from 'react';
import './SearchForm.css';

import IconSearch from '../IconSearch/IconSearch';
import SearchButton from '../SearchButton/SearchButton';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSearchMovies, setIsChecked, isChecked }) {
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem("query"));
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  function handleInputChange(e) {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    setErrorMessage("");
  }, [searchQuery]);
  
  function handleSubmit(e) {
    e.preventDefault();
    if (!searchQuery) {
     setErrorMessage('Нужно ввести ключевое слово');
     return;
    }
    onSearchMovies(searchQuery);
  }  
  
  function handleFilterCheckBoxToggle(checked) {
    setIsShortMovies(checked);
    setIsChecked(!isShortMovies);
  }

  return (
    <section className='search'>
        <div className='search__container'>
          <form className='search__form' onSubmit={handleSubmit} noValidate>
            <div className='search__form-input-block'>
              <IconSearch />
              <input 
                className='search__form-input'
                type='text'
                required
                placeholder="Фильм"
                autoComplete="off"
                minLength="1"
                maxLength="150"
                value={searchQuery ?? ""}
                onChange={handleInputChange}
              />
              <span className='search__input-error'>{errorMessage}</span>
              <SearchButton />
            </div>
            <FilterCheckbox  onFilterCheckBoxToggle={handleFilterCheckBoxToggle} setIsChecked={setIsChecked} isChecked={isChecked} />
          </form>
        </div>
    </section>
  )
}

export default SearchForm;
