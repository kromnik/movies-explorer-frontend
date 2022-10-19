import React from 'react';
import './NavTab.css';

import { navTabs } from '../../utils/dataMain';

function NavTab() {
  return (
    <nav className='nav-tab'>
        {navTabs.map((tab) => (
          <a key={tab.id} className='nav-tab__link' href={tab.link}>
            {tab.title}
          </a>
        ))}
    </nav>
  )
}

export default NavTab;
