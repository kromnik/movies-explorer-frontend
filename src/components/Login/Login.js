import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

import Logo from '../Logo/Logo';
import { useFormWithValidation } from '../../utils/validation';

function Login(props) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  useEffect(() => {
    resetForm({});
  }, [resetForm]);

  function handleSubmit(e){
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    props.onLogin(values);
  }
  
  return (
    <section className='auth-reg__page'>
      <div className='auth-reg__heading'>
        <Logo />
        <h2 className='auth-reg__title'>Рады видеть!</h2>
      </div>
      <form 
        className='auth-reg__form'
        onSubmit={handleSubmit}
        noValidate
      >
        <div className='auth-reg__input-block'>
          <span className='auth-reg__input-title'>E-mail</span>
          <input
            className='auth-reg__input'
            type="email"
            name="email"
            required
            autoComplete="off"
            value={values.email || ''}
            onChange={handleChange}
            disabled={props.isLoading}
          />
        </div>
        <span className="span__input-error" id='email-err'>{errors.email}</span>
        <div className='auth-reg__input-block'>
          <span className='auth-reg__input-title'>Пароль</span>
          <input
            className='auth-reg__input auth-reg__input_color_red'
            type="password"
            name="password"
            required
            autoComplete="off"
            minLength="8"
            value={values.password || ''}
            onChange={handleChange}
            disabled={props.isLoading}
          />
        </div>
        <span className="span__input-error" id='password-err'>{errors.password}</span>
        <span className="auth-reg__input-error">{props.message}</span>
        <button 
          className={`auth-reg__submit-button 
            ${!isValid && 'auth-reg__submit-button_disabled'}
            ${props.isLoading && 'auth-reg__submit-button_disabled'}`}
          type="submit"
        >
          {props.isLoading ? 'Вход...' : 'Войти'}
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