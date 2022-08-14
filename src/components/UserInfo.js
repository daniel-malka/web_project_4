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
  setUserInfo({ nameInput, aboutInput }) {
    this._userName.textContent = nameInput;
    this._userAbout.textContent = aboutInput;
  }
}
