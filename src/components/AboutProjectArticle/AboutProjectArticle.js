import React from 'react';
import './AboutProjectArticle.css';

const AboutProjectArticle = ({ heading, text }) => {
  return (
    <article className='about-project__article'>
      <h3 className='about-project__article-heading'>{heading}</h3>
      <p className='about-project__article-text'>{text}</p>
    </article>
  )
};

export default AboutProjectArticle;
