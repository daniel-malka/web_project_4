export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  open() {
    this._popup.classList.add("popup_open");
    document.addEventListener("keyup", this._handleEscClose);
  }
  close() {
    this._popup.classList.remove("popup_open");
    document.removeEventListener("keyup", this._handleEscClose);
  }
  setEventListeners() {
    this._popup.querySelector(".popup__close").addEventListener("click", () => {
      this.close();
    });
  }
}
new Popup(".popup_type_profile");
