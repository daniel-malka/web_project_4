export class UserInfo {
  constructor({ nameSelector, occupationSelector }) {
    this._userName = document.querySelector(nameSelector);
    this._userOccupation = document.querySelector(occupationSelector);
  }
  getUserInfo() {
    return {
      name: this._userName.textContent,
      occupation: this._userOccupation.textContent,
    };
  }
  setUserInfo(data) {
    (this._userName.textContent = data.name),
      (this._userOccupation.textContent = data.occupation);
  }
}
