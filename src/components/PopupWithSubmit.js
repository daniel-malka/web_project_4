import { Popup } from "./Popup";

class PopupWithSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.popup = document.querySelector(popupSelector);
  }
  setAction(action) {
    this._submitHandler = action;
  }

  setEventListeners() {
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitHandler();
    });
    super.setEventListeners();
  }
}
export default PopupWithSubmit;
