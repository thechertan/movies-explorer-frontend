
import './Main.css';
import Promo from '../Promo/Promo'
import AboutProject from '../AboutProject/AboutProject'
import Techs from '../Techs/Techs'
import Aboutme from '../Aboutme/Aboutme';

function Main() {
  return (
    <main className='main'>
      <Promo />
      <AboutProject />
      <Techs />
      <Aboutme />
    </main>
  )
}

export default Main;
