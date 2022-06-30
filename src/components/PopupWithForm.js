import { Popup } from "./Popup";
export class PopupWithForm extends Popup {
  constructor(popupSelector, handleForm) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._handleForm = handleForm;
    this._form = this._popup.querySelector(".form");
  }
  _getInputValues() {
    const values = {};

    const inputs = Array.from(this._form.querySelectorAll(".fieldset__input"));
    inputs.forEach((input) => {
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
      super.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
