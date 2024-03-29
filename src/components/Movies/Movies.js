import { useState, useEffect } from 'react';
import './Movies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({ onSortShortMovie, foundMovies, isChecked, setIsChecked, ...props }) {
  const [shortMovies, setShortMovies] = useState([]);

  useEffect(() => {
    props.setMessage()
  }, []);
  
  useEffect(() => {
    localStorage.setItem("checked", isChecked);
    isChecked && setShortMovies(onSortShortMovie(foundMovies));
  }, [isChecked, onSortShortMovie, foundMovies]);

  return (
    <div className='page-main'>
      <Header loggedIn={props.loggedIn} />
      <main className='main__content main__content_size_medium main__content_size_least'>
        <SearchForm onSearchMovies={props.onSearchMovies} setIsChecked={setIsChecked} isChecked={isChecked}/>
        <MoviesCardList
          isLoading={props.isLoading}
          moviesCardList={isChecked ? shortMovies : JSON.parse(localStorage.getItem("foundMovies"))}
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
