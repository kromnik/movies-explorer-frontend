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
    <main className='page-main'>
      <Header loggedIn={loggedIn} />
      <div className='main__content main__content_size_medium main__content_size_least'> 
        <SearchForm />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList />
        )}
      </div>  
      <Footer />
    </main>
  )
}

export default Movies;
