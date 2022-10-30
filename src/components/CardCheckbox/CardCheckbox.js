import React from 'react';
import './CardCheckbox.css';

function CardCheckbox({ onClick, isSaved }) {
  return (
    <div className='card-checkbox'
         
    >
      <label className='card-checkbox__label'>
        <input 
          className='card-checkbox__input'
          type='checkbox'
          defaultChecked={isSaved}
          onClick={onClick}
        />
        <span className='card-checkbox__tumbler'></span>
      </label>
    </div>
  )
}
export default CardCheckbox;