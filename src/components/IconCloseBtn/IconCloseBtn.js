import React from 'react';
import './IconCloseBtn.css';

import iconCloseBtn from '../../images/icon-close.svg';

function IconCloseBtn() {
  return (
    <img 
      className='icon__close-btn'
      src={iconCloseBtn}
      alt='иконка закрытия'
    />
  )
}

export default IconCloseBtn;
