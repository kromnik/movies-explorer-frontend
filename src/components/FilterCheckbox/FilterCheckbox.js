import { useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onFilterCheckBoxToggle }) {
  const [isChecked, setIsChecked] = useState(false);
  
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
          checked={isChecked}
          onChange={handleChange}
        />
        <span className='filter-checkbox__tumbler'></span>
      </label>
      <p className='filter-checkbox__title'>Короткометражки</p>
    </div>
  )
}
export default FilterCheckbox;
