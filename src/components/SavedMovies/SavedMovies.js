import { useState, useEffect } from 'react';
import './SavedMovies.css';

import Header from '../Header/Header';
import SavedSearchForm from '../SavedSearchForm/SavedSearchForm';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({ onSortShortMovie, savedMovies, foundSavedMovies, ...props }) {
  const [shortMovies, setShortMovies] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  let savedMoviesArray = foundSavedMovies.length > 0 ? foundSavedMovies : savedMovies;
  
  if (props.message) {
    savedMoviesArray = [];
  };
  
  useEffect(() => {
    props.setMessage()
  }, []);

  useEffect(() => {
    isChecked && !props.message && setShortMovies(onSortShortMovie(savedMoviesArray));
  }, [isChecked, props.message, onSortShortMovie, savedMoviesArray]);

  useEffect(() => {
    props.setFoundSavedMovies([])
  }, []);

  return (
    <div className='page-main'>
      <Header loggedIn={props.loggedIn} />
      <main className='main__content main__content_size_medium main__content_size_least'>
        <SavedSearchForm onSearchMovies={props.onSearchSavedMovies} setIsChecked={setIsChecked} isChecked={isChecked} />
        <SavedMoviesCardList
          isLoading={props.isLoading}
          savedMoviesCardList={isChecked ? shortMovies : savedMoviesArray}
          onDeleteSavedMovie={props.onDeleteSavedMovie}
          message={props.message}
        />
      </main>
      <Footer />
    </div>
  )
}

export default SavedMovies;
