import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

import AccountButton from '../AccountButton/AccountButton';

function Navigation({ loggedIn }) {
  return (
    <>
      {!loggedIn && (
        <nav className='nav__main'>
          <Link to="/signup" className="nav__main-reg-link">
            Регистрация
          </Link>
          <Link to="/signin" className="nav__main-auth-link">
            <button className='nav__auth-button' type='button'>Войти</button>
          </Link>
        </nav>
      )}
      {loggedIn && (
        <nav className='nav__movies'>
          <div className='nav__movies-links'>
            <NavLink 
              to='/movies' 
              className='nav__movies-link' 
              activeClassName='nav__movies-link_active'
            >
              Фильмы
            </NavLink>
            <NavLink 
              to='/saved-movies'
              className='nav__movies-link' 
              activeClassName='nav__movies-link_active'
            >
              Сохранённые фильмы
            </NavLink>
          </div>  
          <Link to='/profile' className='nav__account-button'>
            <AccountButton />
          </Link>
        </nav>
      )}
    </>  
  )
}

export default Navigation;

