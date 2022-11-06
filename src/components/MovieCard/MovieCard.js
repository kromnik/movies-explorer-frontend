import React from 'react';
import './MovieCard.css';

import CardCheckbox from '../CardCheckbox/CardCheckbox';
import { MOVIES_IMAGE_URL } from '../../utils/constants';

function MovieCard({ card, onChangeSaveState, isSaved }) {
  function handleCardButtonClick() {
    onChangeSaveState(card);
  };

  return (
    <article className='movie-card'>
      <a
        className='movie-card__link'
        href={card.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className='movie-card__image'
          src={`${MOVIES_IMAGE_URL}${card.image.url}`}
          alt="постер фильма"
        />
      </a>
      <div className='movie-card__name-checkbox-block'>
        <h2 className='movie-card__name'>{card.nameRU || card.nameEN}</h2>
        <div className='movie-card__card-button'>
          <CardCheckbox isSaved={isSaved} onClick={handleCardButtonClick} />
        </div>
      </div>
      <span className='movie-card__duration'>{card.duration}</span>
    </article>
  )
}

export default MovieCard;
