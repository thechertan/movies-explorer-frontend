import './NotFound.css';
import { useHistory } from 'react-router-dom';

function NotFound() {
  const history = useHistory()

  return (
    <div className='notfound'>
      <h1 className='notfound__error'>404</h1>
      <p className='notfound__message'>Страница не найдена</p>
      <button onClick={() => history.goBack()} className='notfound__button'>Назад</button>
    </div>
  )
}

export default NotFound;