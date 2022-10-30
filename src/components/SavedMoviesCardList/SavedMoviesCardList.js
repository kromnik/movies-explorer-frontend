import { useState, useEffect, useCallback } from 'react';

import Preloader from '../Preloader/Preloader';
import SavedMovieCard from "../SavedMovieCard/SavedMovieCard";
import { 
  CARDS_ARRAY_MAX_WIN_SIZE,
  CARDS_ARRAY_MEDIUM_WIN_SIZE,
  CARDS_ARRAY_MIN_WIN_SIZE,
 } from '../../utils/constants';

function SavedMoviesCardList(props) {
  const windowWidth = window.innerWidth;
  const [cardsSavedMoviesArray, setCardsSavedMoviesArray] = useState(0);
  const savedMoviesCardList = props.savedMoviesCardList || [];

  const renderCardsSavedMovies = useCallback(() => {
    if (windowWidth > 1279) {
      setCardsSavedMoviesArray(CARDS_ARRAY_MAX_WIN_SIZE);
    } else if (windowWidth > 767 && windowWidth <= 1279) {
      setCardsSavedMoviesArray(CARDS_ARRAY_MEDIUM_WIN_SIZE);
    } else {
      setCardsSavedMoviesArray(CARDS_ARRAY_MIN_WIN_SIZE);
    }
  }, [windowWidth]);
  
  useEffect(() => renderCardsSavedMovies(), [renderCardsSavedMovies]);

  useEffect(() => {
    window.addEventListener("resize", renderCardsSavedMovies);
    return () => {
      window.removeEventListener("resize", renderCardsSavedMovies);
    };
  }, [renderCardsSavedMovies]);
  
  return (
    <>
      {props.isLoading ? 
        <Preloader /> : (
          <>
            {props.message && 
            <span className='movies-card-list__message'>
              {props.message}
            </span>}
            <section className="movies-card-list__elements">
              {savedMoviesCardList.slice(0, cardsSavedMoviesArray).map((movie) => {
                return (
                  <SavedMovieCard 
                    key={movie._id}
                    card={movie}
                    onDeleteSavedMovie={props.onDeleteSavedMovie}
                  />
                );
              })}
            </section>
          </>
        )
      }      
    </>
  );
}

export default SavedMoviesCardList;
