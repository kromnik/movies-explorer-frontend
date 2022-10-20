import React from 'react';
import './SearchButton.css';

import IconFind from '../IconFind/IconFind';

function SearchButton() {
  return (
    <button className='search-button' type='submit'>
      <IconFind />
    </button>
  )
}

export default SearchButton;