export class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
    this._allInputs = [
      ...this._formElement.querySelectorAll(this._settings.inputSelector),
    ];

    this._buttonEl = this._formElement.querySelector(
      this._settings.buttonSelector
    );
  }

  resetValidation = () => {
    this._hideAllErrors();
    this._disableButton();
  };

  enableValidation = () => {
    this._formElement.addEventListener("submit", (evt) => evt.preventDefault());
    this._setEventListeners();
  };

  _setEventListeners = () => {
    this._allInputs.forEach((inputEl) => {
      inputEl.addEventListener("input", () => {
        this._checkInputValidity(inputEl);
        this._toggleButton();
      });
    });
  };

  _hideAllErrors = () => {
    this._allInputs.forEach((input) => {
      this._hideInputError(input);
    });
  };
  _enableButton() {
    const { buttonDisable } = this._settings;
    this._buttonEl.classList.remove(buttonDisable);
    this._buttonEl.disabled = false;
  }
  _disableButton = () => {
    const { buttonDisable } = this._settings;
    this._buttonEl.classList.add(buttonDisable);
    this._buttonEl.disabled = true;
  };

  _showInputError = (inputEl, errorMessage) => {
    const { inputErrorClass, spanErrorClass } = this._settings;
    this._errorDinamicTag = this._formElement.querySelector(
      `.fieldset__error-type-${inputEl.id}`
    );

    inputEl.classList.add(inputErrorClass);
    this._errorDynamicTag.textContent = errorMessage;
    this._errorDynamicTag.classList.add(spanErrorClass);
  };

  _hideInputError = (inputEl) => {
    const { inputErrorClass, spanErrorClass } = this._settings;
    this._errorDynamicTag = this._formElement.querySelector(
      `.fieldset__error-type-${inputEl.id}`
    );

    inputEl.classList.remove(inputErrorClass);
    this._errorDynamicTag.classList.remove(spanErrorClass);
    this._errorDynamicTag.textContent = "";
  };

  _checkFormValidity = () =>
    this._allInputs.every((input) => input.validity.valid);

  _toggleButton = () => {
    const { buttonDisable } = this._settings;
    const isInputsValid = this._checkFormValidity();

    if (isInputsValid) {
      this._enableButton();
    } else {
      this._disableButton();
    }
  };

  _checkInputValidity = (inputEl) => {
    if (!inputEl.validity.valid) {
      this._showInputError(inputEl, inputEl.validationMessage);
    } else {
      this._hideInputError(inputEl);
    }
  };
}
