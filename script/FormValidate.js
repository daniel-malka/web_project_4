export class FormValidator {
  constructor(formElement) {
    this._settings = {
      inputSelector: ".fieldset__input",
      buttonSelector: ".fieldset__button",
      buttonDisable: "fieldset__button_disabled",
      inputErrorClass: "fieldset__input_error",
      spanErrorClass: "fieldset__error-message-active",
    };

    this._formElement = formElement;
    this._allInputs = Array.from(
      this._formElement.querySelectorAll(this._settings.inputSelector)
    );
  }

  resetProfilePopup = () => {
    this._hideAllErrors();
    this._fillProfileInputs();
  };
  resetImgAddPopup = () => {
    this._hideAllErrors();
    this._disableButton();
    this._formElement.reset();
  };

  enableValidation = () => {
    this._formElement.addEventListener("submit", (evt) => evt.preventDefault());
    this._setEventListeners();
  };

  _setEventListeners = () => {
    const { inputSelector } = this._settings;

    this._allInputs.forEach((inputEl) => {
      inputEl.addEventListener("input", () => {
        this._checkInputValidity(inputEl);
        this._toggleButton(this._allInputs);
      });
    });
  };
  _hideAllErrors = () => {
    this._allInputs.forEach((input) => {
      this._hideInputError(input);
    });
  };
  _fillProfileInputs = () => {
    this._formNameInput = this._formElement.elements.name;
    this._formOccupationInput = this._formElement.elements.occupation;
    this._textName = document.querySelector(".text__name");
    this._occupation = document.querySelector(".text__occu");

    this._formNameInput.value = this._textName.textContent;
    this._formOccupationInput.value = this._occupation.textContent;
  };
  _disableButton = () => {
    const { buttonSelector, buttonDisable } = this._settings;
    const buttonEl = this._formElement.querySelector(buttonSelector);
    buttonEl.classList.add(buttonDisable);
    buttonEl.disabled = true;
  };

  _showInputError = (inputEl, errorMessage) => {
    const { inputErrorClass, spanErrorClass } = this._settings;
    const errorDynamicSpan = document.querySelector(
      `.fieldset__error-type-${inputEl.id}`
    );
    inputEl.classList.add(inputErrorClass);
    errorDynamicSpan.textContent = errorMessage;
    errorDynamicSpan.classList.add(spanErrorClass);
  };
  _hideInputError = (inputEl) => {
    const { inputErrorClass, spanErrorClass } = this._settings;
    const errorDynamicSpan = document.querySelector(
      `.fieldset__error-type-${inputEl.id}`
    );

    inputEl.classList.remove(inputErrorClass);
    errorDynamicSpan.classList.remove(spanErrorClass);
    errorDynamicSpan.textContent = "";
  };

  _toggleButton = (inputs) => {
    const { buttonDisable, buttonSelector } = this._settings;
    const isInputsValid = inputs.every((input) => input.validity.valid);
    const button = this._formElement.querySelector(buttonSelector);
    if (isInputsValid) {
      button.classList.remove(buttonDisable);
      button.disabled = false;
    } else {
      button.classList.add(buttonDisable);
      button.disabled = true;
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
