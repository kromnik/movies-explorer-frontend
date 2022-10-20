import React from 'react';
import './SearchForm.css';

import IconSearch from '../IconSearch/IconSearch';
import SearchButton from '../SearchButton/SearchButton';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='search'>
        <div className='search__container'>
          <form className='search__form'>
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
              />
              <SearchButton />
            </div>
            <FilterCheckbox />
          </form>
        </div>
    </section>
  )
}

export default SearchForm;
