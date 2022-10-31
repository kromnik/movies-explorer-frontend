import React from 'react';
import IconCloseMovieBtn from '../IconCloseMovieBtn/IconCloseMovieBtn';

function SavedMovieCard({ card, onDeleteSavedMovie }) {
  function handleCardButtonClick() {
    onDeleteSavedMovie({ id: card.movieId });
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
          src={card.image}
          alt="постер фильма"
        />
      </a>
      <div className='movie-card__name-checkbox-block'>
        <h2 className='movie-card__name'>{card.nameRU || card.nameEN}</h2>
        <button
          className='movie-card__card-button'
          type='button'
          onClick={handleCardButtonClick}
        >
          <IconCloseMovieBtn />
        </button>
      </div>
      <span className='movie-card__duration'>{card.duration}</span>
    </article>
  )
}

export default SavedMovieCard;