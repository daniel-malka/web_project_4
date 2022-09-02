const galleryWrap = ".gallery";
const avatarPopup = ".popup_type_avatar";
const addCardPopup = ".popup_type_card";
const profilePopup = ".popup_type_profile";
const openImgView = ".popup_type_zoom";
const nameInput = document.forms.formProfile.elements.name;
const aboutInput = document.forms.formProfile.elements.about;
const avatarInput = document.forms.formAvatar.elements.link;
const templateSelector = "#gallery__item";
const profileSpanArray = {
  name: ".text__name",
  about: ".text__about",
  avatar: ".top__img",
};

const openProfilePopup = document.querySelector(".text__edit");
const openImgAddPopup = document.querySelector(".top__plus-box");
const openAvatarPopup = document.querySelector(
  ".top__container_image-container"
);
//settings
const settings = {
  inputSelector: ".fieldset__input",
  buttonSelector: ".fieldset__button",
  buttonDisable: "fieldset__button_disabled",
  inputErrorClass: "fieldset__input_error",
  spanErrorClass: "fieldset__error-message-active",
};
let userId;
let sectionNew = "";
export {
  galleryWrap,
  avatarPopup,
  addCardPopup,
  profilePopup,
  openImgView,
  nameInput,
  aboutInput,
  avatarInput,
  templateSelector,
  profileSpanArray,
  openAvatarPopup,
  openProfilePopup,
  openImgAddPopup,
  settings,
  userId,
  sectionNew,
};
