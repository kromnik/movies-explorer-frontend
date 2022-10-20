import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

import logo from '../../images/logo.svg';

function Logo() {
  return (
    <Link to='/'>
      <img className='logo' src={logo} alt='логотип' />
    </Link>
    
  )
}

export default Logo;