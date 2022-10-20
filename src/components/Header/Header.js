import React from 'react';
import './Header.css';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import NavigationMobile from '../NavigationMobile/NavigationMobile';

function Header({ loggedIn }) {
  return (
    <header className={`header__main ${loggedIn ? 'header__main_type_movies' : ''}`}>
      <Logo />
      <Navigation loggedIn={loggedIn} />
      <NavigationMobile loggedIn={loggedIn}/>
    </header>
  )
}

export default Header;
