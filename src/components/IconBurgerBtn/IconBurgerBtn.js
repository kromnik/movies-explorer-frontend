import React from 'react';
import './IconBurgerBtn.css';

import iconBurgerBtn from '../../images/icon-burger.svg';

function IconBurgerBtn() {
  return (
    <img 
      className='icon__burger-btn'
      src={iconBurgerBtn}
      alt='иконка меню-бургер'
    />
  )
}

export default IconBurgerBtn;
