import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

import Logo from '../Logo/Logo';
import { regExp } from '../../utils/regExp';

function Register() {
  return (
    <section className='auth-reg__page'>
      <div className='auth-reg__heading'>
        <Logo />
        <h2 className='auth-reg__title'>Добро пожаловать!</h2>
      </div>
      <form 
        className='auth-reg__form'
        // onSubmit={handleSubmit}
      >
        <div className='auth-reg__input-block'>
          <span className='auth-reg__input-title'>Имя</span>
          <input
            className='auth-reg__input'
            type="text"
            name="name"
            required
            autoComplete="off"
            minLength="2"
            maxLength="50"
            pattern={regExp.isValidName}
            // value={ name || ''}
            // onChange={handleNameChange}
          />
        </div>
        <span className="span__input-error" id='name'>ошибка</span>
        <div className='auth-reg__input-block'>
          <span className='auth-reg__input-title'>E-mail</span>
          <input
            className='auth-reg__input'
            type="email"
            name="email"
            required
            autoComplete="off"
            pattern={regExp.isEmail}
            // value={ email || ''}
            // onChange={handleEmailChange}
          />
        </div>
        <span className="span__input-error" id='email'>ошибка</span>
        <div className='auth-reg__input-block'>
          <span className='auth-reg__input-title'>Пароль</span>
          <input
            className='auth-reg__input'
            type="password"
            name="password"
            required
            autoComplete="off"
            minLength="8"
            // value={ password || ''}
            // onChange={handlePasswordChange}
          />
        </div>
        <span className="span__input-error" id='password'>ошибка</span>
        <span className="auth-reg__input-error">Что-то пошло не так...</span>
        <button className='auth-reg__submit-button' type="submit">
          Зарегистрироваться
        </button>
        <span className='auth__signup-text'>Уже зарегистрированы?
          <Link to='/signin' className='signup-signin__link'>
            Войти
          </Link>
        </span>
      </form>   
    </section>
  )
}

export default Register;