import React from 'react';
import './IconSearch.css';

import iconSearch from '../../images/icon-search.svg';

function IconSearch() {
  return (
    <img 
      className='icon__search'
      src={iconSearch}
      alt='иконка поиска'
    />
  )
}

export default IconSearch;
