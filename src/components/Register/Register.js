import './Register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [nameError, setNameError] = useState('Имя не может быть пустым');
  const [emailError, setEmailError] = useState('Емейл не может быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || emailError || passwordError) {
      setFormValid(false)
    } else { setFormValid(true) }
  }, [nameError, emailError, passwordError])

  function blurHandler(e) {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true)
        break;
      case 'name':
        setNameDirty(true)
        break;
      default:
        break;
    }
  }

  function nameHandler(e) {
    setName(e.target.value);
    if (e.target.value.length < 2) {
      setNameError('Имя должно иметь более 2 символов')
      if (!e.target.value) {
        setNameError('Имя не может быть пустым')
      }
    } else { setNameError('') }
  }


  function emailHandler(e) {
    setEmail(e.target.value);

    if (!String(e.target.value).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      setEmailError('Емейл не корректный')
    } else { setEmailError('') };
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
    if (e.target.value.length < 6 || e.target.value.length > 50) {
      setPasswordError('Пароль должен быть длинее 6 и меньше 50')
      if (!e.target.value) {
        setPasswordError('Пароль не может быть пустым')
      }
    } else { setPasswordError('') }
  }

  return (
    <div className='register'>
      <h1 className='register__welcome'>Добро пожаловать</h1>
      <form className="register__form">
        <fieldset className="register__set">
          <div className='register__box'>
            <label htmlFor='name' className='register__label'>Имя</label>
            <input
              value={name}
              onBlur={e => blurHandler(e)}
              onChange={e => nameHandler(e)}
              id='name'
              className={`register__input ${(nameDirty && nameError) && 'register__input_red'}`}
              type="text"
              name="name"
              minLength="6"
              required
            />
          </div>
          <div className='register__span-error'>
            <span className='register__error'>{(nameDirty && nameError) && nameError}</span>
          </div>
          <div className='register__box'>
            <label htmlFor='email' className='register__label'>E-mail</label>
            <input
              value={email}
              onChange={e => emailHandler(e)}
              onBlur={e => blurHandler(e)}
              id='email'
              className={`register__input ${(emailDirty && emailError) && 'register__input_red'}`}
              type="email"
              name="email"
              minLength="6"
              required
            />
          </div>
          <div className='register__span-error'>
            <span className='register__error'>{(emailDirty && emailError) && emailError}</span>
          </div>
          <div className='register__box'>
            <label htmlFor='password' className='register__label'>Пароль</label>
            <input
              value={password}
              onBlur={e => blurHandler(e)}
              onChange={e => passwordHandler(e)}
              id='password'
              type="password"
              className={`register__input ${(passwordDirty && passwordError) && 'register__input_red'}`}
              name="password"
              required
            />
          </div>
          <div className='register__span-error'>
            <span className='register__error'>{(passwordDirty && passwordError) && passwordError}</span>
          </div>
        </fieldset>

        <button disabled={!formValid} type="submit" name="save" className="register__form-submit">Войти</button>
      </form >
      <div className='register__login'>
        <p className='register__question'>Уже зарегистрированы?</p>
        <Link to='/login' className='register__link'>Войти</Link>
      </div>
    </div>
  )
}

export default Register;