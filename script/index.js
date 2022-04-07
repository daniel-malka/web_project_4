//form form

const popForm = document.querySelector("form");

//pop box toggle target

const popup = document.querySelector(".popup");

//form buttons

const openformButton = document.querySelector(".text__edit");
const closeformButton = document.querySelector(".popup__button");

//form inputs

let nameInput = document.querySelector(".form__input_type_name");
let occupationInput = document.querySelector(".form__input_type_occu");
let textName = document.querySelector(".text__name");
let occupation = document.querySelector(".text__occu");

//form open/close/submit
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

//event listeners form
openformButton.addEventListener("click", openform);

closeformButton.addEventListener("click", closeform);

popForm.addEventListener("submit", submitForm);

//plus box buttons

const plusBoxOpen = document.querySelector(".top__plus-box");
const plusBoxClose = document.querySelector(".plusPopup__button");

//plus box toggle target

const plusPopup = document.querySelector(".plusPopup");

//image/title inputs

let titleInput = document.querySelector(".title__input_type_title");
let linkInput = document.querySelector(".link__input_type_link");
//image create
const addImageButton = document.querySelector(".plusPopup__button-create");
//image pop open/close

const imageAppendOpen = () => {
  plusPopup.classList.add("plusPopup_open");
};

const imageAppendClose = () => {
  plusPopup.classList.remove("plusPopup_open");
};
// const imageAppend;
//this function needs to:
// 1 append an li.gallery__item to ul.gallery
// 2 take the titleInput and set it = to .desc__text
// 3 take the linkInput set it to .gallery__img.src
//event listener plus box
// const imageRemove;
// this function needs to delete the target's.parent

plusBoxOpen.addEventListener("click", imageAppendOpen);
plusBoxClose.addEventListener("click", imageAppendClose);
addImageButton.addEventListener("click");
//like buttons

const likeButton = document.querySelectorAll(".desc__button");

//like event listener

likeButton.forEach((heart) => {
  const liked = () => {
    heart.classList.toggle("button_liked");
  };
  heart.addEventListener("click", liked);
});
