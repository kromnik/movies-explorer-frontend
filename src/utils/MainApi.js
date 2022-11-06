import { MAIN_API_URL, MOVIES_IMAGE_URL } from './constants';

class MainApi {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  };

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return res.text()
      .then((text) => Promise.reject({status: res.status, text}));
  };

  getUserMovies(token) {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: { ...this._headers, authorization: `Bearer ${token}`}
    })
    .then(this._checkResponse)
  };  
  
  getUserInfo(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: { ...this._headers, authorization: `Bearer ${token}`}
    })
    .then(this._checkResponse);
  };

  setUserInfo(data, token) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: { ...this._headers, authorization: `Bearer ${token}`},
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    })  
    .then(this._checkResponse);
  };

  saveMovie(data, token) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: { ...this._headers, authorization: `Bearer ${token}`},
      body: JSON.stringify({
        country: data.country || '',
        director: data.director || '',
        duration: data.duration || '',
        year: data.year || '',
        description: data.description || '',
        image: `${MOVIES_IMAGE_URL}${data.image.url}` || '',
        trailerLink: data.trailerLink || '',
        thumbnail:`${MOVIES_IMAGE_URL}${data.image.formats.thumbnail.url}` || '',
        movieId: data.id || '',
        nameRU: data.nameRU || '',
        nameEN: data.nameEN || ''
      })
    })
    .then(this._checkResponse);
  };

  deleteMovie(id, token) {
    return fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: { ...this._headers, authorization: `Bearer ${token}`}
    })
    .then(this._checkResponse);
  };

  register(data) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ 
        name: data.name,
        email: data.email,
        password: data.password
      })
    })
    .then(this._checkResponse)
  };

  login(data) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({  
        email: data.email,
        password: data.password
      })
    })
    .then(this._checkResponse)
    .then((res) => {
      if (res) {
        localStorage.setItem('jwt', res.token)
        return res;
      }
    })
  };

  getUserInitialData(token) {
    return Promise.all([this.getUserInfo(token), this.getUserMovies(token)])
  };
}

const mainApi = new MainApi({
  url: MAIN_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default mainApi;