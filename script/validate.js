const showInputError = (inputEl, errorMessage, configItems) => {
  const errorDynamicSpan = document.querySelector(
    `.${inputEl.id}_error_message`
  );
  inputEl.classList.add(configItems.inputErrorClass);
  errorDynamicSpan.textContent = errorMessage;
  errorDynamicSpan.classList.add(configItems.spanErrorClass);
};
const hideInputError = (inputEl, configItems) => {
  const errorDynamicSpan = document.querySelector(
    `.${inputEl.id}_error_message`
  );
  inputEl.classList.remove(configItems.inputErrorClass);
  errorDynamicSpan.classList.remove(configItems.spanErrorClass);
  errorDynamicSpan.textContent = "";
};

const toggleButton = (inputs, buttons, configItems) => {
  const isInputsValid = inputs.every((input) => input.validity.valid);
  if (isInputsValid) {
    buttons.forEach((button) => {
      button.classList.remove(configItems.buttonDisable);
      button.disabled = false;
    });
  } else {
    buttons.forEach((button) => {
      button.classList.add(configItems.buttonDisable);
      button.disabled = true;
    });
  }
};
export const hideAllErrors = (popup, configItems) => {
  const formEl = popup.querySelector(configItems.formSelector);
  const formInputs = Array.from(
    formEl.querySelectorAll(configItems.inputSelector)
  );
  formInputs.forEach((input) => {
    hideInputError(input, itemsValidChecker);
  });
};

const validation = (configItems) => {
  const allForms = Array.from(
    document.querySelectorAll(configItems.formSelector)
  );
  allForms.forEach((formEl) => {
    formEl.addEventListener("submit", (evt) => evt.preventDefault());
    setEventListeners(formEl, configItems);
  });
};

const checkInputValidity = (inputEl, configItems) => {
  if (!inputEl.validity.valid) {
    showInputError(inputEl, inputEl.validationMessage, configItems);
  } else {
    hideInputError(inputEl, configItems);
  }
};

const setEventListeners = (formEl, configItems) => {
  const allInputs = Array.from(
    formEl.querySelectorAll(configItems.inputSelector)
  );
  const allButtons = Array.from(
    document.querySelectorAll(configItems.buttonSelector)
  );

  allInputs.forEach((inputEl) => {
    inputEl.addEventListener("input", function () {
      checkInputValidity(inputEl, configItems);
      toggleButton(allInputs, allButtons, configItems);
    });
  });
};

export const itemsValidChecker = {
  formSelector: ".form",
  inputSelector: ".form__input",
  buttonSelector: ".form__button",
  buttonDisable: "form__button_disabled",
  inputErrorClass: "form__input_error",
  spanErrorClass: "form__input_error_message_active",
};

validation(itemsValidChecker);
