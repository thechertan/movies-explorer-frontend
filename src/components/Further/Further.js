import Preloader from '../Preloader/Preloader';
import { useState } from 'react';
import './Further.css';

function Further() {

  const [isLoading, setIsLoading] = useState(false);

  function handleClickFurther() { //пока что так оставлю
    setTimeout((
      setIsLoading(true)

    ), 1000);

    setTimeout(() => {
      setIsLoading(false)
    }, 6000)
  }

  return (

    <div className={`further ${isLoading && 'further_active'}`}>
      <div className='further__container'>
        {isLoading ? <Preloader /> : <button className='further__button' onClick={handleClickFurther} >Еще</button>}
      </div>
    </div>

  )
}

export default Further;