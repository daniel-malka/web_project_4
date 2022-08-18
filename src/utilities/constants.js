const galleryWrap = ".gallery";
const addCardPopup = ".popup_type_card";
const profilePopup = ".popup_type_profile";
const openImgView = ".popup_type_zoom";
const nameInput = document.forms.formProfile.elements.name;
const aboutInput = document.forms.formProfile.elements.about;
const templateSelector = "#gallery__item";
const profileSpanArray = {
  name: ".text__name",
  about: ".text__about",
};

const openProfileEditButton = document.querySelector(".text__edit");
const openImgAddPopup = document.querySelector(".top__plus-box");
//settings
const settings = {
  inputSelector: ".fieldset__input",
  buttonSelector: ".fieldset__button",
  buttonDisable: "fieldset__button_disabled",
  inputErrorClass: "fieldset__input_error",
  spanErrorClass: "fieldset__error-message-active",
};
let userId;
let cards;
export {
  galleryWrap,
  addCardPopup,
  profilePopup,
  openImgView,
  nameInput,
  aboutInput,
  templateSelector,
  profileSpanArray,
  openProfileEditButton,
  openImgAddPopup,
  settings,
  userId,
  cards,
};
