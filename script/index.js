const openformButton = document.querySelector(".text__edit");
const closeformButton = document.querySelector(".popup__button");
const popup = document.querySelector(".popup");
const popForm = document.getElementById("form");

let nameInput = document.querySelector(".form__input_type_name");
let occupationInput = document.querySelector(".form__input_type_occu");
let textName = document.querySelector(".text__name");
let occupation = document.querySelector(".text__occu");

const openform = () => {
  nameInput.value = textName.textContent;
  occupationInput.value = occupation.textContent;
  popup.classList.add("popup_open");
};

const closeform = () => {
  popup.classList.remove("popup_open");
};

const submitForm = (e) => {
  e.preventDefault();
  textName.textContent = nameInput.value;
  occupation.textContent = occupationInput.value;
  popup.classList.remove("popup_open");
};

openformButton.addEventListener("click", openform);
closeformButton.addEventListener("click", closeform);
popForm.addEventListener("submit", submitForm);

const likeButton = document.querySelectorAll(".desc__button");

for (let i = 0; i < likeButton.length; i++) {
  let like = likeButton[i];
  const liked = () => {
    like.classList.toggle("button_liked");
  };
  like.addEventListener("click", liked);
}
