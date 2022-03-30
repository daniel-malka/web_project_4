const openformButton = document.querySelector(".text__edit");
const closeformButton = document.querySelector(".popup__button_type_close");
const popup = document.querySelector(".popup");
const popForm = document.getElementById("form");

let nameInput = document.querySelector(".form__input_type_name");
let occupationInput = document.querySelector(".form__input_type_occu");
let textName = document.querySelector(".text__name");
let occupation = document.querySelector(".text__occu");

const openform = () => {
  nameInput.value = textName.textContent;
  occupationInput.value = occupation.textContent;
  popup.classList.add("popup__modifier_type_open");
};

const closeform = () => {
  popup.classList.remove("popup__modifier_type_open");
};

const submitForm = (e) => {
  e.preventDefault();
  textName.textContent = nameInput.value;
  occupation.textContent = occupationInput.value;
  popup.classList.remove("popup__modifier_type_open");
};

openformButton.addEventListener("click", openform);
closeformButton.addEventListener("click", closeform);
popForm.addEventListener("submit", submitForm);

const likeButton = document.querySelectorAll(".desc__button_type_like");

for (let i = 0; i < likeButton.length; i++) {
  let like = likeButton[i];
  const liked = () => {
    like.classList.toggle("desc__button_type_is-liked");
  };
  like.addEventListener("click", liked);
}
