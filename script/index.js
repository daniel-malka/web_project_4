const openformButton = document.querySelector(".text__button_type_edit");
const closeformButton = document.querySelector(".popup__button_type_close");
const popup = document.querySelector(".popup");
const popForm = document.getElementById("form");

let nameInput = document.querySelector(".form__input_type_name");
let occupationInput = document.querySelector(".form__input_type_occu");
let textName = document.querySelector(".text__name");
let occupation = document.querySelector(".text__occu");

function openform() {
  nameInput.value = textName.textContent;
  occupationInput.value = occupation.textContent;
  popup.classList.add("is__open");
}

function closeform() {
  popup.classList.remove("is__open");
}

function submitForm(e) {
  e.preventDefault();
  textName.textContent = nameInput.value;
  occupation.textContent = occupationInput.value;
  popup.classList.remove("is__open");
}

openformButton.addEventListener("click", openform);
closeformButton.addEventListener("click", closeform);
popForm.addEventListener("submit", submitForm);
