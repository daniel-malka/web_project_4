export class UserInfo {
  constructor(data) {
    this._userName = document.querySelector(data.name);
    this._userAbout = document.querySelector(data.about);
  }
  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userAbout.textContent,
    };
  }
  setUserInfo({ name, about }) {
    this._userName.textContent = name;
    this._userAbout.textContent = about;
  }
}
