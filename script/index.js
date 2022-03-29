const openformButton = document.querySelector(".text__button_type_edit");
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
  popup.classList.add("is__open");
};

const closeform = () => {
  popup.classList.remove("is__open");
};

const submitForm = (e) => {
  e.preventDefault();
  textName.textContent = nameInput.value;
  occupation.textContent = occupationInput.value;
  popup.classList.remove("is__open");
};

openformButton.addEventListener("click", openform);
closeformButton.addEventListener("click", closeform);
popForm.addEventListener("submit", submitForm);

// const likeButton1 = document.getElementById("like1");
// const likeButton2 = document.getElementById("like2");
// const likeButton3 = document.getElementById("like3");
// const likeButton4 = document.getElementById("like4");
// const likeButton5 = document.getElementById("like5");
// const likeButton6 = document.getElementById("like6");

// const liked1 = () => {
//   likeButton1.style.backgroundImage = 'url("../images/like_black.svg")';
// };
// const liked2 = () => {
//   likeButton2.style.backgroundImage = 'url("../images/like_black.svg")';
// };
// const liked3 = () => {
//   likeButton3.style.backgroundImage = 'url("../images/like_black.svg")';
// };
// const liked4 = () => {
//   likeButton4.style.backgroundImage = 'url("../images/like_black.svg")';
// };
// const liked5 = () => {
//   likeButton5.style.backgroundImage = 'url("../images/like_black.svg")';
// };
// const liked6 = () => {
//   likeButton6.style.backgroundImage = 'url("../images/like_black.svg")';
// };

// likeButton1.addEventListener("click", liked1);
// likeButton2.addEventListener("click", liked2);
// likeButton3.addEventListener("click", liked3);
// likeButton4.addEventListener("click", liked4);
// likeButton5.addEventListener("click", liked5);
// likeButton6.addEventListener("click", liked6);
