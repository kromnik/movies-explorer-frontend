import React from 'react';
import './SocialNet.css';

function SocialNet({ title, url, modifier }) {
  return (
    <li className='social-net'>
      <a 
        className={`social-link social-link_type_${modifier}`}
        href={url} 
        target='_blank' 
        rel="noreferrer">
        {title}
      </a>
    </li>
  )
}

export default SocialNet;
