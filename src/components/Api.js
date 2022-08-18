const customFetch = (url, headers) => {
  fetch(url, headers)
    .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
    .catch(console.log());
};
class Api {
  constructor(settings) {
    this._baseUrl = settings.baseUrl;
    this._headers = settings.headers;
  }
  getCardsInfo() {
    return customFetch(this._baseUrl + "/cards", {
      headers: this._headers,
    });
  }
  getUserInfo() {
    return customFetch(this._baseUrl + "/users/me", {
      headers: this._headers,
    });
  }

  setUserInfo({ name, about }) {
    return customFetch(this._baseUrl + `/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        name,
        about,
      }),
    });
  }

  addCard({ name, link }) {
    return customFetch(this._baseUrl + "/cards", {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(console.log(res.statusText))
    );
  }
  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      headers: this._headers,
      method: "DELETE",
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(console.log(res.statusText))
    );
  }
  addLike(id) {
    return fetch(`${this._baseUrl}/cards/likes/${id}`, {
      headers: this._headers,
      method: "PUT",
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(console.log(res.statusText))
    );
  }
}
export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  headers: {
    authorization: "6efb715f-3f27-47aa-b11b-00d476bb80a2",
    "Content-Type": "application/json",
  },
});
