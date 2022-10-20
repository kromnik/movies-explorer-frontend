import React from 'react';
import './Portfolio.css';

import arrow from '../../images/arrow.svg';

function Portfolio({ title, url }) {
  return (
    <li className='about-me__portfolio-item'>
      <a 
        className='about-me__portfolio-link'
        href={url} 
        target='_blank' 
        rel="noreferrer">
        {title}
        <img 
          className='about-me__portfolio-arrow'
          src={arrow}
          alt='иконка стрелки'
        />
      </a>  
    </li>
  )
}

export default Portfolio;
