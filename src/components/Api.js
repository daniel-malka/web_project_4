import { data } from "autoprefixer";

class Api {
  constructor(settings) {
    this._baseUrl = settings.baseUrl;
    this._headers = settings.headers;
  }

  getUserInfo() {
    return fetch(this._baseUrl + "/users/me", {
      headers: this._headers,
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)));
  }
  getCardsInfo() {
    return fetch(this._baseUrl + "/cards", {
      headers: this._headers,
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)));
  }

  addCard() {
    return fetch(this._baseUrl + "/cards", {
      method: "POST",
      body: JSON.stringify(res),
      headers: this._headers,
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(console.log(res.statusText))
    );
  }
  setUserInfo(name, about) {
    return fetch(this._baseUrl + "/users/me", {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    });
  }
}
export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  headers: {
    authorization: "6efb715f-3f27-47aa-b11b-00d476bb80a2",
    "Content-Type": "application/json",
  },
});
