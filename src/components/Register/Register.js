import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

import Logo from '../Logo/Logo';
// import { regExp } from '../../utils/regExp';
import { useFormWithValidation } from '../../utils/validation';

function Register(props) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  useEffect(() => {
    resetForm({});
  }, [resetForm]);

  function handleSubmit(e){
    e.preventDefault();
    if (!values.name || !values.email || !values.password) {
      return;
    }
    props.onRegister(values);
  }
  
  return (
    <section className='auth-reg__page'>
      <div className='auth-reg__heading'>
        <Logo />
        <h2 className='auth-reg__title'>Добро пожаловать!</h2>
      </div>
      <form 
        className='auth-reg__form'
        onSubmit={handleSubmit}
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
            maxLength="30"
            // pattern={regExp.isValidName}
            value={values.name || ''}
            onChange={handleChange}
          />
        </div>
        <span className="span__input-error" id='name-err'>{errors.name}</span>
        <div className='auth-reg__input-block'>
          <span className='auth-reg__input-title'>E-mail</span>
          <input
            className='auth-reg__input'
            type="email"
            name="email"
            required
            autoComplete="off"
            // pattern={regExp.isEmail}
            value={values.email || ''}
            onChange={handleChange}
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
          />
        </div>
        <span className="span__input-error" id='password-err'>{errors.password}</span>
        <span className="auth-reg__input-error">{props.message}</span>
        <button 
          className={`auth-reg__submit-button 
            ${!isValid && 'auth-reg__submit-button_disabled'}
            ${props.isLoading && 'auth-reg__submit-button_disabled'}`} 
          type="submit">
          {props.isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
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