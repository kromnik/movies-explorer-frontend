import React from 'react';
import './Techs.css';

import MainTitle from '../MainTitle/MainTitle';
import IconTechs from '../IconTechs/IconTechs';
import { stackList } from '../../utils/dataMain';

function Techs() {
  return (
    <section className='techs' id='techs'>
      <div className='main__content'>
        <MainTitle title='Технологии' />
        <h2 className='techs__title'>7 технологий</h2>
        <p className='techs__text'>На курсе веб-разработки мы освоили технологии, 
        которые применили в дипломном проекте.
        </p>
        <ul className='techs__stack-list'>
          {stackList.map((item) => (
            <IconTechs key={item} title={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Techs;