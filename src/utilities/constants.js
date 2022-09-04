import Api from "../components/Api";
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
const openAvatarPopup = document.querySelector(".top__container-image");
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

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",

  headers: {
    authorization: "6efb715f-3f27-47aa-b11b-00d476bb80a2",

    "Content-Type": "application/json",
  },
});

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
  api,
};
