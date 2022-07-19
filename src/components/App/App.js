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

  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const history = useHistory();

  // ========= авторизация 

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    if (!loggedIn) {
      history.push('/');
      return;
    } else {
      history.push('/movies');
      return;
    }
  }, [history, loggedIn]);

  function handleRegister(name, email, password) {
    return Api
      .register(name, email, password)
      .then(() => {
        history.push('/movies');
      })
      .catch(() => {
        throw new Error('Произошла ошибка в запросе!');
      });
  }


  function handleLogin(email, password) {
    return Api
      .authorize(email, password)
      .then((data) => {
        if (!data.token) {
          return;
        }
        localStorage.setItem('jwt', data.token);
        setLoggedIn(true)
        checkToken();
      })
      .catch(() => {
        throw new Error('Произошла ошибка в запросе!');
      });
  }

  function checkToken() {
    if (localStorage.getItem('jwt')) {
      let jwt = localStorage.getItem('jwt');
      Api
        .getContent(jwt)
        .then((data) => {
          if (data) {
            console.log(data);
            setUserData({
              id: data._id,
              email: data.email,
              name: data.name
            });
            setLoggedIn(true);
          }
        });
    }
  }


  function handleSignOut() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
  }

  // ========= конец авторизации

  useEffect(() => { // запросы данных карточек и данных пользователя, когда пользователь авторизован!
    if (loggedIn) {
      let jwt = localStorage.getItem('jwt');
      Api
        .getContent(jwt)
        .then(setCurrentUser)
        .catch(e => console.log(e))

      MovisApi
        .getInitialCards()
        .then(setCards)
        .catch(e => console.log(e));
    }

  }, [loggedIn]);

  return (
    <div className='page'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/movies'>
          <Movies cards={cards} />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies />
        </Route >
        <Route path='/signup'>
          <Register handleRegister={handleRegister} handleLogin={handleLogin} />
        </Route>
        <Route path='/signin'>
          <Login handleLogin={handleLogin} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
