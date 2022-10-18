import React from 'react';
import { useHistory } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound(loggedIn) {
  const history = useHistory();

  function handleClick() {
    if (loggedIn) {
      history.goBack();
    } else {
      history.push("/");
    }
  }
  
  return (
    <section className='page-not-found'>
      <h1 className='page-not-found__title'>404</h1>
      <span className='page-not-found__message'>Страница не найдена</span>
      <button className='page-not-found__button-link' onClick={handleClick}>Назад</button>
    </section>
  )
}

export default PageNotFound;
