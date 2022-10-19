import React from 'react';
import './MoviesCardList.css';

import { moviesCards } from '../../utils/dataMovies';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <>
      <section className='movies-card-list__elements'>
        {moviesCards.map((card) => (
          <MoviesCard
            key={card.id}
            {...card}
          />  
        ))}
      </section>
      <button 
        className='movies-card-list__else-btn'
        type='button'
      >
        Еще
      </button>
    </>
  )
}

export default MoviesCardList;