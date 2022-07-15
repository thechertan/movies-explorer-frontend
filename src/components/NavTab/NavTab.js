import './NavTab.css'

function NavTab() {
  return (
    <nav className='promo__navigation'>
      <a href="#aboutproject" className="promo__link">О проекте</a>
      <a href="#techs" className="promo__link">Технологии</a>
      <a href="#aboutme" className="promo__link">Студент</a>
    </nav>
  )
}

export default NavTab;