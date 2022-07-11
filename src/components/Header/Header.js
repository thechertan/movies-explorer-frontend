import './Header.css';
import Navigation from '../Navigation/Navigation'
import logo from '../../images/__logo.svg';

function Header() {

  return (
    <header className='header'>
      <div className='header__container'>
        <img
          src={logo}
          alt="Лого"
          className="header__logo"
        />
        <Navigation />
      </div>
    </header >
  )
}

export default Header;