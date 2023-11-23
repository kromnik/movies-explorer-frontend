import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onFilterCheckBoxToggle, isChecked, setIsChecked }) {
  
  function handleChange(e) {
    onFilterCheckBoxToggle(!isChecked);
    setIsChecked(e.target.checked);
  }
  
  return (
    <div className='filter-checkbox'>
      <label className='filter-checkbox__label'>
        <input 
          className='filter-checkbox__input'
          type='checkbox'
          checked={isChecked ?? false}
          onChange={handleChange}
        />
        <span className='filter-checkbox__tumbler'></span>
      </label>
      <p className='filter-checkbox__title'>Короткометражки</p>
    </div>
  )
}
export default FilterCheckbox;
