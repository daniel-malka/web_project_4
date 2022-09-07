import { Popup } from "./Popup";

class PopupWithSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector(".form");
    this._submitButton = this._form.querySelector(
      ".fieldset__button-type-save"
    );
    this._submitButtonText = this._submitButton.textContent;
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

  renderLoading(isLoading, loadingText = "Deleting...") {
    if (isLoading) {
      this._submitButton.textContent = loadingText;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }
}
export default PopupWithSubmit;
