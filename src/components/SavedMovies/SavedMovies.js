import { useState } from 'react';
import './SavedMovies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({ loggedIn }) {
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <div className='page-main'>
      <Header loggedIn={loggedIn}/>
      <main 
        className='main__content main__content_size_medium main__content_size_least'
      > 
        <SearchForm />
        {isLoading ? (
          <Preloader />
        ) : (
          <SavedMoviesCardList 
            className="movies-card-list__elements_type_save 
              movies-card-list__else-btn_type_save" 
          />
        )}
      </main>  
      <Footer />
    </div>
  )
}

export default SavedMovies;
