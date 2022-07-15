import './Header.css';
import Navigation from '../Navigation/Navigation'
import logo from '../../images/__logo.svg';
import { useLocation } from 'react-router-dom';
import { Route } from 'react-router-dom';


function Header() {
  
  const location = useLocation();
  const modifierContainer = location.pathname === '/register' ? 'header__container_register' : location.pathname === '/login' ? 'header__container_register' : '';
  const modifierlogo = location.pathname === '/register' ? 'header__logo_register' : location.pathname === '/login' ? 'header__logo_register' : '';

  return (

    <Route path='/(movies|saved-movies|register|login|profile|)'>
      <header className='header'>
        <div className={`header__container ${modifierContainer}`}>
          <img
            src={logo}
            alt="Лого"
            className={`header__logo ${modifierlogo}`}
          />
          <Navigation />
        </div>
      </header >
    </Route>

  )
}

export default Header;