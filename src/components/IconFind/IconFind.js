import React from 'react';
import './IconFind.css';

import iconFind from '../../images/icon-find.svg';

function IconFind() {
  return (
    <img 
      className='icon__find'
      src={iconFind}
      alt='иконка поиска'
    /> 
  )
}

export default IconFind;