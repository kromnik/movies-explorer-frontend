import { useState } from 'react';
import './Movies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({ loggedIn }) {
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <div className='page-main'>
      <Header loggedIn={loggedIn} />
      <main className='main__content main__content_size_medium main__content_size_least'> 
        <SearchForm />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList />
        )}
      </main>  
      <Footer />
    </div>
  )
}

export default Movies;
