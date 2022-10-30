import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

import Header from '../Header/Header';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// import { regExp } from '../../utils/regExp';
import { useFormWithValidation } from '../../utils/validation';

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  
  useEffect(() => {
    currentUser && resetForm(currentUser, {}, true);
  }, [currentUser, resetForm]);
  
  function handleSubmit(e){
    e.preventDefault();
    props.onUpdateProfile({name: values.name, email: values.email });
  }
  
  return (
    <div className='page-main'>
      <Header loggedIn={props.loggedIn} />
      <main className='profile'>
        <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>
        <form 
          className='profile__form'
          onSubmit={handleSubmit}
        >
          <div className='profile__input-block'>
            <span className='profile__input-title'>Имя</span>
            <input
              className='profile__input'
              type="text"
              name="name"
              required
              placeholder="Имя"
              autoComplete="off"
              minLength="2"
              maxLength="30"
              // pattern={regExp.isValidName}
              value={values.name ?? currentUser.name}
              onChange={handleChange}
            />
          </div>
          <span className="span__input-error" id='name-err'>{errors.name}</span>
          <div className='profile__input-block'>
            <span className='profile__input-title'>E-mail</span>
            <input
              className='profile__input'
              type="email"
              name="email"
              required
              placeholder="Email"
              autoComplete="off"
              // pattern={regExp.isEmail}
              value={values.email ?? currentUser.email}
              onChange={handleChange}
            />
          </div>
          <span className="span__input-error" id='email-err'>{errors.email}</span>
          <span className="auth-reg__input-error">{props.message}</span> 
          <button
            className={`profile__submit-button
              ${!isValid && 'profile__submit-button_disabled'}
              ${
                values.email === currentUser.email &&
                values.name === currentUser.name &&
                "profile__submit-button_disabled"
              }
              ${props.isLoading && 'profile__submit-button_disabled'}`}
            type="submit"
          >
            {props.isLoading ? 'Сохранение...' : 'Редактировать'}
          </button>
          <Link to="/" className="profile__signout-link">
            <button 
              className='profile__signout-link-button'
              type="button"
              onClick={props.onSignOut}
            >
              Выйти из аккаунта
            </button>
          </Link>
        </form>   
      </main>
    </div>
  )
}

export default Profile;
