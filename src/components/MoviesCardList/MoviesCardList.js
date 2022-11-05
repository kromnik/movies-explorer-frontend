import { useState, useEffect, useCallback } from 'react';
import './MoviesCardList.css';

import MovieCard from '../MovieCard/MovieCard';
import Preloader from '../Preloader/Preloader';
import UseWindowSize from '../../utils/UseWindowSize';
import { 
  CARDS_ARRAY_MAX_WIN_SIZE,
  CARDS_ARRAY_MEDIUM_WIN_SIZE,
  CARDS_ARRAY_MIN_WIN_SIZE,
  NEXT_CARDS_MAX_WIN_SIZE,
  NEXT_CARDS_MEDIUM_WIN_SIZE
 } from '../../utils/constants';

function MoviesCardList({ savedMovies, ...props }) {
  const moviesCardList = props.moviesCardList || [];
  // const windowWidth = window.innerWidth;
  const [cardsMoviesArray, setCardsMoviesArray] = useState(0);
  const size = UseWindowSize();

  const renderCardsMovies = useCallback(() => {
    if (size > 1279) {
      setCardsMoviesArray(CARDS_ARRAY_MAX_WIN_SIZE);
    } else if (size > 767 && size <= 1279) {
      setCardsMoviesArray(CARDS_ARRAY_MEDIUM_WIN_SIZE);
    } else {
      setCardsMoviesArray(CARDS_ARRAY_MIN_WIN_SIZE);
    }
  }, []);
  
  const handleNextCardClick = () => {
    if (size > 1279) {
      setCardsMoviesArray(cardsMoviesArray + NEXT_CARDS_MAX_WIN_SIZE);
    } else {
      setCardsMoviesArray(cardsMoviesArray + NEXT_CARDS_MEDIUM_WIN_SIZE);
    }
  };

  useEffect(() => {
    renderCardsMovies();
  }, []);

  // useEffect(() => {
  //   window.addEventListener("resize", renderCardsMovies);
  //   return () => {
  //     window.removeEventListener("resize", renderCardsMovies);
  //   };
  // }, []);
  
  return (
    <>
      {props.isLoading ? 
        <Preloader /> : (
          <>
            {props.message && 
            <span className='movies-card-list__message'>
              {props.message}
            </span>}
            <section className='movies-card-list__elements'>
              {moviesCardList && moviesCardList.slice(0, cardsMoviesArray).map((movie) => {
                if (savedMovies.find((i) => i.movieId === movie.id)) {
                  return (  
                    <MovieCard 
                      key={movie.id}
                      card={movie}
                      onChangeSaveState={props.onDeleteSavedMovie}
                      isSaved={true}
                    />
                  );  
                } else {
                  return (
                    <MovieCard 
                      key={movie.id}
                      card={movie}
                      onChangeSaveState={props.onSaveMovie}
                      isSaved={false}
                    />
                  );   
                } 
              })}
            </section>
            {moviesCardList.length > cardsMoviesArray && ( 
              <button 
                className='movies-card-list__else-btn'
                type='button'
                onClick={handleNextCardClick}
              >
                Еще
              </button>
            )}  
          </>  
        )
      }
    </>
  )
}

export default MoviesCardList;