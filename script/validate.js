

 const hideAllErrors = (
  popup,
  { formSelector, inputSelector, ...rest }
) => {
  const formEl = popup.querySelector(formSelector);
  const formInputs = Array.from(formEl.querySelectorAll(inputSelector));
  formInputs.forEach((input) => {
    hideInputError(input, rest);
  });
};




};

