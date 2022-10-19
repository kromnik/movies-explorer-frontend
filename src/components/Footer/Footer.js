import React from 'react';
import './Footer.css';

import SocialNet from '../SocialNet/SocialNet';
import { footerLinks } from '../../utils/dataMain';

function Footer() {
  return (
    <footer className='footer'>
        <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className='footer__content-block'>
          <p className="footer__copyright">&copy; 2022</p>
          <ul className='footer__links'>
            {footerLinks.map((link) => ( 
              <SocialNet key={link.id} title={link.title} url={link.url} />
            ))}
          </ul>
        </div>  
    </footer>
  )
}

export default Footer;
