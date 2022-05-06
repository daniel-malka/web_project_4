const showInputError = (
  inputEl,
  errorMessage,
  { inputErrorClass, spanErrorClass }
) => {
  const errorDynamicSpan = document.querySelector(
    `.fieldset__input_error_type_${inputEl.id}`
  );
  inputEl.classList.add(inputErrorClass);
  errorDynamicSpan.textContent = errorMessage;
  errorDynamicSpan.classList.add(spanErrorClass);
};
const hideInputError = (inputEl, { inputErrorClass, spanErrorClass }) => {
  const errorDynamicSpan = document.querySelector(
    `.fieldset__input_error_type_${inputEl.id}`
  );

  inputEl.classList.remove(inputErrorClass);
  errorDynamicSpan.classList.remove(spanErrorClass);
  errorDynamicSpan.textContent = "";
};

const toggleButton = (inputs, buttons, { buttonDisable }) => {
  const isInputsValid = inputs.every((input) => input.validity.valid);
  if (isInputsValid) {
    buttons.forEach((button) => {
      button.classList.remove(buttonDisable);
      button.disabled = false;
    });
  } else {
    buttons.forEach((button) => {
      button.classList.add(buttonDisable);
      button.disabled = true;
    });
  }
};
export const disableButtonOnSubmitOrClose = (
  popup,
  { formSelector, buttonSelector, buttonDisable }
) => {
  const formEl = popup.querySelector(formSelector);
  const buttonEl = formEl.querySelector(buttonSelector);
  buttonEl.classList.add(buttonDisable);
  buttonEl.disabled = true;
};
export const hideAllErrors = (
  popup,
  { formSelector, inputSelector, ...rest }
) => {
  const formEl = popup.querySelector(formSelector);
  const formInputs = Array.from(formEl.querySelectorAll(inputSelector));
  formInputs.forEach((input) => {
    hideInputError(input, rest);
  });
};

const validation = ({ formSelector, ...rest }) => {
  const allForms = Array.from(document.querySelectorAll(formSelector));
  allForms.forEach((formEl) => {
    formEl.addEventListener("submit", (evt) => evt.preventDefault());
    setEventListeners(formEl, rest);
  });
};

const checkInputValidity = (inputEl, configItems) => {
  if (!inputEl.validity.valid) {
    showInputError(inputEl, inputEl.validationMessage, configItems);
  } else {
    hideInputError(inputEl, configItems);
  }
};

const setEventListeners = (
  formEl,
  { inputSelector, buttonSelector, ...rest }
) => {
  const allInputs = Array.from(formEl.querySelectorAll(inputSelector));
  const allButtons = Array.from(document.querySelectorAll(buttonSelector));

  allInputs.forEach((inputEl) => {
    inputEl.addEventListener("input", () => {
      checkInputValidity(inputEl, rest);
      toggleButton(allInputs, allButtons, rest);
    });
  });
};

export const itemsValidChecker = {
  formSelector: ".form",
  inputSelector: ".fieldset__input",
  buttonSelector: ".fieldset__button",
  buttonDisable: "fieldset__button_disabled",
  inputErrorClass: "fieldset__input_error",
  spanErrorClass: "fieldset__input_error-message-active",
};

validation(itemsValidChecker);
