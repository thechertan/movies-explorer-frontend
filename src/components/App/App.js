import './App.css';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer'
import { Route, Switch, useHistory } from 'react-router-dom';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import MovisApi from '../../utils/MoviesApi';
import Api from '../../utils/MainApi';
import { CurrentUserContext } from "../../context/CurrentUserContext";


function App() {
  // стейты авторизации 
  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const history = useHistory();
  // =========
  // стейты валидации
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
  const [buttonDirty, setButtonDirty] = useState({ "success": false, 'message': '', 'color': '' });
  // ========= Валидация инпутов профиля
  function handlerName(e) {
    if (e.target.value.length > 0) {
      setNameDirty(true)
    }

    setName(e.target.value);
    if (e.target.value === currentUser.name) {
      setNameError('Повторятся нельзя!')
    }
    else if (!String(e.target.value).match(/^[а-яА-Яa-zA-ZЁёәіңғүұқөһӘІҢҒҮҰҚӨҺ\-\s]*$/)) {
      setNameError('Используйте только латиницу, кириллицу, пробел или дефис.')
    }
    else if (!String(e.target.value).trim()) {
      setNameError('Имя не может быть пустым')
    }
    else { setNameError('') }
  }

  function handlerEmail(e) {
    if (e.target.value.length > 0) {
      setEmailDirty(true);
    }
    setEmail(String(e.target.value).trim());
    if (e.target.value === currentUser.email) {
      setEmailError('Повторятся нельзя!')
    }
    else if (!String(e.target.value).trim().toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      setEmailError('Емейл не корректный')
    }
    else { setEmailError('') };
  }

  function handlerPassword(e) {
    if (e.target.value.length > 0) {
      setPasswordDirty(true)
    }
    setPassword(String(e.target.value));
    if (String(e.target.value).match(/ /)) {
      setPasswordError('Пароль не может содержать пробелы')
    }
    else if (!String(e.target.value).trim()) {
      setPasswordError('Пароль не может быть пустым')
    }
    else if (e.target.value.length < 6 || e.target.value.length > 50) {
      setPasswordError('Пароль должен быть длинее 6 и меньше 50 символов')
    }
    else { setPasswordError('') }
  }
  // ========= авторизация 
  useEffect(() => {
    checkToken();
  }, []);


  async function handleRegister(name, email, password) {
    return Api
      .register(name, email, password)
      .then(() => {
        setName('');
        setEmail('');
        history.push('/movies');
      })
      .catch((err) => {
        throw err;
      });
  }

  async function handleLogin(email, password) {
    return Api
      .authorize(email, password)
      .then((data) => {
        if (!data.token) {
          return;
        }
        localStorage.setItem('jwt', data.token);
        setLoggedIn(true)
        checkToken();
        setName('');
      })
      .catch((err) => {
        throw err;
      });
  }

  function checkToken() {
    Api
      .getContent()
      .then((data) => {
        if (data) {
          setUserData({
            id: data._id,
            email: data.email,
            name: data.name
          });
          setLoggedIn(true);
        }

      })
      .catch(() => { setLoggedIn(false) })
  }

  async function updateProfiles(email, name) {
    return Api
      .updateProfile(email, name)
      .then((res) => {
        setCurrentUser(res.newObject)
      })
      .catch((err) => {
        throw err;
      })

  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    history.push('/');
  }

  // =========

  useEffect(() => { // запросы данных карточек и данных пользователя, когда пользователь авторизован!
    if (loggedIn) {
      Api
        .getContent()
        .then(setCurrentUser)
        .catch(e => console.log(e))
      MovisApi
        .getInitialCards()
        .then(setCards)
        .catch(e => console.log(e));
    }
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <div className='page'>
        <Header loggedIn={loggedIn} />
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/movies'>
            <Movies cards={cards} />
          </Route>
          <Route path='/profile'>
            <Profile
              handleSignOut={handleSignOut}
              email={email}
              handlerEmail={handlerEmail}
              handlerName={handlerName}
              emailDirty={emailDirty}
              emailError={emailError}
              name={name}
              nameDirty={nameDirty}
              nameError={nameError}
              setFormValid={setFormValid}
              updateProfiles={updateProfiles}
              setButtonDirty={setButtonDirty}
              buttonDirty={buttonDirty}
              formValid={formValid}
              setEmail={setEmail}
              setName={setName}
            />
          </Route>
          <Route path='/saved-movies'>
            <SavedMovies />
          </Route >
          <Route path='/signup'>
            <Register
              handleRegister={handleRegister}
              handleLogin={handleLogin}
              name={name}
              nameDirty={nameDirty}
              nameError={nameError}
              email={email}
              emailDirty={emailDirty}
              emailError={emailError}
              password={password}
              passwordDirty={passwordDirty}
              passwordError={passwordError}
              formValid={formValid}
              buttonDirty={buttonDirty}
              handlerName={handlerName}
              handlerEmail={handlerEmail}
              handlerPassword={handlerPassword}
              setButtonDirty={setButtonDirty}
              setFormValid={setFormValid}
            />
          </Route>
          <Route path='/signin'>
            <Login
              handleLogin={handleLogin}
              email={email}
              handlerEmail={handlerEmail}
              emailDirty={emailDirty}
              emailError={emailError}
              password={password}
              handlerPassword={handlerPassword}
              passwordDirty={passwordDirty}
              passwordError={passwordError}
              buttonDirty={buttonDirty}
              formValid={formValid}
              setButtonDirty={setButtonDirty}
              setFormValid={setFormValid}
            />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
