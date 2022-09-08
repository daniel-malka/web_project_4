export default class Api {
  constructor(settings) {
    this._baseUrl = settings.baseUrl;
  }
  _headers() {
    return {
      headers: {
        authorization: "6efb715f-3f27-47aa-b11b-00d476bb80a2",

        "Content-Type": "application/json",
      },
    };
  }
  _customFetch(url) {
    return fetch(url, this._headers).then((res) =>
      res.ok ? res.json() : Promise.reject(res.statusText)
    );
  }
  getCards() {
    return this._customFetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    });
  }
  getUserInfo() {
    return this._customFetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    });
  }

  setUserInfo({ name, about }) {
    return this._customFetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    });
  }

  addCard({ name, link }) {
    return this._customFetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    });
  }

  editAvatar(avatar) {
    return this._customFetch(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        avatar: avatar,
      }),
    });
  }

  deleteCard(cardId) {
    return this._customFetch(`${this._baseUrl}/cards/${cardId}`, {
      headers: this._headers,
      method: "DELETE",
    });
  }

  dislikeCard(id) {
    return this._customFetch(`${this._baseUrl}/cards/likes/${id}`, {
      headers: this._headers,
      method: "DELETE",
    });
  }

  likeCard(id) {
    return this._customFetch(`${this._baseUrl}/cards/likes/${id}`, {
      headers: this._headers,
      method: "PUT",
    });
  }
}
