import './NavTab.css'
import { Link } from 'react-router-dom';

function NavTab() {
  return (
    <nav className='promo__navigation'>
      <Link to="#aboutproject" className="promo__link">О проекте</Link>
      <Link to="#techs" className="promo__link">Технологии</Link>
      <Link to="#" className="promo__link">Студент</Link>
    </nav>
  )
}

export default NavTab;