class MainApi {
  constructor() {
    this._url = 'http://localhost:3001';
    this._post = 'POST';
    this._get = 'GET';
    this._delete = 'DELETE';
    this._put = 'PUT';
    this._patch = 'PATCH';
  }

  get _headers() {
    return {
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    }
  }

  _checkAnswer(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res}`);
  }

  register(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ name, password, email })
    })
      .then(this._checkAnswer);
  }

  authorize(email, password) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, email })
    })
      .then(this._checkAnswer);
  }


  getContent() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers
    })
      .then(this._checkAnswer);
  }

  updateProfile(name, email) {
    return fetch(`${this._url}/users/me`, {
      method: this._patch,
      headers: this._headers,
      body: JSON.stringify({ name, email })
    })
      .then(this._checkAnswer);
  }

  // getInitialCards() {
  //   return fetch(`${this._url}${this._cards}`, {
  //     headers: this._headers
  //   })
  //     .then(this._checkAnswer);
  // }

  // getUserProfile() {
  //   return fetch(`${this._url}${this._users}${this._me}`, {
  //     headers: this._headers
  //   })
  //     .then(this._checkAnswer);
  // }

  // setUserProfile(data) {
  //   return fetch(`${this._url}${this._users}${this._me}`, {
  //     method: this._patch,
  //     headers: this._headers,
  //     body: JSON.stringify({
  //       name: data.name,
  //       about: data.description
  //     })
  //   })
  //     .then(this._checkAnswer);
  // }

  // getNewCard(data) {
  //   return fetch(`${this._url}${this._cards}`, {
  //     method: this._post,
  //     headers: this._headers,
  //     body: JSON.stringify({
  //       name: data.name,
  //       link: data.link
  //     })
  //   })
  //     .then(this._checkAnswer);
  // }

  // deleteCard(id) {
  //   return fetch(`${this._url}${this._cards}/${id}`, {
  //     method: this._delete,
  //     headers: this._headers
  //   })
  //     .then(this._checkAnswer);
  // }

  // addLike(id) {
  //   return fetch(`${this._url}${this._cards}/${id}${this._likes}`, {
  //     method: this._put,
  //     headers: this._headers
  //   })
  //     .then(this._checkAnswer);
  // }

  // deleteLike(id) {
  //   return fetch(`${this._url}${this._cards}/${id}${this._likes}`, {
  //     method: this._delete,
  //     headers: this._headers
  //   })
  //     .then(this._checkAnswer);
  // }

  // updateAvatar(avatar) {
  //   return fetch(`${this._url}${this._users}${this._me}${this._avatar}`, {
  //     method: this._patch,
  //     headers: this._headers,
  //     body: JSON.stringify({ avatar })
  //   })
  //     .then(this._checkAnswer);
  // }






}

const Api = new MainApi();
export default Api;