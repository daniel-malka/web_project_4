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
    console.log("valid");
    buttons.forEach((button) => {
      button.classList.remove(configItems.buttonDisable);
      button.disabled = false;
    });
  } else {
    console.log();
    buttons.forEach((button) => {
      button.classList.add(configItems.buttonDisable);
      button.disabled = true;
    });
  }
};

const validation = (configItems) => {
  const allForms = Array.from(
    document.querySelectorAll(configItems.formSelector)
  );
  allForms.forEach((formEl) => {
    formEl.addEventListener("submit", (evt) => evt.preventDefault());
    setEventListeners(formEl, configItems);
  }); //mybe can toss preventDefault on index.js??
};

const checkInputValidity = (inputEl, configItems) => {
  if (!inputEl.validity.valid) {
    console.log("invalid");
    showInputError(inputEl, inputEl.validationMessage, configItems);
  } else {
    console.log("valid");
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

const itemsValidChecker = {
  formSelector: ".form",
  inputSelector: ".form__input",
  buttonSelector: ".form__button",
  buttonDisable: "form__button_disabled",
  inputErrorClass: "form__input_error",
  spanErrorClass: "form__input_error_message_active",
};

validation(itemsValidChecker);
