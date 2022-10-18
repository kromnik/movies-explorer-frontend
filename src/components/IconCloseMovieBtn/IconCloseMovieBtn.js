import React from 'react';
import './IconCloseMovieBtn.css'

import iconCloseMovieBtn from '../../images/icon-close.svg';

function IconCloseMovieBtn() {
  return (
    <img 
      className='icon__close-movie-btn'
      src={iconCloseMovieBtn}
      alt='иконка закрытия'
    />
  )
}

export default IconCloseMovieBtn;