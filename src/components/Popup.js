export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }
  _handleOverlay(evt) {
    if (evt.target.classList.contains("popup")) {
      this.close();
    }
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  open() {
    this._popup.classList.add("popup_open");
    document.addEventListener("keyup", (evt) => this._handleEscClose(evt));
  }
  close() {
    this._popup.classList.remove("popup_open");
    document.removeEventListener("keyup", (evt) => this._handleEscClose(evt));
  }
  setEventListeners() {
    document.addEventListener("click", (evt) => this._handleOverlay(evt));
    this._popup.querySelector(".popup__close").addEventListener("click", () => {
      this.close();
    });
  }
}
