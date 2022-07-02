import { Popup } from "./Popup";
export class PopupWithForm extends Popup {
  constructor(popupSelector, handleForm) {
    super(popupSelector);
    this._handleForm = handleForm;
    this._form = this._popup.querySelector(".form");
    this._inputs = Array.from(this._form.querySelectorAll(".fieldset__input"));
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
  setInputValues(data) {
    this._inputs.forEach((input) => {
      input.value = data[input.name];
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
