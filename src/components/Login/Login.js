import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

import Logo from '../Logo/Logo';
import { regExp } from '../../utils/regExp';

function Login() {
  return (
    <section className='auth-reg__page'>
      <div className='auth-reg__heading'>
        <Logo />
        <h2 className='auth-reg__title'>Рады видеть!</h2>
      </div>
      <form 
        className='auth-reg__form'
        // onSubmit={handleSubmit}
      >
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
          Войти
        </button>
        <span className='auth__signup-text'>Ещё не зарегистрированы?
          <Link to='/signup' className='signup-signin__link'>
            Регистрация
          </Link>
        </span>
      </form>   
    </section>
  )
}

export default Login;