import './Profile.css';

function Profile() {

  return (
    <div className="profile">
      <h1 className='profile__name'>Привет, Виталий!</h1>
      <form className='profile__form'>
        <div className='profile__group-input'>
          <input
            placeholder='Имя'
            type='text'
            name='username'
            minLength="2"
            className='profile__input'
            required />
          <p className='profile__paragraph'>Виталий</p>
          <span className="profile__error-validation"></span>
        </div>
        <span className='profile__line'></span>
        <div className='profile__group-input'>
          <input
            placeholder='E-mail'
            type='email'
            name='email'
            minLength="6"
            className='profile__input'
            required />
          <p className='profile__paragraph'>pochta@yandex.ru</p>
          <span className="profile__error-validation"></span>
        </div>
        <div className='profile__button'>
          <button type='submit' name='edit' className='profile__button-edit'>Редактировать</button>
          <button type='submit' name='exit' className='profile__button-exit'>Выйти из аккаунта</button>
        </div>
      </form >
    </div >
  )
}

export default Profile;