import { useState, useEffect } from 'react';
import './Movies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({ onSortShortMovie, foundMovies, ...props }) {
  const [shortMovies, setShortMovies] = useState([]);
  const [isChecked, setIsChecked] = useState(localStorage.getItem("checked"));

  useEffect(() => {
    props.setMessage()
  }, []);
  
  useEffect(() => {
    isChecked && setShortMovies(onSortShortMovie(foundMovies));
  }, [isChecked, onSortShortMovie, foundMovies]);

  return (
    <div className='page-main'>
      <Header loggedIn={props.loggedIn} />
      <main className='main__content main__content_size_medium main__content_size_least'>
        <SearchForm onSearchMovies={props.onSearchMovies} setIsChecked={setIsChecked} />
        <MoviesCardList
          isLoading={props.isLoading}
          moviesCardList={isChecked ? shortMovies : foundMovies}
          savedMovies={props.savedMovies}
          onSaveMovie={props.onSaveMovie}
          onDeleteSavedMovie={props.onDeleteSavedMovie}
          message={props.message}
        />
      </main>
      <Footer />
    </div>
  )
}

export default Movies;
