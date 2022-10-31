import React from 'react';
import './MoviesCard.css';

import CardCheckbox from '../CardCheckbox/CardCheckbox';

function MoviesCard({ ...card }) {
  return (
    <article className='movies-card'>
      <img
        className='movies-card__image'
        src={card.thumbnail}
        alt="постер фильма"
      />
      <div className='movies-card__name-checkbox-block'>
        <h2 className='movies-card__name'>{card.nameRU}</h2>
        <button className='movies-card__card-button' type='button'>
          <CardCheckbox />
        </button>
      </div>
      <span className='movies-card__duration'>{card.duration}</span>
    </article>
  )
}

export default MoviesCard;
