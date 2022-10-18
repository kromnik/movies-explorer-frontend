import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavigationMobile.css';

import IconCloseBtn from '../IconCloseBtn/IconCloseBtn';
import IconBurgerBtn from '../IconBurgerBtn/IconBurgerBtn';
import AccountButton from '../AccountButton/AccountButton';

function NavigationMobile({ loggedIn }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavButtonClick = () => { setIsOpen(false) };

  return (
    loggedIn && (
      <>
        {isOpen ? (
          <button 
            className='nav__mobile-close-btn'
            type="button"
            onClick={handleNavButtonClick}
          >
            <IconCloseBtn className='icon__close-btn'/>
          </button>
        ) : ( 
          <button 
            className='nav__mobile-burger-btn'
            type="button"
            onClick={() => { setIsOpen(!isOpen) }}
          >
            <IconBurgerBtn />
          </button>
        )}

        {isOpen && (
          <>
            <nav className='nav__mobile'>
              <div className='nav__mobile-links'>
                <NavLink 
                  exact to="/"
                  className='nav__mobile-link'
                  activeClassName='nav__mobile-link nav__mobile-link_active'
                  onClick={handleNavButtonClick}
                >
                  Главная
                </NavLink>
                <NavLink 
                  to="/movies"
                  className='nav__mobile-link'
                  activeClassName='nav__mobile-link nav__mobile-link_active'
                  onClick={handleNavButtonClick}
                >
                  Фильмы
                </NavLink>
                <NavLink 
                  to="/saved-movies"
                  className='nav__mobile-link'
                  activeClassName='nav__mobile-link nav__mobile-link_active'
                  onClick={handleNavButtonClick}
                >
                  Сохранённые фильмы
                </NavLink>
              </div>
              <Link to='/profile' 
                className='nav__mobile-account-button'
                onClick={handleNavButtonClick}
              > 
                <AccountButton />
              </Link>
            </nav>
            <div className='nav__mobile-overlay'></div>
          </>
        )}
      </>
    )
  );
}

export default NavigationMobile;