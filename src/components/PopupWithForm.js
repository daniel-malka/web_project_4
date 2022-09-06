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
    const values = {};

    this._inputs.forEach((input) => {
      const key = input.name;
      const value = input.value;
      values[key] = value;
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const valuesFromForm = this._getInputValues();

      this._handleForm(valuesFromForm);
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
