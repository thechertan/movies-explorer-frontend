import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer'
import { Route, Switch } from 'react-router-dom';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';


function App() {

  return (
    <div className='page'>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path='/movies'>
          <Header />
          <Movies />
          <Footer />
        </Route>
        <Route path='/profile'>
          <Header />
          <Profile />
        </Route>
        <Route path='/saved-movies'>
          <Header />
          <SavedMovies />
          <Footer />
        </Route >
        <Route path='/register'>
          <Header />
          <Register />
        </Route>
        <Route path='/login'>
          <Header />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
