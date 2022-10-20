import React from 'react';
import './Promo.css';

import LogoPromo from '../../images/logo-promo.svg';

function Promo() {
  return (
    <section className='promo'>
      <h1 className='promo__title'>
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img 
        className='promo__image'
        src={LogoPromo}
        alt='логотип промо страницы'
      />  
    </section>
  )
}

export default Promo;