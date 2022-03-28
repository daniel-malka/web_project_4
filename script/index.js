const openformButton = document.querySelector(".text__edit");
const closeformButton = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");
const popForm = document.getElementById("form");

let nameInput = document.querySelector(".form__input-name");
let occupationInput = document.querySelector(".form__input-occu");
let textName = document.querySelector(".text__name");
let occupation = document.querySelector(".text__occu");

function toggleform() {
  nameInput.value = textName.textContent;
  occupationInput.value = occupation.textContent;
  popup.classList.toggle("popup__open");
}

function submitForm(e) {
  e.preventDefault();
  textName.textContent = nameInput.value;
  occupation.textContent = occupationInput.value;
  popup.classList.toggle("popup__open");
}

openformButton.addEventListener("click", toggleform);
closeformButton.addEventListener("click", toggleform);
popForm.addEventListener("submit", submitForm);
