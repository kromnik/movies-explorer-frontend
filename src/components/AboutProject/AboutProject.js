import React from 'react';
import './AboutProject.css';

import MainTitle from '../MainTitle/MainTitle';
import AboutProjectArticle from '../AboutProjectArticle/AboutProjectArticle';

function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <div className='main__content'>
        <MainTitle title='О проекте' />
        <div className='about-project__articles'>
          <AboutProjectArticle 
            heading='Дипломный проект включал 5 этапов'
            text='Составление плана, работу над бэкендом, 
                  вёрстку, добавление функциональности и финальные доработки.'
          />
          <AboutProjectArticle 
            heading='На выполнение диплома ушло 5 недель'
            text='У каждого этапа был мягкий и жёсткий дедлайн, 
                  которые нужно было соблюдать, чтобы успешно защититься.'
          />
        </div>
        <div className='about-project__map'>
          <p className='about-project__map-time'>1 неделя</p>
          <p className='about-project__map-skill'>Back-end</p>
          <p className='about-project__map-time about-project__map-time_color_grey'>4 недели</p>
          <p className='about-project__map-skill about-project__map-skill_skill_front'>Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
