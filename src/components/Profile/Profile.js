import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

import Header from '../Header/Header';
import { regExp } from '../../utils/regExp';

function Profile({ loggedIn }) {
  return (
    <div className='page-main'>
      <Header loggedIn={loggedIn} />
      <main className='profile'>
        <h2 className='profile__title'>Привет, Roki Kiro!</h2>
        <form 
          className='profile__form'
          // onSubmit={handleSubmit}
        >
          <div className='profile__input-block'>
            <span className='profile__input-title'>Имя</span>
            <input
              className='profile__input'
              type="text"
              name="name"
              required
              placeholder="Имя"
              autoComplete="off"
              minLength="2"
              maxLength="40"
              pattern={regExp.isValidName}
              // value={ name || ''}
              // onChange={handleNameChange}
            />
          </div>
          <span className="span__input-error" id='name'>ошибка</span>
          <div className='profile__input-block'>
            <span className='profile__input-title'>E-mail</span>
            <input
              className='profile__input'
              type="email"
              name="email"
              required
              placeholder="Email"
              autoComplete="off"
              pattern={regExp.isEmail}
              // value={ email || ''}
              // onChange={handleEmailChange}
            />
          </div>
          <span className="span__input-error" id='email'>ошибка</span>
          <span className="auth-reg__input-error">Что-то пошло не так...</span> 
          <button
            className='profile__submit-button'
            type="submit"
          >
            Редактировать
          </button>
          <Link to="/" className="profile__signout-link">
            Выйти из аккаунта
          </Link>
        </form>   
      </main>
    </div>
  )
}

export default Profile;
