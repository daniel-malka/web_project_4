import { Popup } from "./Popup";
export class PopupWithForm extends Popup {
  constructor(popupSelector, handleForm) {
    super(popupSelector);
    this._handleForm = handleForm;
    this._form = this._popup.querySelector(".form");
    this._submitButton = this._form.querySelector(".fieldset__button");
    this._submitButtonText = this._submitButton.textContent;

    this._inputs = Array.from(this._form.querySelectorAll(".fieldset__input"));
  }
  showLoading() {
    this._buttonText = this._loadingButtonText;
  }
  hideLoading() {
    this._submitButton.textContent = this._buttonText.textContent;
  }
  _getInputValues() {
    this._values = {};

    this._inputs.forEach((input) => {
      this._key = input.name;
      this._value = input.value;
      this._values[this._key] = this._value;
    });
    return this._values;
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._valuesFromForm = this._getInputValues();

      this._handleForm(this._valuesFromForm);
      super.close();
    });
  }
  renderLoading(isLoading, loadingText = "Saving...") {
    if (isLoading) {
      this._submitButton.textContent = loadingText;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }

  close() {
    super.close();
    this._form.reset();
  }
}
