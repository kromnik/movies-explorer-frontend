import React from 'react';
import './AboutMe.css';

import MainTitle from '../MainTitle/MainTitle';
import SocialNet from '../SocialNet/SocialNet';
import Portfolio from '../Portfolio/Portfolio';
import { socials, portfolioList } from '../../utils/dataMain';
import avatar from '../../images/avatar.jpg';

function AboutMe() {
  return (
    <section className='about-me' id='student'>
      <div className='main__content main__content_size_min'>
        <MainTitle title='Студент' />
        <div className='about-me__profile'>
          <div className='about-me__profile-info'>
            <h2 className='about-me__name'>Roki Kiro</h2>
            <p className='about-me__skill-age'>Начинающий фронтенд-разработчик, 40+ y.o.</p>
            <p className='about-me__about-myself'>
              Живу в славном городе СПб, выпускник СПбГУКиТ, специальность инженер-механик. 
              Семья, двое детей. Не на шутку увлекся кодом. Хочу стать качественным программистом. 
              После того, как пройду курс по веб-разработке, был бы очень рад участвовать 
              в интересных проектах и сменить место работы.
            </p>
            <ul className='about-me__socials'>
              {socials.map((net) => (
                <SocialNet 
                  key={net.id} 
                  title={net.title} 
                  url={net.url} 
                  modifier={net.modifier} 
                />
              ))}
            </ul>
          </div>  
          <img 
            className='about-me__avatar'
            src={avatar}
            alt="фото cтудента"
          />  
        </div>
        <div className='about-me__portfolio'>
          <h3 className='about-me__portfolio-title'>Портфолио</h3>
          <ul className='about-me__portfolio-list'>
            {portfolioList.map((project) => (
              <Portfolio key={project.id} title={project.title} url={project.url} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
